import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { Basket3 } from "react-bootstrap-icons";
import { Button } from "..";
import "./cart.scss";

function CartExpand({ show, handleClose }) {
  const handleExit = () => handleClose && handleClose();
  return (
    <>
      <Offcanvas show={show} onHide={() => handleExit()} placement="end" scroll={true}>
        <Offcanvas.Header closeButton className="border-bottom py-4 my-2">
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <div className="cart--body">
            <div className="cart--body--empty">
              <Basket3 size={200} style={{ opacity: 0.75 }} />
              <p>Your cart is currently empty</p>
              <a href="/">Continue Shopping</a>
            </div>
          </div>
          <div className="cart--footer">
            <div className="cart--footer--price">
              <h3>Subtotal</h3>
              <p>
                0.00 <sup>vnd</sup>
              </p>
            </div>
            <div className="cart--footer--button">
              <Link to="/Cart">
                <Button variant="button-outline" custom="my-2 py-3 w-100" onClick={() => handleExit()}>
                  View Cart
                </Button>
              </Link>
              <Button variant="button" custom="my-2 py-3">
                Checkout
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

CartExpand.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};
CartExpand.defaultProps = {
  show: false,
  handleClose: null,
};

export default CartExpand;
