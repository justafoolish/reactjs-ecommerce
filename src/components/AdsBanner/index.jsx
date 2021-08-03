import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import subHero from "../../assets/image/Banner/subHero";
import "./subHero.scss";

function SubHero() {
  return (
    <Container>
      <Row className="my-4" style={{ padding: "0rem 10rem" }}>
        {subHero.map((imgSrc) => (
          <Col xs={4} className="subHero" key={imgSrc}>
            <Image src={imgSrc} alt="" fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SubHero;
