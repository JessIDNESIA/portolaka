# Portolaka - Portfolio Website

Website portofolio profesional yang dibuat menggunakan SvelteKit, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

- **11 Section Komprehensif**: Opening, About Me, Education, Skills, Projects (3), Achievements, Challenges, Career Goals, dan Closing
- **Modern UI Design**: Menggunakan Tailwind CSS dengan custom theme dan gradient colors
- **Responsive**: Tampilan optimal di desktop dan mobile
- **Smooth Scrolling**: Navigasi halus antar section
- **TypeScript Support**: Type-safe development
- **Vercel Ready**: Siap deploy ke Vercel (free tier compatible)

## 📋 Struktur Project

```
portolaka/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Opening.svelte
│   │       ├── AboutMe.svelte
│   │       ├── Education.svelte
│   │       ├── Skills.svelte
│   │       ├── Project1.svelte
│   │       ├── Project2.svelte
│   │       ├── Project3.svelte
│   │       ├── Achievements.svelte
│   │       ├── Challenges.svelte
│   │       ├── CareerGoal.svelte
│   │       └── Closing.svelte
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── app.html
│   └── app.css
├── package.json
├── svelte.config.js
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Teknologi

- **Framework**: SvelteKit 2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.0
- **Deployment**: Vercel (adapter-vercel)

## 📦 Instalasi & Setup

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses:
```
http://localhost:5173
```

## ✏️ Kustomisasi Konten

Setiap section memiliki file component terpisah di `src/lib/components/`. Untuk mengisi konten portofolio Anda:

1. Buka file component yang ingin diedit (contoh: `Opening.svelte`)
2. Cari teks dalam bracket `[...]` dan ganti dengan informasi Anda
3. Contoh:
   - `[Nama Lengkap Anda]` → ganti dengan nama Anda
   - `[Kelas / Jurusan Anda]` → ganti dengan kelas/jurusan Anda
   - dst.

## 🎨 Kustomisasi Design

### Warna
Edit `tailwind.config.js` untuk mengubah color scheme:
```javascript
colors: {
  primary: {
    // Ubah nilai-nilai ini
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Font
Font default adalah Inter. Untuk mengubah:
1. Edit `src/app.html` untuk mengubah Google Fonts import
2. Edit `tailwind.config.js` di section `fontFamily`

## 🚀 Deployment ke Vercel

### Melalui Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Melalui GitHub:
1. Push code ke GitHub repository
2. Import project di [vercel.com](https://vercel.com)
3. Deploy otomatis akan berjalan

### Environment Settings:
- **Build Command**: `npm run build`
- **Output Directory**: `.svelte-kit`
- **Install Command**: `npm install`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Personal Portfolio Project

## 🤝 Kontribusi

Ini adalah template portofolio untuk penggunaan pribadi. Silakan fork dan kustomisasi sesuai kebutuhan Anda!

---

Dibuat dengan ❤️ menggunakan SvelteKit & Tailwind CSS
