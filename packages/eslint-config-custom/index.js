module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-nested-ternary': 'warn',
    'arrow-body-style': 'warn',
    'import/order': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-key': 'warn',
    'react/self-closing-comp': 'warn',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: ['dist', 'node_modules', 'public'],
};
