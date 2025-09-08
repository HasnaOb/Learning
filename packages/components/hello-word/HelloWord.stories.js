import { html } from 'lit';
import HelloWord from './src/HelloWord.js';

if (!customElements.get(HelloWord.is)) {
  customElements.define(HelloWord.is, HelloWord);
}

export default {
  title: 'Components/HelloWord',
};

export const main = () => html`<hello-word></hello-word>`;
main.parameters = {
  controls: { expanded: true },
  docs: { source: { type: 'code' } },
};
