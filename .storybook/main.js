/** @type { import('@web/storybook-framework-web-components').StorybookConfig } */

import remarkGfm from 'remark-gfm';

const config = {
  stories: [
    '../guide/**/*.mdx',
    '../packages/**/README.mdx',
    '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-links',
    '@storybook/addon-themes',
    'msw-storybook-addon',
  ],
  staticDirs: [],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: { autodocs: false },
  core: { disableTelemetry: true },
};
export default config;
