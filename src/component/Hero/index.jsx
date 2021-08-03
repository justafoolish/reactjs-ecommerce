import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Slider";
import ListImage from "../../assets/image/Banner/carousel";
import subWoman from "../../assets/image/Banner/subWoman";
import subMan from "../../assets/image/Banner/subMan";

function Hero() {
  return (
    <Container fluid>
      <Row>
        <Col md={8} className="px-0">
          <Slider imgItem={ListImage} />
        </Col>
        <Col md={4} className="px-0" subslider=''>
          <Row className="h-50">
            <Slider indicatorButton={false} controlArea={false} interval={5000} imgItem={subWoman} />
          </Row>
          <Row className="h-50">
            <Slider indicatorButton={false} controlArea={false} interval={4500} imgItem={subMan} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
