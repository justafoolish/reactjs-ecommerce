import { Col, Row } from "react-bootstrap";
import { ProductCard, Loading } from "../../components";
import useFetch from "../../hooks/useFetch";
import {useEffect} from "react"

const ListProducts = ({ queryAPI, setPagination }) => {
  const { data: products, isPending: productsPending, error: productsError } = useFetch(queryAPI);
  useEffect(() => {
    products && setPagination(products.pagination)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[products])

  return (
    <Row className="px-sm-2 px-xl-0">
      <Loading isPending={productsPending} error={productsError} />

      {products &&
        products.data.map((product, idx) => (
          <Col xl={3} lg={4} className={"col-6 px-1"} key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
    </Row>
  );
};

export default ListProducts;
