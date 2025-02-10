// path: src/pages/NotFound.js

import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { MdError, MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import errorIllustration from "../assets/images/illustrations/Error-page.svg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", mt: 8 }}>
        {/* Illustrasi Error */}
        <img
          src={errorIllustration}
          alt="Error"
          style={{ width: "100%", marginBottom: 16 }}
        />
        {/* Ikon Error */}
        <MdError size={60} color="red" />

        {/* Pesan 404 */}
        <Typography variant="h3" color="error" gutterBottom>
          404 - Halaman Tidak Ditemukan
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </Typography>

        {/* Tombol Kembali ke Home */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdHome />}
          onClick={() => navigate("/")}
        >
          Kembali ke Beranda
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
