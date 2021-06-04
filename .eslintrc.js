module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/destructuring-assignment": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-filename-extension": "off",
    "no-plusplus": "off",
    "react/static-property-placement": "off",
  },
};
