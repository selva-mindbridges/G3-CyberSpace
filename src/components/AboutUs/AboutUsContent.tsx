"use client";
  
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
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
                  <span>About Us</span>
                  <h2>
                  Securing What Drives Your Business—Systems, People, and Trust
                  </h2>
                </div>

                <Tabs>
                  <TabList>
                    <Tab>Our Experience</Tab>
                    <Tab>Why Us?</Tab>
                    <Tab>Our Approach</Tab>
                  </TabList>

                  <TabPanel>
                    <p>
                    {`At G3 Cyberspace, we help organizations navigate complex cybersecurity, data protection, and compliance demands with confidence. From securing digital infrastructure to managing third-party risks, our experts deliver tailored, actionable solutions across your entire ecosystem.
With deep domain knowledge and hands-on implementation experience, we empower businesses to:
.`}
                    </p>

                    <ul>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Build trust with secure systems and compliant practices
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Embed privacy and security into operations by design
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Evaluate and reduce third-party and contractual risks
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Prepare for audits and scale securely
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <p>
                    Our team brings over 20 years of deep industry experience in cybersecurity and compliance, combining strategic insight with hands-on execution to align with your business goals. Having supported organizations across sectors, we help you navigate complex challenges with clarity and confidence.
                    </p>

                    <ul>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Industry-tested frameworks and real-world implementation
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Proven track record across fintech, SaaS, healthcare, and more
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Advisory to execution—under one roof
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Scalable services for startups, enterprises, and cross-border entities
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <p>
                    We believe security and privacy should be embedded—not bolted on. Our approach is adaptive, outcome-driven, and grounded in global best practices.
                    </p>

                    <ul>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Risk-first: We assess what matters most to your business
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Customized: No one-size-fits-all templates—solutions tailored to your context
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Continuous: We support you beyond audits, ensuring sustained readiness
                      </li>
                      <li>
                        <i className="bx bx-check-circle"></i>
                        Collaborative: We work as an extension of your internal team
                      </li>
                    </ul>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
