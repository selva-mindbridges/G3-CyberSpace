"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./style.module.css"

const SolutionsCard: React.FC = () => {
  return (
    <>

     <div className="about-us-area">
        <div className="container mt-5">
          <h2>Simplify Complex Vendor Risk with TRACS-Smarter Assessments, Strong Assurance</h2>
          <div className="row align-items-center">
            <br />
            <br />
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <br />
                  <br />
                  <p>
                   Managing a modern, scalable Third-Party Risk Management (TPRM) program is more complex than ever. As your organization grows and your network of vendors, suppliers, and partners expands, so do the risks that come with them.
                  </p>

                  <p>
                    From cybersecurity threats and data privacy concerns to ESG obligations and regulatory demands — every third-party relationship brings potential exposure. And with limited teams, manual tools, and mounting pressure, keeping up with risk assessments before and after contracts are signed can quickly become overwhelming.
                  </p>

                  <p>
                    Say goodbye to disconnected spreadsheets and time-consuming processes. TRACS transforms how you manage third-party risk — delivering intelligent automation, tailored assessments, and full lifecycle oversight to help your teams move faster, stay compliant, and make confident decisions.
                  </p>
            </div>
              </div>
            </div>
            

            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                className="mt-4"
                  src="/images/TRACS.png"
                  alt="Image"
                  width={498}
                  height={386}                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="counter-area pt-100 pb-70 jarallax mt-5">
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

      <div className="feature-area feature-area-two pt-100 pb-70">
              <div className="container">
                <div className="row justify-content-center">
                   <h2 className={`${classes.textCenter}`}>Streamline Your Third-Party Risk Lifecycle with TRACS</h2>
                   <br />
                   <p className={`${classes.textCenter}`}>
                    The TRACS platform automates every stage of your TPRM process — from onboarding to post-contract assurance — enabling repeatable, efficient, and risk-aligned workflows.
                   </p>
                   <br />
                  <div className="col-lg-4 col-sm-6 mt-4">    
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-testing"></i>
                          <h3>Smart Vendor Discovery</h3>
                        </div>
                        <p>
                        Identify and profile vendors by geography, service type, and data access to initiate risk-aligned assessments.
                        </p>
                        <div className="feature-shape">
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
      
                  <div className="col-lg-4 col-sm-6 mt-4">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-cybercrime"></i>
                          <h3>Automated Risk Tiering</h3>
                        </div>
                        <p>
                          Automatically classify vendors into low, medium, or high-risk tiers to prioritize reviews and tailor assessments.
                        </p>
                        <div className="feature-shape">
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
      
                  <div className="col-lg-4 col-sm-6 mt-4">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-cyber-security"></i>
                          <h3>Risk-Based Onboarding Flows</h3>
                        </div>
                        <p>
                        Automate pre-contract steps including document collection, NDA exchange, and questionnaire delivery based on vendor risk and domain.
                        </p>
                        <div className="feature-shape">
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
      
      
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-testing"></i>
                          <h3>End-to-End Risk Control Management</h3>
                        </div>
                        <p>
                           Ensure key risks are mitigated before contracts are signed, and continue monitoring compliance obligations throughout the vendor lifecycle.
                        </p>
                        <div className="feature-shape">
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
      
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-cybercrime"></i>
                          <h3>Continuous Vendor Performance Insights</h3>
                        </div>
                        <p>
                           Continuously assess vendor performance using SLA metrics, user feedback, and reassessment triggers for underperformance.
                        </p>
                        <div className="feature-shape">
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
      
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-feature overly-one">
                      <div className="overly-two">
                        <div className="title">
                          <i className="flaticon-cyber-security"></i>
                          <h3>Automated SLA & Obligation Monitoring</h3>
                        </div>
                        <p>
                          Monitor service levels, compliance milestones, and policy expirations with automated reminders and dashboard visibility.
                        </p>
                        <div className="feature-shape">
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


      <div className="about-us-area mt-4">
        <div className="container">
          <h2 className={`${classes.textCenter}`}>Smart Questionnaire Automation</h2>
          <br />
          <br />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/Smart questionnaire.jpg"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <h2>Trigger assessments based on risk level and business context</h2>
                  <br />
                  <span>
                    TRACS helps you automate vendor assessments with smart, targeted questionnaires:
                  </span>
                  
                    <p>• Deploy risk-tiered templates (High, Medium, Low) based on inherent risk scoring. </p>
                   
                    <p>• Use pre-built modules for Privacy, ESG, Cybersecurity, Legal, and BCP.</p>
                    
                    <p>• Auto-trigger relevant questionnaires based on vendor profile, geography, or service type.</p>
                
                  <p><strong>Results:</strong> Vendors receive only the questions that matter — saving time, improving accuracy, and ensuring complete risk coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <br />
            <br />
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>Risk-Based Questionnaire Scoping</h2>
                     <br />
                     <strong>Assess what matters, based on risk</strong>
                  <span>
                    Automate questionnaire workflows using:
                  </span>
                  <p>•	Inherent risk logic for questionnaire depth</p>
<p>•	Risk-tiered templates (Low / Medium / High)</p>
<p>•	Auto-assignment to internal reviewers based on domain</p>
                  <p><strong>Results:</strong> Faster reviews, focused resources, reduced assessment fatigue.</p>
                
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/Risk Based Questionnaire Scoping.jpg"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="about-us-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/AI Driven Evidence Review.jpg"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>AI-Driven Evidence Review</h2>
                     <br />
                     <strong>Accelerate document validation with intelligence</strong>
                  <span>
                    Stop manual reviews of SOC 2s, policies, and certifications.
                  </span>
                  <p>•	Automatically match uploads with control expectations</p>
<p>•	Flag outdated or missing documents</p>
<p>•	Suggest follow-ups based on content gaps</p>
                  <p><strong>Results:</strong> Reduce review time from days to minutes — with zero compromise on quality.</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <br />
            <br />
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>Post-Contract Compliance Monitoring</h2>
                     <br />
                     <strong>Don’t stop at onboarding — monitor continuously</strong>
                  <span>
                   Track vendor obligations after the contract is signed:
                  </span>
                  <p>• Set recurring check-ins or reviews</p>
<p>•	Automate alerts for expiring docs or policy gaps</p>
<p>•	Trigger reassessments upon major changes</p>
                  <p><strong>Results:</strong> Stay in control through the full lifecycle — not just the beginning.</p>
                
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/POst contract compliance monitoring.png"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="about-us-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/Global COmpliance support.png"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>Global Compliance Support</h2>
                     <br />
                     <strong>Meet regulations across geographies and sectors</strong>
                  <span>
                    TTRACS supports assessment and reporting alignment with:
                  </span>
                  <p>•	HIPAA, SEBI, ISO/IEC 27001, ISO 27701</p>
<p>•	DPDP Act (India), GDPR, DORA, NIS2</p>
<p>•	UAE, Qatar, Oman, and KSA privacy laws</p>
                  <p><strong>Results:</strong> Be audit-ready and regulation-compliant from Day 1.</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <br />
            <br />
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>360° Risk Intelligence Integration</h2>
                     <br />
                     <strong>Bring in external signals for deeper insights</strong>
                  <span>
                    TRACS connects to:
                  </span>
                  <p>•	Cyber ratings</p>
<p>•	ESG, financial, and reputational data</p>
<p>•	Blacklists, sanctions, and threat feeds</p>
                  <p><strong>Results:</strong> Make smarter decisions with contextual, real-time third-party insights.</p>
                
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/360 degree compliance.png "
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="about-us-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/Enterprise ready integrations & API.jpg"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>Enterprise-Ready Integrations & API</h2>
                     <br />
                     <strong>Connect your GRC ecosystem</strong>
                  <span>
                  Use our prebuilt APIs and connectors to:
                  </span>
                  <p>•	Push/pull data to GRC tools and internal dashboards</p>
<p>•	Trigger tasks from ticketing or procurement systems </p>
<p>•	Export assessments for auditors and stakeholders</p>
                  <p><strong>Results:</strong> Integrate TPRM into your daily operations — no silos.</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <br />
            <br />
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>Visual Dashboards & Reporting</h2>
                     <br />
                     <strong>Real-time visibility for every role</strong>
                  <span>
                    From operational users to C-level execs, TRACS provides:
                  </span>
                  <p>•	Role-based dashboards and insights</p>
<p>•	Progress tracking, SLA reminders, and overdue flags </p>
<p>• Export-ready reports for board and regulator updates</p>
                  <p><strong>Results:</strong> One interface, total transparency.</p>
                
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/Visual Dashboards & reporting.jpg"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-area mb-5 mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/TRACS/User roles & workflow automation.jpg"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                     <h2>User Roles & Workflow Automation</h2>
                     <br />
                     <strong>Designed for security, legal, and procurement teams</strong>
                  <span>
                    Assign responsibilities and approvals with:
                  </span>
                  <p>• Deploy risk-tiered templates (High, Medium, Low) based on inherent risk scoring.</p>
                  <p>• Use pre-built modules for Privacy, ESG, Cybersecurity, Legal, and BCP.</p>
                  <p>• Auto-trigger relevant questionnaires based on vendor profile, geography, or service type.</p>
                  <p><strong>Results:</strong> Governance built-in, with traceability and accountability.</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsCard;
