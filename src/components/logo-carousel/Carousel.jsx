import Slider from "react-slick";
import img1 from "../../assets/carousel-logos/01.svg";
import img2 from "../../assets/carousel-logos/02.svg";
import img3 from "../../assets/carousel-logos/03.svg";
import img4 from "../../assets/carousel-logos/04.svg";
import img5 from "../../assets/carousel-logos/05.svg";

const images = [img1, img2, img3, img4, img5];

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
  };

  return (
    <div className="carousel-container relative overflow-hidden w-full h-[150px] md:h-[200px] bg-gray-900">
      <p className="text-center text-white mb-4">
        Access more than 50,000 datasets from trusted sources
      </p>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item flex-shrink-0">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
