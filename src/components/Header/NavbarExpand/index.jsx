import React from "react";
import PropTypes from "prop-types";
import { Offcanvas } from "react-bootstrap";
import NavbarToggle from "../NavbarToggle";

function NavbarExpand({ show, handleClose }) {
  const handleExit = () => {
    if (handleClose) {
      handleClose();
    }
  };
  return (
    <>
      <Offcanvas show={show} onHide={() => handleExit()} placement="end" scroll={true}>
        <Offcanvas.Header className="border-bottom justify-content-end py-3 my-2">
          <NavbarToggle show={show} toggleShow={handleExit} />
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

NavbarExpand.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};
NavbarExpand.defaultProps = {
  show: false,
  handleClose: null,
};

export default NavbarExpand;
