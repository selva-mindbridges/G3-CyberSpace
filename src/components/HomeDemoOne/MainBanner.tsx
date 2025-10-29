"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-b border-gray-200" style={{backgroundImage: 'url(/images/banner/banner-bg-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4">
              <div className="py-20 md:py-32">
                <span className="inline-block text-[#217ca7] text-lg font-semibold mb-4">
                  Secure. Comply. Transform.
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Accelerate Growth—Backed by Cyber Resilience and Compliance
                </h1>
                <p className="text-white text-lg mb-8 leading-relaxed">
                  G3 Cyberspace helps organizations secure their digital landscape, manage third-party risks, and meet evolving compliance demands. From cybersecurity and privacy automation to regulatory readiness and TPRM, we deliver complete protection to drive secure, scalable growth.
                </p>

                <div>
                  <Link href="/contact" className="default-btn">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="w-full lg:w-1/2 px-4">
              <div className="py-10">
                <Image
                  src="/images/cybersecurity-concept-illustration.jpg"
                  alt="image"
                  width={900}
                  height={745}
                  className="rounded-3xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
