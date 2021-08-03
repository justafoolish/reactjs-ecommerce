import React from "react";
import { Hero, AdsBanner, Sponsor, ProductCard } from "../../components";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8];
  const style = {
    flexWrap: "nowrap",
    overflowX: "scroll",
    overflowY: "hidden",
    margin: "1rem 0",
  };
  const product = {
    id: "1",
    name: "Marvel TShirt",
    price: "200000",
    imgUrl: "https://www.kwabey.com/uploads/products/363/363-1613553076-104198-3.jpg",
  };
  return (
    <>
      <Hero />
      <AdsBanner />
      <div style={{ minHeight: "50vh" }}>
        <Container fluid>
          <Row style={style}>
            {temp.map((item) => (
              <Col md={4} lg={3} sm={6} className="d-flex justify-content-center align-items-center" key={item}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <Row style={style}>
            {temp.map((item) => (
              <Col md={4} lg={3} sm={6} className="d-flex justify-content-center align-items-center" key={item}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Sponsor />
    </>
  );
}

export default Home;
