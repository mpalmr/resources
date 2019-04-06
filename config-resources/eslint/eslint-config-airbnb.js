'use strict';

module.exports = {
  root: true,
  extends: 'airbnb',
  plugins: ['import'],
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 2019 },
  env: { es6: true },

  // Add additional rules here
  rules: {
    'no-console': 0,
    'prefer-destructuring': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
  },

  overrides: [

    // Source files
    {
      files: ['src/**/*.js'],
      excludedFiles: 'src/**/*.spec.js',
      env: { browser: true },
    },

    // Non-source
    {
      files: ['**/*.js'],
      excludedFiles: 'src/**/*.js',
      parserOptions: { sourceType: 'script' },
      env: { node: true },
      rules: {
        strict: ['error', 'global'],
      },
    },

    // Tests
    {
      files: ['src/**/*.spec.js'],
      env: { node: true, jest: true },
    },

  ],
};
