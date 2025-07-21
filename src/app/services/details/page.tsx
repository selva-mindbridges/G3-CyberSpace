import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesDetailsContent from "../../../components/Services/ServicesDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Data Protection Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Data Protection Services"
      />

      <ServicesDetailsContent />

      <Footer />
    </>
  );
}
