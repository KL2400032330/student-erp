import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function Navbar({ onLogout, toggleTheme }) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Student ERP System</Typography>
        <div>
          <IconButton color="inherit" onClick={toggleTheme}>
            <Brightness4Icon />
          </IconButton>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
