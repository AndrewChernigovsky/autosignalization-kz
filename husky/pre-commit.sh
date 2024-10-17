#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

# Проверка на ошибки
if [ $? -ne 0 ]; then
  echo "Prettier failed."
  exit 1
fi

# Запуск ESLint
npm run eslint

# Проверка на ошибки
if [ $? -ne 0 ]; then
  echo "ESLint failed."
  exit 1
fi