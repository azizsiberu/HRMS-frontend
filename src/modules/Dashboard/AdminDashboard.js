// path: src/modules/Dashboard/AdminDashboard.js

import React from "react";
import { Box, Typography, Card, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  MdPeople,
  MdAccessTime,
  MdOutlineWork,
  MdAttachMoney,
  MdTrendingUp,
  MdSupervisorAccount,
  MdSettings,
} from "react-icons/md";
import Logo from "../../assets/images/branding/logo-ajeg.svg";

// Data menu utama untuk admin
const adminMenu = [
  {
    icon: <MdPeople size={40} />,
    label: "Manajemen Karyawan",
    link: "/employees",
  },
  {
    icon: <MdAccessTime size={40} />,
    label: "Absensi Karyawan",
    link: "/attendance",
  },
  {
    icon: <MdOutlineWork size={40} />,
    label: "Kelola Cuti",
    link: "/leave-management",
  },
  {
    icon: <MdAttachMoney size={40} />,
    label: "Payroll & Penggajian",
    link: "/payroll",
  },
  {
    icon: <MdTrendingUp size={40} />,
    label: "Laporan & Analitik",
    link: "/reports",
  },
  {
    icon: <MdSupervisorAccount size={40} />,
    label: "Manajemen Admin",
    link: "/admin-management",
  },
  { icon: <MdSettings size={40} />, label: "Pengaturan", link: "/settings" },
];

const AdminDashboard = () => {
  return (
    <Box
      sx={{ textAlign: "center", minHeight: "100vh", p: 4, bgcolor: "#F4F6F8" }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img src={Logo} alt="Logo" style={{ width: "50px", borderRadius: 4 }} />
      </Box>

      {/* Judul */}
      <Typography variant="h4" fontWeight="bold" color="primary">
        Dashboard Admin
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 4 }}>
        Halo, Admin! <br /> Kelola sistem HR dengan mudah.
      </Typography>

      {/* Grid Menu */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "900px" }}
      >
        {adminMenu.map((item, index) => (
          <Grid size={{ xs: 6, sm: 4 }} key={index}>
            <Card
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "white",
                color: "primary.main",
                borderRadius: 2,
                boxShadow: 2,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: 4 },
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

export default AdminDashboard;
