import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import "./productspage.scss";
import { Loading, ProductCard } from "../../components";
const Products = () => {
  const { data: products, isPending: productsPending, error: productsError } = useFetch("https://hactun-ecom.herokuapp.com/api/products?_limit=8");

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={2}>
          <section className="header filter">
            <p>Filters</p>
            <hr />
          </section>
        </Col>
        <Col sm={10}>
          <section className="header">
            <p>Products Found</p>
            <hr />
            <form>
              <label className="mx-3">Sort</label>
              <select>
                <option value="">Price (Lowest)</option>
                <option value="">Price (Highest)</option>
                <option value="">Name (A - Z)</option>
                <option value="">Name (Z - A)</option>
              </select>
            </form>
          </section>
          <Row>
            <Loading isPending={productsPending} error={productsError} />
            {products &&
              products.map((product, idx) => (
                <Col xl={3} lg={4} className={"col-6"} key={idx}>
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
