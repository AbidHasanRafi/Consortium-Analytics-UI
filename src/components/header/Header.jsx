import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particleOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "connect" },
      resize: true,
    },
    modes: {
      connect: { distance: 120, radius: 60, lineLinked: { opacity: 0 } },
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ["#ffffff", "#a855f7", "#f97316", "#3b82f6"] },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
    number: { density: { enable: true, area: 800 }, value: 60 },
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
      setShowParticles(window.scrollY <= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative font-mont h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-900 via-[#002430] to-gray-900 text-white overflow-hidden">
      {init && showParticles && (
        <Particles
          id="tsparticles"
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
      <div className="relative z-10 flex items-center justify-center text-center px-6 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-relaxed mb-8 text-gray-100 drop-shadow-lg">
            <span>Leading Global</span>
            <br />
            <span
              className="mt-4 mb:mt-8 block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-600 animate-gradient"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-move 5s ease infinite",
              }}
            >
              Technology Company
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
