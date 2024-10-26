#!/bin/bash

# Получаем имя текущей ветки
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Запрашиваем название ветки (можно оставить текущее значение по умолчанию)
read -p "Введите название ветки (по умолчанию $BRANCH_NAME): " INPUT_BRANCH
BRANCH_NAME=${INPUT_BRANCH:-$BRANCH_NAME} # Используем введенное значение или текущее имя ветки

# Запрашиваем заголовок для Pull Request
read -p "Введите заголовок для Pull Request: " PR_TITLE

# Запрашиваем описание для Pull Request
read -p "Введите описание для Pull Request: " PR_BODY

# Добавляем все изменения в индекс
git add .

# Запрашиваем сообщение коммита
read -p "Введите сообщение коммита: " COMMIT_MESSAGE

# Создаем коммит с введенным сообщением
git commit -m "$COMMIT_MESSAGE"

# Проверяем, существует ли уже Pull Request для текущей ветки
EXISTING_PR=$(gh pr list --head "$BRANCH_NAME" --state open --json number --jq '.[0].number')

if [ -n "$EXISTING_PR" ]; then
  echo "Pull Request для ветки '$BRANCH_NAME' уже существует."
  echo "Ссылка на существующий PR: https://github.com/$(git config --get remote.origin.url | sed -E 's/.*\/(.*).git/\1/')/pull/$EXISTING_PR"
  exit 1
fi

# Создаем Pull Request с использованием GitHub CLI
gh pr create --base main --head "$BRANCH_NAME" --title "$PR_TITLE" --body "$PR_BODY"
