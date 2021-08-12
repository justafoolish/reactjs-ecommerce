import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Slider";
import ListImage from "../../assets/image/Banner/carousel";
import subWoman from "../../assets/image/Banner/subWoman";
import subMan from "../../assets/image/Banner/subMan";

function Hero() {
  return (
    <Container fluid className="px-0">
      <Slider imgItem={ListImage} className="banner" />
      <Row className="my-2 mx-0">
        <Col className="ps-0 pe-1">
          <Slider indicatorButton={false} controlArea={false} interval={5000} imgItem={subWoman} />
        </Col>
        <Col className="pe-0 ps-1">
          <Slider indicatorButton={false} controlArea={false} interval={4500} imgItem={subMan} />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
