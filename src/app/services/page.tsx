import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import Image from "next/image";
import "./vapt-services.css";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Vulnerability Assessment and Penetration Testing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="VAPT"
        leftAlignedLayout={true}
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

      {/* About Section - Contains both content text and image side by side */}
      {/* <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <h4>ABOUT</h4>
                  <h4>Why Do You Need VAPT?</h4>
                  <p>
                    {`In today's digital landscape, cyber threats are evolving
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
                  alt="VAPT Security Illustration"
                  width={498}
                  height={386}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End About Section */}

      <section className="vapt-services-section">
        <div className="vapt-container">
          <div className="circular-diagram-wrapper">
            <div className="circular-diagram">
              {/* Center Circle */}
              <div className="center-circle">
                <div className="center-circle-inner"></div>
              </div>

              {/* VAPT Info Card - Shows on center circle hover */}
              <div className="vapt-info-card">
                <h4>ABOUT</h4>
                <h3>Why Do You Need VAPT?</h3>
                <p>
                  {`In today's digital landscape, cyber threats are evolving
                  rapidly, putting your critical assets and data at risk.
                  Vulnerability Assessment and Penetration Testing (VAPT)
                  helps identify and fix security gaps before attackers can
                  exploit them. It safeguards your business from data
                  breaches, ensures regulatory compliance, and builds trust
                  with customers. Proactively strengthen your defenses and
                  stay ahead of threats with expert VAPT services. `}
                  <b>Secure your organization today!</b>
                </p>
              </div>

              {/* Web Application Penetration Testing */}
              <div className="circular-icon icon-web-app">
                <i className="flaticon-browser"></i>
                <span className="icon-label">Web App</span>
              </div>
              <div className="service-item service-cyan service-web-app">
                <h3>
                  Web Application Penetration Testing
                </h3>
                <ul>
                  <li>Assess applications against OWASP Top 10 & business logic vulnerabilities</li>
                  <li>Test for authentication, authorization, input validation, and session management flaws</li>
                  <li>Identify misconfigurations and insecure components</li>
                </ul>
              </div>

              {/* Network Penetration Testing */}
              <div className="circular-icon icon-network">
                <i className="flaticon-protection"></i>
                <span className="icon-label">Network</span>
              </div>
              <div className="service-item service-cyan service-network">
                <h3>
                  Network Penetration Testing
                </h3>
                <ul>
                  <li>Internal & external network penetration testing</li>
                  <li>Identify misconfigurations, unpatched systems, weak services, and insecure protocols</li>
                  <li>Simulate real-world attack vectors to assess resilience</li>
                </ul>
              </div>

              {/* Mobile Application Penetration Testing */}
              <div className="circular-icon icon-mobile">
                <i className="flaticon-smartphone"></i>
                <span className="icon-label">Mobile</span>
              </div>
              <div className="service-item service-green service-mobile">
                <h3>
                  Mobile Application Penetration Testing
                </h3>
                <ul>
                  <li>Security testing for Android & iOS applications</li>
                  <li>Validate secure storage, API communications, jailbreak/root detection, and reverse engineering resilience</li>
                  <li>Map findings against OWASP Mobile Top 10</li>
                </ul>
              </div>

              {/* Thick Client Application Penetration Testing */}
              <div className="circular-icon icon-thick-client">
                <i className="flaticon-computer"></i>
                <span className="icon-label">Thick Client</span>
              </div>
              <div className="service-item service-cyan service-thick-client">
                <h3>
                  Thick Client Application Penetration Testing
                </h3>
                <ul>
                  <li>Analyze client-side applications (desktop, hybrid, etc.)</li>
                  <li>Assess local storage, memory handling, traffic interception, and reverse engineering vulnerabilities</li>
                  <li>Verify secure communication with servers</li>
                </ul>
              </div>

              {/* API Penetration Testing */}
              <div className="circular-icon icon-api">
                <i className="flaticon-coding"></i>
                <span className="icon-label">API</span>
              </div>
              <div className="service-item service-teal service-api">
                <h3>
                  API Penetration Testing
                </h3>
                <ul>
                  <li>Evaluate REST, SOAP, and GraphQL APIs</li>
                  <li>Test authentication, authorization, rate-limiting, data exposure, and injection flaws</li>
                  <li>Ensure secure integration with backend systems</li>
                </ul>
              </div>

              {/* Cloud Security Audit */}
              <div className="circular-icon icon-cloud">
                <i className="flaticon-cloud-computing"></i>
                <span className="icon-label">Cloud</span>
              </div>
              <div className="service-item service-purple service-cloud">
                <h3>
                  Cloud Security Audit
                </h3>
                <ul>
                  <li>Assess cloud infrastructure (AWS, Azure, GCP)</li>
                  <li>Review IAM policies, storage security, encryption, monitoring, and compliance requirements</li>
                  <li>Validate security posture against CIS benchmarks</li>
                </ul>
              </div>

              {/* Source Code Review */}
              <div className="circular-icon icon-source-code">
                <i className="flaticon-source-code"></i>
                <span className="icon-label">Code Review</span>
              </div>
              <div className="service-item service-green service-source-code">
                <h3>
                  Source Code Review
                </h3>
                <ul>
                  <li>Examine application code to identify security flaws and weak coding practices</li>
                  <li>Detect issues like injection, auth gaps, secrets exposure, and logic errors</li>
                  <li>Provide secure coding guidance and remediation</li>
                </ul>
              </div>

              {/* Red Teaming Services */}
              <div className="circular-icon icon-red-team">
                <i className="flaticon-hacker"></i>
                <span className="icon-label">Red Team</span>
              </div>
              <div className="service-item service-cyan service-red-team">
                <h3>
                  Red Teaming Services
                </h3>
                <ul>
                  <li>Active Directory Penetration Testing</li>
                  <li>Social Engineering</li>
                  <li>Physical Penetration Testing</li>
                  <li>OSINT (Open-Source Intelligence)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
