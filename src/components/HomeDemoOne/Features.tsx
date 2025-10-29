"use client";
  
import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-6">
            <div className="w-full max-w-sm">
              <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="p-8">
                  <div className="mb-6">
                    <i className="flaticon-testing text-5xl text-primary mb-4 block"></i>
                    <h3 className="text-xl font-bold text-heading">
                      Cybersecurity & Data Privacy Services
                    </h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    Implement ISO 27001, SOC 2, HIPAA, and other standards through gap assessments, control design, policy development, and audit prep.
                  </p>
                  <div className="absolute -bottom-10 -right-10 opacity-10 transition-all duration-500 group-hover:opacity-20">
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

            <div className="w-full max-w-sm">
              <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="p-8">
                  <div className="mb-6">
                    <i className="flaticon-cybercrime text-5xl text-primary mb-4 block"></i>
                    <h3 className="text-xl font-bold text-heading">
                      Virtual CISO / DPO Services
                    </h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    Get expert-led cybersecurity and privacy guidance through flexible vCISO/vDPO models—covering strategy, governance, and compliance.
                  </p>
                  <div className="absolute -bottom-10 -right-10 opacity-10 transition-all duration-500 group-hover:opacity-20">
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

            <div className="w-full max-w-sm">
              <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="p-8">
                  <div className="mb-6">
                    <i className="flaticon-cyber-security text-5xl text-primary mb-4 block"></i>
                    <h3 className="text-xl font-bold text-heading">
                      Data Privacy Implementation
                    </h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    Implement privacy-by-design, ROPA, DSAR handling, and compliance with GDPR, DPDP, PDPL, and more.
                  </p>
                  <div className="absolute -bottom-10 -right-10 opacity-10 transition-all duration-500 group-hover:opacity-20">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <div className="w-full max-w-sm">
              <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="p-8">
                  <div className="mb-6">
                    <i className="flaticon-testing text-5xl text-primary mb-4 block"></i>
                    <h3 className="text-xl font-bold text-heading">
                      Regulatory & Legal Advisory
                    </h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    Draft, review, and align security and privacy policies, DPAs, NDAs, and compliance documents for audit and legal assurance.
                  </p>
                  <div className="absolute -bottom-10 -right-10 opacity-10 transition-all duration-500 group-hover:opacity-20">
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

            <div className="w-full max-w-sm">
              <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="p-8">
                  <div className="mb-6">
                    <i className="flaticon-cybercrime text-5xl text-primary mb-4 block"></i>
                    <h3 className="text-xl font-bold text-heading">
                      Penetration Testing (VAPT)
                    </h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    Simulate real-world attacks to identify vulnerabilities across web, mobile, APIs, cloud, and infrastructure.
                  </p>
                  <div className="absolute -bottom-10 -right-10 opacity-10 transition-all duration-500 group-hover:opacity-20">
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

            <div className="w-full max-w-sm">
              <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="p-8">
                  <div className="mb-6">
                    <i className="flaticon-cyber-security text-5xl text-primary mb-4 block"></i>
                    <h3 className="text-xl font-bold text-heading">
                      Training & Workshops
                    </h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    Deliver role-based security and privacy workshops to build internal accountability and readiness across teams.
                  </p>
                  <div className="absolute -bottom-10 -right-10 opacity-10 transition-all duration-500 group-hover:opacity-20">
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
