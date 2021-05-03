import { useState } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  {
    src:"/assets/portfolio.png",
    alt:"portfolio_1",
    caption:"",
    header:"",
    key:"1",
  },
  {
    src:"/assets/astronaut.png",
    alt:"portfolio_2",
    caption:"",
    header:"",
    key:"2",
  },
  {
    src:"/assets/celebrating.png",
    alt:"portfolio_3",
    caption:"",
    header:"",
    key:"3",
  },
  {
    src:"/assets/education.png",
    alt:"portfolio_4",
    caption:"",
    header:"",
    key:"4",
  },
  {
    src:"/assets/taken.png",
    alt:"portfolio_5",
    caption:"",
    header:"",
    key:"5",
  },
];

function PortfolioCarousel(props) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img.src} alt=""/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PortfolioCarousel;
