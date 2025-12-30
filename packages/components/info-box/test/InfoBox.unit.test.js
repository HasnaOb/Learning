import { elementUpdated, expect, fixtureCleanup, waitUntil } from '@open-wc/testing';
import InfoBox from '../src/InfoBox.js';
import createElement from '../../../../test/utils/createElement.js';

describe('InfoBox', () => {
  let element;

  afterEach(() => {
    fixtureCleanup();
  });

  it('should render the component', async () => {
    element = await createElement(InfoBox);
    await waitUntil(() => element.shadowRoot.querySelector('.info-box--div'));

    const div = element.shadowRoot.querySelector('.info-box--div');
    expect(div).to.exist;
  });

  it('should display the text passed as a property', async () => {
    element = await createElement(InfoBox, { text: 'Hola mundo' });
    await waitUntil(() => element.shadowRoot.querySelector('.info-box--div'));

    const div = element.shadowRoot.querySelector('.info-box--div');
    expect(div.textContent).to.equal('Hola mundo');
  });

  it('should update when text property changes', async () => {
    element = await createElement(InfoBox, { text: 'Inicial' });
    await waitUntil(() => element.shadowRoot.querySelector('.info-box--div'));

    element.text = 'Actualizado';
    await elementUpdated(element);

    const div = element.shadowRoot.querySelector('.info-box--div');
    expect(div.textContent).to.equal('Actualizado');
  });
});
