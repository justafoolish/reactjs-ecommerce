import "./footer.scss";
import FormInput from "../FormInput";
import { Container, Col, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="m-4">
          <Col md={4} className="d-md-flex align-items-center">
            <h3 className="font-weight-light text-center" style={{ opacity: 0.85 }}>
              Get our latest news
            </h3>
          </Col>
          <Col md={4}>
            <h4 className="font-weight-light text-center my-3 text-muted">We will send you new release products and other promotion to your email.</h4>
          </Col>
          <Col md={4} className="d-md-flex align-items-center">
            <FormInput type="text" label="Your email address" custom="my-3 mb-md-0" />
          </Col>
        </Row>
      </Container>
      <div className="footer--info mx-5 my-3">
        <p className="mx-1 text-mute">&#169; 2021. Powered by Hactuns</p>
        <ul className="d-flex">
          <li className="mx-1">
            <Facebook />
          </li>
          <li className="mx-1">
            <Instagram />
          </li>
          <li className="mx-1">
            <Twitter />
          </li>
          <li className="mx-1">
            <Youtube />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
