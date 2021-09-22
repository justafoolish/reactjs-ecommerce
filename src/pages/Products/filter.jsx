import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Button } from "../../components";
import { Form } from "react-bootstrap";

const Filter = ({ submitFilter }) => {
  const { data: categories } = useFetch("https://hactun-ecom.herokuapp.com/api/categories");
  const { data: colors } = useFetch("https://hactun-ecom.herokuapp.com/api/colors");
  const { data: maxPriceProduct } = useFetch("https://hactun-ecom.herokuapp.com/api/products?_sort=price&_order=desc&_limit=1");

  const [inputPrice, setInputPrice] = useState(0);
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    price: 0,
  });

  useEffect(() => {
    maxPriceProduct && setInputPrice(maxPriceProduct[0].price);
    maxPriceProduct && setFilters({ ...filters, price: maxPriceProduct[0].price });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxPriceProduct]);
  useEffect(() => {
    submitFilter && submitFilter(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const setColor = (color) => {
    setFilters({ ...filters, color: `${color !== "" ? color : ""}` });
  };
  const setCategory = (category) => {
    setFilters({ ...filters, category: `${category !== "" ? category : ""}` });
  };
  const updateInputRange = (e) => {
    setInputPrice(e.target.value);
    setFilters({ ...filters, price: e.target.value });
  };
  const clearFilter = () => {
    setFilters({ ...filters, category: "", color: "", price: maxPriceProduct[0].price });
    setInputPrice(maxPriceProduct[0].price);
  };

  return (
    <div className="filter">
      <section className="header d-none d-sm-flex">
        <p>Filters</p>
        <hr />
      </section>
      <section>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="form-group flex-sm-column flex-row justify-content-between">
            <Form.Label>Category</Form.Label>
            <Button variant={`button-transparent ${filters.category ? "" : "active-btn"}`} onClick={() => setCategory("")}>
              All
            </Button>
            {categories &&
              categories.map((category, idx) => (
                <Button variant={`button-transparent ${filters.category === category.name ? "active-btn" : ""}`} key={idx} onClick={() => setCategory(category.name)}>
                  {category.name}
                </Button>
              ))}
          </Form.Group>
          <Form.Group className="form-group flex-sm-column flex-row justify-content-between">
            <Form.Label>Colors</Form.Label>
            <Button variant={`button-transparent ${filters.color ? "" : "active-btn"}`} onClick={() => setColor("")}>
              All
            </Button>
            <div className="colors">
              {colors &&
                colors.map((color, idx) => (
                  <Button variant="button-transparent" key={idx} custom="me-1" onClick={() => setColor(color.name)}>
                    <div data-color={color.name} className={`color--box ${filters.color === color.name ? "active-color" : ""}`}></div>
                  </Button>
                ))}
            </div>
          </Form.Group>
          <Form.Group className="form-group flex-sm-column flex-row justify-content-between align-items-center align-items-sm-start">
            <Form.Label>Price</Form.Label>
            <h4 className="order-last text-nowrap">
              {inputPrice} <sup>vnd</sup>
            </h4>
             <input type="range" min={0} max={maxPriceProduct ? parseInt(maxPriceProduct[0].price) : 0} step={10000} value={inputPrice} onChange={(e) => updateInputRange(e)} />
          </Form.Group>
          <Button variant="button" custom="px-2 mb-sm-5" onClick={clearFilter}>
            Clear Filters
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default React.memo(Filter);
