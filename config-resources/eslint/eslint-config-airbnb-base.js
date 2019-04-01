'use strict';

// TODO: Still needs work, very basic right now
module.exports = {
  extends: 'airbnb-base',
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'script',
  },
  env: { node: true, es6: true },
  rules: {
    strict: ['error', 'global'],
    'no-console': 0,
  },
};
