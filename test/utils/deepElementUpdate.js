import { elementUpdated } from '@open-wc/testing';

const deepElementUpdate = async node => {
  let items = Array.from(node.children);

  if (node.shadowRoot) {
    if (!node.shadowRoot.childrenElements) {
      await elementUpdated(node);
    }
    items = items.concat(Array.from(node.shadowRoot.children));
  }

  return Promise.all(items.map(deepElementUpdate));
};

export default deepElementUpdate;
