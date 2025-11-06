import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";

export default function StudentDashboard({ user }) {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("students")) || [];
    setStudent(all.find((s) => s.username === user.username));
  }, [user.username]);

  if (!student) return <Typography>No record found.</Typography>;

  const subjects = [
    ["Frontend", student.frontendMarks, student.frontendInternal, student.frontendAttendance],
    ["Maths", student.mathsMarks, student.mathsInternal, student.mathsAttendance],
    ["OOPS", student.oopsMarks, student.oopsInternal, student.oopsAttendance],
    ["AIML", student.aimlMarks, student.aimlInternal, student.aimlAttendance],
    ["DBMS", student.dbmsMarks, student.dbmsInternal, student.dbmsAttendance],
    ["CN", student.cnMarks, student.cnInternal, student.cnAttendance],
  ];

  return (
    <Box p={3}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Welcome, {student.name}
        </Typography>
        <Typography>Branch: {student.branch}</Typography>

        <Table sx={{ mt: 3 }}>
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>Internal</TableCell>
              <TableCell>Attendance (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map(([subject, marks, internal, attendance], i) => (
              <TableRow key={i}>
                <TableCell>{subject}</TableCell>
                <TableCell>{marks}</TableCell>
                <TableCell>{internal}</TableCell>
                <TableCell>{attendance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
