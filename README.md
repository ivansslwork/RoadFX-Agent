# Deploy ke GitHub + Cloudflare Workers

File utama app ada di `index.html`.
Build statis yang dipakai worker ada di `build-output/index.html`.

## 1) Jalankan lokal

```bash
npm install
npm run build
npm run dev
```

## 2) Deploy manual ke Cloudflare

```bash
npm install
bash deploy.sh
```

Atau:

```bash
npm install
npm run deploy
```

## 3) Upload ke GitHub

```bash
git init
git add .
git commit -m "feat: arena agent build folder + telegram settings"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

## 4) Integrasi GitHub Actions -> Cloudflare

Tambahkan secrets berikut di repository GitHub:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Lalu push ke branch `main` untuk auto deploy.

## 5) Endpoint health check

Setelah deploy berhasil:

```text
https://YOUR-WORKER-DOMAIN/health
```

Harus mengembalikan JSON status.

## Catatan Telegram

Setting Telegram di UI disimpan di browser lokal. Untuk produksi, pindahkan token sensitif ke secret environment Cloudflare bila nanti ingin dijadikan backend notifikasi.
