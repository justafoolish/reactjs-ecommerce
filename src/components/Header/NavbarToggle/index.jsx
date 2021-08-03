import React from "react";
import PropTypes from "prop-types";
import "./navbartoggle.scss";

function ToggleButton({ show, toggleShow }) {
  const [close, setClose] = React.useState(true);
  const handleToggle = () => {
    if (toggleShow) {
      setClose(!close);
      toggleShow();
    }
  };
  return (
    <button className={`navbar--button d-lg-none d-md-block ${show ? "close" : ""}`} onClick={() => handleToggle()}>
      <span className="toggle--icon"></span>
      <span className="toggle--icon"></span>
      <span className="toggle--icon"></span>
    </button>
  );
}

ToggleButton.propTypes = {
  toggleShow: PropTypes.func.isRequired,
};
export default ToggleButton;
