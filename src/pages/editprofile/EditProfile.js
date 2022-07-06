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
  //photo state/setState
  const [photo, setPhoto] = useState(circle);

  //editForm state/setState
  const [profileDetails, setProfileDetails] = useState({
    name: "",
    email: "",
  });

  //edit Form state/setState
  const handleFormChange = (e, value) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: value || e.target.value,
    });
  };

  //photo handleChange
  const handleChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={editProfileStyles.container}>
      <Row className={editProfileStyles.navRow}>
        <Navbar />
      </Row>
      <Row className={editProfileStyles.contentRow}>
        <Row className={editProfileStyles.headingRow}>
          <p>My Profile</p>
        </Row>
        <Row className={editProfileStyles.editRow}>
          {/*// <Col className={editProfileStyles.editPhotoCol} xl={4}>
          //   <img src={photo} />
          //   <input type="file" accept="" onChange={handleChange} />
  // </Col>*/}
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
                    Name of the user
                  </Form.Label>
                  <Form.Control
                    className={editProfileStyles.formControl}
                    type="text"
                    placeholder="Name"
                    onChange={handleFormChange}
                    value={profileDetails.name}
                    name="name"
                  />
                </Form.Group>
                <Form.Group
                  className={editProfileStyles.formGroup}
                  controlId="formPassword"
                >
                  <Form.Label className={editProfileStyles.formLabel}>
                    E-mail Address
                  </Form.Label>
                  <Form.Control
                    className={editProfileStyles.formControl}
                    type="email"
                    placeholder="E-mail address"
                    onChange={handleFormChange}
                    value={profileDetails.email}
                    name="email"
                  />
                </Form.Group>
                <Button
                  className={editProfileStyles.button}
                  variant="primary"
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
            </Row>
            <Row className={editProfileStyles.since}>
              <p>Member Since: 2045</p>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default EditProfile;
