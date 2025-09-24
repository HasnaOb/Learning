import { expect, fixtureCleanup, oneEvent, waitUntil } from '@open-wc/testing';
import HelloWord from '../src/HelloWord.js';
import createElement from '../../../../test/utils/createElement.js';

describe('HelloWord', () => {
  let element;

  beforeEach(async () => {
    element = await createElement(HelloWord, {
      hasSymbol: true,
      description: 'This is a description',
      listString: ['Item 1', 'Item 2', 'Item 3'],
    });

    await waitUntil(() => element.shadowRoot.querySelector('[data-test="content"]'));
  });

  afterEach(() => {
    fixtureCleanup();
  });

  it('should render the component', async () => {
    const content = element.shadowRoot.querySelector('[data-test="content"]');

    expect(content).to.exist;
  });
  it(`should return the "${HelloWord.events.continue}" event when the button is clicked`, async () => {
    setTimeout(() => element.shadowRoot.querySelector('[data-test="buttonClick"]').click());

    const eventComponent = await oneEvent(element, HelloWord.events.continue);

    expect(eventComponent).to.exist;
    expect(eventComponent.detail).to.deep.equal({ example: 'text', number: 1 });
  });
});
