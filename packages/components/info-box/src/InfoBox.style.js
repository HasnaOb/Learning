import { css } from '@lit/reactive-element';
export const InfoBoxStyle = [
  /* :host is a special Shadow DOM selector that targets the custom element itself (<info-box>).
   Using display: block; makes the component behave like a <div> by default, taking up the full available width. */

  css`
  
    :host {
      display: block;
    }
    .info-box--div {
      background-color: #235f00ff;
      padding: 20px;
      margin: 0;
      width: 100%;
      color: #fff;
      text-align: center;
      box-sizing: border-box;
      font-family: system-ui;
      border-radius: 10px;
      font-weight: 600;
      animation: fadeZoom 0.8s ease;
    }
    .info-box--div:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
    @keyframes fadeZoom {
      from {
        opacity: 0;
        transform: scale(0.7);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }`,
];