"use client";
  
import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <>
      <div className="feature-area feature-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>Cybersecurity & Data Privacy Services</h3>
                  </div>
                  <p>
                  Implement ISO 27001, SOC 2, HIPAA, and other standards through gap assessments, control design, policy development, and audit prep.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>Virtual CISO / DPO Services</h3>
                  </div>
                  <p>
                  Get expert-led cybersecurity and privacy guidance through flexible vCISO/vDPO models—covering strategy, governance, and compliance.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Data Privacy Implementation</h3>
                  </div>
                  <p>
                  Implement privacy-by-design, ROPA, DSAR handling, and compliance with GDPR, DPDP, PDPL, and more.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>Regulatory & Legal Advisory</h3>
                  </div>
                  <p>
                  Draft, review, and align security and privacy policies, DPAs, NDAs, and compliance documents for audit and legal assurance.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>Penetration Testing (VAPT)</h3>
                  </div>
                  <p>
                  Simulate real-world attacks to identify vulnerabilities across web, mobile, APIs, cloud, and infrastructure.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Training & Workshops</h3>
                  </div>
                  <p>
                  Deliver role-based security and privacy workshops to build internal accountability and readiness across teams.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
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

export default Features;
