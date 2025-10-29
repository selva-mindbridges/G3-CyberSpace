"use client";
  
import React from "react";
import Image from "next/image";

const Protects: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div>
                <div className="mb-12">
                  <span className="text-primary text-lg font-semibold mb-4 block">
                    Cybersecurity That Enables Resilience
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading leading-tight">
                    From risk assessments to implementation—we cover every step of your cybersecurity journey.
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                      <i className="flaticon-database text-4xl text-primary mb-4 block"></i>
                      <h3 className="text-xl font-bold text-heading mb-3">
                        Framework Implementation
                      </h3>
                      <p className="text-body leading-relaxed">
                        Align with ISO 27001, SOC 2, and HIPAA using tailored controls and expert support.
                      </p>
                      <span className="absolute -bottom-4 -right-4 text-8xl opacity-5 flaticon-database"></span>
                    </div>
                  </div>

                  <div className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                      <i className="flaticon-application text-4xl text-primary mb-4 block"></i>
                      <h3 className="text-xl font-bold text-heading mb-3">
                        VAPT Services
                      </h3>
                      <p className="text-body leading-relaxed">
                        Identify and remediate vulnerabilities in web, mobile, network, and cloud systems.
                      </p>
                      <span className="absolute -bottom-4 -right-4 text-8xl opacity-5 flaticon-application"></span>
                    </div>
                  </div>

                  <div className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                      <i className="flaticon-security text-4xl text-primary mb-4 block"></i>
                      <h3 className="text-xl font-bold text-heading mb-3">
                        Policy & Controls
                      </h3>
                      <p className="text-body leading-relaxed">
                        Draft, refine, and enforce policies that meet internal and regulatory standards.
                      </p>
                      <span className="absolute -bottom-4 -right-4 text-8xl opacity-5 flaticon-security"></span>
                    </div>
                  </div>

                  <div className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                      <i className="flaticon-security-1 text-4xl text-primary mb-4 block"></i>
                      <h3 className="text-xl font-bold text-heading mb-3">
                        Awareness & Response
                      </h3>
                      <p className="text-body leading-relaxed">
                        Train your teams and establish clear processes for incident handling and recovery.
                      </p>
                      <span className="absolute -bottom-4 -right-4 text-8xl opacity-5 flaticon-security-1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/Cybersecurity That Enables Resilience.png"
                  alt="Image"
                  width={600}
                  height={700}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protects;
