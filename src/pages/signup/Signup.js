import React from "react";

//react hooks
import { useState } from "react";

//sass imort
import signupStyles from "./Signup.module.scss";

//bootstrap import
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

const Signup = () => {
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
        <Navbar navBg="#a5c3de" col0="#103e5b" col1="#fff" />
      </Row>
      <div className={signupStyles.container}>
        <Row className={signupStyles.mainRow}>
          <Row className={signupStyles.alreadyMember}>
            Already a member? Log in
          </Row>
          <Row className={signupStyles.getStarted}>Let's get started</Row>
          <Row className={signupStyles.formRow}>
            <Form className={signupStyles.form}>
              <Form.Group
                className={signupStyles.formGroup}
                controlId="formBasicEmail"
              >
                <Form.Label className={signupStyles.formLabel}>
                  Email address
                </Form.Label>
                <Form.Control
                  className={signupStyles.formControl}
                  name="formBasicEmail"
                  type="email"
                  placeholder="Enter email"
                  value={userDetail.formBasicEmail}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group
                className={signupStyles.formGroup}
                controlId="formBasicName"
              >
                <Form.Label className={signupStyles.formLabel}>Name</Form.Label>
                <Form.Control
                  className={signupStyles.formControl}
                  name="formBasicName"
                  type="name"
                  placeholder="Enter Name"
                  value={userDetail.formBasicName}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group
                className={signupStyles.formGroup}
                controlId="formBasicPassword"
              >
                <Form.Label className={signupStyles.formLabel}>
                  Password
                </Form.Label>
                <Form.Control
                  className={signupStyles.formControl}
                  name="formBasicPassword"
                  type="password"
                  placeholder="Password"
                  value={userDetail.formBasicPassword}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Button className={signupStyles.button} type="submit">
                Sign In
              </Button>
            </Form>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Signup;
