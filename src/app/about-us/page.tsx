import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import AboutUsContent from "../../components/AboutUs/AboutUsContent";
import OurChallenges from "../../components/Common/OurChallenges";
import Protects from "../../components/AboutUs/Protects";
import Testimonials from "../../components/Common/Testimonials";
import Partners from "../../components/Common/Partners";
import Footer from "../../components/Layouts/Footer";
import Solution from "@/components/HomeDemoThree/Solution";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Careers"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <Solution />

      {/* <div className="pt-100 pb-70">
        <AboutUsContent />
      </div> */}

      {/* <OurChallenges />

      <Protects />

      <Testimonials /> */}

      {/* <Partners /> */}

      <Footer />
    </>
  );
}
