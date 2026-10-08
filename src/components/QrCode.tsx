import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

/** QR code SVG (toujours noir sur blanc pour rester lisible par les téléphones). */
export function QrCode({ value, size = 180, label = 'QR code pour rejoindre' }: { value: string; size?: number; label?: string }) {
  const [svg, setSvg] = useState('');
  useEffect(() => {
    let alive = true;
    QRCode.toString(value, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#1a1a1a', light: '#ffffff' } })
      .then((s) => alive && setSvg(s))
      .catch(() => alive && setSvg(''));
    return () => {
      alive = false;
    };
  }, [value]);
  return (
    <div className="qr" role="img" aria-label={label} style={{ width: size, height: size }} dangerouslySetInnerHTML={{ __html: svg }} />
  );
}
