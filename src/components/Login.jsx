import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Teacher login
    if (username === "teacher" && password === "teacher123") {
      const user = { username, role: "teacher" };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      return;
    }

    // Student login
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const student = students.find(
      (s) => s.username === username && s.password === password
    );

    if (student) {
      const user = { username, role: "student" };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } else {
      alert("Invalid credentials. Try again or ask your teacher to register you.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={6} sx={{ p: 4, width: 350, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Student ERP Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}
