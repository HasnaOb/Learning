/** @type { import('@web/storybook-framework-web-components').StorybookConfig } */
const config = {
  stories: ['../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
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
