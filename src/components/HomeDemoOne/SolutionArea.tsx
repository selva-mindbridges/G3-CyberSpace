"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionArea: React.FC = () => {
  return (
    <>
      <div className="pb-70">
        <div className="max-w-full mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="py-8">
                <div className="mb-12">
                  <span className="text-primary text-lg font-semibold mb-4 block">
                    Always-On Expertise That Grows With You
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading leading-tight">
                    Flexible, expert-driven support to guide your cybersecurity and compliance journey.
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="group relative bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 hover:shadow-lg transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-heading mb-3 hover:text-primary transition-colors">
                        <Link href="/solutions/details">
                          Strategic Advisory Support
                        </Link>
                      </h3>
                      <p className="text-body leading-relaxed mb-4">
                        Guidance on security strategy, control implementation, and audit readiness—delivered by certified experts 
                      </p>
                      <span className="absolute top-6 right-6 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        01
                      </span>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 hover:shadow-lg transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-heading mb-3 hover:text-primary transition-colors">
                        <Link href="/solutions/details">
                          Policy & Documentation Review
                        </Link>
                      </h3>
                      <p className="text-body leading-relaxed mb-4">
                        Review and align your internal policies, procedures, and compliance documentation to meet evolving regulatory expectations and audit benchmarks.
                      </p>
                      <span className="absolute top-6 right-6 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        02
                      </span>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 hover:shadow-lg transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-heading mb-3 hover:text-primary transition-colors">
                        <Link href="/solutions/details">
                          Retainer-Based Advisory Support
                        </Link>
                      </h3>
                      <p className="text-body leading-relaxed mb-4">
                        Partner with us on a retainer model to access ongoing support across compliance planning, security posture reviews, board reporting, and operational decision-making.
                      </p>
                      <span className="absolute top-6 right-6 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        03
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-0">
              <div className="h-full flex items-center justify-center">
                <Image
                  src="/images/solution-img.png"
                  alt="Image"
                  width={875}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionArea;
