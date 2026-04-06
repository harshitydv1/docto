#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for dir in backend frontend admin; do
  if [[ ! -d "$ROOT_DIR/$dir" ]]; then
    echo "Missing directory: $dir"
    exit 1
  fi
done

cleanup() {
  echo
  echo "Stopping all services..."
  for pid in "${PIDS[@]:-}"; do
    if kill -0 "$pid" 2>/dev/null; then
      kill "$pid" 2>/dev/null || true
    fi
  done
}

trap cleanup INT TERM EXIT

echo "Starting backend, frontend, and admin..."

PIDS=()

(cd "$ROOT_DIR/backend" && npm run server) &
PIDS+=("$!")
(cd "$ROOT_DIR/frontend" && npm run dev -- --host) &
PIDS+=("$!")
(cd "$ROOT_DIR/admin" && npm run dev -- --host) &
PIDS+=("$!")

wait
