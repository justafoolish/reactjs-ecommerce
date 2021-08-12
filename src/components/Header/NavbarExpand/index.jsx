import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.scss";
import useAnimation from "../../../hooks/useAnimation";

function NavbarExpand({ show, category, handleClose }) {
  const { shouldRender, onAnimationEnd } = useAnimation(show);
  return (
    shouldRender && (
      <div className={`expanded-navbar d-block d-lg-none${show ? "" : " collapsing-navbar"}`} onAnimationEnd={onAnimationEnd} key={show}>
        <Nav className="mx-auto">
          {category.map((item, index) => (
            <NavItem key={index} className="text-center" onClick={() => handleClose()}>
              <Link to={`/${item === "Home" ? "" : item}`} className="nav-link font-weight-bold my-1 d-inline-block" style={{ textTransform: "capitalize", fontSize: "1.25rem" }}>
                {item}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    )
  );
}

NavbarExpand.propTypes = {
  show: PropTypes.bool,
};
NavbarExpand.defaultProps = {
  show: false,
};

export default NavbarExpand;
