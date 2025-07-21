"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedServices: React.FC = () => {
  return (
    <>
      <div className="related-post">
        {/* <div className="title">
          <h2>Key Offerings for Data Protection Compliance</h2>
          <p>A structured set of services designed to help you operationalize data privacy, reduce risk, and meet global compliance standards.</p>
        </div> */}

        <div className="services-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Key Offerings for Data Protection Compliance</h2>
              <span>
                A structured set of services designed to help you operationalize
                data privacy, reduce risk, and meet global compliance standards.
              </span>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    {/* <Link href="/services/details"> */}
                    <Image
                      src="/images/services/services-1.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">ISO 27001 implementation</Link> */}
                      Privacy readiness assessments
                    </h3>
                    <p>
                      Discover gaps in your data privacy practices and gain
                      clear, actionable plans to address vulnerabilities and
                      enhance compliance..
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    {/* <Link href="/services/details"> */}
                    <Image
                      src="/images/services/services-2.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">PCI DSS compliance</Link> */}
                      Regulatory Assessments
                    </h3>
                    <p>
                      Assess your organization’s compliance with privacy
                      regulations such as GDPR, CCPA, HIPAA, and others. We help
                      you understand your obligations and align your practices
                      with the latest legal requirements.
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    {/* <Link href="/services/details"> */}
                    <Image
                      src="/images/services/services-3.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">SOC 2 implementation services</Link> */}
                      Product Assessments
                    </h3>
                    <br />
                    <p>
                      Ensure your products are privacy-compliant by design. From
                      development to deployment, we assess privacy impacts and
                      offer recommendations to integrate data protection into
                      your product lifecycle.
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    {/* <Link href="/services/details"> */}
                    <Image
                      src="/images/services/services-4.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">GDPR compliance</Link> */}
                      Custom framework development
                    </h3>
                    <br />
                    <p>
                      Build a privacy framework tailored to your business
                      operations and industry standards, ensuring seamless
                      integration and compliance.
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    {/* <Link href="/services/details"> */}
                    <Image
                      src="/images/services/services-5.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">ISO 42001 implementation service</Link> */}
                      Third-Party privacy risk management
                    </h3>
                    <p>
                      Assess and mitigate privacy risks associated with vendors
                      and partners, ensuring third-party agreements align with
                      your organizational standards.
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    {/* <Link href="/services/details"> */}
                    <Image
                      src="/images/services/services-6.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">HIPPA implementation</Link> */}
                      Policy and Process Creation
                    </h3>
                    <p>
                      Develop and implement robust privacy policies, customized
                      to meet regulatory requirements effectively.
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    {/* <Link href="/services/details"> */}
                    <Image
                      src="/images/services/services-7.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                    {/* </Link> */}
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">ISO 9001 implementation</Link> */}
                      Data Lifecycle Management
                    </h3>
                    <p>
                      Securely manage personal data at every stage—collection,
                      storage, sharing, and disposal—to ensure compliance and
                      minimize risks.
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-services">
                  <div className="services-img">
                    <Link href="/services/details">
                      <Image
                        src="/images/services/services-8.jpg"
                        alt="Image"
                        width={550}
                        height={650}
                      />
                    </Link>
                  </div>

                  <div className="services-content">
                    <h3 className="text-white">
                      {/* <Link href="/services/details">Networking Security</Link> */}
                      Workforce Privacy Integration
                    </h3>
                    <p>
                      Empower your team with essential tools and strategies to
                      integrate privacy into your organizational culture and
                      daily operations.
                    </p>

                    {/* <Link href="/services/details" className="read-more">
                            Read more <i className="flaticon-right-arrow"></i>
                          </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-approach-area-three pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            {/* <span>Our Approach</span> */}
            <h2>Your Compliance Partner Across Global Privacy Laws</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-cybercrime"></i>
                  </div>

                  <h3>General Data Protection Regulation</h3>
                  {/* <p>
                               We start by understanding your business, identifying critical assets, and conducting a thorough risk assessment aligned with frameworks like ISO 27001 or NIST CSF.{" "}
                             </p> */}

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

                  <h3>California Consumer Protection Act</h3>
                  {/* <p>
                               We benchmark your current security posture against the target framework, identify control gaps, and define a remediation roadmap.{" "}
                             </p> */}

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

                  <h3>Digital Personal Data Protection Act</h3>
                  {/* <p>
                                Our experts help design and implement governance, technical, and operational controls tailored to your framework and regulatory obligations.{" "}
                             </p> */}

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

                  <h3>Health Insurance Portability & Accountability Act</h3>
                  {/* <p>
                               We don’t just stop at implementation. We set up monitoring systems, internal audits, and readiness checks to maintain and demonstrate compliance.{" "}
                             </p> */}

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

      <div className="our-approach-area-three">
        <div className="container">
          <div className="row mt-30">
            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-pin"></i>
                  </div>

                  <h3>Singapore - Personal Data Protection Law</h3>
                  {/* <p>
                                     We start by understanding your business, identifying critical assets, and conducting a thorough risk assessment aligned with frameworks like ISO 27001 or NIST CSF.{" "}
                                   </p> */}

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
                    <i className="flaticon-web-protection"></i>
                  </div>

                  <h3>Saudi Arabia - Personal Data Protection Law</h3>
                  {/* <p>
                                     We benchmark your current security posture against the target framework, identify control gaps, and define a remediation roadmap.{" "}
                                   </p> */}

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
                    <i className="flaticon-password"></i>
                  </div>

                  <h3>Qatar Financial Centre – Data Protection Regulations</h3>
                  {/* <p>
                                      Our experts help design and implement governance, technical, and operational controls tailored to your framework and regulatory obligations.{" "}
                                   </p> */}

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
                    <i className="flaticon-worldwide"></i>
                  </div>

                  <h3>
                    Dubai International Financial Centre – Data Protection
                    Regulation
                  </h3>
                  {/* <p>
                                     We don’t just stop at implementation. We set up monitoring systems, internal audits, and readiness checks to maintain and demonstrate compliance.{" "}
                                   </p> */}

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
    </>
  );
};

export default RelatedServices;
