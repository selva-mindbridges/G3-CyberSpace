"use client";
  
import React from "react";
import Image from "next/image";

const CyberSafety: React.FC = () => {
  return (
    <>
      <div className="safety-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Cyber Safety</span>
            <h2>How Can We Keep Uur Website Safe FRom Cyber Crimes</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-1.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3>Check Website Url</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-2.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3>Check Emails Before Opening Them</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-3.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3>Remember To Log Off</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-4.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3>Choose Strong Passwords</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-5.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3>Shop Safety In Trusted Websites</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-6.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3>Update Your Antivirus</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety-shape-1 shape-three">
          <Image
            src="/images/safety-shape-1.png"
            alt="Image"
            width={257}
            height={152}
          />
        </div>
        <div className="safety-shape-2 shape-three">
          <Image
            src="/images/safety-shape-2.png"
            alt="Image"
            width={137}
            height={51}
          />
        </div>
        <div className="safety-shape-3 shape-three">
          <Image
            src="/images/safety-shape-3.png"
            alt="Image"
            width={170}
            height={109}
          />
        </div>
      </div>
    </>
  );
};

export default CyberSafety;
