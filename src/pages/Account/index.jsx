import React from "react";
import { LoginForm, SignupForm } from "../../components";

import "./Account.scss";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Account() {
  const { page } = useParams();
  return (
    <Row className="justify-content-center pt-5 mt-5">
      <Col lg={4}>
        <div className="form-wrapper">
          {page === "Login" && <LoginForm />}
          {page === "Signup" && <SignupForm />}
        </div>
      </Col>
    </Row>
  );
}

export default Account;
