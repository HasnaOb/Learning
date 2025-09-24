import { elementUpdated, expect, fixtureCleanup, waitUntil, oneEvent } from '@open-wc/testing';
import ButtonSymbol from '../src/ButtonSymbol.js';
import { VALID_SYMBOLS } from '../constants/valid-symbols.js';
import createElement from '../../../../test/utils/createElement.js';

describe('ButtonSymbol', () => {
  let element;

  afterEach(() => {
    fixtureCleanup();
  });

  it('should render when the symbol is valid', async () => {
    const validSymbol = Object.values(VALID_SYMBOLS)[0];
    element = await createElement(ButtonSymbol, { symbol: validSymbol });

    await waitUntil(() => element.shadowRoot.querySelector('.button-symbol--div'));
    const div = element.shadowRoot.querySelector('.button-symbol--div');

    expect(div).to.exist;
    expect(div.textContent).to.equal(validSymbol);
  });

  it('should not render when the symbol is invalid', async () => {
    element = await createElement(ButtonSymbol, { symbol: '?' });
    await elementUpdated(element);

    const div = element.shadowRoot.querySelector('.button-symbol--div');
    expect(div).to.not.exist;
  });

  it('should dispatch an "operation" event with the correct detail on click', async () => {
    const validSymbol = Object.values(VALID_SYMBOLS)[0];
    element = await createElement(ButtonSymbol, { symbol: validSymbol });

    await waitUntil(() => element.shadowRoot.querySelector('.button-symbol--div'));
    const div = element.shadowRoot.querySelector('.button-symbol--div');

    setTimeout(() => div.click());
    const event = await oneEvent(element, 'operation');

    expect(event).to.exist;
    expect(event.detail).to.equal(validSymbol);
  });
});
