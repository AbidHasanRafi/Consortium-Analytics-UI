import Slider from "react-slick";
import img1 from "../../assets/carousel-logos/01.jpeg";
import img2 from "../../assets/carousel-logos/02.png";
import img3 from "../../assets/carousel-logos/03.png";
import img4 from "../../assets/carousel-logos/04.png";
import img5 from "../../assets/carousel-logos/05.png";
import img6 from "../../assets/carousel-logos/06.png";
import img7 from "../../assets/carousel-logos/07.png";
import img8 from "../../assets/carousel-logos/08.png";
import img9 from "../../assets/carousel-logos/09.png";
import img10 from "../../assets/carousel-logos/10.png";
import img11 from "../../assets/carousel-logos/11.png";
import img12 from "../../assets/carousel-logos/12.png";
import img13 from "../../assets/carousel-logos/13.png";
import img14 from "../../assets/carousel-logos/14.png";
import img15 from "../../assets/carousel-logos/15.png";
import img16 from "../../assets/carousel-logos/16.jpeg";
import img17 from "../../assets/carousel-logos/17.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container relative overflow-hidden w-full h-[150px] md:h-[200px] bg-gray-900">
      <p className="text-center text-white mb-4 md:mb-10">
        Access more than 50,000 datasets from trusted sources
      </p>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item flex-shrink-0">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              className="w-[80px] h-[40px] sm:w-[95px] sm:h-[50px] md:w-[130px] md:h-[60px] object-contain mx-0.5"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
