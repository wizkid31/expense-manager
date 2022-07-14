import React from "react";

//scss import
import landingStyles from "./Landing.module.scss";

//react-router-hook
import { useNavigate } from "react-router";

//bootstrap import
import { Container, Row, Button } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

//redux
import { useSelector } from "react-redux";
import { loggedInStatus } from "../../storee/features/auth/userSlice";

const Landing = () => {
  const navigate = useNavigate();

  const check = useSelector(loggedInStatus);

  const toSignup = () => {
    navigate("/signup");
  };
  const toBudget = () => {
    navigate("/budget");
  };
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
            {check ? (
              <Button className={landingStyles.button} onClick={toBudget}>
                Show Budget
              </Button>
            ) : (
              <Button className={landingStyles.button} onClick={toSignup}>
                Join Now
              </Button>
            )}
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Landing;
