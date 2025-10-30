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
        pageTitle="IT Infrastructure Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="IT Infrastructure Services"
        leftAlignedLayout={true}
      />

      <div className="about-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="about-content">
                <div className="about-title">
                  <h4>ABOUT</h4>
                  <h4>Why Do You Need IT Infrastructure Services?</h4>
                  <p>
                    Build a reliable, secure, and scalable IT foundation that powers your business operations — from end-user devices to data centers and cloud-connected environments. We support enterprises to design and manage IT infrastructure that ensures agility, uptime, and performance. Our integrated approach spans network operations, virtualization, data management, and service integration — enabling organizations to run seamlessly across on-prem, hybrid, and cloud environments.
                    <b> Strengthen your IT infrastructure today!</b>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="about-img mb_30">
                <Image
                  src="/images/cyber-03.webp"
                  alt="IT Infrastructure Services"
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
                    alt="End-User & Network Operations"
                    width={105}
                    height={88}
                  />

                  <h3>End-User & Network Operations</h3>

                  <p>
                    Centralized management of devices and network infrastructure through our Network Operations Center (NOC), ensuring real-time visibility, reliability, and proactive issue resolution.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-2.png"
                    alt="Data Center & Virtualization Management"
                    width={105}
                    height={88}
                  />

                  <h3>Data Center & Virtualization Management</h3>

                  <p>
                    Design, operate, and optimize critical data center environments using scalable virtualization frameworks and automation to improve efficiency and uptime.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-3.png"
                    alt="Storage & Data Management"
                    width={105}
                    height={88}
                  />

                  <h3>Storage & Data Management</h3>

                  <p>
                    Deliver secure storage, backup, and database administration services that guarantee data integrity, availability, and disaster-recovery readiness.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-4.png"
                    alt="Cloud Computing & Collaboration"
                    width={105}
                    height={88}
                  />

                  <h3>Cloud Computing & Collaboration</h3>

                  <p>
                    Enable seamless collaboration and productivity through cloud-ready infrastructure, hybrid lift-and-shift models, and modern communication platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-5.png"
                    alt="Service Integration & Administration"
                    width={105}
                    height={88}
                  />

                  <h3>Service Integration & Administration</h3>

                  <p>
                    Provide continuous infrastructure monitoring, performance tuning, and ITIL-aligned maintenance to sustain operational excellence and business continuity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-6.png"
                    alt="IT Infrastructure Excellence"
                    width={105}
                    height={88}
                  />

                  <h3>IT Infrastructure Excellence</h3>

                  <p>
                    Comprehensive infrastructure optimization and best practices implementation to ensure your IT systems deliver maximum business value and reliability.
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

