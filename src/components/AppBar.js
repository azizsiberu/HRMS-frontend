import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { MdHome, MdAccessTime, MdPerson } from "react-icons/md";

const pageTitles = {
  "/": "Home",
  "/employee-dashboard": "Dashboard Karyawan",
  "/admin-dashboard": "Dashboard Admin",
  "/attendance": "Absensi",
  "/leave-requests": "Pengajuan Cuti",
  "/payroll": "Payroll",
  "/performance": "Evaluasi Kinerja",
  "/reports": "Laporan & Analitik",
  "/settings": "Pengaturan",
};

const AppNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/");
  };

  // Menentukan posisi Menu berdasarkan device
  const menuPosition = {
    desktop: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    },
    mobile: {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      transformOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
    },
  };

  return (
    <>
      {/* AppBar untuk Desktop */}
      {!isMobile && (
        <AppBar position="static" color="primary">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Sebelah kiri: Home & Nama Halaman */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                color="inherit"
                onClick={() => navigate("/dashboard")}
              >
                <MdHome size={24} />
              </IconButton>
              <Typography variant="h6">
                {pageTitles[location.pathname] || "HRMS"}
              </Typography>
            </Box>

            {/* Sebelah kanan: Absensi & Profil */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                color="inherit"
                onClick={() => navigate("/attendance")}
              >
                <MdAccessTime size={24} />
              </IconButton>
              <IconButton color="inherit" onClick={handleProfileClick}>
                <MdPerson size={24} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {/* Bottom Navigation untuk Mobile */}
      {isMobile && (
        <BottomNavigation
          showLabels={false}
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "primary.main",
            zIndex: 1000, // Memastikan BottomNavigation selalu di atas
          }}
        >
          <BottomNavigationAction
            icon={<MdHome size={24} color="white" />}
            onClick={() => navigate("/dashboard")}
          />
          <BottomNavigationAction
            icon={<MdAccessTime size={24} color="white" />}
            onClick={() => navigate("/attendance")}
          />
          <BottomNavigationAction
            icon={<MdPerson size={24} color="white" />}
            onClick={handleProfileClick}
          />
        </BottomNavigation>
      )}

      {/* Menu Dropdown yang Responsive */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        {...(isMobile ? menuPosition.mobile : menuPosition.desktop)}
        sx={{
          ...(isMobile && {
            "& .MuiPaper-root": {
              bottom: "64px !important", // Tinggi BottomNavigation
              position: "fixed",
              left: "50% !important",
            },
          }),
        }}
      >
        <MenuItem onClick={() => navigate("/settings")}>
          Pengaturan Profil
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      {/* Dialog Konfirmasi Logout */}
      <Dialog
        open={openLogoutDialog}
        onClose={() => setOpenLogoutDialog(false)}
      >
        <DialogTitle>Anda yakin ingin logout?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenLogoutDialog(false)}>Batal</Button>
          <Button onClick={confirmLogout} color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppNavigation;
