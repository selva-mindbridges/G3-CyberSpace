import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogColumnThree from "../../../components/Blog/BlogColumnThree";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Blog Column Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Column Three"
      />

      <BlogColumnThree />

      <Footer />
    </>
  );
}
