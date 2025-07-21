"use client";
  
import React from "react";
import Image from "next/image";

const Protects: React.FC = () => {
  return (
    <>
      <div className="protect-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="protect-content">
                <div className="protect-title">
                  <span>Cybersecurity That Enables Resilience</span>
                  <h2>
                    From risk assessments to implementation—we cover every step of your cybersecurity journey.
                  </h2>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-challenges overly-one">
                      <div className="overly-two">
                        <i className="flaticon-database"></i>
                        <h3>Framework Implementation</h3>
                        <p>
                          Align with ISO 27001, SOC 2, and HIPAA using tailored controls and expert support.
                        </p>
                        <span className="flaticon-database"></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-challenges overly-one">
                      <div className="overly-two">
                        <i className="flaticon-application"></i>
                        <h3>VAPT Services</h3>
                        <p>
                          Identify and remediate vulnerabilities in web, mobile, network, and cloud systems.
                        </p>
                        <span className="flaticon-application"></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-challenges overly-one">
                      <div className="overly-two">
                        <i className="flaticon-security"></i>
                        <h3>Policy & Controls</h3>
                        <p>
                          Draft, refine, and enforce policies that meet internal and regulatory standards.
                        </p>
                        <span className="flaticon-security"></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-challenges overly-one">
                      <div className="overly-two">
                        <i className="flaticon-security-1"></i>
                        <h3>Awareness & Response</h3>
                        <p>
                          Train your teams and establish clear processes for incident handling and recovery.
                        </p>
                        <span className="flaticon-security-1"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="protect-img">
                <Image
                  src="/images/Cybersecurity That Enables Resilience.png"
                  alt="Image"
                  width={600}
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

export default Protects;
