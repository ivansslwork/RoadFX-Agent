#!/usr/bin/env bash
set -euo pipefail

echo "[1/3] Menyiapkan build-output..."
mkdir -p build-output
cp index.html build-output/index.html

echo "[2/3] Deploy ke Cloudflare Workers..."
npx wrangler deploy

echo "[3/3] Selesai. Cek endpoint /health untuk verifikasi."
