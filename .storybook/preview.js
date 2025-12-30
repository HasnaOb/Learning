import '../__polyfills/scoped-custom-element-registry.min.js';
import { decorators } from './decorators.js';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { http, HttpResponse } from 'msw';

initialize();

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    msw: { handlers: [] },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  loaders: [mswLoader],
  decorators: [...decorators],
};

export default preview;
