import React from "react";
import DataEnggHeader from "./components/finance-header/DataEnggHeader";
import DataPipeline from "./components/data-pipeline/DataPipeline";
import ETLService from "./components/etl-service/ETLService";
import DataIntegration from "./components/data-integration/DataIntegration";
import DataWarehouse from "./components/finance-header/data-warehouse/DataWarehouse";
import FContents from "./components/related-contents/FContents";
import ContactForm from "../../../contact-form/ContactForm";
import CloudData from "./components/cloud-data/CloudData";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const DataEngg = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <DataEnggHeader />
      <LogoGrid />
      <DataPipeline />
      <ETLService />
      <DataIntegration />
      <DataWarehouse />
      <CloudData />
      <AllProducts />
      <FContents />
      <ContactForm />
    </div>
  );
};

export default DataEngg;
