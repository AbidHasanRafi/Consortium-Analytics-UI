import React, { useRef } from "react";
import img1 from "../../../../../../assets/carousel/client/1.png";
import img2 from "../../../../../../assets/carousel/client/2.png";
import img3 from "../../../../../../assets/carousel/client/3.png";
import logo1 from "../../../../../../assets/carousel/logo/1.png";
import logo2 from "../../../../../../assets/carousel/logo/2.png";
import logo3 from "../../../../../../assets/carousel/logo/3.png";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      image: img1,
      logo: logo1,
      quote:
        "Working with Consortium Analytics has been a game-changer for our team. We've been able to navigate data deprecation challenges and harness insights to drive business success and innovation.",
      name: "Georgios Giasemidis",
      role: "Lead Data Scientist at Choreograph",
    },
    {
      image: img2,
      logo: logo2,
      quote:
        "Consortium Analytics’ location intelligence has transformed our analytics, enabling us to make data-driven decisions with confidence and precision.",
      name: "Jane Doe",
      role: "Data Analyst at AnalyticsPro",
    },
    {
      image: img3,
      logo: logo3,
      quote:
        "Thanks to Consortium Analytics, our business processes have been streamlined, and we’ve unlocked insights we never thought possible.",
      name: "John Smith",
      role: "CEO at InnovateX",
    },
  ];

  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = carousel.querySelector(".carousel-item").offsetWidth;

    // Get the current scroll position
    const currentScrollPosition = carousel.scrollLeft;

    // Get the total scrollable width
    const totalScrollWidth = carousel.scrollWidth;

    if (direction === "left") {
      if (currentScrollPosition === 0) {
        // If already at the start, scroll to the end
        carousel.scrollTo({
          left: totalScrollWidth - scrollAmount,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      if (currentScrollPosition + window.innerWidth >= totalScrollWidth) {
        // If already at the end, scroll to the start
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full mt-10 bg-gray-900 text-white py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="carousel flex overflow-x-scroll snap-x mx-0 lg:mx-20 snap-mandatory scrollbar-hidden"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="carousel-item flex-shrink-0 px-5 lg:px-0 text-center snap-center flex justify-center w-full max-w-xs lg:max-w-full mx-auto"
              style={{ flexBasis: "100%" }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center w-full bg-white text-black rounded-lg p-8 shadow-xl">
                {/* Image Section */}
                <div className="w-full sm:w-1/4 flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 lg:w-40 lg:h-40 rounded-full mx-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-3/4">
                  <blockquote className="italic text-sm lg:text-xl mb-6">
                    {testimonial.quote}
                  </blockquote>
                  <p className="font-bold text-xl">{testimonial.name}</p>
                  <p className="text-sm text-gray-700 mb-4">
                    {testimonial.role}
                  </p>
                  <img
                    src={testimonial.logo}
                    alt="Institution Logo"
                    className="w-16 h-16 lg:w-28 lg:h-28 mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Navigation Arrows */}
        <div className="absolute inset-y-0 flex items-center justify-between w-full px-5 pointer-events-none">
          <button
            className="arrow-btn left-0 transform -translate-x-2 pointer-events-auto text-3xl text-white hidden lg:block"
            onClick={() => handleScroll("left")}
          >
            ❮
          </button>
          <button
            className="arrow-btn right-0 transform translate-x-2 pointer-events-auto text-3xl text-white hidden lg:block"
            onClick={() => handleScroll("right")}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
