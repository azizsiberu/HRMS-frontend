// path: src/modules/Auth/Login.js
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
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import { MdLogin, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";
import loginIllustration from "../../assets/images/illustrations/Login.svg";
import Logo from "../../assets/images/branding/logo-ajeg.svg";

// Skema validasi dengan Yup
const loginSchema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib diisi"),
});

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth(); // Menggunakan fungsi login dari AuthContext
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Fungsi submit
  const onSubmit = async (data) => {
    try {
      await handleLogin(data.email, data.password);
      navigate("/dashboard"); // Redirect setelah login berhasil
    } catch (error) {
      setErrorMessage(error.message || "Login gagal, coba lagi.");
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
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
            Hi, Selamat Datang!
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
            Silakan login untuk melanjutkan
          </Typography>
          <img
            src={loginIllustration}
            alt="Login Illustration"
            style={{ width: "80%", maxWidth: "350px" }}
          />
        </Box>

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
          <Box sx={{ alignItems: "left" }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              Masuk ke Akun Anda
            </Typography>
            <Typography variant="body2" color="primary" sx={{ mb: 3 }}>
              Belum punya akun? <a href="/register">Daftar di sini</a>
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
              <TextField
                label="Email address"
                size="small"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                size="small"
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
            </Box>

            <Typography
              variant="body2"
              sx={{ textAlign: "right", mb: 2, cursor: "pointer" }}
              color="primary"
            >
              Lupa password?
            </Typography>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<MdLogin />}
              sx={{ py: 1.5, fontSize: "1rem", textTransform: "none" }}
            >
              Masuk
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
