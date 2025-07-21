"use client";

import React from "react";
import Image from "next/image";

const GetInTouchFormTwo: React.FC = () => {
  return (
    <>
      <div className="get-in-touch-area get-in-touch-area-two bg-color ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Get In Touch</span>
            <h2>
              Accelerate Governance with AI-Powered Automation
            </h2>
          </div>

          <form
            id="contactForm" 
            className="get-in-touch-form"
          >
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="number"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              {/* <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    required
                  />
                </div>
              </div> */}

              {/* <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="text"
                    cols={30}
                    rows={5}
                    className="form-control"
                    required
                  />
                </div>
              </div> */}

              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="default-btn">
                  Book Your Demo
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="get-in-touch-shape">
          <Image
            src="/images/get-in-touch-shape.png"
            alt="Image"
            width={512}
            height={512}
          />
        </div>
      </div>
    </>
  );
};

export default GetInTouchFormTwo;
