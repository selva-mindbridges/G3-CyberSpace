import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BlogColumnOne from "../../components/Blog/BlogColumnOne";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Blog Column One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Column One"
      />

      <BlogColumnOne />

      <Footer />
    </>
  );
}
