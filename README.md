# DAFRI DEV - Simple Version (HTML/CSS/JS)

Website landing page DAFRI DEV versi sederhana yang mudah diedit tanpa perlu coding kompleks atau build tools.

## Struktur Project
- `index.html`: Struktur utama website.
- `style.css`: Desain dan styling (termasuk Dark Mode).
- `script.js`: Logika untuk memuat data JSON secara dinamis.
- `data/`: Folder penyimpanan data (Project & Services).

## Cara Edit Data (TANPA CODING)

### 1. Menambah/Mengubah Project Portfolio
Buka file `data/projects.json`, lalu tambahkan atau ubah data di dalamnya:
```json
{
  "nama": "Nama Project Baru",
  "deskripsi": "Deskripsi singkat project.",
  "label": "Kategori",
  "link": "Link WhatsApp/Website"
}
```

### 2. Mengubah Paket Harga & Layanan
Buka file `data/services.json`, lalu ubah nama paket, harga, atau daftar fiturnya:
```json
{
  "nama": "Nama Paket",
  "harga": "500rb",
  "fitur": ["Fitur 1", "Fitur 2", "Fitur 3"]
}
```

## Cara Menjalankan
Cukup buka file `index.html` langsung di browser Anda.

## Cara Deploy ke GitHub Pages
1. Upload semua file ini ke repository GitHub Anda.
2. Masuk ke tab **Settings** > **Pages**.
3. Pilih branch `main` dan folder `/ (root)`.
4. Klik **Save**. Website Anda akan online dalam hitungan menit!
