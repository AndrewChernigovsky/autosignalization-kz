#!/bin/bash

# Получаем имя текущей ветки
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Получаем последнее сообщение коммита
COMMIT_MESSAGE=$(git log -1 --pretty=%B)

# Создаем Pull Request с использованием GitHub CLI
gh pr create --base main --head "$BRANCH_NAME" --title "$BRANCH_NAME" --body "$COMMIT_MESSAGE"
