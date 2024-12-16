import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import icn1 from "../../assets/footer-icon/prague.png";
import icn3 from "../../assets/footer-icon/dhaka.png";
import icn2 from "../../assets/footer-icon/china.png";

const Footer = () => {
  return (
    <footer className="bg-[#F2F6F9] text-black pt-5 lg:pt-10">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* About Section */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="consortium-analytics.svg"
            alt="Consortium Analytics"
            className="w-28"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Consortium Analytics
          </h2>
        </div>

        {/* Expertise Links */}
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start mt-8 sm:mt-4 md:mt-0 mx-14">
          <h3 className="text-xl font-semibold text-black mb-4">Expertise</h3>
          <ul className="space-y-2">
            <li>
              <a href="/visualize" className="hover:text-gray-800 transition">
                Visualization
              </a>
            </li>
            <li>
              <a href="/analytics" className="hover:text-gray-800 transition">
                Analytics
              </a>
            </li>
            <li>
              <a
                href="/data-enrichment"
                className="hover:text-gray-800 transition"
              >
                Data Enrichment
              </a>
            </li>
            <li>
              <a
                href="/data-engineering"
                className="hover:text-gray-800 transition"
              >
                Data Engineering
              </a>
            </li>
            <li>
              <a
                href="/business-intelligence"
                className="hover:text-gray-800 transition"
              >
                Business Intelligence
              </a>
            </li>
            <li>
              <a
                href="/market-analysis"
                className="hover:text-gray-800 transition"
              >
                Market Analysis
              </a>
            </li>
            <li>
              <a href="/ai-and-ml" className="hover:text-gray-800 transition">
                AI and Machine Learning
              </a>
            </li>
            <li>
              <a href="/development" className="hover:text-gray-800 transition">
                Development
              </a>
            </li>
          </ul>
        </div>

        {/* Solution Links */}
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start mt-8 sm:mt-4 md:mt-0 mx-14">
          <h3 className="text-xl font-semibold text-black mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <a href="/real-estate" className="hover:text-gray-800 transition">
                Real Estate
              </a>
            </li>
            <li>
              <a href="/retail" className="hover:text-gray-800 transition">
                Retail
              </a>
            </li>
            <li>
              <a
                href="/finance-service"
                className="hover:text-gray-800 transition"
              >
                Financial Services
              </a>
            </li>
            <li>
              <a href="/healthcare" className="hover:text-gray-800 transition">
                Healthcare
              </a>
            </li>
            <li>
              <a
                href="/transport-logistics"
                className="hover:text-gray-800 transition"
              >
                Transport & Logistics
              </a>
            </li>
            <li>
              <a
                href="/city-governance"
                className="hover:text-gray-800 transition"
              >
                Cities and Governance
              </a>
            </li>
            <li>
              <a href="/sports" className="hover:text-gray-800 transition">
                Sports
              </a>
            </li>
            <li>
              <a href="/education" className="hover:text-gray-800 transition">
                Education
              </a>
            </li>
          </ul>
        </div>

        {/* Resource Links */}
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start mt-8 sm:mt-4 md:mt-0 mx-14">
          <h3 className="text-xl font-semibold text-black mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blogs" className="hover:text-gray-800 transition">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/case-studies"
                className="hover:text-gray-800 transition"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a href="/partners" className="hover:text-gray-800 transition">
                Partners
              </a>
            </li>
            <li>
              <a href="/tutorials" className="hover:text-gray-800 transition">
                Tutorials
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Locations Section */}
      <div className="mt-10 border-t border-gray-300 pt-10 flex flex-wrap justify-center gap-14 md:gap-20 sm:gap-8 text-sm text-black">
        <div className="flex flex-col items-center sm:items-start space-y-2 px-8 w-full sm:w-auto">
          <img src={icn1} alt="USA" className="w-[50px]" />
          <h4 className="text-black text-2xl font-bold">Prague</h4>
          <p className="text-center">Chaloupeckého 1916, 160 17 Praha 6</p>
          <p className="text-center">Czech Republic</p>
          <p className="text-black font-semibold text-sm">
            <a href="tel:+420 722 487 968">+420 722 487 968</a>
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start space-y-2 px-8 w-full sm:w-auto">
          <img src={icn3} alt="Dhaka" className="w-[50px]" />
          <h4 className="text-black text-2xl font-bold">Dhaka</h4>
          <p className="text-center">Block-H, Road-10, Mirpur-2</p>
          <p className="text-center">Dhaka 1216, Bangladesh</p>
          <p className="text-black font-semibold text-sm">
            <a href="tel:+880 1521 575799">+880 1521 575799</a>
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start space-y-2 px-8 w-full sm:w-auto">
          <img src={icn2} alt="Berlin" className="w-[50px]" />
          <h4 className="text-black text-2xl font-bold">Beijing</h4>
          <p className="text-center">
            Bei Jing Shi, Hai Dian Qu, 100811 Beijing
          </p>
          <p className="text-center">China</p>
          <p className="text-black font-semibold text-sm">
            <a href="tel:+86 188 1090 8097">+86 188 1090 8097</a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-14"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-900 px-6 py-4 space-y-4 sm:space-y-0">
        <div className="text-sm">
          <a href="mailto:post.consortium@gmail.com">
            post.consortium@gmail.com
          </a>
        </div>
        <div className="text-center lg:text-start">
          &copy; {new Date().getFullYear()} Consortium Analytics. All rights
          reserved.
        </div>
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=61561910832309"
            className="text-gray-800 hover:text-gray-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/@ConsortiumAnalytics"
            className="text-gray-800 hover:text-gray-600 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/company/consortium-analytics/"
            className="text-gray-800 hover:text-gray-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
