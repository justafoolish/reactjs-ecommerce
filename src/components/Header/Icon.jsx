import React from "react";
import PropTypes from "prop-types";
import { CartFill, PersonFill, Search, XCircle } from "react-bootstrap-icons";
import { Nav, NavItem, NavLink, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Icon({ cartCount, toggleShowCart, toggleSearchPanel, search }) {
  const toggleShow = () => toggleShowCart && toggleShowCart();
  const toggleSearch = () => toggleSearchPanel && toggleSearchPanel();

  return (
    <Nav className="flex-row justify-content-end navbar-nav justify-content-lg-end d-flex d-lg-flex" id="icon-nav">
      <NavItem className="mx-1">
        <NavLink onClick={() => toggleSearch()}>
          {search && <XCircle size={25} />}
          {!search && <Search size={25} />}
        </NavLink>
      </NavItem>
      <NavItem className="mx-1">
        <NavLink className="position-relative" onClick={() => toggleShow()}>
          <CartFill size={25}></CartFill>
          <Badge pill bg="success" className={cartCount === 0 ? "invisible" : ""}>
            {cartCount}
          </Badge>
        </NavLink>
      </NavItem>
      <NavItem className="mx-1">
        <Link to="/Account/Login" className="nav-link" role={"button"}>
          <PersonFill size={25} />
        </Link>
      </NavItem>
    </Nav>
  );
}

Icon.propTypes = {
  cartCount: PropTypes.number,
  toggleShow: PropTypes.func,
  toggleSearchPanel: PropTypes.func,
};
Icon.defaultProps = {
  cartCount: 3,
  toggleShow: null,
  toggleSearchPanel: null,
};

export default Icon;
