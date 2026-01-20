import { expect, fixtureCleanup, waitUntil } from '@open-wc/testing';
import ImgCard from '../src/ImgCard.js';
import createElement from '../../../../test/utils/createElement.js';

describe('ImgCard', () => {
  let element;

  afterEach(() => {
    fixtureCleanup();
  });

  it('should render default image, title and subtitle when no properties are provided', async () => {
    element = await createElement(ImgCard);
    await waitUntil(() => element.shadowRoot.querySelector('.img-card--container'));

    const img = element.shadowRoot.querySelector('.img-card--image');
    const title = element.shadowRoot.querySelector('.img-card--title');
    const subtitle = element.shadowRoot.querySelector('.img-card--subtitle');

    expect(img).to.be.ok;
    expect(title.textContent).to.equal('Horizon Zero Dawn');
    expect(subtitle.textContent).to.equal('An action RPG game developed by Guerrilla Games.');
  });

  it('should override default values when properties are provided', async () => {
    element = await createElement(ImgCard, {
      img: 'https://picsum.photos/150',
      title: 'Sample Image',
      subtitle: 'This is a sample subtitle for the image card component.',
    });

    await waitUntil(() => element.shadowRoot.querySelector('.img-card--container'));

    const img = element.shadowRoot.querySelector('.img-card--image');
    const title = element.shadowRoot.querySelector('.img-card--title');
    const subtitle = element.shadowRoot.querySelector('.img-card--subtitle');

    expect(img.src).to.equal('https://picsum.photos/150');
    expect(title.textContent).to.equal('Sample Image');
    expect(subtitle.textContent).to.equal(
      'This is a sample subtitle for the image card component.',
    );
  });
});
