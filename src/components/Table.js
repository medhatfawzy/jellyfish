import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Input from "./Input";
import TextField from "@material-ui/core/TextField";

export default function({ answers, grades, setGrades }) {
  return (
    <Paper style={{ width: "50%" }}>
      <Table style={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell
              style={{ color: "#3f51b5", fontWeight: "700", fontSize: "18px" }}
            >
              Question Number
            </TableCell>
            <TableCell
              style={{ color: "#3f51b5", fontWeight: "700", fontSize: "18px" }}
            >
              Answer
            </TableCell>
            <TableCell
              style={{ color: "#3f51b5", fontWeight: "700", fontSize: "18px" }}
            >
              Grade
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {answers.map((row, i) => (
            <TableRow key={row.questionNumber}>
              <TableCell
                style={{
                  width: "100px",
                  textAlign: "40%",
                  fontSize: "16px",
                  fontWeight: "700"
                }}
                component="th"
                scope="row"
              >
                {row.questionNumber}
              </TableCell>
              <TableCell
                style={{ width: "100px", fontSize: "15px", fontWeight: "700" }}
                component="th"
                scope="row"
              >
                {row.Answer}
              </TableCell>
              <TableCell
                style={{ width: "100px", fontSize: "15px", fontWeight: "700" }}
                component="th"
                scope="row"
              >
                <TextField
                  id="outlined-number"
                  label="Grade"
                  type="number"
                  value={grades[i]}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={e => {
                    const newGrades = grades.slice(0);
                    newGrades[i] = +e.target.value;
                    setGrades(newGrades);
                  }}
                  margin="normal"
                  variant="outlined"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
