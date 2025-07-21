"use client";
  
import React from "react";
import Image from "next/image";

const OurApproach: React.FC = () => {
  return (
    <>
      <div className="our-approach-area-three pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Approach</span>
            <h2>How Can I Protect My Website From Cyber Attacks</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-key"></i>
                  </div>
                  <h3>Identifying Threats</h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>
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
                  <h3>Keep Software Updated</h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>
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
                  <h3>Check Website URL</h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>
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
                  <h3>Use Antivirus Software</h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>
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

        <div className="approach-right-shape shape-three">
          <Image
            src="/images/approach-right-shape.png"
            alt="Image"
            width={149}
            height={162}
          />
        </div>
      </div>
    </>
  );
};

export default OurApproach;
