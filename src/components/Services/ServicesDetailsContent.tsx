"use client";

import React from "react";
import RelatedServices from "./RelatedServices";
// import ServiceSidebar from "./ServiceSidebar";
import Image from "next/image";
import classes from "./style.module.css";

const ServicesDetailsContent: React.FC = () => {
  return (
    <>
      <br />
      <RelatedServices />
      <div className="solution-area pb-70">
        <div className="solution-title pt-70">
          <h2 className={`${classes.textAlignCenter}`}>Our Approach</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>Gap assessments</h3>
                        <p>
                          Evaluate your current practices to identify compliance
                          gaps.
                        </p>
                        <span>01</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>Privacy framework development</h3>
                        <p>
                          Create a custom framework that aligns with your
                          business needs.
                        </p>
                        <span>02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>Policy and process implementation</h3>
                        <p>
                          Establish actionable policies for secure data
                          management.
                        </p>
                        <span>03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="solution-content">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>Operational Integration</h3>
                        <p>
                          Embed privacy practices into your daily workflows for
                          sustainable compliance.
                        </p>
                        <span>04</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>Assessment & Support</h3>
                        <p>
                          Conduct a comprehensive review to validate compliance
                          readiness, ensuring all privacy measures are
                          effectively implemented
                        </p>
                        <span>05</span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-12 col-md-6">
              <div className="single-solution overly-one">
                <div className="overly-two">
                  <h3>Retainer-Based Advisory Support</h3>
                  <p>Partner with us on a retainer model to access ongoing support across compliance planning, security posture reviews, board reporting, and operational decision-making.</p>
                  <span>06</span>
                </div>
              </div>
            </div> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <ServiceSidebar />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
