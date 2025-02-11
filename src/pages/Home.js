// path: src/pages/Home.js

import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Menggunakan Grid2 sesuai proyek
import {
  MdLogin,
  MdInfo,
  MdPeople,
  MdAccessTime,
  MdOutlineWork,
  MdAttachMoney,
  MdPersonSearch,
  MdAssessment,
  MdTrendingUp,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import hrIllustration from "../assets/images/illustrations/hrapp.svg";

// Daftar fitur HRMS
const features = [
  { icon: <MdPeople size={40} />, label: "Manajemen Karyawan" },
  { icon: <MdAccessTime size={40} />, label: "Absensi & Kehadiran" },
  { icon: <MdOutlineWork size={40} />, label: "Pengajuan Cuti" },
  { icon: <MdAttachMoney size={40} />, label: "Payroll & Penggajian" },
  { icon: <MdAssessment size={40} />, label: "Evaluasi Kinerja" },
  { icon: <MdTrendingUp size={40} />, label: "Laporan & Analitik" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "#F4F6F8",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            mb: 6,
          }}
        >
          {/* Ilustrasi */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={hrIllustration}
              alt="HR App"
              style={{ width: "80%", maxWidth: "350px" }}
            />
          </Box>

          {/* Teks Hero */}
          <Box sx={{ flex: 1, textAlign: "left", px: { xs: 2, md: 4 } }}>
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              Selamat Datang di HR Management App!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Kelola sumber daya manusia perusahaan Anda dengan mudah, efisien,
              dan modern.
            </Typography>

            {/* Tombol CTA */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<MdLogin />}
                onClick={() => navigate("/login")}
                sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
              >
                Masuk
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<MdInfo />}
                onClick={() => navigate("/about")}
                sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
              >
                Tentang
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Fitur Utama */}
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Fitur Utama
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  bgcolor: "white",
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 4,
                  },
                }}
              >
                {feature.icon}
                <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>
                  {feature.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
