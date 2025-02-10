// path: src/pages/Home.js
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { MdHome, MdLogin, MdInfo } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 8 }}>
        {/* Ikon Home */}
        <MdHome size={50} color="#006D5A" />

        {/* Judul Halaman */}
        <Typography variant="h3" color="primary" gutterBottom>
          Selamat Datang di HR Management App
        </Typography>

        {/* Deskripsi */}
        <Typography variant="body1" sx={{ mb: 3 }}>
          Aplikasi ini membantu perusahaan dalam mengelola karyawan, absensi,
          penggajian, dan berbagai aspek HR lainnya.
        </Typography>

        {/* Tombol Navigasi */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<MdLogin />}
            onClick={() => navigate("/login")}
          >
            Masuk
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<MdInfo />}
            onClick={() => navigate("/about")}
          >
            Tentang
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
