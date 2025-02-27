// path: src/modules/Auth/Register.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { MdPersonAdd, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";
import registerIllustration from "../../assets/images/illustrations/Register.svg";
import Logo from "../../assets/images/branding/logo-ajeg.svg";

// Skema validasi Yup
const registerSchema = yup.object().shape({
  name: yup.string().required("Nama wajib diisi"),
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib diisi"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

const Register = () => {
  const navigate = useNavigate();
  const { handleRegister } = useAuth();
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await handleRegister({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      navigate("/login"); // Redirect ke halaman login setelah sukses
    } catch (error) {
      setErrorMessage(error.message || "Registrasi gagal, coba lagi.");
    }
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
          <Typography variant="body1" fontWeight="bold">
            Ajeg Furniture
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Butuh Bantuan?
          </Typography>
          <IoMdHelpCircleOutline size={20} color="#555" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Ilustrasi */}
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
            Buat Akun Anda
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
            Jika sudah dapat konfirmasi dari HR Admin, silakan daftar akun kamu
          </Typography>
          <img
            src={registerIllustration}
            alt="Register Illustration"
            style={{ width: "80%", maxWidth: "350px" }}
          />
        </Box>

        {/* Form Registrasi */}
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
          <Box sx={{ alignItems: "left", width: "100%", maxWidth: "400px" }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              Daftar Akun Baru
            </Typography>
            <Typography variant="body2" color="primary" sx={{ mb: 3 }}>
              Sudah punya akun? <a href="/login">Masuk di sini</a>
            </Typography>

            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 4 }}
            >
              {/* Input Nama */}
              <TextField
                label="Nama Lengkap"
                variant="outlined"
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ mb: 2 }}
              />

              {/* Input Email */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 2 }}
              />

              {/* Input Password */}
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Input Konfirmasi Password */}
              <TextField
                label="Konfirmasi Password"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <MdVisibilityOff />
                        ) : (
                          <MdVisibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Tombol Register */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<MdPersonAdd />}
                sx={{ py: 1.5, fontSize: "1rem", textTransform: "none" }}
              >
                Daftar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
