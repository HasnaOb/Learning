import { html } from 'lit';
import InfoBox from './src/InfoBox.js';

if (!customElements.get(InfoBox.is)) {
  customElements.define(InfoBox.is, InfoBox);
}

export default {
  title: 'Components/InfoBox',
};

const argTypes = {
  text: {
    control: { type: 'text' },
    description: 'The text displayed inside the InfoBox.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
};

const defaultArgs = {
  text: 'This is an example InfoBox',
};

export const main = ({ text }) => html`<info-box text="${text}"></info-box>`;

main.argTypes = argTypes;
main.args = defaultArgs;
main.parameters = {
  controls: { expanded: true },
  docs: { source: { type: 'code' } },
};
