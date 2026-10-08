import type { MqttClient } from 'mqtt';

/** Relais MQTT publics gratuits (sans compte). Le 1er chiffre du code de partie désigne le relais. */
export const BROKERS = [
  { name: 'EMQX', url: 'wss://broker.emqx.io:8084/mqtt' },
  { name: 'HiveMQ', url: 'wss://broker.hivemq.com:8884/mqtt' },
  { name: 'shiftr.io', url: 'wss://public.cloud.shiftr.io', username: 'public', password: 'public' },
  { name: 'Mosquitto', url: 'wss://test.mosquitto.org:8081/mqtt' },
];

export const TOPIC_ROOT = 'skazy-quiz/v1';
export type LinkStatus = 'connecting' | 'online' | 'offline';

export interface Link {
  publish: (topic: string, data: unknown, retain?: boolean) => void;
  subscribe: (topic: string, onMessage: (topic: string, data: unknown) => void) => void;
  clearRetained: (topic: string) => void;
  close: () => void;
}

/** Ouvre une connexion au relais `index`. Rejette si la connexion échoue dans le délai. */
export async function openLink(index: number, onStatus: (s: LinkStatus) => void, timeoutMs = 8000): Promise<Link> {
  const { default: mqtt } = await import('mqtt');
  const b = BROKERS[index];
  if (!b) throw new Error('Relais inconnu');
  const client: MqttClient = mqtt.connect(b.url, {
    username: b.username,
    password: b.password,
    clientId: `skq_${Math.random().toString(36).slice(2, 12)}`,
    keepalive: 30,
    reconnectPeriod: 2000,
    connectTimeout: timeoutMs,
    clean: true,
  });
  const handlers = new Map<string, (topic: string, data: unknown) => void>();

  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => {
      client.end(true);
      reject(new Error('Le relais ne répond pas.'));
    }, timeoutMs);
    client.once('connect', () => {
      clearTimeout(timer);
      resolve();
    });
  });

  onStatus('online');
  client.on('connect', () => {
    onStatus('online');
    handlers.forEach((_, t) => client.subscribe(t, { qos: 1 }));
  });
  client.on('reconnect', () => onStatus('connecting'));
  client.on('offline', () => onStatus('offline'));
  client.on('message', (topic, payload) => {
    if (!payload.length) return;
    let data: unknown;
    try {
      data = JSON.parse(payload.toString());
    } catch {
      return;
    }
    for (const [pattern, h] of handlers) {
      if (pattern === topic || (pattern.endsWith('/#') && topic.startsWith(pattern.slice(0, -1)))) h(topic, data);
    }
  });

  return {
    publish: (topic, data, retain = false) => client.publish(topic, JSON.stringify(data), { qos: 1, retain }),
    subscribe: (topic, onMessage) => {
      handlers.set(topic, onMessage);
      client.subscribe(topic, { qos: 1 });
    },
    clearRetained: (topic) => client.publish(topic, '', { qos: 1, retain: true }),
    close: () => client.end(false),
  };
}

/** Le code de partie : 6 chiffres, le premier indique le relais (1 à 4). */
export function makePin(brokerIndex: number): string {
  const rest = String(Math.floor(Math.random() * 100000)).padStart(5, '0');
  return `${brokerIndex + 1}${rest}`;
}

export function brokerFromPin(pin: string): number {
  return Number(pin[0]) - 1;
}

export const isValidPin = (pin: string) => /^[1-4]\d{5}$/.test(pin);
