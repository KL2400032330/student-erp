import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const theme = createTheme({ palette: { mode: themeMode } });

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {user && (
          <Navbar
            onLogout={handleLogout}
            toggleTheme={() =>
              setThemeMode((prev) => (prev === "light" ? "dark" : "light"))
            }
          />
        )}
        <Routes>
          <Route
            path="/"
            element={!user ? <Login setUser={setUser} /> : <Navigate to={`/${user.role}`} />}
          />
          <Route
            path="/teacher"
            element={user?.role === "teacher" ? <TeacherDashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/student"
            element={user?.role === "student" ? <StudentDashboard user={user} /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
