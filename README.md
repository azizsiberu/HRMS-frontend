# HRMS-frontend

**HRMS Frontend** adalah bagian antarmuka pengguna dari sistem manajemen sumber daya manusia (HRMS) yang dikembangkan menggunakan **React.js** dan **Material-UI**. Aplikasi ini dirancang untuk membantu perusahaan dalam mengelola karyawan, absensi, penggajian, rekrutmen, dan berbagai aspek HR lainnya.

## 🚀 Tech Stack

### 🏗️ **Frontend**

- **React.js** - Library untuk membangun UI berbasis komponen.
- **Material-UI** - Framework UI berbasis Material Design untuk styling dan komponen siap pakai.
- **React Router** - Untuk mengelola navigasi dalam aplikasi.
- **Axios** - Untuk melakukan HTTP request ke backend.
- **Context API / Redux** - Untuk manajemen state global.
- **React Hook Form / Formik** - Untuk pengelolaan form yang lebih efisien.
- **Yup** - Validasi form schema-based.
- **Day.js** - Untuk manipulasi tanggal dan waktu.

### 🎨 **Styling**

- **Material-UI Theme** - Untuk konsistensi desain berdasarkan tema yang dapat dikustomisasi.

## 📂 Struktur Direktori

```plaintext
hrms-frontend/
│── public/                # Static assets (favicon, index.html, manifest.json)
│── src/
│   ├── api/               # API calls menggunakan Axios
│   ├── assets/            # Folder untuk assets (images, icons, styles)
│   ├── components/        # Komponen reusable (Navbar, Sidebar, Buttons)
│   ├── contexts/          # Context API untuk state management
│   ├── hooks/             # Custom Hooks
│   ├── modules/           # Fitur aplikasi berbasis modul
│   ├── pages/             # Halaman utama aplikasi (Login, Dashboard, Reports)
│   ├── routes/            # Konfigurasi routing aplikasi
│   ├── store/             # Redux Store (jika menggunakan Redux)
│   ├── theme/             # Konfigurasi tema Material-UI
│   ├── utils/             # Helper functions
│   ├── App.js             # Root Component aplikasi
│   ├── index.js           # Entry point aplikasi
│── .env                   # Konfigurasi environment
│── package.json           # Dependencies dan scripts
│── README.md              # Dokumentasi proyek
```

## 📦 Instalasi

### 1️⃣ **Clone Repository**

```bash
git clone https://github.com/azizsiberu/HRMS-frontend.git
cd HRMS-frontend
```

### 2️⃣ **Install Dependencies**

```bash
npm install
# atau
yarn install
```

### 3️⃣ **Konfigurasi Environment**

Buat file `.env` dan tambahkan konfigurasi berikut:

```
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_THEME=light
```

### 4️⃣ **Jalankan Aplikasi**

```bash
npm start
# atau
yarn start
```

Akses aplikasi di `http://localhost:3000`

## 🔧 Fitur Utama

✅ **Manajemen Karyawan** (Profil, dokumen, status kerja)\
✅ **Rekrutmen & Onboarding** (Lowongan kerja, tracking kandidat)\
✅ **Absensi & Kehadiran** (Absensi digital, shift management)\
✅ **Pengelolaan Cuti & Izin** (Pengajuan & approval cuti)\
✅ **Payroll & Gaji** (Slip gaji, pajak, tunjangan, potongan otomatis)\
✅ **Penilaian Kinerja** (KPI, OKR, feedback 360°)\
✅ **Pelatihan & Pengembangan** (E-learning, pelatihan karyawan)\
✅ **Manajemen Benefit** (Asuransi, dana pensiun, kompensasi)\
✅ **Laporan & Analitik HR** (Data HR, prediksi turnover)\
✅ **Employee Self-Service (ESS)** (Profil, pengajuan cuti)\
✅ **Compliance & Legal HR** (Kontrak kerja, regulasi tenaga kerja)

## 🛠️ Deployment

1. **Build aplikasi**
   ```bash
   npm run build
   ```
2. **Deploy ke platform hosting (Netlify, Vercel, CPanel, dll.)**

## 💡 Kontribusi

Kami terbuka untuk kontribusi! Silakan buat pull request atau laporkan masalah di [Issues](https://github.com/azizsiberu/HRMS-frontend/issues).

## 📄 Lisensi

Proyek ini berlisensi di bawah **MIT License**.

---

README ini bisa kamu sesuaikan lebih lanjut sesuai kebutuhan. 🚀
