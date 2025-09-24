import {
  defineCE,
  elementUpdated,
  expect,
  fixture,
  fixtureCleanup,
  oneEvent,
  waitUntil,
} from '@open-wc/testing';
import HelloWord from '../src/HelloWord.js';

const deepElementUpdate = async node => {
  let items = Array.from(node.children);

  if (node.shadowRoot) {
    if (!node.shadowRoot.childrenElements) {
      await elementUpdated(node);
    }
    items = items.concat(Array.from(node.shadowRoot.children));
  }
  return await Promise.all(items.map(deepElementUpdate));
};

const createElement = async (Ctor, props = {}, attributes = {}) => {
  const tagName = defineCE(class extends Ctor {});
  const element = await fixture(
    `<${tagName} ${Object.entries(attributes).map(([key, value]) => ` ${key}="${value}"`)}></${tagName}>`,
  );

  Object.entries(props).forEach(([key, value]) => {
    element[key] = value;
  });

  await deepElementUpdate(element);
  return element;
};

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
