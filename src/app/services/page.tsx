import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import ServicesCard from "../../components/Services/ServicesCard";
import Footer from "../../components/Layouts/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="VAPT"
        homePageUrl="/"
        homePageText="Home"
        activePageText="VAPT"
      />
      <br />
      <br />
      {/* <div className="solution-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="solutions-content">
                <h4>ABOUT</h4>
                <h4>Why Do You Need VAPT?</h4>
                <p>
                 In today’s digital landscape, cyber threats are evolving rapidly, putting your critical assets and data at risk. Vulnerability Assessment and Penetration Testing (VAPT) helps identify and fix security gaps before attackers can exploit them. It safeguards your business from data breaches, ensures regulatory compliance, and builds trust with customers. Proactively strengthen your defenses and stay ahead of threats with expert VAPT services.<b>Secure your organization today!</b>
                </p>
              </div>
            </div>
            </div>
            </div>
            </div> */}

      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <h4>ABOUT</h4>
                  <h4>Why Do You Need VAPT?</h4>
                  <p>
                    {`In today’s digital landscape, cyber threats are evolving
                    rapidly, putting your critical assets and data at risk.
                    Vulnerability Assessment and Penetration Testing (VAPT)
                    helps identify and fix security gaps before attackers can
                    exploit them. It safeguards your business from data
                    breaches, ensures regulatory compliance, and builds trust
                    with customers. Proactively strengthen your defenses and
                    stay ahead of threats with expert VAPT services.`}
                    <b>Secure your organization today!</b>
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/vapt.webp"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area feature-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>Pen Testing</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
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
                    <h3>Cyber Threat Hunting</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
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
                    <h3>Security Center</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
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
                    <i className="flaticon-testing"></i>
                    <h3>
                      Penetration Testing: Secure Your Business Against Cyber
                      Threats
                    </h3>
                  </div>
                  <p>
                    {`Penetration Testing is a simulated cyberattack that helps
                    identify weaknesses in your IT systems, networks, and
                    applications. It’s your first line of defense to prevent
                    breaches, protect data, and ensure compliance with security
                    standards.`}
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
                    <h3>Vulnerability Assessment</h3>
                  </div>
                  <p>
                    Vulnerability Assessment is a systematic approach to
                    identifying, analyzing, and prioritizing security weaknesses
                    in your IT environment. It helps organizations proactively
                    address risks, ensure compliance, and strengthen their
                    security posture.
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
                    <h3>Phishing Assessments</h3>
                  </div>
                  <p>
                    {`Phishing assessments are simulated social engineering
                    exercises designed to evaluate your organization's
                    susceptibility to phishing attacks. These assessments mimic
                    real-world phishing attempts to identify vulnerabilities in
                    employee awareness, response, and organizational security
                    practices. By testing and educating your team, phishing
                    assessments help reduce the risk of successful attacks and
                    data breaches.`}
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

      {/* <ServicesCard /> */}

      <Footer />
    </>
  );
}
