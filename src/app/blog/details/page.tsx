import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
