import React from "react";
import { Paper } from "@material-ui/core";
import { format } from "date-format-parse";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";

import { Button, Avatar } from "@components";

const AllEmployee = (props) => {
  const { employee, onViewClick } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EmployeeId</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">From</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((row) => (
            <TableRow
              key={row.EmployeeId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.emp_id}</TableCell>
              <TableCell
                align="left"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  color="primary"
                  name={`${row.first_name} ${row.last_name}`}
                />
                <span style={{ marginLeft: "1rem" }}>{row.first_name}</span>
              </TableCell>
              <TableCell align="left">{row.last_name || "-"}</TableCell>
              <TableCell align="left">
                {row.is_admin ? (
                  <Chip label="Admin" />
                ) : (
                  <Chip color="primary" label="Employee" />
                )}
              </TableCell>
              <TableCell align="left">
                {format(row.createdAt, "DD MMM, YY")}
              </TableCell>
              <TableCell align="left">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => onViewClick(row)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllEmployee;
