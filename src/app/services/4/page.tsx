import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Cloud Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cloud Services"
        leftAlignedLayout={true}
      />

      <div className="about-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="about-content">
                <div className="about-title">
                  <h4>ABOUT</h4>
                  <h4>Why Do You Need Cloud Services?</h4>
                  <p>
                    Accelerate your digital transformation with scalable, secure, and optimized cloud solutions — designed for performance and compliance. Our Cloud Services help enterprises migrate, manage, and secure workloads across private, public, and hybrid environments. From architecture and deployment to governance and cost optimization, G3 Cyberspace delivers full-stack cloud enablement built on trust, resilience, and continuous improvement.
                    <b> Secure your cloud infrastructure today!</b>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="about-img mb_30">
                <Image
                  src="/images/cyber-03.webp"
                  alt="Cloud Services"
                  width={498}
                  height={386}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="safety-area section-spacing white-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-1.png"
                    alt="Advisory & Consulting"
                    width={105}
                    height={88}
                  />

                  <h3>Advisory & Consulting</h3>

                  <p>
                    Expert guidance to design the right cloud strategy, architecture, and roadmap tailored to your business goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-2.png"
                    alt="Migration & Modernization"
                    width={105}
                    height={88}
                  />

                  <h3>Migration & Modernization</h3>

                  <p>
                    Seamless transition of workloads to cloud environments with minimal downtime and enhanced scalability.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-3.png"
                    alt="Infrastructure Services"
                    width={105}
                    height={88}
                  />

                  <h3>Infrastructure Services</h3>

                  <p>
                    Build and manage secure, high-performance cloud infrastructure that powers enterprise agility and uptime.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-4.png"
                    alt="Cloud Security & Governance"
                    width={105}
                    height={88}
                  />

                  <h3>Cloud Security & Governance</h3>

                  <p>
                    Protect your cloud assets with integrated identity, compliance, and policy-driven governance frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-5.png"
                    alt="Managed Cloud Operations"
                    width={105}
                    height={88}
                  />

                  <h3>Managed Cloud Operations</h3>

                  <p>
                    24×7 monitoring, optimization, and support to keep your cloud environment reliable, compliant, and cost-efficient.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-6.png"
                    alt="Cloud Excellence"
                    width={105}
                    height={88}
                  />

                  <h3>Cloud Excellence</h3>

                  <p>
                    Continuous optimization and innovation to ensure your cloud investment delivers maximum business value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

