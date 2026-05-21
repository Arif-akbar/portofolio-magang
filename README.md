# Portfolio Magang

Website portofolio pribadi untuk keperluan melamar magang, dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework.

## Struktur Proyek

```
portofolio-magang/
├── index.html        # Halaman utama
├── css/
│   └── style.css     # Semua styling
├── js/
│   └── main.js       # Semua interaksi & animasi
└── README.md
```

## Fitur

- **Hero section** dengan animasi scroll dan statistik
- **About** dengan foto dan tag keahlian
- **Skills** dengan skill bar animasi saat scroll
- **Projects** dengan layout grid responsif
- **Experience** dengan tab interaktif
- **Education** dan **Certificates**
- **Contact form** dengan validasi dan notifikasi toast
- Custom cursor animasi
- Navigasi sticky dengan efek blur saat scroll
- Mobile responsive dengan hamburger menu
- Reveal animation saat elemen masuk viewport

## Cara Pakai

Tidak perlu instalasi apapun. Cukup buka `index.html` di browser, atau gunakan ekstensi **Live Server** di VS Code untuk development.

## Kustomisasi

Ganti bagian yang ditandai `[...]` di `index.html` dengan data asli kamu:

| Placeholder | Keterangan |
|---|---|
| `[Nama Kamu]` | Nama lengkap |
| `[Program Studi]` | Jurusan kuliah |
| `[Universitas]` | Nama kampus |
| `[Nama Proyek]` | Judul proyek portofolio |
| `nama@email.com` | Alamat email |
| `[Kota]` | Kota domisili |

Untuk mengganti foto di section About, hapus elemen `.photo-placeholder` dan ganti dengan tag `<img>`.

Untuk mengaktifkan tombol Download CV, ubah `href="#"` pada elemen `#cvBtn` menjadi path ke file PDF CV kamu.

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (IntersectionObserver, requestAnimationFrame)
- Google Fonts — [Syne](https://fonts.google.com/specimen/Syne) & [DM Sans](https://fonts.google.com/specimen/DM+Sans)
