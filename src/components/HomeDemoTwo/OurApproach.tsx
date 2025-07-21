"use client";
  
import React from "react";
import Image from "next/image";

const OurApproach: React.FC = () => {
  return (
    <>
      <div className="our-approach-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2> Built for Secure, Compliant Growth</h2>
            <span>Empowering Smarter Governance with AI</span>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/images/approach-img.jpg"
                  alt="Image"
                  width={600}
                  height={505}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <h3>
                  We blend domain expertise with intelligent automation to help you stay ahead of emerging threats, regulatory shifts, and vendor risks — without slowing down your business.
                </h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-approach">
                      <h3>Strategic Partner</h3>
                      <p>
                        The platform will work as an extension of your team — aligning security, compliance, and business objectives.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-approach">
                      <h3>Platform Security</h3>
                      <p>
                        Safeguard systems and data with AI-driven threat detection, control validation, and compliance monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-approach">
                      <h3>System Assurance</h3>
                      <p>
                        From internal risks to third-party exposures, gain unified visibility across your entire risk landscape.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-approach">
                      <h3>Operational Resilience</h3>
                      <p>
                        Build continuous trust with real-time surveillance, automated assurance, and policy enforcement powered by AI.
                      </p>
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

export default OurApproach;
