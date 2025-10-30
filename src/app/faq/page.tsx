import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
// import GetInTouchFormTwo from "../../components/Common/GetInTouchFormTwo";
import FaqContent from "../../components/Faq/FaqContent";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Frequently Asked Questions"
        leftAlignedLayout={true}
      />

      <FaqContent />

      {/* <GetInTouchFormTwo /> */}

      <Footer />
    </>
  );
}
