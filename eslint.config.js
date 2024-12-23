const config = {
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
  overrides: [
    {
      files: ['*.ts', '*.vue']
    },
  ],
  rules: {
    'vue/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { usePrettierrc: true }],
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".output",
    ".nuxt"
  ],
};

module.exports = config;