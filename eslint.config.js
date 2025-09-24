import globals from 'globals';
import js from '@eslint/js';

export default [
  {
    files: ['./packages/**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
  },
  {
    files: ['./packages/**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
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
  },
  {
    files: ['./packages/**/*.unit.test.js'],
    rules: {
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
