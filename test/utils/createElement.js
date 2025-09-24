import { defineCE, fixture } from '@open-wc/testing';
import deepElementUpdate from './deepElementUpdate.js';

const createElement = async (Ctor, props = {}, attributes = {}) => {
  const tagName = defineCE(class extends Ctor {});
  const element = await fixture(
    `<${tagName} ${Object.entries(attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('')}></${tagName}>`,
  );

  Object.entries(props).forEach(([key, value]) => {
    element[key] = value;
  });

  await deepElementUpdate(element);
  return element;
};

export default createElement;
