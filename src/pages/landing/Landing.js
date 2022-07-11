import React from "react";

//scss import
import landingStyles from "./Landing.module.scss";

//react-router-hook
import { useNavigate } from "react-router";

//bootstrap import
import { Container, Row, Button } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

const Landing = () => {
  const navigate = useNavigate();

  const toSignup = () => {
    navigate("/signup");
  }

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
            <Button className={landingStyles.button}
              onClick={toSignup}
              type="submit">
              Join Now
            </Button>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Landing;
