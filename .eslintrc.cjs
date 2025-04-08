module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'import', 'unused-imports', '@typescript-eslint'],
  rules: {
    // Dead code
    'no-unused-expressions': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],

    // React
    'react/jsx-indent': ['warn', 2],
    'react/jsx-no-duplicate-props': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': ['warn', { callbacksLast: true, shorthandFirst: true }],

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Console
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Extra best practices
    eqeqeq: ['error', 'always'],
    'no-shadow': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
        ignoreCase: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
