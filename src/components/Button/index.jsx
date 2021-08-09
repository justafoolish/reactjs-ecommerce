import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ type = "", variant, custom = "", onClick, children }) => (
  <button type={type ? type : null} className={`${variant} ${custom}`} onClick={() => onClick()}>
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  custom: PropTypes.string,
};

export default Button;
