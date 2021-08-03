import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
function CategoryItem(props) {
  const { category } = props;
  return (
    <Nav className="mx-auto d-none d-lg-flex">
      {category.map((item, index) => (
        <NavItem key={index}>
          <Link to={`/${item === "Home" ? "" : item}`} className="nav-link font-weight-bold my-1" style={{ textTransform: "capitalize", fontSize: "1.25rem" }}>
            {item}
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.array.isRequired,
};

export default CategoryItem;
