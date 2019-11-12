module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: { jest: true },
  rules: {
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
  },
  globals: { fetch: false },
};
