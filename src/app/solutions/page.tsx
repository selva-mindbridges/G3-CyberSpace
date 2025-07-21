import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SolutionsCard from "../../components/Solutions/SolutionsCard";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Third Party Risk Assessment & Compliance Suite"
        homePageUrl="/"
        homePageText="Home"
        activePageText="TRACS Landing page"
      />

      <SolutionsCard />

      <Footer />
    </>
  );
}
