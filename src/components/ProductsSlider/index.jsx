import Slider from "react-slick";
import "./ProductsSlider.scss";
import ProductCard from "../ProductCard";
import Button from "../Button";

const ProductsSlider = ({ HeaderTitle, Products }) => {
  const settings = {
    arrows: false,
    lazyLoad: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
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
      <div className="d-flex justify-content-between align-items-center px-lg-3 mx-lg-3 my-lg-1 mx-2">
        <h3 className="font-weight-light">{HeaderTitle}</h3>
        <div className="d-flex align-items-center">
          <Button custom="font-weight-bold" variant="button-transparent" children="Previous" onClick={previous} />
          <span className="mx-2">{"/"}</span>
          <Button custom="font-weight-bold" variant="button-transparent" children="Next" onClick={next} />
        </div>
      </div>
      <Slider {...settings} className="px-lg-2 m-lg-3 mb-4" ref={(c) => (slider = c)}>
        {Products && Products.map((product) => <ProductCard product={product} key={product.id} />)}
      </Slider>
    </>
  );
};

export default ProductsSlider;
