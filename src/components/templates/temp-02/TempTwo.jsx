import React from "react";
import PropTypes from "prop-types";
import { HiArrowLongRight } from "react-icons/hi2";

const TempTwo = ({
  sectionId,
  headingIcon,
  headingText,
  title,
  description,
  linkText,
  linkHref,
  mapComponent: MapComponent,
  features,
}) => {
  return (
    <div className="max-w-full bg-white mx-2 md:mx-10 rounded-lg">
      <section
        id={sectionId}
        className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-14"
      >
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between">
          <div className="w-full md:w-1/2">
            <MapComponent />
          </div>
          <div className="flex-1 space-y-6 pt-4">
            <div className="flex items-center gap-1 text-sky-600">
              <p className="text-3xl sm:text-4xl">{headingIcon}</p>
              <p className="text-xs font-semibold">{headingText}</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-900 text-lg sm:text-xl">{description}</p>
            <div className="mt-8 sm:mt-12 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href={linkHref}
                  className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">{linkText}</p>
                  <p className="text-base font-semibold">
                    <HiArrowLongRight />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
          {features.map((feature, index) => (
            <section key={index} className="bg-[#F2F6F9] p-6 rounded-lg">
              <p className="text-4xl mb-3 text-blue-600">{feature.icon}</p>
              <h3 className="text-gray-900 text-lg font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-900 text-sm">{feature.description}</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

TempTwo.propTypes = {
  sectionId: PropTypes.string.isRequired,
  headingIcon: PropTypes.element.isRequired,
  headingText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  mapComponent: PropTypes.elementType.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TempTwo;
