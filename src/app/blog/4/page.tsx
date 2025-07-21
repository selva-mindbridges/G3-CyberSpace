import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogWithLeftSidebar from "../../../components/Blog/BlogWithLeftSidebar";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Left Sidebar"
      />

      <BlogWithLeftSidebar />

      <Footer />
    </>
  );
}
