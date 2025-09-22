import { html } from 'lit';
import ButtonSymbol from './src/ButtonSymbol.js';

if (!customElements.get(ButtonSymbol.is)) {
  customElements.define(ButtonSymbol.is, ButtonSymbol);
}

export default {
  title: 'Components/ButtonSymbol',
};

const argTypes = {
  symbol: {
    control: { type: 'text' },
    description: 'The symbol to display on the button (0-9, +, -, *, /, ., =, ←, DELETE).',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
};

const defaultArgs = {
  symbol: '+',
};

const handleOperation = ev =>
  // eslint-disable-next-line no-console
  console.log(`Event: ${ev.type}`, { detail: ev.detail });

export const main = ({ symbol }) =>
  html`<button-symbol symbol="${symbol}" @operation="${handleOperation}"></button-symbol>`;

main.argTypes = argTypes;
main.args = defaultArgs;
main.parameters = {
  controls: { expanded: true },
  docs: { source: { type: 'code' } },
};
