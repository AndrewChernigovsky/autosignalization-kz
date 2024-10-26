# Function to switch branches
function gsw() {
    git switch "$1"
}

# Function to create and switch to a new branch
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
}
# Aliases for easier usage
alias s='gsw'
alias b='gcb'
alias c='createCommit'