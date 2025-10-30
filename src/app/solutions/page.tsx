import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SolutionsCard from "../../components/Solutions/SolutionsCard";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Third Party Risk Assessment & Compliance Suite"
        homePageUrl="/"
        homePageText="Home"
        activePageText="TRACS Landing page"
        leftAlignedLayout={true}
      />

      <SolutionsCard />

      <Footer />
    </>
  );
}
