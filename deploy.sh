#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

FOLDER_NAME="$1"
COMMIT_MSG="$2"

# ── Validate ──────────────────────────────────────────────────────────────────
if [ -z "$FOLDER_NAME" ] || [ -z "$COMMIT_MSG" ]; then
  echo "Usage: ./deploy.sh <environment-name> <commit-message>"
  echo "Example: ./deploy.sh my-project \"update hero section\""
  exit 1
fi

if [ ! -d "$FOLDER_NAME" ]; then
  echo "Error: Folder '$FOLDER_NAME' not found."
  exit 1
fi

BRANCH="$(git branch --show-current)"

# ── Check Vercel CLI ──────────────────────────────────────────────────────────
if ! command -v vercel &> /dev/null; then
  echo "Vercel CLI not found. Installing..."
  npm install -g vercel
fi

if ! vercel whoami &> /dev/null 2>&1; then
  echo "Not logged in to Vercel. Starting login..."
  vercel login
fi

echo "Vercel: logged in as $(vercel whoami)"

# ── Git commit & push ─────────────────────────────────────────────────────────
echo "Pushing to GitHub (branch: $BRANCH)..."
git add "$FOLDER_NAME"
git commit -m "$COMMIT_MSG"
git push origin "$BRANCH"
echo "Pushed to GitHub."

# ── Deploy to Vercel ──────────────────────────────────────────────────────────
echo "Deploying '$FOLDER_NAME' to Vercel..."
cd "$FOLDER_NAME"
DEPLOY_URL=$(vercel --yes --name "$FOLDER_NAME" --prod 2>/dev/null | tail -1)

echo ""
echo "Done! '$FOLDER_NAME' deployed: $DEPLOY_URL"
