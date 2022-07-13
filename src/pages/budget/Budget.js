import React from "react";

//bootstrap import
import { Container, Row, Col } from "react-bootstrap";

//scss import
import budgetStyles from "./Budget.module.scss";

//components import
import Navbar from "../../components/navbar/Navbar";

//mui import
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

//doughnut import
import Donut from "../../components/doughnut/Doughnut";
import ExpenseFormDialog from "../../components/expenseDialog/expDialog";
import IncomeFormDialog from "../../components/incomeDialog/incomeDialog";

const Budget = () => {
  const [assignExpenseModel, setAssignExpenseModel] = React.useState(false);
  const [assignIncomeModel, setAssignIncomeModel] = React.useState(false);
  return (
    <>
      <div className={budgetStyles.container}>
        <Row className={budgetStyles.navRow}>
          <Navbar dis={true} />
        </Row>
        <Row className={budgetStyles.contentRow}>
          <Col className={budgetStyles.expenseCol}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                boxShadow: "0px 5px 30px #0000000D",
                p: 0,
                borderRadius: 2,
                "& .MuiListItemText-primary": {
                  fontFamily: "Poppins-Medium",
                },
                "& .MuiListItemText-secondary": {
                  fontFamily: "Poppins-Medium",
                  fontSize: 13,
                },
              }}
            >
              <ListItem
                sx={{
                  bgcolor: "#103e5b",
                  color: "#fff",
                  m: 0,
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontFamily: "Poppins-SemiBold",
                    },
                  }}
                  primary="Expenses"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Photos"
                  secondary="₹500"
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "#E20000",
                    },
                  }}
                />
                <ListItemAvatar>
                  <ListItemText secondary="Jan 9, 2014" />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Photos"
                  secondary="₹ 4000"
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "#E20000",
                    },
                  }}
                />
                <ListItemAvatar>
                  <ListItemText secondary="Jan 9, 2014" />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Photos"
                  secondary="₹ 4000"
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "#E20000",
                    },
                  }}
                />
                <ListItemAvatar>
                  <ListItemText secondary="Jan 9, 2014" />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText />
                <ListItemAvatar>
                  <Fab
                    onClick={() => setAssignExpenseModel(!assignExpenseModel)}
                    aria-label="add"
                    sx={{
                      bgcolor: "#103e5b",
                      width: 46,
                      height: 46,
                      float: "right",
                    }}
                  >
                    <AddIcon sx={{ color: "#fff", fontWeight: "bold" }} />
                  </Fab>
                  {assignExpenseModel && (
                    <ExpenseFormDialog
                      show={assignExpenseModel}
                      setShow={setAssignExpenseModel}
                    />
                  )}
                </ListItemAvatar>
              </ListItem>
            </List>
          </Col>
          <Col className={budgetStyles.donutCol}>
            <Donut />
          </Col>
          <Col className={budgetStyles.incomeCol}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                boxShadow: "0px 5px 30px #0000000D",
                p: 0,
                float: "left",
                borderRadius: 2,
                "& .MuiListItemText-primary": {
                  fontFamily: "Poppins-Medium",
                },
                "& .MuiListItemText-secondary": {
                  fontFamily: "Poppins-Medium",
                  fontSize: 13,
                },
              }}
            >
              <ListItem
                sx={{
                  bgcolor: "#a5c3de",
                  color: "#103e5b",
                  m: 0,
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontFamily: "Poppins-SemiBold",
                    },
                  }}
                  primary="Income"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Photos"
                  secondary="₹500"
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "#65c70a",
                    },
                  }}
                />
                <ListItemAvatar>
                  <ListItemText secondary="Jan 9, 2014" />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Photos"
                  secondary="₹ 4000"
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "#65c70a",
                    },
                  }}
                />
                <ListItemAvatar>
                  <ListItemText secondary="Jan 9, 2014" />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Photos"
                  secondary="₹ 4000"
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "#65c70a",
                    },
                  }}
                />
                <ListItemAvatar>
                  <ListItemText secondary="Jan 9, 2014" />
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText />
                <ListItemAvatar>
                  <Fab
                    aria-label="add"
                    onClick={() => setAssignIncomeModel(!assignIncomeModel)}
                    sx={{
                      bgcolor: "#a5c3de",
                      width: 46,
                      height: 46,
                      float: "right",
                    }}
                  >
                    <AddIcon sx={{ color: "#103e5b", fontWeight: "bold" }} />
                  </Fab>
                  {assignIncomeModel && (
                    <IncomeFormDialog
                      show={assignIncomeModel}
                      setShow={setAssignIncomeModel}
                    />
                  )}
                </ListItemAvatar>
              </ListItem>
            </List>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Budget;
