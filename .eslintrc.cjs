module.exports = {
  // Define o parser para entender TypeScript corretamente
  parser: '@typescript-eslint/parser',

  // Conjuntos de regras estendidas que ajudam a manter boas práticas
  extends: [
    'eslint:recommended', // Regras básicas recomendadas pelo ESLint
    'plugin:react/recommended', // Boas práticas recomendadas para React
    'plugin:react-hooks/recommended', // Garante uso correto dos React Hooks
    'plugin:import/errors', // Regras para detectar erros em imports
    'plugin:import/warnings', // Regras para detectar warnings em imports
    'plugin:jsx-a11y/recommended', // Boas práticas de acessibilidade em JSX
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'prettier', // Desativa regras que conflitam com o Prettier
  ],

  // Plugins adicionais que adicionam regras específicas
  plugins: [
    'react', // Suporte para regras do React
    'react-hooks', // Suporte para validação de React Hooks
    'import', // Suporte para ordenação e validação de imports
    'unused-imports', // Detecta imports e variáveis não utilizados
    '@typescript-eslint', // Regras específicas do TypeScript
  ],

  // Regras customizadas
  rules: {
    // Dead code
    'no-unused-expressions': 'error', // Proíbe expressões que não fazem nada (ex: `true && doSomething()`)
    'unused-imports/no-unused-imports': 'error', // Remove automaticamente imports não utilizados
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all', // Aplica a regra para todas as variáveis
        varsIgnorePattern: '^_', // Ignora variáveis que começam com "_"
        args: 'after-used', // Só acusa erro se o argumento não for usado após sua definição
        argsIgnorePattern: '^_', // Ignora argumentos que começam com "_"
      },
    ],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }], // Limita linhas vazias consecutivas

    // Padroniza linhas em branco entre blocos de código
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' }, // Linha em branco antes de um `return`
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' }, // Linha em branco após declaração de variáveis
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }, // Não força linha entre declarações de variáveis agrupadas
    ],
    'no-empty-function': ['warn', { allow: ['arrowFunctions'] }], // Permite arrow functions vazias, mas alerta em outras

    // Regras React
    'react/jsx-indent': ['warn', 2], // Indenta com 2 espaços
    'react/jsx-no-duplicate-props': 'warn', // Não permite props duplicadas
    'react/self-closing-comp': 'warn', // Recomenda fechar componentes sem filhos como `<Input />`
    'react/jsx-sort-props': ['warn', { callbacksLast: true, shorthandFirst: true }], // Ordena props

    // Regras React Hooks
    'react-hooks/rules-of-hooks': 'error', // Garante que hooks sejam usados corretamente
    'react-hooks/exhaustive-deps': 'warn', // Garante que dependências dos hooks estejam completas

    // Uso de console
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Permite `console.warn` e `console.error`, mas alerta sobre outros

    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'warn', // Alerta se não declarar tipo de retorno das funções públicas
    '@typescript-eslint/no-explicit-any': 'warn', // Alerta sobre o uso de `any`
    '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }], // Permite `@ts-ignore` apenas com comentário explicativo
    '@typescript-eslint/no-non-null-assertion': 'warn', // Alerta sobre uso de `!` para ignorar null/undefined

    // Boas práticas adicionais
    curly: ['error', 'all'], // Exige uso de chaves em blocos (ex: `if`, `for`)
    'no-else-return': 'warn', // Evita `else` após `return`
    'prefer-const': 'warn', // Sugere uso de `const` se a variável não for reatribuída
    eqeqeq: ['error', 'always'], // Exige comparação estrita (`===` ao invés de `==`)
    'no-shadow': 'warn', // Evita reuso de nomes de variáveis em escopos aninhados

    // Organização de imports
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true, // Ignora ordenação entre declarações diferentes
        ignoreCase: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], // Ordena membros de importação
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], // Ordena os grupos de importação
        'newlines-between': 'always', // Adiciona linha em branco entre grupos
        alphabetize: { order: 'asc', caseInsensitive: true }, // Ordena imports em ordem alfabética
      },
    ],
  },

  // Detecta automaticamente a versão do React
  settings: {
    react: {
      version: 'detect',
    },
  },
};
