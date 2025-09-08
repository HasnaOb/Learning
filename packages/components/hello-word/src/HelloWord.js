import { LitElement, html } from 'lit';

export default class HelloWord extends LitElement {
  static is = 'hello-word';

  render() {
    return html`<h1>Hello word</h1>`;
  }
}
