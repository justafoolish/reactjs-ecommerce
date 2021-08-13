import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarItems({ category, className = "" }) {
  return (
    <Nav className={className}>
      {category.map((item, index) => (
        <NavItem key={index} className="text-center">
          <Link to={`/${item === "Home" ? "" : item}`} className="nav-link font-weight-bold my-1 d-inline-block" style={{ textTransform: "capitalize", fontSize: "1.25rem" }}>
            {item}
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
}

NavbarItems.propTypes = {
  category: PropTypes.array.isRequired,
};

export default NavbarItems;
