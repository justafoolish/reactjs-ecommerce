import React from "react";
import { Container, Figure } from "react-bootstrap";
import banners from "../../assets/image/brand";
import Slider from "react-slick";

function Sponsor() {
  const settings = {
    arrows: false,
    lazyLoad: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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

  return (
    <Container fluid style={{backgroundColor: "#e7e7e7"}}>
      <h4 className="text-center py-2 font-weight-light">Sponsors</h4>
      <Slider {...settings} className="px-5 mx-4">
        {banners.map((banner) => (
          <div key={banner.key} className="px-2 py-2 p-lg-4">
            <Figure>
              <Figure.Image src={banner.img} />
            </Figure>
          </div>
        ))}
      </Slider>
    </Container>
  );
}


export default Sponsor;
