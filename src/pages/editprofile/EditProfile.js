import React from "react";

//hooks import
import { useState, useEffect } from "react";

//bootstrap import
import { Row, Col } from "react-bootstrap";

//component import
import Navbar from "../../components/navbar/Navbar";

//scss import
import editProfileStyles from "../editprofile/EditProfile.module.scss";

//redux hooks
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfile,
  selectUserCredentials,
} from "../../storee/features/auth/userSlice";

const EditProfile = () => {
  //editForm state/setState
  const [profileDetails, setProfileDetails] = useState({
    name: "Janhavi Singh",
    username: "janhavi",
    email: "janhavisingh725@gmail.com",
    since: 2045,
  });

  const dispatch = useDispatch();
  const credentials = useSelector(selectUserCredentials);
  const getUser = async () => {
    const res = await dispatch(getUserProfile());
    return res;
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (getUser) {
      if (credentials.email) {
        setProfileDetails((prev) => {
          prev = { ...credentials };
          return {
            name: prev.first_name,
            username: prev.username,
            email: prev.email,
            since: prev.date_joined.substring(0, 4),
          };
        });
      }
    }
  }, [credentials]);

  return (
    <Col className={editProfileStyles.container}>
      <Row className={editProfileStyles.navRow}>
        <Navbar dis={true} />
      </Row>
      <Row className={editProfileStyles.contentRow}>
        <Row className={editProfileStyles.headingRow}>
          <p>My profile</p>
        </Row>
        <Row className={editProfileStyles.editRow}>
          <Col className={editProfileStyles.editDetailCol}>
            <Row className={editProfileStyles.currentBalance}>
              <p> Current Balance: ₹30000</p>
            </Row>
            <Row className={editProfileStyles.formRow}>
              <Row className={editProfileStyles.form}>
                <Row className={editProfileStyles.formGroup}>
                  <Col className={editProfileStyles.formLabel}>Name:</Col>
                  <Col className={editProfileStyles.formControl}>
                    {profileDetails.name}
                  </Col>
                </Row>
                <Row className={editProfileStyles.formGroup}>
                  <Col className={editProfileStyles.formLabel}>Userame:</Col>
                  <Col className={editProfileStyles.formControl}>
                    {profileDetails.username}
                  </Col>
                </Row>
                <Row className={editProfileStyles.formGroup}>
                  <Col className={editProfileStyles.formLabel}>
                    E-mail Address:
                  </Col>
                  <Col className={editProfileStyles.formControl}>
                    {profileDetails.email}
                  </Col>
                </Row>
              </Row>
            </Row>
            <Row className={editProfileStyles.since}>
              <p>Member since {profileDetails.since}.</p>
            </Row>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default EditProfile;
