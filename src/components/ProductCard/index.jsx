import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import { QuickViewModal, Button } from "..";

import useToggleHeart from "../../hooks/useToggleHeart";
import useToggleModal from "../../hooks/useToggleModal";

import "./ProductCard.scss";

function ProductCard({ product }) {
  const { id, name, price, imgURL } = product;
  const { activeWhistList, changeHeart, reChangeHeart } = useToggleHeart(false);
  const { toggleModal, showModal, hideModal } = useToggleModal();

  return (
    <Card key={id} className="mx-2 mx-md-1 product--card">
      <Card.Header className="h-50 product--card--header">
        <Link to={`/Product/${id}`}>
          <Card.Img src={imgURL[0]} variant="top" className="bg-transparent" />
        </Link>
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
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Title className="text-black-50">
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
  );
}

ProductCard.defaultProps = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
