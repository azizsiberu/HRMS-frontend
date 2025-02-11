// path: src/modules/Dashboard/Home.js

import React from "react";
import { Box, Typography, Card, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Menggunakan Grid2 sesuai project files
import {
  MdPeople,
  MdAccessTime,
  MdOutlineWork,
  MdAttachMoney,
  MdAssessment,
  MdTrendingUp,
} from "react-icons/md";
import Logo from "../../assets/images/branding/logo-ajeg.svg";

// Data menu utama HRMS
const menuItems = [
  {
    icon: <MdPeople size={40} />,
    label: "Manajemen Karyawan",
    link: "/employees",
  },
  { icon: <MdAccessTime size={40} />, label: "Absensi", link: "/attendance" },
  {
    icon: <MdOutlineWork size={40} />,
    label: "Pengajuan Cuti",
    link: "/leave-requests",
  },
  { icon: <MdAttachMoney size={40} />, label: "Payroll", link: "/payroll" },
  {
    icon: <MdAssessment size={40} />,
    label: "Evaluasi Kinerja",
    link: "/performance",
  },
  {
    icon: <MdTrendingUp size={40} />,
    label: "Laporan & Analitik",
    link: "/reports",
  },
];

const Dashboard = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#F4F6F8",
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img src={Logo} alt="Logo" style={{ width: "50px", borderRadius: 4 }} />
      </Box>

      {/* Judul */}
      <Typography variant="h4" fontWeight="bold" color="primary">
        Human Resource Management System (HRMS)
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 4 }}>
        Halo, Oktaviani, Selamat Datang! <br />
        Pilih menu berikut untuk mengelola HR Anda
      </Typography>

      {/* Grid Menu */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "900px" }}
      >
        {menuItems.map((item, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
            <Card
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "white",
                color: "primary.main",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "130px",
                boxShadow: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                href={item.link}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                {item.icon}
                <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
                  {item.label}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
