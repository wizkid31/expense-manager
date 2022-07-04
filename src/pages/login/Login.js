import React from "react";

//react hooks
import { useState } from "react";

//sass imort
import LoginStyles from "./Login.module.scss";

//bootstrap import
import Form from "react-bootstrap/Form";
import { Container, Button, Row } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    formEmail: "",
    formPassword: "",
  });

  const handleFormChange = (e, value) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: value || e.target.value,
    });
  };

  return (
    <>
      <Row>
        <Navbar navBg="#a5c3de" col0="#103e5b" col1="#fff" />
      </Row>
      <div className={LoginStyles.container}>
        <Row className={LoginStyles.mainRow}>
          <Row className={LoginStyles.alreadyMember}>Not a member? Sign up</Row>
          <Row className={LoginStyles.getStarted}>Log In</Row>
          <Row className={LoginStyles.formRow}>
            <Form className={LoginStyles.form}>
              <Form.Group
                className={LoginStyles.formGroup}
                controlId="formEmail"
              >
                <Form.Label className={LoginStyles.formLabel}>
                  Email address
                </Form.Label>
                <Form.Control
                  className={LoginStyles.formControl}
                  type="email"
                  placeholder="Enter email"
                  onChange={handleFormChange}
                  value={userDetails.formEmail}
                />
              </Form.Group>
              <Form.Group
                className={LoginStyles.formGroup}
                controlId="formPassword"
              >
                <Form.Label className={LoginStyles.formLabel}>
                  Password
                </Form.Label>
                <Form.Control
                  className={LoginStyles.formControl}
                  type="password"
                  placeholder="Password"
                  onChange={handleFormChange}
                  value={userDetails.formPassword}
                />
              </Form.Group>
              <Button
                className={LoginStyles.button}
                variant="primary"
                type="submit"
              >
                Log In
              </Button>
            </Form>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Login;
