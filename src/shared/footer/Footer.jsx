import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import icn1 from "../../assets/footer-icon/usa.png";
import icn2 from "../../assets/footer-icon/berlin.png";
import icn3 from "../../assets/footer-icon/dhaka.png";

const Footer = () => {
  return (
    <footer className="bg-[#F2F6F9] text-black pt-5 lg:pt-10">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* About Section */}
        <div className="flex flex-col items-start">
          <img
            src="consortium-analytics.svg"
            alt="Consortium Analytics"
            className="w-28"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Consortium Analytics
          </h2>
          <p className="text-gray-900 leading-relaxed">
            Transforming data into powerful insights. We provide analytics
            solutions tailored to drive meaningful outcomes and strategic
            decision-making.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start mt-8 sm:mt-4 md:mt-0 mx-14">
          <h3 className="text-xl font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/expertise" className="hover:text-gray-800 transition">
                Expertise
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-800 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-gray-800 transition">
                Resources
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-gray-800 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start mt-8 sm:mt-4 md:mt-0 mx-14">
          <h3 className="text-xl font-semibold text-black mb-4">Contact Us</h3>
          <p className="text-black leading-relaxed">
            123 Analytics Lane, Suite 400 <br />
            City, State, ZIP Code <br />
            Phone: (123) 456-7890 <br />
            Email: info@consortiumanalytics.com
          </p>
          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="mt-10 border-t border-gray-300 pt-10 flex flex-wrap justify-center gap-14 md:gap-20 sm:gap-8 text-sm text-black">
        <div className="flex flex-col items-center sm:items-start space-y-2 px-8 sm:px-4 w-full sm:w-auto">
          <img src={icn1} alt="USA" className="w-[50px]" />
          <h4 className="text-black text-2xl font-bold">USA</h4>
          <p className="text-center">
            1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
          </p>
          <p className="text-black font-semibold text-sm">+1-2092-512-344</p>
        </div>
        <div className="flex flex-col items-center sm:items-start space-y-2 px-8 sm:px-4 w-full sm:w-auto">
          <img src={icn2} alt="Berlin" className="w-[50px]" />
          <h4 className="text-black text-2xl font-bold">Berlin</h4>
          <p className="text-center">Reuterstr. 23, 12043 Berlin, Germany</p>
          <p className="text-black font-semibold text-sm">+49 15 1100 03257</p>
        </div>
        <div className="flex flex-col items-center sm:items-start space-y-2 px-8 sm:px-4 w-full sm:w-auto">
          <img src={icn3} alt="Dhaka" className="w-[50px]" />
          <h4 className="text-black text-2xl font-bold">Dhaka</h4>
          <p className="text-center">
            Joypurhat Tower, Level- 06, Block F, Main Road, Dhaka - 1219
          </p>
          <p className="text-black font-semibold text-sm">+8801793-477511</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-14"></div>

      {/* Copyright */}
      <div className="text-center text-gray-900 px-4 py-4">
        <p>
          &copy; {new Date().getFullYear()} Consortium Analytics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
