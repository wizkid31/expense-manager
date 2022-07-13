import React from "react";

//scss import
import historyStyle from "./History.module.scss";

//bootstrap import
import { Row, Col } from "react-bootstrap";

//mui import
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//components import
import Navbar from "../../components/navbar/Navbar";

const History = () => {
  const createData = (name, amount) => {
    return { name, amount };
  };

  const rows = [
    createData("Movies", "₹ 1200"),
    createData("Movies", "₹ 1200"),
    createData("Movies", "₹ 1200"),
    createData("Movies", "₹ 1200"),
    createData("Movies", "₹ 1200"),
    createData("Movies", "₹ 1200"),
  ];

  return (
    <div className={historyStyle.container}>
      <Row className={historyStyle.navRow}>
        <Navbar dis={true} />
      </Row>
      <Row className={historyStyle.contentRow}>
        <Row className={historyStyle.currentBalanceRow}>
          <span className={historyStyle.currentBalanceText}>
            Current Balance: ₹7000
          </span>
        </Row>
        <Row className={historyStyle.tableRow}>
          <div className={historyStyle.monthRow}>31 May 2022</div>
          <TableContainer component={Paper} sx={{ width: "50%", mx: "auto" }}>
            <Table
              sx={{
                minWidth: 650,
                "& .MuiTableHead-root": {
                  background: "#fcfcfc",
                },
                "& .MuiTableCell-root": {
                  fontFamily: "Poppins-Medium",
                  color: "#363b64",
                  py: 2,
                },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      fontFamily: "Poppins-SemiBold",
                      py: 3,
                    },
                  }}
                >
                  <TableCell align="left"> Name</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#E20000 !important" }}
                    >
                      - {row.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Row>
      </Row>
    </div>
  );
};

export default History;
