import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Pagination } from "../../components";

import "./productspage.scss";
import Filter from "./filter";
import Sort from "./sort";
import ListProducts from "./listproducts";

const Products = () => {
  const [queryAPI, setQueryAPI] = React.useState("https://hactun-ecom.herokuapp.com/api/products?_limit=8&_page=1");
  const [filters, setFilters] = React.useState({
    page: 1,
    limit: 8,
    totals: 24,
    sort: "",
    order: "",
    color: "",
    category: "",
    price: "",
  });
  const [totalProducts, setTotalProducts] = React.useState(0);
  const setTotals = (length) => {
    setTotalProducts(length);
  };
  const handlePageChange = (i) => {
    setFilters({ ...filters, page: i });
  };
  const updateSort = React.useCallback(
    (sort, order) => {
      setFilters({ ...filters, sort: sort, order: order, page: 1 });
    },
    [filters]
  );
  //Tao moi ham khi filter thay doi ??
  const submitFilter = React.useCallback(
    (filter) => {
      setFilters({ ...filters, color: filter.color, category: filter.category, price: filter.price, page: 1 });
    },
    [filters]
  );

  React.useEffect(() => {
    const param = `${filters.sort && `_sort=${filters.sort}&`}${filters.order && `_order=${filters.order}&`}${filters.category && `category_like=${filters.category}&`}${filters.color && `color_like=${filters.color}&`}${filters.price && `price_lte=${filters.price}&`}_limit=${filters.limit}&_page=${
      filters.page
    }`;
    setQueryAPI(`https://hactun-ecom.herokuapp.com/api/products?${param}`);
  }, [filters]);

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={3} md={2}>
          <Filter submitFilter={submitFilter} />
        </Col>
        <Col sm={9} md={10}>
          <Sort submitSort={updateSort} totalProduct={totalProducts} />
          <ListProducts queryAPI={queryAPI} getProductCount={setTotals} />
          <Pagination onPageChange={handlePageChange} pagination={filters} />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
