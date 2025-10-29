"use client";
  
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div>
                <Image
                  src="/images/about-img.jpg"
                  alt="About Us"
                  width={600}
                  height={545}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div>
                <div className="mb-8">
                  <span className="text-primary text-lg font-semibold mb-4 block">
                    About Us
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading leading-tight">
                    Securing What Drives Your Business—Systems, People, and Trust
                  </h2>
                </div>

                <Tabs>
                  <TabList className="flex gap-4 mb-8 border-b border-gray-200">
                    <Tab className="px-6 py-3 font-semibold text-body cursor-pointer border-b-2 border-transparent hover:text-primary hover:border-primary transition-all outline-none react-tabs__tab--selected:text-primary react-tabs__tab--selected:border-primary">
                      Our Experience
                    </Tab>
                    <Tab className="px-6 py-3 font-semibold text-body cursor-pointer border-b-2 border-transparent hover:text-primary hover:border-primary transition-all outline-none react-tabs__tab--selected:text-primary react-tabs__tab--selected:border-primary">
                      Why Us?
                    </Tab>
                    <Tab className="px-6 py-3 font-semibold text-body cursor-pointer border-b-2 border-transparent hover:text-primary hover:border-primary transition-all outline-none react-tabs__tab--selected:text-primary react-tabs__tab--selected:border-primary">
                      Our Approach
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <p className="text-body leading-relaxed mb-6">
                      {`At G3 Cyberspace, we help organizations navigate complex cybersecurity, data protection, and compliance demands with confidence. From securing digital infrastructure to managing third-party risks, our experts deliver tailored, actionable solutions across your entire ecosystem.
With deep domain knowledge and hands-on implementation experience, we empower businesses to:`}
                    </p>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Build trust with secure systems and compliant practices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Embed privacy and security into operations by design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Evaluate and reduce third-party and contractual risks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Prepare for audits and scale securely</span>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <p className="text-body leading-relaxed mb-6">
                      Our team brings over 20 years of deep industry experience in cybersecurity and compliance, combining strategic insight with hands-on execution to align with your business goals. Having supported organizations across sectors, we help you navigate complex challenges with clarity and confidence.
                    </p>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Industry-tested frameworks and real-world implementation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Proven track record across fintech, SaaS, healthcare, and more</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Advisory to execution—under one roof</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Scalable services for startups, enterprises, and cross-border entities</span>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <p className="text-body leading-relaxed mb-6">
                      We believe security and privacy should be embedded—not bolted on. Our approach is adaptive, outcome-driven, and grounded in global best practices.
                    </p>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Risk-first: We assess what matters most to your business</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Customized: No one-size-fits-all templates—solutions tailored to your context</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Continuous: We support you beyond audits, ensuring sustained readiness</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                        <span className="text-body">Collaborative: We work as an extension of your internal team</span>
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
