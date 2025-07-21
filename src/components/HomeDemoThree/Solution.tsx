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
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>Dynamic and Collaborative Culture:</h3>
                        <p>
                          Thrive in an innovative environment that values teamwork and fresh ideas
                        </p>
                        <span>01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3> Career Growth Opportunities: </h3>
                        <p>
                         Unlock your potential with continuous learning and professional development.
                        </p>
                        <span>02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>Pioneering Solutions:</h3>
                        <p>
                         Be part of a team driving advancements in data privacy, cybersecurity, and compliance.
                        </p>
                        <span>03</span>
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
