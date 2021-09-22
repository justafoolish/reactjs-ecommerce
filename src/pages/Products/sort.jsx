import React from "react";
import { Form } from "react-bootstrap";
const Sort = ({ submitSort, totalProducts }) => {
  const submitSelect = (e) => {
    e.preventDefault();
    switch (parseInt(e.target.value)) {
      case 1:
        submitSort && submitSort("price", "asc");
        break;
      case 2:
        submitSort && submitSort("price", "desc");
        break;
      case 3:
        submitSort && submitSort("name", "asc");
        break;
      case 4:
        submitSort && submitSort("name", "desc");
        break;
      default:
        console.log("error");
    }
  };
  return (
    <section className="header">
      <p>{totalProducts} Products Found</p>
      <hr />
      <Form className="d-flex align-items-center">
        <Form.Label className="mx-3 my-auto">Sort</Form.Label>
        <Form.Select onChange={(e) => submitSelect(e)} defaultValue={3} size="sm">
          <option value="1">Price (Lowest)</option>
          <option value="2">Price (Highest)</option>
          <option value="3">Name (A - Z)</option>
          <option value="4">Name (Z - A)</option>
        </Form.Select>
      </Form>
    </section>
  );
};

export default React.memo(Sort);
