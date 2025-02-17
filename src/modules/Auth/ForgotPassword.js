// path: src/modules/Auth/ForgotPassword.js

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Typography, Box } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import forgotPasswordIllustration from "../../assets/images/illustrations/ForgotPassword.svg";
import Logo from "../../assets/images/branding/logo-ajeg.svg";

// Skema validasi dengan Yup
const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  // Fungsi submit untuk mengirimkan permintaan reset password
  const onSubmit = (data) => {
    console.log("Email untuk reset password:", data.email);
    setIsSubmitted(true); // Set state setelah berhasil mengirimkan email
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          py: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "40px", borderRadius: 4 }}
          />
          <Typography variant="body1" fontWeight="bold" sx={{ ml: 1 }}>
            Ajeg Furniture
          </Typography>
        </Box>
      </Box>

      {/* Container Utama */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Kiri - Ilustrasi (disembunyikan di xs) */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#F9FAFB",
            maxWidth: "30%",
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Lupa Password?
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
            Masukkan email Anda untuk mereset password.
          </Typography>
          <img
            src={forgotPasswordIllustration}
            alt="Forgot Password Illustration"
            style={{ width: "80%", maxWidth: "350px" }}
          />
        </Box>

        {/* Kanan - Formulir Forgot Password */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
            p: 4,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "400px" }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              Reset Password Anda
            </Typography>
            <Typography variant="body2" color="primary" sx={{ mb: 3 }}>
              Sudah ingat password? <a href="/login">Masuk di sini</a>
            </Typography>

            {/* Formulir Forgot Password */}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 4 }}
            >
              {/* Input Email */}
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 2 }}
              />

              {/* Tombol Kirim Email */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<MdEmail />}
                sx={{ py: 1.5, fontSize: "1rem", textTransform: "none" }}
              >
                Kirim Email Reset
              </Button>

              {/* Notifikasi Berhasil */}
              {isSubmitted && (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    color: "green",
                    textAlign: "center",
                  }}
                >
                  Kami telah mengirimkan instruksi reset password ke email Anda.
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
