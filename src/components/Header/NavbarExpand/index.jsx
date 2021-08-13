import React from "react";
import PropTypes from "prop-types";
import "./navbar.scss";
import NavbarItems from "../NavbarItems";
import useAnimation from "../../../hooks/useAnimation";

function NavbarExpand({ show, category, handleClose }) {
  const { shouldRender, onAnimationEnd } = useAnimation(show);
  return (
    shouldRender && (
      <div className={`expanded-navbar d-block d-lg-none${show ? "" : " collapsing-navbar"}`} onAnimationEnd={onAnimationEnd} key={show}>
        <NavbarItems category={category} className="mx-auto" />
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
