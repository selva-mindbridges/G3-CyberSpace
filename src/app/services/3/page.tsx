import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesCard from "../../../components/Services/ServicesCard";
import Footer from "../../../components/Layouts/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarFive />
     
      <PageBanner
        pageTitle="Cybersecurity Assessments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cybersecurity Assessments"
      />
      <br />
      <br />
       <div className="about-us-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="about-img mb_30">
                      <Image
                        src="/images/about-img.jpg"
                        alt="Image"
                        width={600}
                        height={545}
                      />
                    </div>
                  </div>
      
                  <div className="col-lg-6">
                    <div className="about-content">
                      <div className="about-title">
                        <span>Our Expertise</span>
                        <p>
                        At G3 Cyberspace, we empower organizations to improve their security and privacy standards. Our experts specialize in implementing global frameworks like ISO 27001, ISO 45001, PCI DSS, ISO 9001, ISO 27701, HIPAA, SOC 2, and GDPR. We help you enhance your processes, achieve excellence, and build trust with your stakeholders. Let us handle the complexities of compliance, so you can protect your data and strengthen your reputation in today’s digital world.
                        </p>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>

                      <br />
                      <br />

                      <ServicesCard />

      <div className="our-approach-area-three pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Approach</span>
            <h2>Our Approach to Cybersecurity Framework Implementation</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-pin"></i>
                  </div>

                  <h3>Risk-Based Planning</h3>
                  <p>
                    We start by understanding your business, identifying critical assets, and conducting a thorough risk assessment aligned with frameworks like ISO 27001 or NIST CSF.{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-padlock"></i>
                  </div>

                  <h3>Gap Assessment & Remediation</h3>
                  <p>
                    We benchmark your current security posture against the target framework, identify control gaps, and define a remediation roadmap.{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-url"></i>
                  </div>

                  <h3>Policy & Control Design</h3>
                  <p>
                     Our experts help design and implement governance, technical, and operational controls tailored to your framework and regulatory obligations.{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-antivirus"></i>
                  </div>

                  <h3>Continuous Monitoring & Audit Support</h3>
                  <p>
                    We don’t just stop at implementation. We set up monitoring systems, internal audits, and readiness checks to maintain and demonstrate compliance.{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* <ServicesCard /> */}
      <Footer />
    </>
  );
}
