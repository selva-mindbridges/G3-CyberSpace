"use client";
  
import React from "react";
import Image from "next/image";

const Solution: React.FC = () => {
  return (
    <>
      <div className="solution-area solution-area-three white-bg pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  {/* <span>All-in Solution</span> */}
                  <h2>
                    Why Join Us
                  </h2>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-cyber-security"></i>
                          <h3>Dynamic and Collaborative Culture</h3>
                        </div>
                        <p>
                          Thrive in an innovative environment that values teamwork and fresh ideas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-testing"></i>
                          <h3>Career Growth Opportunities</h3>
                        </div>
                        <p>
                         Unlock your potential with continuous learning and professional development.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-cybercrime"></i>
                          <h3>Pioneering Solutions</h3>
                        </div>
                        <p>
                         Be part of a team driving advancements in data privacy, cybersecurity, and compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="solution-img-two text-center">
                <Image
                  src="/images/solution-img-2.png"
                  alt="Image"
                  width={524}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="solution-shape-left shape-three">
          <Image
            src="/images/solution-shape-left.png"
            alt="Image"
            width={153}
            height={144}
          />
        </div> */}
      </div>
    </>
  );
};

export default Solution;
