import { LitElement, html } from 'lit';
import { HelloWordStyle } from './HelloWord.style';
import es from '../assets/translations/es-ES.js';

const NAMESPACE = 'hello-word';
export default class HelloWord extends LitElement {
  static is = NAMESPACE;

  static styles = HelloWordStyle;

  constructor() {
    super();

    this.translations = null;
  }

  static properties = {
    translations: { type: Object },
  };

  async connectedCallback() {
    super.connectedCallback();

    await this.loadTranslations();
  }

  async loadTranslations(locale = navigator.language) {
    try {
      const translateFunction = HelloWord.localizeNamespaces.find(elem =>
        Object.keys(elem).some(key => key === HelloWord.is),
      )[HelloWord.is];
      this.translations = await translateFunction(locale);
      console.log(this.translations);
    } catch (error) {}
  }

  static localizeNamespaces = [
    {
      [NAMESPACE]: locale => {
        const namespaces = {
          'es-ES': () => Promise.resolve(es),
          'en-GB': () => import('../assets/translations/en-GB.js'),
        };
        return namespaces[locale]();
      },
    },
  ];

  render() {
    return this.translations ? html`<h1>${this.translations['title']}</h1>` : html``;
  }
}
