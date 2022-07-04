import React from "react";

//scss import
import landingStyles from "./Landing.module.scss";

//bootstrap import
import { Container, Row, Button } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

const Landing = () => {
  return (
    <>
      <div className={landingStyles.container}>
        <Row className={landingStyles.navRow}>
          <Navbar dis={true} />
        </Row>
        <Row className={landingStyles.quoteRow}>
          <p className={landingStyles.quote}>
            Keep track of your Expenses in a Smart and easy way
          </p>
          <Row className={landingStyles.joinNowRow}>
            <Button className={landingStyles.button} type="submit">
              Join Now
            </Button>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Landing;
