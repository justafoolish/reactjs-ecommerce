import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./product.scss";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Loading, Button, SizeBox } from "../../components";

const Product = () => {
  const { id } = useParams();
  const { data: product, isPending, error } = useFetch(`https://hactun-ecom.herokuapp.com/api/products/${id}`);
  const [srcImg, setSrcImg] = useState("");
  const [size, setSize] = useState("");
  useEffect(() => {
    product && setSrcImg(product.imgURL[0]);
  }, [product]);
  const pickSize = (value) => {
    setSize(() => {
      return value;
    });
  };
  const updatePreview = (e) => e.target.src !== srcImg && setSrcImg(e.target.src);
  return (
    <Container className="my-5 pt-5">
      <Row className="clearfix" key={id}>
        <Loading isPending={isPending} error={error} />
        {product && (
          <>
            <Col lg={6} className="d-flex flex-row-reverse flex-lg-row">
              <div className="w-25 mx-2">
                {product.imgURL.map((img, index) => (
                  <div key={index} className="img-wrapper">
                    <Image src={img} fluid onClick={(e) => updatePreview(e)} />
                  </div>
                ))}
              </div>
              <div className="w-75 mx-2">
                <Image src={srcImg} fluid className="mh-100" style={{ objectFit: "cover" }} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="product--info">
                <h2 className="my-1 text-gray-400">{product.name}</h2>
                <p>{product.description}</p>
                <h3>
                  {product.price}
                  <sup>vnđ</sup>
                </h3>
                <div className="product--info__size">
                  <label>Size</label>
                  <SizeBox sizeAvailable={["S", "M", "L", "XL"]} pickSize={pickSize} />
                  {console.log(size)}
                </div>
                <Button variant="button-outline" custom="px-4">
                  Add to cart
                </Button>
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Product;
