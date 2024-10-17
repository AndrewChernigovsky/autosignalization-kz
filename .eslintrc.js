module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Integrate Prettier
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { usePrettierrc: true }],
  },
}