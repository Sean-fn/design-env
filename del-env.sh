#!/bin/bash
# del-env.sh — 刪除 design environment（Vercel project + git branch + 本地資料夾）
# 與 new-env.sh 相反操作。不使用 set -e：各步驟獨立，部分失敗不中斷後續。

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

FOLDER_NAME="$1"

# ── Validate argument ─────────────────────────────────────────────────────────
if [ -z "$FOLDER_NAME" ]; then
  echo "Usage: ./del-env.sh <environment-name>"
  echo "Example: ./del-env.sh my-old-project"
  exit 1
fi

if [ ! -d "$FOLDER_NAME" ]; then
  echo "Warning: Local folder '$FOLDER_NAME' does not exist. Vercel project may still exist — continuing."
fi

# ── Check Vercel CLI ──────────────────────────────────────────────────────────
if ! command -v vercel &> /dev/null; then
  echo "Error: Vercel CLI not found. Install with: npm install -g vercel"
  exit 1
fi

if ! vercel whoami &> /dev/null 2>&1; then
  echo "Not logged in to Vercel. Starting login..."
  vercel login
fi

echo "Vercel: logged in as $(vercel whoami)"

# ── 1. Delete Vercel project ──────────────────────────────────────────────────
echo ""
echo "Deleting Vercel project '$FOLDER_NAME'..."
if ! vercel rm "$FOLDER_NAME" --yes; then
  echo "Warning: Failed to delete Vercel project '$FOLDER_NAME' (may not exist). Continuing."
fi

# ── 2. Delete local folder + git branch ──────────────────────────────────────
echo ""
read -n 1 -p "Remove local folder and git branch '$FOLDER_NAME'? [y/N] " REMOVE_LOCAL
echo ""
if [[ "$REMOVE_LOCAL" =~ ^[Yy]$ ]]; then
  rm -rf "$FOLDER_NAME"
  echo "Removed local folder '$FOLDER_NAME'."

  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
  if [ "$CURRENT_BRANCH" = "$FOLDER_NAME" ]; then
    echo "Currently on branch '$FOLDER_NAME', switching to main..."
    git checkout main
  fi

  if ! git branch -D "$FOLDER_NAME"; then
    echo "Warning: Failed to delete local branch '$FOLDER_NAME' (may not exist)."
  else
    echo "Deleted local branch '$FOLDER_NAME'."
  fi

  if ! git push origin --delete "$FOLDER_NAME"; then
    echo "Warning: Failed to delete remote branch '$FOLDER_NAME' (may not exist)."
  else
    echo "Deleted remote branch '$FOLDER_NAME'."
  fi
else
  echo "Skipped: local folder and git branch kept."
fi

echo ""
echo "Done! Environment '$FOLDER_NAME' has been cleaned up."
