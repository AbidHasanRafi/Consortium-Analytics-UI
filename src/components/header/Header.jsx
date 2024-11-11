import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particleOptions = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "connect" },
      resize: true,
    },
    modes: {
      connect: {
        distance: 120,
        radius: 60,
        lineLinked: { opacity: 0 },
      },
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: {
      value: ["#ffffff", "#a855f7", "#f97316", "#3b82f6"],
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      outModes: { default: "bounce" },
    },
    number: {
      density: { enable: true, area: 800 },
      value: 60,
    },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

const Header = () => {
  const [init, setInit] = useState(false);
  const [showParticles, setShowParticles] = useState(true);
  const scrollThreshold = 80;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setShowParticles(false);
      } else {
        setShowParticles(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <header className="relative font-abel h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-900 via-[#002430] to-gray-900 text-white overflow-hidden">
      {/* Particle Background */}
      {init && showParticles && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      {/* Flex Container for Animation and Text */}
      <div className="relative z-10 flex items-center text-center px-4">
        <div>
          {/* Header Content */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wider mb-6 text-gray-100 drop-shadow-md">
            Leading Global{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-600">
              Data Analytics
            </span>{" "}
            Company
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Consortium Analytics is a global Data Analytics and Business
            Intelligence Company. Our mission is to transform brands and drive
            business growth by turning complex data into actionable insights.
          </p>
          <a
            href="#"
            className="mt-6 inline-block px-6 py-3 bg-transparent border-2 border-gray-100 text-white font-quick font-semibold rounded-md hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
