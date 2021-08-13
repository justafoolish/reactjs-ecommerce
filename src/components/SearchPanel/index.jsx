import React from "react";
import PropTypes from "prop-types";

import { Form, Container, Col, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import { ProductCard, Loading, FormInput } from "..";
import useAnimation from "../../hooks/useAnimation";

import "./SearchPanel.scss";

function SearchPanel({ invisible }) {
  const { shouldRender, onAnimationEnd } = useAnimation(invisible);
  const [searchValue, setSearchValue] = React.useState("");
  const getSearchValue = (value) => setSearchValue(value);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const submitSearchForm = (e) => {
    e.preventDefault();
    setError(false);
    searchValue.length && setLoading(true);
  };

  React.useEffect(() => {
    const abortCont = new AbortController();
    loading &&
      searchValue.length &&
      fetch(`https://hactun-ecom.herokuapp.com/api/products?name_like=${searchValue}`, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) throw Error("Could not fetch");
          return res.json();
        })
        .then((data) => {
          setProducts(data);
          setLoading(false);
          (data.length === 0 && setError(true)) || setLoading(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setLoading(false);
            setError(true);
          }
        });
  }, [loading, searchValue]);

  return (
    shouldRender && (
      <div className={`search--panel${invisible ? "" : " collapsing"} shadow-lg`} key={invisible} onAnimationEnd={onAnimationEnd}>
        <Form onSubmit={(e) => submitSearchForm(e)}>
          <Form.Group className={`search--input${invisible ? "" : " expanding"}`}>
            <FormInput type="text" label="Search" submitInput={getSearchValue} custom="mb-0" />
            <button type="submit">
              <Search size={30} />
            </button>
          </Form.Group>
        </Form>
        <Container className="overflow-auto mb-3 border-bottom border-2 border-dark h-100">
          <Loading isPending={loading} error={error} errorMessage={"No Products Found"} />
          {!error && !loading && (
            <Row>
              {products.map((product) => (
                <Col className="col-6" lg={3} md={4} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    )
  );
}

SearchPanel.propTypes = {
  invisible: PropTypes.bool,
};
SearchPanel.defaultProps = {
  invisible: false,
};

export default SearchPanel;
