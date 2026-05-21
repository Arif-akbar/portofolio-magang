# Portfolio — Arif Akbarudin

Website portofolio pribadi untuk keperluan melamar magang, dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework.

## Identitas

| Field | Nilai |
|---|---|
| Nama | Arif Akbarudin |
| Program Studi | Sistem Informasi |
| Universitas | Universitas Duta Bangsa Surakarta |
| Email | arifakbarudin7@gmail.com |
| WhatsApp | +62 878 1724 8883 |
| Domisili | Sukoharjo, Indonesia |

## Struktur Proyek

```
portofolio-magang/
├── index.html          # Halaman utama
├── css/
│   └── style.css       # Semua styling
├── js/
│   └── main.js         # Semua interaksi & animasi
├── cv/
│   └── cv-arif-akbarudin.pdf   # File CV (letakkan di sini)
└── README.md
```

## Fitur

- **Hero section** dengan badge "Tersedia untuk magang", animasi scroll, dan statistik
- **About** dengan foto dan tag keahlian
- **Skills** dengan skill bar animasi saat scroll
- **Projects** dengan layout grid responsif
- **Experience** dengan tab interaktif
- **Education** dan **Certificates**
- **Contact form** yang membuka aplikasi email otomatis
- Tombol WhatsApp langsung terhubung ke nomor asli
- Tombol Download CV langsung mengarah ke file PDF
- Custom cursor animasi
- Navigasi sticky dengan efek blur saat scroll
- Mobile responsive dengan hamburger menu
- Reveal animation saat elemen masuk viewport

## Cara Pakai

Tidak perlu instalasi apapun. Cukup buka `index.html` di browser, atau gunakan ekstensi **Live Server** di VS Code untuk development.

## Menambahkan CV

Letakkan file PDF CV kamu di folder `cv/` dengan nama `cv-arif-akbarudin.pdf`. Tombol Download CV di halaman sudah otomatis mengarah ke file tersebut.

## Placeholder yang Masih Perlu Diisi

| Placeholder | Keterangan |
|---|---|
| `[Nama Proyek]` di section Projects | Ganti dengan nama proyek nyata kamu |
| `[Nama Kompetisi]` di section Experience | Ganti dengan nama kompetisi yang pernah diikuti |
| `[Nama Komunitas / Program]` | Ganti dengan nama komunitas/program volunteer |
| `[Nama Sekolah]` di section Education | Ganti dengan nama SMA/SMK kamu |
| Link social media (LinkedIn, GitHub, dll) | LinkedIn, GitHub, dan Instagram sudah terhubung. Behance dan Dribbble masih placeholder — ganti jika punya akun. |
| Foto profil di section About | Ganti elemen `.photo-placeholder` dengan tag `<img>` |
| Sertifikat placeholder | Ganti dengan sertifikat nyata yang kamu miliki |

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (IntersectionObserver, requestAnimationFrame)
- Google Fonts — [Syne](https://fonts.google.com/specimen/Syne) & [DM Sans](https://fonts.google.com/specimen/DM+Sans)
