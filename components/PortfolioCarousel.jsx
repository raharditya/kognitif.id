import { useState } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight, FaArrowRight, FaTruckLoading} from "react-icons/fa";

const images = [
  {
    src:"/assets/portfolio.png",
    alt:"portfolio_1",
    caption:"",
    header:"",
    key:"1",
    title:"Pizza Hut Delivery",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "/pesan",
  },
  {
    src:"/assets/astronaut.png",
    alt:"portfolio_2",
    caption:"",
    header:"",
    key:"2",
    title: "Manggon Website",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url:"/about",
  },
  {
    src:"/assets/celebrating.png",
    alt:"portfolio_3",
    caption:"",
    header:"",
    key:"3",
    title: "Manggamangga drink",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    src:"/assets/education.png",
    alt:"portfolio_4",
    caption:"",
    header:"",
    key:"4",
    title: "Rfuel App",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    src:"/assets/taken.png",
    alt:"portfolio_5",
    caption:"",
    header:"",
    key:"5",
    title: "Shopee Cart",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    src:"/assets/food.jpg",
    alt:"portfolio_6",
    caption:"",
    header:"",
    key:"6",
    title: "Food Heist",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function PortfolioCarousel(props) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
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
            <img key={img.key} className="img-prop" 
            src={img.src} alt=""/>
            <div id="parent" className="portfolio-link-container">
              <div className="portfolio-prop">
                <div className="portfolio-link-prop">
                  <h1 style={{fontSize: `18px`}}>{img.title}</h1>
                  <a href={img.url}>
                    <FaArrowRight />
                  </a>
                </div>
                <p style={{fontSize: `14px`}}>{img.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PortfolioCarousel;
