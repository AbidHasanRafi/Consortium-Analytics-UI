import React from "react";
import Header from "../../header/Header";
import InsightOverview from "../../insights/InsightOverview";
import RMapOverview from "../../r-map/RMapOverview";
import RRebisOverview from "../../rebis/RRebisOverview";
import RRetailOverview from "../../retail/RRetailOverview";
import OurServices from "../../services/OurServices";
import AllProducts from "../../all-products/AllProducts";
import AllResources from "../../all-resources/AllResources";
import OurLocation from "../../our-location/OurLocation";
import Carousel from "../../logo-carousel/Carousel";

const Home = () => {
  return (
    <div className="font-quick">
      <Header />
      <Carousel />
      <InsightOverview />
      <RMapOverview />
      <AllProducts />
      <AllResources />
      <OurLocation />
    </div>
  );
};

export default Home;
