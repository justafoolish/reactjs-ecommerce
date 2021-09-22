import { Col, Row } from "react-bootstrap";
import { ProductCard, Loading } from "../../components";
import useFetch from "../../hooks/useFetch";

const ListProducts = ({ queryAPI, getProductCount }) => {
  const { data: products, isPending: productsPending, error: productsError } = useFetch(queryAPI);
  return (
    <Row className="px-sm-2 px-xl-0">
      <Loading isPending={productsPending} error={productsError} />
      
      {products &&
        products.map((product, idx) => (
          <Col xl={3} lg={4} className={"col-6 px-1"} key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
    </Row>
  );
};

export default ListProducts;
