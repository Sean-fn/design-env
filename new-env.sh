#!/bin/bash
set -e

# Must be run from repo root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

TEMPLATE="gofreight-desgin"
FOLDER_NAME="$1"

# ── Validate argument ────────────────────────────────────────────────────────
if [ -z "$FOLDER_NAME" ]; then
  echo "Usage: ./new-env.sh <environment-name>"
  echo "Example: ./new-env.sh my-new-project"
  exit 1
fi

if [ -d "$FOLDER_NAME" ]; then
  echo "Error: Folder '$FOLDER_NAME' already exists."
  exit 1
fi

# ── 1.5 Create and checkout branch ───────────────────────────────────────────
echo "Creating branch '$FOLDER_NAME'..."
git checkout -b "$FOLDER_NAME"

BRANCH="$FOLDER_NAME"

# ── 1. Check Vercel CLI ──────────────────────────────────────────────────────
if ! command -v vercel &> /dev/null; then
  echo "Vercel CLI not found. Installing..."
  npm install -g vercel
fi

# ── 2. Check Vercel login ────────────────────────────────────────────────────
if ! vercel whoami &> /dev/null 2>&1; then
  echo "Not logged in to Vercel. Starting login..."
  vercel login
fi

echo "Vercel: logged in as $(vercel whoami)"

# ── 3. Copy template ─────────────────────────────────────────────────────────
echo "Copying template '$TEMPLATE' → '$FOLDER_NAME'..."
cp -r "$TEMPLATE" "$FOLDER_NAME"

# Remove artifacts that should not carry over
rm -rf "$FOLDER_NAME/node_modules"
rm -rf "$FOLDER_NAME/.vercel"
rm -rf "$FOLDER_NAME/build"

echo "Template copied."

# ── 4. Git commit & push ─────────────────────────────────────────────────────
echo "Pushing to GitHub (branch: $BRANCH)..."

git add "$FOLDER_NAME"
git commit -m "creating: add $FOLDER_NAME design environment"
git push origin "$BRANCH"

echo "Pushed to GitHub."

# ── 5. Deploy to Vercel ──────────────────────────────────────────────────────
echo "Deploying '$FOLDER_NAME' to Vercel..."
cd "$FOLDER_NAME"
DEPLOY_URL=$(vercel --yes --name "$FOLDER_NAME" --prod --no-wait --public 2>/dev/null | tail -1)

echo ""
echo "Done! Environment '$FOLDER_NAME' is live: $DEPLOY_URL"
