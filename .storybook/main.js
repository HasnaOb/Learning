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
  ],
  framework: {
    name: '@web/storybook-framework-web-components',
    options: {},
  },
  docs: { autodocs: false },
  core: { disableTelemetry: true },
};
export default config;
