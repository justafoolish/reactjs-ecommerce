import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "./ProductCard.scss";
import QuickViewModal from "../QuickViewModal";
import Button from "../Button";
import useToggleHeart from "../../hooks/useToggleHeart";
import useToggleModal from "../../hooks/useToggleModal";

function ProductCard({ product }) {
  const { id, name, price, imgUrl } = product;
  const { activeWhistList, changeHeart, reChangeHeart } = useToggleHeart(false);
  const { toggleModal, showModal, hideModal } = useToggleModal();

  return (
    <>
      <Card key={id}>
        <Card.Header className="h-50">
          <Card.Img src={imgUrl} variant="top" className="bg-transparent h-50" />
          <Button variant="button-transparent" custom="view-button w-50" onClick={() => showModal()}>
            Preview &raquo;{" "}
          </Button>
          <Button variant="button-transparent" custom="fav-button">
            <div className="h-100 w-100" onMouseEnter={() => changeHeart()} onMouseLeave={() => reChangeHeart()}>
              {activeWhistList}
            </div>
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Title className="">{name}</Card.Title>
          <Card.Title className="text-muted">
            {" "}
            {price}
            <sup>vnd</sup>{" "}
          </Card.Title>
          <div className="card-body--button">
            <Button variant="button-inverse" custom="w-100">
              Add to cart
            </Button>
          </div>
        </Card.Body>
        <QuickViewModal show={toggleModal} onHide={hideModal} product={product} />
      </Card>
    </>
  );
}

ProductCard.defaultProps = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;