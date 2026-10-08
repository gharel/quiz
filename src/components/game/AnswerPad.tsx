import type { PlayQuestion } from '../../lib/play';
import type { AnswerValue } from '../../lib/types';
import { ChoiceAnswer } from './ChoiceAnswer';
import { OrderAnswer, SliderAnswer, TextAnswer } from './InputAnswer';

/** Zone de réponse adaptée au type de question. */
export function AnswerPad(props: { q: PlayQuestion; onSubmit: (v: AnswerValue) => void; disabled?: boolean }) {
  switch (props.q.type) {
    case 'text': return <TextAnswer {...props} />;
    case 'slider': return <SliderAnswer {...props} />;
    case 'order': return <OrderAnswer {...props} />;
    default: return <ChoiceAnswer {...props} />;
  }
}
