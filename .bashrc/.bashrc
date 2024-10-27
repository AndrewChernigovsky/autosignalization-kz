SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function gsw() {
    git switch "$1"
}

function gcb() {
    git checkout -b "$1"
}

function createCommit() {
  if [ -z "$1" ]; then
    echo "Error: Commit message is required."
    return 1
  fi

  git add .
  git commit -m "$1"
  git push  origin HEAD
}

function pullData() {
  if [ -z "$1" ]; then
    git pull
  else
    git pull origin "$1"
  fi
}

function create_pr() {
  bash "$SCRIPT_DIR/create_pr.sh"
}

function runDev() {
  pnpm run dev
}

function buildStatic() {
  pnpm run generate
}

alias s='gsw'
alias b='gcb'
alias cp='createCommit'
alias pull='pullData'
alias dev='runDev'
alias gen='buildStatic'