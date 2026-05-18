# 🧑‍💻 DAFRI DEV — Solusi Website UMKM Indonesia

Website profil freelance web developer DAFRI Digital Studio. Showcase portfolio & layanan pembuatan website untuk UMKM Indonesia.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Fitur

- 🌙 **Dark Mode & Light Mode** — Toggle tema, preferensi tersimpan otomatis
- 📂 **Portfolio Dinamis** — Data project dimuat dari `data/projects.json`
- 💰 **Paket Harga** — Data layanan dimuat dari `data/services.json`
- 💬 **Konsultasi via WhatsApp** — Tombol langsung ke chat WhatsApp
- 📱 **Fully Responsive** — Tampil rapi di HP, tablet, dan desktop

---

## 💰 Paket Layanan

| Paket | Harga | Fitur |
|-------|-------|-------|
| Basic | 300rb | Landing Page, 1 Halaman, WhatsApp Button |
| UMKM | 500rb | Website Katalog, 5 Halaman, WA Order, SEO Dasar, Mobile Ready |
| Pro | 1jt+ | Custom Design, Admin Panel, E-Commerce, Support 1 Tahun |

---

## 📁 Struktur File

```
dafridev/
├── index.html          # Halaman utama
├── style.css           # Tampilan & dark mode & responsif
├── script.js           # Load data JSON dinamis
├── data/
│   ├── projects.json   # Data portfolio project
│   └── services.json   # Data paket harga layanan
└── public/
    └── img/            # Aset gambar & logo
```

---

## ✏️ Cara Edit Data (Tanpa Coding)

**Tambah project portfolio** — edit `data/projects.json`:
```json
{
  "nama": "Nama Project",
  "deskripsi": "Deskripsi singkat project.",
  "label": "Kategori",
  "link": "https://link-project.com"
}
```

**Ubah paket harga** — edit `data/services.json`:
```json
{
  "nama": "Nama Paket",
  "harga": "500rb",
  "fitur": ["Fitur 1", "Fitur 2", "Fitur 3"]
}
```

---

## 🌐 Live Demo

👉 [dafridigital.github.io/dafridev](https://dafridigital.github.io/dafridev)

---

## 👨‍💻 Developer

Dibuat oleh **DAFRI Digital Studio**
Solusi website digital untuk UMKM Indonesia.

- 📸 Instagram: [@dafridigital](https://instagram.com/dafridigital)
- 🎥 YouTube: [@DafriDev](https://youtube.com/@DafriDev)
- 💬 WhatsApp: [Chat Sekarang](https://api.whatsapp.com/send?phone=6285199531660)
