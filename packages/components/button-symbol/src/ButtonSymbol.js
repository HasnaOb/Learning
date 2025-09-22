import { LitElement, html } from 'lit';
import { ButtonSymbolStyle } from './ButtonSymbol.style.js';
import { VALID_SYMBOLS } from '../constants/valid-symbols.js';

const NAMESPACE = 'button-symbol';

export default class ButtonSymbol extends LitElement {
  static is = NAMESPACE;

  static styles = ButtonSymbolStyle;

  constructor() {
    super();
    this.symbol = '';
  }

  static properties = {
    symbol: { type: String },
  };

  handleClick(event) {
    event.preventDefault();

    this.dispatchEvent(
      new CustomEvent('operation', {
        detail: this.symbol,
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return Object.values(VALID_SYMBOLS).includes(this.symbol)
      ? html` <div class="button-symbol--div" @click=${this.handleClick}>${this.symbol}</div> `
      : html``;
  }
}
