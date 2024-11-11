import { useState, useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { menuData } from "./menuData";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubMenuOpen = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubMenu(menuName);
  };

  const handleSubMenuClose = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed font-quick w-full top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#">
              <img
                className="w-14"
                src="/consortium-analytics.svg"
                alt="Consortium Analytics"
              />
            </a>
            <a href="#" className="w-14 text-xs text-white ml-2">
              Consortium Analytics
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuData.map((menu) => (
              <div
                key={menu.name}
                className="relative group"
                onMouseEnter={() => handleSubMenuOpen(menu.name)}
                onMouseLeave={handleSubMenuClose}
              >
                <a
                  href={menu.link}
                  className="text-base text-gray-200 hover:text-blue-400 flex items-center p-3 group relative"
                >
                  {menu.name}
                  {menu.submenu && (
                    <FaAngleRight className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-90" />
                  )}
                  {/* Underline animation for parent menu items only */}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 transform origin-center transition-all duration-300 group-hover:scale-x-100"></span>
                </a>

                {/* Submenu */}
                {menu.submenu && activeSubMenu === menu.name && (
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-lg p-6 z-50 w-[400px] border border-gray-300`}
                    onMouseEnter={() => handleSubMenuOpen(menu.name)}
                    onMouseLeave={handleSubMenuClose}
                  >
                    {/* Expertise Section */}
                    <div className="grid grid-cols-2 gap-6">
                      {menu.submenu.map((sub, index) => (
                        <a
                          key={index}
                          href={sub.link}
                          className="block flex items-center text-gray-700 text-base font-semibold hover:text-blue-600 mb-3"
                        >
                          <span className="mr-2">{sub.icon}</span>
                          {sub.name}
                        </a>
                      ))}
                    </div>

                    {/* Consortium Analytics for Section */}
                    {menu.consortium && (
                      <div className="mt-6">
                        <h4 className="text-blue-400 text-sm font-bold uppercase mb-5 border-b-2 border-blue-400 pb-2">
                          Consortium Analytics for:
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {menu.consortium.map((consort, index) => (
                            <a
                              key={index}
                              href={consort.link}
                              className="flex items-center text-gray-700 text-sm font-semibold bg-gray-200 hover:bg-blue-600 hover:text-white rounded-full py-1 px-2 transition-all duration-300 mb-1"
                            >
                              <span className="mr-2">{consort.icon}</span>
                              {consort.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-transparent text-gray-300 hover:text-green-400 px-3 py-1 rounded-md border-2 border-gray-300 hover:border-green-500 transition duration-300 text-base"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
