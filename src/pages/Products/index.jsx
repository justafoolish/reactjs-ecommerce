import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import "./productspage.scss";
import { Loading, ProductCard, Button } from "../../components";
const Products = () => {
  const { data: products, isPending: productsPending, error: productsError } = useFetch("https://hactun-ecom.herokuapp.com/api/products?_limit=8");
  const { data: categories, isPending: categoriesPending, error: categoriesError } = useFetch("https://hactun-ecom.herokuapp.com/api/categories");
  const { data: colors, isPending: colorsPending, error: colorsError } = useFetch("https://hactun-ecom.herokuapp.com/api/colors");
  const [inputPrice, setInputPrice] = useState(0);
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={2}>
          <div className="filter">
            <section className="header">
              <p>Filters</p>
              <hr />
            </section>
            <section>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="form-group">
                  <Form.Label>Category</Form.Label>
                  <Button variant="button-transparent">All</Button>
                  <Loading isPending={categoriesPending} error={categoriesError} />
                  {categories &&
                    categories.map((category, idx) => (
                      <Button variant="button-transparent" key={idx}>
                        {category.name}
                      </Button>
                    ))}
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Colors</Form.Label>
                  <Button variant="button-transparent">All</Button>
                  <div className="colors">
                    {colors &&
                      colors.map((color, idx) => (
                        <Button variant="button-transparent" key={idx}>
                          <div data-color={color.name} className="color--box"></div>
                        </Button>
                      ))}
                  </div>
                  <Loading isPending={colorsPending} error={colorsError} />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Price</Form.Label>
                  <h4>
                    {inputPrice} <sup>vnd</sup>
                  </h4>
                  <input type="range" min={0} max={500000} step={25000} value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} />
                </Form.Group>
                <Button variant="button" custom="px-2 mb-5">Clear Filters</Button>
              </Form>
            </section>
          </div>
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
