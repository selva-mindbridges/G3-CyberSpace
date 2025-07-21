"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurSolution: React.FC = () => {
  return (
    <>
      <div className="solution-area pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <span>All-in Solution</span>
                  <h2>
                    Our experts are providing and planning 24/7 technical
                    support services with product and security consultation
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            Product Consultation
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat.
                        </p>
                        <span>01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            Security Consultation
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat.
                        </p>
                        <span>02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            24/7 Technical Support
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat.
                        </p>
                        <span>03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="solution-img">
                <Image
                  src="/images/solution-img.png"
                  alt="Image"
                  width={875}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolution;
