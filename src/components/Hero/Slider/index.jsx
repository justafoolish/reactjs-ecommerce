import React from "react";
import { Carousel, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "./carousel.scss";

function Slider({ indicatorButton, controlArea, interval, imgItem, className }) {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade interval={interval} indicators={indicatorButton} controls={controlArea} className={className}>
      {imgItem.map((item) => (
        <Carousel.Item key={item}>
          <Image src={item} alt="" fluid />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

Slider.propTypes = {
  indicatorButton: PropTypes.bool,
  controlArea: PropTypes.bool,
  interval: PropTypes.number,
  imgItem: PropTypes.array.isRequired,
};

Slider.defaultProps = {
  indicatorButton: true,
  controlArea: true,
  interval: 3000,
};

export default Slider;
