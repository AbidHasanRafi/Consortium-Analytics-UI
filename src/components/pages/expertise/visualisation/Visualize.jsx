import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import VisualHeader from "./components/visualize-header/VisualHeader";
import IDashboards from "./components/interactive-dashboards/IDashboards";
import GeoMap from "./components/geospatial-mapping/GeoMap";
import CReport from "./components/custom-report/CReport";
import RealtimeViz from "./components/real-time-data-viz/RealtimeViz";
import CContents from "./components/related-contents/CContents";
import DataHeatmap from "./components/data-heatmap/DataHeatmap";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const Visualize = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <VisualHeader />
      <LogoGrid />
      <IDashboards />
      <GeoMap />
      <CReport />
      <RealtimeViz />
      <DataHeatmap />
      <AllProducts />
      <CContents />
      <ContactForm />
    </div>
  );
};

export default Visualize;
