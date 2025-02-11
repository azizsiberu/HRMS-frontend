// path: src/modules/Dashboard/EmployeeDashboard.js

import React from "react";
import { Box, Typography, Card, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  MdAccessTime,
  MdOutlineWork,
  MdAttachMoney,
  MdAssessment,
} from "react-icons/md";
import Logo from "../../assets/images/branding/logo-ajeg.svg";

// Data menu utama untuk karyawan
const employeeMenu = [
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
];

const EmployeeDashboard = () => {
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
        Dashboard Karyawan
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 4 }}>
        Halo, Oktaviani! <br /> Berikut adalah aktivitas kerja Anda.
      </Typography>

      {/* Grid Menu */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "900px" }}
      >
        {employeeMenu.map((item, index) => (
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

      {/* Rekapan Absensi */}
      <Box
        sx={{
          mt: 5,
          p: 3,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 2,
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Rekapan Kehadiran Anda
        </Typography>
        <Typography variant="body1">
          Total Masuk: <strong>20 Hari</strong>
        </Typography>
        <Typography variant="body1">
          Total Cuti: <strong>3 Hari</strong>
        </Typography>
        <Typography variant="body1">
          Total Tidak Hadir: <strong>2 Hari</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;
