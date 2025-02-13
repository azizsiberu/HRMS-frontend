# HRMS Frontend

## 📌 Deskripsi

**HRMS Frontend** adalah bagian antarmuka pengguna dari sistem manajemen sumber daya manusia (HRMS) yang dikembangkan menggunakan **React.js** dan **Material-UI**. Aplikasi ini dirancang untuk membantu perusahaan dalam mengelola karyawan, absensi, penggajian, rekrutmen, dan berbagai aspek HR lainnya dengan akses berbasis role (RBAC).

---

## 🚀 Tech Stack

### **Frontend**

- **React.js** - Library untuk membangun UI berbasis komponen.
- **Material-UI** - Framework UI berbasis Material Design.
- **React Router** - Mengelola navigasi dalam aplikasi.
- **Axios** - Untuk komunikasi dengan backend.
- **Context API / Redux** - Manajemen state global.
- **React Hook Form / Formik** - Pengelolaan form yang lebih efisien.
- **Yup** - Validasi form schema-based.
- **Day.js** - Manipulasi tanggal dan waktu.

### **Styling**

- **Material-UI Theme** - Konsistensi desain berdasarkan tema yang dapat dikustomisasi.

---

## 📂 Struktur Direktori

```
hrms-frontend/
│── public/                # Static assets (favicon, index.html, manifest.json)
│── src/
│   ├── api/               # API calls menggunakan Axios
│   ├── assets/            # Folder untuk assets (images, icons, styles)
│   ├── components/        # Komponen reusable (Navbar, Sidebar, Buttons)
│   ├── contexts/          # Context API untuk state management
│   ├── hooks/             # Custom Hooks
│   ├── modules/           # Fitur aplikasi berbasis modul
│   ├── pages/             # Halaman utama aplikasi
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

---

## 🔧 Instalasi

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/your-repo/hrms-frontend.git
cd hrms-frontend
```

### **2️⃣ Install Dependencies**

```bash
npm install
# atau
yarn install
```

### **3️⃣ Konfigurasi Environment**

Buat file `.env` dan tambahkan konfigurasi berikut:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_THEME=light
```

### **4️⃣ Jalankan Aplikasi**

```bash
npm start
# atau
yarn start
```

Akses aplikasi di `http://localhost:3000`

---

## 🔑 Role-Based Access Control (RBAC)

Aplikasi ini memiliki sistem hak akses berdasarkan **Role**:
| **Role** | **Akses** |
|-----------------|-----------|
| **CEO** | Hanya melihat laporan, tidak bisa mengedit |
| **Manager (HR, Finance)** | Mengelola data karyawan, payroll, izin, klaim |
| **Supervisor** | Mendelegasikan tugas, mengevaluasi tim |
| **Employee** | Absensi, melihat tugas, mengajukan izin |

---

## 📄 Fitur Utama

✅ **Manajemen Karyawan** (Profil, dokumen, status kerja)
✅ **Absensi & Kehadiran** (Absensi digital berbasis foto & lokasi GPS)
✅ **Payroll & Gaji** (Slip gaji, pajak, tunjangan, potongan otomatis)
✅ **Penilaian Kinerja** (KPI, OKR, feedback 360°)
✅ **Employee Self-Service (ESS)** (Profil, pengajuan cuti, slip gaji)
✅ **Role-Based Access Control (RBAC)** (Hak akses berdasarkan peran)
✅ **Laporan & Analitik HR** (Data HR, prediksi turnover)

---

## 🛠️ Deployment

1. **Build aplikasi**
   ```bash
   npm run build
   ```
2. **Deploy ke platform hosting (Netlify, Vercel, CPanel, dll.)**

---

## 💡 Kontribusi

Kami terbuka untuk kontribusi! Silakan buat pull request atau laporkan masalah di **Issues**.

---

## 📄 Lisensi

Proyek ini berlisensi di bawah **MIT License**.
