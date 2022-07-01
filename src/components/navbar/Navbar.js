import React from "react";

//bootstrap import
import { Row, Col, Button } from "react-bootstrap";

//scss import
import navStyles from "./Navbar.module.scss";

//mui icons
import { Timeline } from "@mui/icons-material";

const Navbar = ({ navBg, col0, col1, dis,show}) => {
  return (
    <>
      <Row
        style={{ backgroundColor: navBg ? navBg : "#103e5b" }}
        className={navStyles.navRow}
      >
        <Col
          style={{ color: col0 ? col0 : "#fff", wordSpacing: "10px" }}
          className={navStyles.column1}
        >
          <Timeline fontSize="large" />
          <span
            className={navStyles.span}
            style={{ color: col1 ? col1 : "#a5c3de" }}
          >
            Expense
          </span>
          Manager
        </Col>
        {dis === true && (
          <>
            <Col className={navStyles.column2}>
              <Button
                style={{ display: dis ? dis : "none" }}
                className={navStyles.button}
              >
                Login
              </Button>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default Navbar;
