import React from "react";

//hooks import
import { useState, useEffect } from "react";

//bootstrap import
import { Row, Col, Button } from "react-bootstrap";

//scss import
import navStyles from "./Navbar.module.scss";

//react-router;
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

//mui icons
import { Timeline } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Stack from "@mui/material/Stack";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  loggedInStatus,
  getUserProfile,
  selectUserCredentials,
} from "../../storee/features/auth/userSlice";
import { logout } from "../../storee/features/auth/userSlice";

const Navbar = ({ navBg, col0, col1, dis, show }) => {
  const [userInitial, setUserInitial] = useState({
    initial: "H",
  });
  const check = useSelector(loggedInStatus);
  const credentials = useSelector(selectUserCredentials);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tologin = () => {
    navigate("/login");
  };
  const tohome = () => {
    navigate("/");
  };
  const toProfile = () => {
    navigate("/myProfile");
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
    const getUser = async () => {
      const res = await dispatch(getUserProfile());
      console.log(res);
      return res;
    };
    useEffect(() => {
      getUser();
    }, []);

    useEffect(() => {
      if (getUser) {
        if (credentials.username) {
          setUserInitial((prev) => {
            prev = { ...credentials };
            return {
              initial: prev.username[0].toUpperCase(),
            };
          });
        }
      }
    }, [credentials]);

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
            style={{ color: col1 ? col1 : "#a5c3de", cursor: "pointer" }}
            onClick={tohome}
          >
            Expense
          </span>
          Manager
        </Col>
        {dis === true && (
          <>
            <Col className={navStyles.column2}>
              {check ? (
                <>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <Button className={navStyles.button} onClick={handleLogout}>
                      Logout
                    </Button>
                    <Link to="/history">History</Link>
                    <Avatar
                      onClick={toProfile}
                      sx={{ bgcolor: deepOrange[500] }}
                    >
                      {userInitial.initial}
                    </Avatar>
                  </Stack>
                </>
              ) : (
                <Button className={navStyles.button} onClick={tologin}>
                  Login
                </Button>
              )}
            </Col>
          </>
        )}
        {show === true && <></>}
      </Row>
    </>
  );
};

export default Navbar;
