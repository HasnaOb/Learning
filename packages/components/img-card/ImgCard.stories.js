import { html } from 'lit';
import ImgCard from './src/ImgCard.js';
if (!customElements.get(ImgCard.is)) {
  customElements.define(ImgCard.is, ImgCard);
}

export default {
  title: 'Components/ImgCard',
};
const argTypes = {
  img: {
    control: { type: 'text' },
  },
  title: {
    control: { type: 'text' },
  },
  subtitle: {
    control: { type: 'text' },
  },
};
const defaultArgs = {
  img: 'https://i.blogs.es/13421e/horizon0/1366_2000.jpg',
  title: 'Horizon Zero Dawn',
  subtitle: 'An action RPG game developed by Guerrilla Games.',
};

export const main = ({ img, title, subtitle }) =>
  html`<img-card img="${img}" title="${title}" subtitle="${subtitle}"></img-card>`;

main.argTypes = argTypes;
main.args = defaultArgs;
main.parameters = {
  controls: { expanded: true },
  docs: { source: { type: 'code' } },
};
