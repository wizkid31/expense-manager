import React from "react";

//img import
import circle from "../../resources/images/circle.png";

//hooks import
import { useState, useEffect } from "react";

//bootstrap import
import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

//component import
import Navbar from "../../components/navbar/Navbar";

//scss import
import editProfileStyles from "../editprofile/EditProfile.module.scss";

const EditProfile = () => {

  //editForm state/setState
  const [profileDetails, setProfileDetails] = useState({
    name: "Janhavi Singh",
    email: "janhavisingh725@gmail.com",
    since: 2045
  });

  return (
    <div className={editProfileStyles.container}>
      <Row className={editProfileStyles.navRow}>
        <Navbar show={true} />
      </Row>
      <Row className={editProfileStyles.contentRow}>
        <Row className={editProfileStyles.headingRow}>
          <p>My Profile</p>
        </Row>
        <Row className={editProfileStyles.editRow}>
          <Col className={editProfileStyles.editDetailCol}>
            <Row className={editProfileStyles.currentBalance}>
              <p> Current Balance: ₹30000</p>
            </Row>
            <Row className={editProfileStyles.formRow}>
              <Form className={editProfileStyles.form}>
                <Form.Group
                  className={editProfileStyles.formGroup}
                  controlId="name"
                >
                  <Form.Label className={editProfileStyles.formLabel}>
                    Name of the user:
                  </Form.Label>
                  <Form.Control
                    className={editProfileStyles.formControl}
                    type="text"
                    disabled
                    value={profileDetails.name}
                    name="name"
                  />
                </Form.Group>
                <Form.Group
                  className={editProfileStyles.formGroup}
                  controlId="formPassword"
                >
                  <Form.Label className={editProfileStyles.formLabel}>
                    E-mail Address:
                  </Form.Label>
                  <Form.Control
                    className={editProfileStyles.formControl}
                    type="email"
                    disabled
                    value={profileDetails.email}
                  />
                </Form.Group>
              </Form>
            </Row>
            <Row className={editProfileStyles.since}>
              <p>Member since {profileDetails.since}.</p>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default EditProfile;
