import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import "./productspage.scss";
import { Loading, ProductCard, Button, Pagination } from "../../components";
const Products = () => {
  const { data: products, isPending: productsPending, error: productsError } = useFetch("https://hactun-ecom.herokuapp.com/api/products?_limit=8");
  const { data: categories } = useFetch("https://hactun-ecom.herokuapp.com/api/categories");
  const { data: colors } = useFetch("https://hactun-ecom.herokuapp.com/api/colors");
  const [inputPrice, setInputPrice] = useState(500000);
  const pagination = {
    page: 1,
    limit: 8,
    totals: 20,
  };
  const handlePageChange = () => {
    console.log("paging");
  };
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={3} md={2}>
          <div className="filter">
            <section className="header d-none d-sm-flex">
              <p>Filters</p>
              <hr />
            </section>
            <section>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="form-group flex-sm-column flex-row justify-content-between">
                  <Form.Label>Category</Form.Label>
                  <Button variant="button-transparent">All</Button>
                  {categories &&
                    categories.map((category, idx) => (
                      <Button variant="button-transparent" key={idx}>
                        {category.name}
                      </Button>
                    ))}
                </Form.Group>
                <Form.Group className="form-group flex-sm-column flex-row justify-content-between">
                  <Form.Label>Colors</Form.Label>
                  <Button variant="button-transparent">All</Button>
                  <div className="colors">
                    {colors &&
                      colors.map((color, idx) => (
                        <Button variant="button-transparent" key={idx} custom="mx-1">
                          <div data-color={color.name} className="color--box"></div>
                        </Button>
                      ))}
                  </div>
                </Form.Group>
                <Form.Group className="form-group flex-sm-column flex-row justify-content-between align-items-center align-items-sm-start">
                  <Form.Label>Price</Form.Label>
                  <h4 className="order-last text-nowrap">
                    {inputPrice} <sup>vnd</sup>
                  </h4>
                  <input type="range" min={0} max={500000} step={25000} value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} />
                </Form.Group>
                <Button variant="button" custom="px-2 mb-sm-5">
                  Clear Filters
                </Button>
              </Form>
            </section>
          </div>
        </Col>
        <Col sm={9} md={10}>
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
          <Row className="mx-md-1">
            <Loading isPending={productsPending} error={productsError} />
            {products &&
              products.map((product, idx) => (
                <Col xl={3} lg={4} className={"col-6 px-1"} key={idx}>
                  <ProductCard product={product} />
                </Col>
              ))}

            <Pagination onPageChange={handlePageChange} pagination={pagination} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
