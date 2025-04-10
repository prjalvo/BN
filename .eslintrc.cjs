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
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'no-empty-function': ['warn', { allow: ['arrowFunctions'] }],

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

    //typescript
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Extra best practices
    curly: ['error', 'all'],
    'no-else-return': 'warn',
    'prefer-const': 'warn',
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
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
