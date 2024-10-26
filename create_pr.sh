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

# Проверяем, существует ли уже Pull Request с таким заголовком
EXISTING_PR=$(gh pr list --state open --json title --jq '.[] | select(.title == "'"$PR_TITLE"'")')

if [ -n "$EXISTING_PR" ]; then
  echo "Pull Request с таким заголовком уже существует. Вы можете обновить его или изменить заголовок."
else
  # Создаем Pull Request с использованием GitHub CLI
  gh pr create --base main --head "$BRANCH_NAME" --title "$PR_TITLE" --body "$PR_BODY"
fi