"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./style.module.css"

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-area bg-1 border-bottom-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-content">
                <span className={`top-title ${classes.homeHeadContent}`}>Secure. Comply. Transform.</span>
                <h1>Accelerate Growth—Backed by Cyber Resilience and Compliance</h1>
                <p className={` ${classes.homeSubContent}`}>
                G3 Cyberspace helps organizations secure their digital landscape, manage third-party risks, and meet evolving compliance demands. From cybersecurity and privacy automation to regulatory readiness and TPRM, we deliver complete protection to drive secure, scalable growth.
                </p>

                <div className="banner-btn">
                  <Link href="/contact" className="default-btn">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6 col-md-12">
              <div className={`banner-image`}>
                <Image
                  src="/images/cybersecurity-concept-illustration.jpg"
                  alt="image"
                  width={900}
                  height={745}
                  className={`${classes.bgImgRadius}`}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
