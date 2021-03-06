module.exports = {
  env: {
    jest: true,
  },
  extends: ['prettier'],
  overrides: [
    {
      extends: ['plugin:import/recommended'],
      files: ['*.js', '*.jsx'],
      rules: {
        'block-scoped-var': 'error',
        // I out of control when work with third party library
        'import/default': 'off',

        'import/first': 'error',

        'import/newline-after-import': 'error',

        'import/no-default-export': 'error',

        'import/no-duplicates': 'error',
        // auto sort import statements
        'import/order': 'off',

        'lines-between-class-members': 'error',

        'max-lines': [
          'error',
          {
            max: 500,
            skipBlankLines: true,
            skipComments: true,
          },
        ],

        'max-params': ['error', 4],

        // Prefer smaller function and composite together
        'max-statements': [
          'error',
          {
            max: 40,
          },
        ],

        'new-cap': 'off',

        'no-console': 'error',

        // No unnecessary else branch
        'no-else-return': 'error',

        'no-useless-constructor': 'off',

        'prefer-const': 'error',

        // Promise reject always is instance of error
        'prefer-promise-reject-errors': 'error',
        'prettier/prettier': 'error',
        radix: 'error',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'sort-keys-fix/sort-keys-fix': 'error',
      },
    },
    {
      extends: ['plugin:jest/recommended'],
      files: ['*.test.js', '*.test.jsx', '*.spec.js', '*.spec.jsx'],
      rules: {
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'it',
            withinDescribe: 'it',
          },
        ],

        'jest/expect-expect': 'error',

        'jest/no-done-callback': 'error',

        'jest/prefer-spy-on': 'error',

        'jest/valid-expect': ['error', { maxArgs: 2, minArgs: 1 }],
      },
    },
    {
      extends: ['plugin:jsonc/prettier'],
      files: ['*.json'],
      parser: require.resolve('jsonc-eslint-parser'),
      rules: {
        'jsonc/sort-keys': 'error',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-prettier',
    'sort-keys-fix',
    'simple-import-sort',
  ],
};
