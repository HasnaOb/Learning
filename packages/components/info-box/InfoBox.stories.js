import { html } from 'lit';
import InfoBox from './src/InfoBox.js';

if (!customElements.get(InfoBox.is)) {
  customElements.define(InfoBox.is, InfoBox);
}

export default {
  title: 'Components/InfoBox',
};

export const main = () => html`<info-box></info-box>`;
main.parameters = {
  controls: { expanded: true },
  docs: { source: { type: 'code' } },
};

