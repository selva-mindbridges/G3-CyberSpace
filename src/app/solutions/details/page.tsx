import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import SolutionDetailsContent from "../../../components/Solutions/SolutionDetailsContent";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Solution Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solution Details"
      />

      <SolutionDetailsContent />

      <Footer />
    </>
  );
}
