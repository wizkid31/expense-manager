import React from "react";

//bootstrap import
import { Row, Col } from "react-bootstrap";

//scss import
import navStyle from "./Navbar.module.scss";

//mui icons
import { Timeline } from "@mui/icons-material";

const Navbar = ({navBg}) => {
  return (
    <>
      <Row style={{backgroundColor:navBg?navBg:"#103e5b"}} className={navStyle.navRow}>
        <Col className={navStyle.column}>
          <Timeline fontSize="large" />
          <span className={navStyle.span}> Expense</span> Manager
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
