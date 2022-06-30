import React from "react";

//react hooks
import { useState } from "react";

//sass imort
import LoginStyles from "./Login.module.scss";

//bootstrap import
import Form from "react-bootstrap/Form";
import { Container, Button, Row } from "react-bootstrap";
import Navbar from "../../../components/navbar/Navbar";

const Login = () => {
  const [userDetail, setUserDetail] = useState({
    formBasicEmail: "",
    formBasicName: "",
    formBasicPassword: "",
  });

  const handleFormChange = (e, value) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: value || e.target.value,
    });
  };

  return (
    <>
      <Row>
        <Navbar navBg="#a5c3de" />
      </Row>
      <Container className={LoginStyles.container}>
        <Row className={LoginStyles.mainRow}>
          <Row className={LoginStyles.alreadyMember}>
            Not a member? Sign up
          </Row>
          <Row className={LoginStyles.getStarted}>Log In</Row>
          <Row className={LoginStyles.formRow}>
            <Form className={LoginStyles.form}>
              <Form.Group
                className={LoginStyles.formGroup}
                controlId="formBasicEmail"
              >
                <Form.Label className={LoginStyles.formLabel}>
                  Email address
                </Form.Label>
                <Form.Control
                  className={LoginStyles.formControl}
                  type="email"
                  placeholder="Enter email"
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group
                className={LoginStyles.formGroup}
                controlId="formBasicPassword"
              >
                <Form.Label className={LoginStyles.formLabel}>
                  Password
                </Form.Label>
                <Form.Control
                  className={LoginStyles.formControl}
                  type="password"
                  placeholder="Password"
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
      </Container>
    </>
  );
};

export default Login;
