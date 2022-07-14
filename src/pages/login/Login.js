import React from "react";

//react hooks
import { useState } from "react";

//react-router hooks;
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

//sass imort
import LoginStyles from "./Login.module.scss";

//bootstrap import
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";

//componens import
import Navbar from "../../components/navbar/Navbar";

//redux hooks import
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";

//slices import
import { loggedInStatus, loginUser } from "../../storee/features/auth/userSlice";

const Login = () => {
  //loginForm state,setState
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  //redux dispatch and selector
  const dispatch = useDispatch();

  //navigate hook
  const navigate = useNavigate();
  const location = useLocation();

  //onChange
  const handleFormChange = (e, value) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: value || e.target.value,
    });
  };
  React.useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const login = async () => {
    let response = await dispatch(
      loginUser({
        username: userDetails.username,
        password: userDetails.password,
      })
    );
    console.log(response);
    return response;
  };

  const tosignup=()=> navigate("/signup")

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    let temp = { ...userDetails };
    const validate = Object.values(temp).every(Boolean);
    if (validate) {
      let resData = await login();
      console.log(resData);
      navigate("/");
    }
  };
  return (
    <>
      <Row>
        <Navbar navBg="#a5c3de" col0="#103e5b" col1="#fff" />
      </Row>
      <div className={LoginStyles.container}>
        <Row className={LoginStyles.mainRow}>
          <Row className={LoginStyles.alreadyMember} style={{ cursor:"pointer"}} onClick={tosignup}>
            Not a member?Sign up
          </Row>
          <Row className={LoginStyles.getStarted}>Log In</Row>
          <Row className={LoginStyles.formRow}>
            <Form className={LoginStyles.form} onSubmit={handleSubmitClick}>
              <Form.Group
                className={LoginStyles.formGroup}
                controlId="username"
              >
                <Form.Label className={LoginStyles.formLabel}>
                  Username
                </Form.Label>
                <Form.Control
                  className={LoginStyles.formControl}
                  name="username"
                  type="text"
                  placeholder="Enter email"
                  onChange={handleFormChange}
                  value={userDetails.username}
                />
              </Form.Group>
              <Form.Group
                className={LoginStyles.formGroup}
                controlId="password"
              >
                <Form.Label className={LoginStyles.formLabel}>
                  Password
                </Form.Label>
                <Form.Control
                  className={LoginStyles.formControl}
                  type="password"
                  placeholder="Password"
                  onChange={handleFormChange}
                  value={userDetails.password}
                  name="password"
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
