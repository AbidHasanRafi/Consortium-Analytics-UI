import { Outlet } from "react-router-dom";
import Footer from "./shared/footer/Footer";
import Navbar from "./shared/navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;