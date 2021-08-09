import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import { Modal, Row, Col } from "react-bootstrap";
import { BoxArrowLeft } from "react-bootstrap-icons";
import Button from "../Button";

import useQuantity from "../../hooks/useQuantity";
import useToggleHeart from "../../hooks/useToggleHeart";

function ProductModal({ show, onHide, product }) {
  const { name, price, imgURL } = product;
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity();
  const { activeWhistList, changeHeart, reChangeHeart } = useToggleHeart(false);

  return (
    show && (
      <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="p-3">
          <Button variant="button-transparent" custom="py-0" onClick={onHide}>
            <BoxArrowLeft size={25} className="mr-2" />{" "}
          </Button>
          <Button variant="button-transparent" custom="py-0">
            <div className="h-100 w-100" onMouseEnter={() => changeHeart()} onMouseLeave={() => reChangeHeart()}>
              {activeWhistList}
            </div>
          </Button>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Row>
            <Col lg={6}>
              <div className="modal--image">
                <img src={imgURL[0]} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={6} className="pl-0">
              <div className="modal--info">
                <div className="modal--info--text">
                  <h2>{name}</h2>
                  <h5 className="font-weight-lighter mb-4">Sản phẩm được ưa chuộng</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="modal--info--option">
                  <div className="modal--info--option__size">
                    <ul>
                      <li className="size-active">S</li>
                      <li>M</li>
                      <li>L</li>
                      <li>XL</li>
                    </ul>
                  </div>
                  <div className="modal--info--option__quantity">
                    <button onClick={() => decreaseQuantity()}>-</button>
                    <input type="text" value={quantity} readOnly />
                    <button onClick={() => increaseQuantity()}>+</button>
                  </div>
                </div>
                <div className="modal--info--btn">
                  <p>
                    {price}
                    <sup>vnđ</sup>
                  </p>
                  <button className="modal--info--btn__addCart">Add to cart</button>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    )
  );
}

ProductModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  product: PropTypes.object.isRequired,
};
ProductModal.defaultProps = {
  show: false,
  onHide: null,
};

export default ProductModal;
