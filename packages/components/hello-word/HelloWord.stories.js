import { html } from 'lit';
import HelloWord from './src/HelloWord.js';

if (!customElements.get(HelloWord.is)) {
  customElements.define(HelloWord.is, HelloWord);
}

export default {
  title: 'Components/HelloWord',
};

const argTypes = {
  hasSymbol: {
    control: { type: 'boolean' },
    description: 'Whether to show a waving hand symbol.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  description: {
    control: { type: 'text' },
    description: 'A description text to display below the title.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  listString: {
    control: { type: 'object' },
    description: 'An array of strings to display as a list.',
    table: { type: { summary: 'array' }, defaultValue: { summary: '[]' } },
  },
};

const defaultArgs = {
  hasSymbol: false,
  description: 'This is a simple description.',
  listString: ['Item 1', 'Item 2', 'Item 3'],
};

const handlerEvent = ev =>
  // eslint-disable-next-line no-console
  console.log(`Event name: ${ev.type}`, { detail: ev?.detail || null }, { eventComplete: ev });

export const main = ({ hasSymbol, description, listString }) =>
  html`<hello-word
    ?has-symbol="${hasSymbol}"
    description="${description}"
    .listString="${listString}"
    @continue="${handlerEvent}"
  ></hello-word>`;

main.argTypes = argTypes;
main.args = defaultArgs;
main.parameters = {
  controls: { expanded: true },
  docs: { source: { type: 'code' } },
};
