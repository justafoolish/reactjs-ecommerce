import Slider from "react-slick";
import "./ProductsSlider.scss";
import ProductCard from "../ProductCard";
import { Container } from "react-bootstrap";
const ProductsSlider = ({ HeaderTitle, Products }) => {
  const settings = {
    arrows: false,
    lazyLoad: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  let slider = null;
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <>
      {/* <Container fluid> */}
      <Container fluid className="position-relative">
        <h3 className="px-lg-5 m-lg-3 mx-1 font-weight-light">Latest Products</h3>
        <Slider {...settings} className="px-lg-5 m-lg-3 mb-4" ref={(c) => (slider = c)}>
          {Products.map((product) => (
            <ProductCard product={product} />
          ))}
        </Slider>
        <div className="custom-button px-lg-5 m-lg-3 mx-1">
          <button className="button" onClick={() => previous()}>
            Previous
          </button>
          <button className="button" onClick={() => next()}>
            Next
          </button>
        </div>
      </Container>

      {/* </Container> */}
    </>
  );
};

export default ProductsSlider;
