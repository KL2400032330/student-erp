import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TeacherDashboard() {
  const [students, setStudents] = useState(() =>
    JSON.parse(localStorage.getItem("students")) || []
  );

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    branch: "",
    frontendMarks: "",
    frontendInternal: "",
    frontendAttendance: "",
    mathsMarks: "",
    mathsInternal: "",
    mathsAttendance: "",
    oopsMarks: "",
    oopsInternal: "",
    oopsAttendance: "",
    aimlMarks: "",
    aimlInternal: "",
    aimlAttendance: "",
    dbmsMarks: "",
    dbmsInternal: "",
    dbmsAttendance: "",
    cnMarks: "",
    cnInternal: "",
    cnAttendance: "",
  });

  // handle input change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // add student record
  const handleAdd = () => {
    if (!form.username || !form.password || !form.name || !form.branch) {
      alert("Please fill at least username, password, name, and branch.");
      return;
    }

    const updated = [...students, form];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
    alert("Student added successfully!");
    setForm({
      username: "",
      password: "",
      name: "",
      branch: "",
      frontendMarks: "",
      frontendInternal: "",
      frontendAttendance: "",
      mathsMarks: "",
      mathsInternal: "",
      mathsAttendance: "",
      oopsMarks: "",
      oopsInternal: "",
      oopsAttendance: "",
      aimlMarks: "",
      aimlInternal: "",
      aimlAttendance: "",
      dbmsMarks: "",
      dbmsInternal: "",
      dbmsAttendance: "",
      cnMarks: "",
      cnInternal: "",
      cnAttendance: "",
    });
  };

  // remove student record
  const handleRemove = (username) => {
    if (window.confirm(`Are you sure you want to remove ${username}?`)) {
      const updated = students.filter((s) => s.username !== username);
      setStudents(updated);
      localStorage.setItem("students", JSON.stringify(updated));
      alert("Student removed successfully!");
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        
      Teacher Dashboard — Manage Student Records
      </Typography>

      {/* Add Student Form */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add New Student
        </Typography>
        <Grid container spacing={2}>
          {Object.keys(form).map((key) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <TextField
                label={key}
                name={key}
                value={form[key]}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleAdd}
        >
          Add Student
        </Button>
      </Paper>

      {/* Student Records Table */}
      <Typography variant="h6" gutterBottom>
        All Students
      </Typography>
      <Paper sx={{ p: 2 }}>
        {students.length === 0 ? (
          <Typography>No students added yet.</Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Frontend Marks</TableCell>
                <TableCell>Frontend Internal</TableCell>
                <TableCell>Frontend Attendance</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((s, i) => (
                <TableRow key={i}>
                  <TableCell>{s.username}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.branch}</TableCell>
                  <TableCell>{s.frontendMarks}</TableCell>
                  <TableCell>{s.frontendInternal}</TableCell>
                  <TableCell>{s.frontendAttendance}%</TableCell>
                  <TableCell>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleRemove(s.username)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>
    </Box>
  );
}
