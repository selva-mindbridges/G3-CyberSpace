"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionArea: React.FC = () => {
  return (
    <>
      <div className="solution-area pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <span>Always-On Expertise That Grows With You</span>
                  <h2>
                    Flexible, expert-driven support to guide your cybersecurity and compliance journey.
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            Strategic Advisory Support
                          </Link>
                        </h3>
                        <p>
                          Guidance on security strategy, control implementation, and audit readiness—delivered by certified experts 
                        </p>
                        <span>01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            Policy & Documentation Review
                          </Link>
                        </h3>
                        <p>
                          Review and align your internal policies, procedures, and compliance documentation to meet evolving regulatory expectations and audit benchmarks.
                        </p>
                        <span>02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            Retainer-Based Advisory Support
                          </Link>
                        </h3>
                        <p>
                          Partner with us on a retainer model to access ongoing support across compliance planning, security posture reviews, board reporting, and operational decision-making.
                        </p>
                        <span>03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="solution-img">
                <Image
                  src="/images/solution-img.png"
                  alt="Image"
                  width={875}
                  height={700}
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
