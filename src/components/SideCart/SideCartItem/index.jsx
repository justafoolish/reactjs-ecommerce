import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";

function SideCartItem({ product }) {
  const id = 21;
  return (
    <Card className="flex-row mw-100 overflow-hidden mx-2 mb-3 rounded-0 border-0 border-end border-3 border-dark ">
      <Card.Header style={{ maxHeight: "5rem" }} className="w-25 p-0">
        <Link to={`/Product/${id}`} className="text-decoration-none">
          <Card.Img variant="top" src="https://i.ibb.co/yBvbw1H/s1b.png" />
        </Link>
      </Card.Header>
      <Card.Body className="w-100 align-items-start">
        <Link to={`/Product/${id}`} className="text-decoration-none">
          <Card.Title className="my-0 py-0">TSUN shirt</Card.Title>
        </Link>

        <Card.Text className="fs-5 font-weight-light w-100 d-flex justify-content-between">
          <span>
            2 x 200000<sup>vnd</sup>
          </span>
          <span>
            <Trash />
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

SideCartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SideCartItem;
