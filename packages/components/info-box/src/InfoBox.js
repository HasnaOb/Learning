import { LitElement, html } from 'lit';
import { InfoBoxStyle } from './InfoBox.style.js';
import es from '../assets/translations/es-ES.js';

// Unique name of the component, used to identify it in the translation system
const NAMESPACE = 'info-box';

export default class InfoBox extends LitElement {
  // Defines the name of the custom element
  static is = NAMESPACE;

  // Applies the imported styles to the component's shadow DOM
  static styles = InfoBoxStyle;

  constructor() {
    // Mandatory call to the LitElement constructor
    super();
    // Initializes the translations property as null; it will be loaded later
    this.translations = null;
  }

  static properties = {
    // Reactive property; allows Lit to re-render when its value changes
    translations: { type: Object },
  };

  async connectedCallback() {
    // Mandatory call to LitElement's connectedCallback
    super.connectedCallback();
    // Loads translations when the component is connected to the DOM
    await this.loadTranslations();
  }

  // Gets the browser language as default
  async loadTranslations(locale = navigator.language) {
    try {
      // Finds the translation function specific to this component within the namespace
      const translateFunction = InfoBox.localizeNamespaces.find(elem =>
        Object.keys(elem).some(key => key === InfoBox.is),
      )[InfoBox.is];

      // Executes the translation function and assigns the result to the reactive property
      this.translations = await translateFunction(locale);
    } catch {
      // Fallback to empty in case of an error during translation loading
      this.translations = {};
    }
  }

  static localizeNamespaces = [
    {
      [NAMESPACE]: locale => {
        const namespaces = {
          // Spanish loaded statically
          'es-ES': () => Promise.resolve(es),
          // English loaded dynamically only if needed
          'en-GB': () => import('../assets/translations/en-GB.js'),
        };
        // Returns the corresponding translation or Spanish by default if not available
        return namespaces[locale] ? namespaces[locale]() : Promise.resolve(es);
      },
    },
  ];

  // Renders the HTML of the component
  render() {
    return this.translations
      ? // Displays the title if translations have been loaded
        html`<div class="info-box--div">${this.translations?.title}</div>`
      : // Renders nothing while translations are loading
        html``;
  }
}
