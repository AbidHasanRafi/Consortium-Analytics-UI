import React from "react";

const SubscribeHeader = () => {
  return (
    <div
      className="h-96 rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          "url(https://img.pikbest.com/backgrounds/20220119/blue-technology-news-background_6235705.jpg!w700wp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Adjusting the overlay to have better contrast for the text */}
      <div className="hero-overlay p-5 bg-black bg-opacity-60 h-full">
        {/* Content container with left alignment */}
        <div className="text-left text-white w-full h-full flex flex-col justify-center pl-4 pr-4 space-y-6">
          <h1 className="text-3xl w-1/2 md:text-4xl font-medium leading-snug">
            Location Intelligence Resources Straight to Your Inbox
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Subscribe to our latest news, product features, and events.
          </p>

          {/* Input for the email address */}
          <div className="flex flex-col w-full md:w-1/3 space-y-2">
            {/* Input field with white background */}
            <input
              type="email"
              placeholder="Business email address"
              className="p-2 rounded-sm bg-white text-black focus:outline-none"
            />
            {/* Subscribe button */}
            <button className="bg-cyan-500 text-white uppercase rounded-sm py-2 px-4 text-xs font-semibold hover:bg-slate-700 transition ml-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeHeader;
