import { useParams } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import "./product.scss";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const product = {
    id: 1,
    name: "Poop Camel Hoodie",
    price: "200000",
    imgUrl: ["https://i.ibb.co/3ftVfDp/h1a.png", "https://i.ibb.co/xLny4Kp/h1b.png"],
  };
  const [srcImg, setSrcImg] = useState(product.imgUrl[0]);
  const logTarget = (e) => {
    setSrcImg(e.target.src);
  };
  return (
    <>
      <Row className="m-5" key={id}>
        <Col md={6} className="px-3 product--image d-flex flex-column-reverse flex-md-row">
          <div className="product--image--gallery d-flex d-md-block">
            {product.imgUrl.map((img, index) => (
              <div className="product--image--gallery__cover mt-3 mt-md-0" key={index}>
                <Image src={img} className="img-fluid" onClick={(e) => logTarget(e)} />
              </div>
            ))}
          </div>
          <Image src={srcImg} className="img-fluid w-75" />
        </Col>
        <Col md={6} className="px-3 product--info">
          <h2 className="my-2 text-gray-400">{product.name}</h2>
        </Col>
      </Row>
    </>
  );
};

export default Product;
