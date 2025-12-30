import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { HelloWordStyle } from './HelloWord.style';
import es from '../assets/translations/es-ES.js';
import InfoBox from '../../info-box/src/InfoBox.js';
import { ApiUser } from '../../../core/providers/ApiUser.js';

const NAMESPACE = 'hello-word';
export default class HelloWord extends ScopedElementsMixin(LitElement) {
  static is = NAMESPACE;

  static styles = HelloWordStyle;

  constructor() {
    super();

    this.providerApiUser = new ApiUser();

    this.translations = null;
    this.hasSymbol = false;
    this.description = '';
    this.listString = [];
    /**
     * @type {import('../../../core/.types-def/types.js').DataUser|null}
     */
    this.userData = null;
  }

  static scopedElements = {
    'info-box-alternative': InfoBox,
  };

  static properties = {
    userData: { type: Object, state: true },
    translations: { type: Object, state: true },
    hasSymbol: { type: Boolean, attribute: 'has-symbol' },
    description: { type: String, attribute: 'description', reflect: true },
    listString: { type: Object },
  };

  static events = {
    continue: 'continue',
  };

  async connectedCallback() {
    super.connectedCallback();

    await this.loadTranslations();

    await this.getData();
  }

  async getData() {
    try {
      this.userData = await this.providerApiUser.getDataUser('12345');
    } catch (error) {
      throw new Error('Error fetching user data:', error);
    }
  }

  async loadTranslations(locale = navigator.language) {
    try {
      const translateFunction = HelloWord.localizeNamespaces.find(elem =>
        Object.keys(elem).some(key => key === HelloWord.is),
      )[HelloWord.is];
      this.translations = await translateFunction(locale);
    } catch {
      this.translations = {};
    }
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

  renderComponent() {
    return html`<div data-test="content">
      ${this.hasSymbol ? html`<span>👋</span>` : ''}
      <h1>${this.translations['title']} ${this.userData?.name || '...'}</h1>
      ${this.description ? html`<p class="description">${this.description}</p>` : ''}
      ${this.userData?.typeUser
        ? html`<p class="type-user">Tipo de usuario: <strong>${this.userData.typeUser}</strong></p>`
        : ''}
      ${this.listString?.length
        ? html`<ul>
            ${this.listString.map(item => html`<li>${item}</li>`)}
          </ul>`
        : ''}
      <info-box-alternative></info-box-alternative>
      <button data-test="buttonClick" @click="${this.continue}">
        ${this.translations['button']}
      </button>
    </div>`;
  }

  continue(ev) {
    ev?.preventDefault();
    this.dispatchEvent(
      new CustomEvent(HelloWord.events.continue, {
        detail: { example: 'text', number: 1 },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return this.translations ? this.renderComponent() : html``;
  }
}
