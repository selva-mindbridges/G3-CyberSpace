"use client";
  
import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="counter-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="counter-max-wide">
            <div className="section-title white-title">
              {/* <span>Why Choose Us</span> */}
              <h2 className="text-start">Tired of managing third party risk assesments through endless emails and manual steps?</h2>
              <span>TRACS simplifies it all - AI-driven onboarding,dynamic assessments, and real-time oversight in one secure platform.</span>
            </div>

            {/* <div className="row"> */}
           
              <div className="col-lg-12 col-sm-6 text-center">
                {/* <div className="single-counter overly-one"> */}
                  {/* <div className="overly-two"> */}
                    {/* <i className="flaticon-authentication"></i> */}
                    <button className="book-now-button">
                    BOOK NOW
                    <span className="arrow">&#8250;</span>
                    </button>
                  {/* </div> */}
                {/* </div> */}
              </div>
           

              {/* <div className="col-lg-6 col-sm-6">
                <div className="single-counter overly-one">
                  <div className="overly-two">
                    <i className="flaticon-reliability"></i>
                    <h2>1000</h2>
                    <h3>Trusted Organizations</h3>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-lg-6 col-sm-6">
                <div className="single-counter overly-one">
                  <div className="overly-two">
                    <i className="flaticon-web-protection"></i>
                    <h2>567</h2>
                    <h3>Website Protection</h3>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-lg-6 col-sm-6">
                <div className="single-counter overly-one">
                  <div className="overly-two">
                    <i className="flaticon-innovation"></i>
                    <h2>
                      100<span className="target">%</span>
                    </h2>
                    <h3>Innovative Technology</h3>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default WhyChooseUs;
