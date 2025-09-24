import { LitElement, html } from 'lit';
import { InfoBoxStyle } from './InfoBox.style.js';

const NAMESPACE = 'info-box';

export default class InfoBox extends LitElement {
  static is = NAMESPACE;

  static styles = InfoBoxStyle;

  constructor() {
    super();
    this.text = '';
  }

  static properties = {
    text: { type: String },
  };

  render() {
    return html`<div class="info-box--div">${this.text}</div>`;
  }
}
