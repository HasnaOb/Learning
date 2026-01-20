import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { ImgCardStyle } from './ImgCard.style.js';

const NAMESPACE = 'img-card';

export default class ImgCard extends ScopedElementsMixin(LitElement) {
  static is = NAMESPACE;

  static styles = ImgCardStyle;

  constructor() {
    super();
    this.img = 'https://i.blogs.es/13421e/horizon0/1366_2000.jpg';
    this.title = 'Horizon Zero Dawn';
    this.subtitle = 'An action RPG game developed by Guerrilla Games.';
  }

  static properties = {
    img: { type: String },
    title: { type: String },
    subtitle: { type: String },
  };

  render() {
    return html`
      <div class="img-card--container">
        <img class="img-card--image" src="${this.img}" alt="${this.title}" />
        <div class="img-card--content">
          <h2 class="img-card--title">${this.title}</h2>
          <h3 class="img-card--subtitle">${this.subtitle}</h3>
        </div>
      </div>
    `;
  }
}
