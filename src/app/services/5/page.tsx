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
    pageTitle="Managed Security Operations Center (SOC)"
    homePageUrl="/"
    homePageText="Home"
    activePageText="SOC"
    leftAlignedLayout={true}
  />

  <div className="about-us-area pt-100 pb-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-content">
            <div className="about-title">
              <h4>ABOUT</h4>
              <h4>Why Do You Need a Managed SOC?</h4>
              <p>
                {`24×7 threat detection, rapid response and automated incident orchestration — so your business stays 
ahead of cyber risk.`}
              </p>
              <p>
                {`In today's hyper-connected world, threats evolve faster than traditional security can react. Our Managed SOC Services combine intelligent automation, threat intelligence, and expert analysts to continuously monitor and secure your digital assets.`}
              </p>
              <p>
                {`Whether on-prem, in the cloud, or hybrid, G3 Cyberspace helps you stay resilient — detecting incidents early, containing attacks rapidly, and aligning with global cybersecurity standards.`}
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="about-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/Soc-image.png"
              alt="SOC Image"
              width={600}
              height={400}
              style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="feature-area feature-area-two pt-100 pb-70">
    <div className="container">
      <div className="row justify-content-center">
        {/* 1. 24×7 Threat Detection */}
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature overly-one soc-card" style={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <div className="overly-two" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="title" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flexShrink: 0 }}>
                  <Image src="/images/images/Soc-1.svg" alt="Icon" width={60} height={60} />
                </div>
                <h3 style={{ margin: '0', lineHeight: '1.3', textAlign: 'left' }}>24×7 Threat Detection</h3>
              </div>
              <p>
                {`Our SOC delivers uninterrupted monitoring through AI-driven analytics and skilled security analysts. Real-time correlation and automated alerting enable rapid identification, validation, and containment of emerging threats before they escalate.`}
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

        {/* 2. Advanced Threat Intelligence */}
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature overly-one soc-card" style={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <div className="overly-two" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="title" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flexShrink: 0 }}>
                  <Image src="/images/images/soc-2.svg" alt="Icon" width={60} height={60} />
                </div>
                <h3 style={{ margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Advanced Threat Intelligence</h3>
              </div>
              <p>
                {`AI-driven intelligence and behavioral analytics help anticipate and neutralize evolving threats including ransomware, DDoS attacks, and targeted cyber intrusions.`}
              </p>
              <div className="feature-shape">
                <Image
                  src="/images/feature-shape.png"
                  alt="Image"
                  width={230}
                  height={202}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Centralized Visibility & Dashboards */}
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature overly-one soc-card" style={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <div className="overly-two" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="title" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flexShrink: 0 }}>
                  <Image src="/images/images/Soc-3.svg" alt="Icon" width={60} height={60} />
                </div>
                <h3 style={{ margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Centralized Visibility & Dashboards</h3>
              </div>
              <p>
                {`Unified dashboards provide complete situational awareness, enabling faster incident triage, improved response coordination, and data-driven security insights.`}
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

        {/* 4. Incident Lifecycle Management */}
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature overly-one soc-card" style={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <div className="overly-two" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="title" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flexShrink: 0 }}>
                  <Image src="/images/images/soc-4.svg" alt="Icon" width={60} height={60} />
                </div>
                <h3 style={{ margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Incident Lifecycle Management</h3>
              </div>
              <p>
                {`Built-in case management tracks incidents end-to-end with detailed logs, audit trails, and workflow automation ensuring compliance and accountability.`}
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

        {/* 5. Secure Log Management & Retention */}
        <div className="col-lg-4 col-sm-6">
          <div className="single-feature overly-one soc-card" style={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <div className="overly-two" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="title" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flexShrink: 0 }}>
                  <Image src="/images/images/soc-5.svg" alt="Icon" width={60} height={60} />
                </div>
                <h3 style={{ margin: '0', lineHeight: '1.3', textAlign: 'left' }}>Secure Log Management & Retention</h3>
              </div>
              <p>
                {`Comprehensive log collection and retention maintain forensic readiness and ensure ongoing compliance with industry and regulatory standards.`}
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

  <Footer />
</>
);
}