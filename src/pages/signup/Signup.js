import React from "react";

//react hooks
import { useState } from "react";

//react-router hooks
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//redux hooks
import { useDispatch, useSelector } from "react-redux";

//sass imort
import signupStyles from "./Signup.module.scss";

//bootstrap import
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

//slice component import
import { signUpUser } from "../../storee/features/auth/userSlice";

const Signup = () => {
  //userDetail state/setState
  const [userDetail, setUserDetail] = useState({
    first_name: "",
    email: "",
    username: "",
    password: "",
  });

  //useNavigate hooks
  const navigate = useNavigate();

  //useDispatch & useSelector hook
  const dispatch = useDispatch();

  //onChange function
  const handleFormChange = (e, value) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: value || e.target.value,
    });
  };

  //submitForm function
  const submitForm = async (data) => {
    const res = await dispatch(signUpUser(data));
    setUserDetail({
      first_name: "",
      email: "",
      username: "",
      password: "",
    });
    console.log(res);
    navigate("/login");
    return res;
  };

  const tologin = () => navigate("/login");

  //onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = { ...userDetail };
    const validate = Object.values(temp).every(Boolean);
    if (validate) {
      submitForm({
        first_name: userDetail.first_name,
        email: userDetail.email,
        username: userDetail.username,
        password: userDetail.password,
      });
    }
  };

  return (
    <>
      <Row>
        <Navbar navBg="#a5c3de" col0="#103e5b" col1="#fff" />
      </Row>
      <div className={signupStyles.container}>
        <Row className={signupStyles.mainRow}>
          <Row
            className={signupStyles.alreadyMember}
            style={{ cursor: "pointer" }}
            onClick={tologin}
          >
            Already a member?
            <Link to="/login">
              Log in
            </Link>
          </Row>
          <Row className={signupStyles.getStarted}>Let's get started</Row>
          <Row className={signupStyles.formRow}>
            <Form className={signupStyles.form} onSubmit={handleSubmit}>
              <Form.Group
                className={signupStyles.formGroup}
                controlId="formBasicEmail"
              >
                <Form.Label className={signupStyles.formLabel}>
                  Email address
                </Form.Label>
                <Form.Control
                  className={signupStyles.formControl}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={userDetail.email}
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
                  name="first_name"
                  type="text"
                  placeholder="Enter Name"
                  value={userDetail.first_name}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group
                className={signupStyles.formGroup}
                controlId="formUserName"
              >
                <Form.Label className={signupStyles.formLabel}>
                  User Name
                </Form.Label>
                <Form.Control
                  className={signupStyles.formControl}
                  name="username"
                  type="text"
                  placeholder="Enter user name"
                  value={userDetail.username}
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={userDetail.password}
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
