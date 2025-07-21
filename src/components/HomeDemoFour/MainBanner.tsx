"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="banner-area banner-area-four bg-4">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="banner-content">
                    <span className="top-title">
                      World Class Cyber Security
                    </span>
                    <h1>Modern Information Protect From Hackers</h1>
                    <p>
                      Cyber security is the protection from the theft to protect
                      of our computer systems and networks or being damaged of
                      our hardware and software.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact" className="default-btn">
                      
                          <span>Contact Us</span>
                         
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="banner-video">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="bx bx-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
