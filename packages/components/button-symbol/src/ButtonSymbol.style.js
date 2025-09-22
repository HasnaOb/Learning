import { css } from '@lit/reactive-element';
export const ButtonSymbolStyle = [
  /* :host is a special Shadow DOM selector that targets the custom element itself (<button-symbol>).
   Using display: block; makes the component behave like a <div> by default, taking up the full available width. */

  css`
    :host {
      display: block;
    }
    .button-symbol--div {
      background: linear-gradient(145deg, #3a3f55, #1f2233); /* degradado sutil */
      border-radius: 10px;
      box-shadow:
        3px 3px 8px rgba(0, 0, 0, 0.5),
        -3px -3px 8px rgba(255, 255, 255, 0.1);
      padding: 20px;
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }

    .button-symbol--div:hover {
      box-shadow:
        inset 2px 2px 5px rgba(0, 0, 0, 0.4),
        inset -2px -2px 5px rgba(255, 255, 255, 0.1);
    }

    .button-symbol--div:active {
      box-shadow:
        inset 3px 3px 5px rgba(0, 0, 0, 0.5),
        inset -3px -3px 5px rgba(255, 255, 255, 0.1);
      transform: translateY(2px);
    }
  `,
];
