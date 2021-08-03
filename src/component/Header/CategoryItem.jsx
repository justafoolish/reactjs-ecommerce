import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "react-bootstrap";

function CategoryItem(props) {
  const { category } = props;
  return (
    <Nav className="mx-auto d-none d-lg-flex">
      {category.map((item, index) => (
        <NavItem key={index}>
          <NavLink className="font-weight-bold my-1" style={{ textTransform: "capitalize", fontSize: "1.25rem" }}>
            {item}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.array.isRequired,
};

export default CategoryItem;
