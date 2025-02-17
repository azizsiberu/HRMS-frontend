// path: src/modules/Auth/ResetPassword.js

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Typography, Box } from "@mui/material";
import { MdLock } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import resetPasswordIllustration from "../../assets/images/illustrations/ForgotPassword.svg";
import Logo from "../../assets/images/branding/logo-ajeg.svg";

// Skema validasi Yup untuk reset password
const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib diisi"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  // Fungsi untuk mengubah password
  const onSubmit = (data) => {
    console.log("Reset Password Data:", data);
    setIsSubmitted(true); // Tampilkan notifikasi setelah berhasil mengubah password
    // Arahkan pengguna ke login setelah berhasil reset
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Menunggu 2 detik sebelum mengarahkan ke halaman login
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
            Atur Ulang Password Anda
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
            Masukkan password baru Anda.
          </Typography>
          <img
            src={resetPasswordIllustration}
            alt="Reset Password Illustration"
            style={{ width: "80%", maxWidth: "350px" }}
          />
        </Box>

        {/* Kanan - Formulir Reset Password */}
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

            {/* Formulir Reset Password */}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 4 }}
            >
              {/* Input Password Baru */}
              <TextField
                label="Password Baru"
                type="password"
                variant="outlined"
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ mb: 2 }}
              />

              {/* Input Konfirmasi Password */}
              <TextField
                label="Konfirmasi Password"
                type="password"
                variant="outlined"
                fullWidth
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                sx={{ mb: 2 }}
              />

              {/* Tombol Reset Password */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<MdLock />}
                sx={{ py: 1.5, fontSize: "1rem", textTransform: "none" }}
              >
                Atur Ulang Password
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
                  Password Anda berhasil diubah! Mengarahkan ke halaman login...
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
