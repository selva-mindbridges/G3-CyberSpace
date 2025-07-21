"use client";
  
import React from "react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-area banner-area-two bg-2 jarallax">
        <div className="container">
          <div className="banner-content">
            {/* <span className="top-title">World Class Cyber Security</span> */}
            <h1>Automate Controls. Assure Compliance. Accelerate Decision.</h1>
            {/* <h1>Accelerate Decision.</h1> */}
            <p>
              Smarter governance, faster compliance, and intelligent oversight-all in one platform.
            </p>

            {/* <Link href="/about-us" className="default-btn">
              <span>About Us</span>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
