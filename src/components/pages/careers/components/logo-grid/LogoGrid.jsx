import React from "react";
import img1 from "../../../../../assets/pages/career/logo/1.png";
import img2 from "../../../../../assets/pages/career/logo/2.png";
import img3 from "../../../../../assets/pages/career/logo/3.png";
import img4 from "../../../../../assets/pages/career/logo/4.png";
import img5 from "../../../../../assets/pages/career/logo/5.png";
import img6 from "../../../../../assets/pages/career/logo/6.png";

const LogoGrid = () => {
  const logos = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full mt-5 flex justify-center items-center">
      <div className="grid grid-cols-6 gap-4 md:gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-auto px-5 lg:px-10"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
