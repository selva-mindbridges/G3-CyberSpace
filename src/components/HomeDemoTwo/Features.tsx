"use client";
  
import React from "react";

const Features: React.FC = () => {
  return (
    <>
      <div className="feature-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>AI-Powered Risk Intelligence</h3>
                  </div>
                  <p>
                    Our AI analyzes control gaps and vendor behavior to highlight key risks and drive smarter decisions across your ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>Continuous Assurance Engine</h3>
                  </div>
                  <p>
                    Automate control validation and evidence checks in real time — keeping your compliance posture always visible and audit-ready.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Unified Risk & Compliance</h3>
                  </div>
                  <p>
                    Assess, monitor, and report in one platform. G3SEC.ai replaces siloed tools with a centralized, AI-powered compliance workspace.
                  </p>
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
