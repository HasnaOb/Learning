export default {
  extends: ['eslint:recommended'],
  languageOptions: {
    globals: {
      browser: true,
      node: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {},
  },
  rules: {
    'lines-between-class-members': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    eqeqeq: ['error', 'always'],
    'no-eval': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'prefer-const': 'error',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['**/*.unit.test.js'],
      globals: { Pact: true },
      rules: {
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
