module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended', 
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  'plugins': [
    'react',
    'prettier',
    'jest',
    'compat',
    'extra-rules',
    'cypress',
  ],
  'env': {
    'jest/globals': true,
    'cypress/globals': true,
    browser: true,
    node: true,
  },
  'rules': {
    'prettier/prettier': ['error'],
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': "off",
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react:  {
      version:  'detect',
    },
  },
};
