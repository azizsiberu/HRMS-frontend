//path: src/modules/Auth/Login.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MdLogin } from "react-icons/md";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Fungsi submit
  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          maxWidth: "fit-content",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            borderRadius: 2,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 3 }}>
            <Typography variant="h3" color="primary">
              Selamat datang
            </Typography>
            <Typography variant="body1">
              Silahkan login untuk melanjutkan
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 2 }}
            >
              {/* Input Email */}
              <TextField
                label="Email"
                size="small"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 1 }}
              />

              {/* Input Password */}
              <TextField
                label="Password"
                type="password"
                size="small"
                variant="outlined"
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ mb: 1 }}
              />

              {/* Tombol Login */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<MdLogin />}
              >
                Masuk
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              p: 3,
              bgcolor: "primary.light",
              borderRadius: 2,
            }}
          >
            <Box sx={{ mb: 2, alignItems: "left", display: "flex", gap: 1 }}>
              <Typography variant="body1" color="primary">
                Ajeg Furniture
              </Typography>
              <img src={Logo} alt="Logo" style={{ width: "30px" }} />
            </Box>

            <img
              src={loginIllustration}
              alt="Login"
              style={{ width: "300px" }}
            />
            <Typography variant="body1">
              Pastikan email dan password Kamu sudah benar ya!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
