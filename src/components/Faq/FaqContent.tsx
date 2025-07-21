"use client";
  
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="faq-area white-bg ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <Image
                  
                  alt="Image"src="/images/blue-faq.jpg"
                  width={595}
                  height={565}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <div className="faq-title">
                  <h2>Frequently Asked Questions</h2>
                  <span>Just Find Your Answers Below</span>
                </div>

                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is TRACS?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        TRACS (Third-Party Risk & Assurance Control Systems) is a modular platform developed by G3SEC.ai to streamline and automate third-party risk management across security, compliance, privacy, and ESG domains. It supports risk-tiered assessments, lifecycle tracking, and continuous monitoring.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does TRACS help manage third-party risk more effectively?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        TRACS enables organizations to move from manual, spreadsheet-based processes to intelligent, automated workflows. It provides dynamic questionnaires, risk scoring, pre- and post-contract control tracking, and integrations with external risk feeds — all in one system.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I customize the questionnaires used in TRACS?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes. TRACS supports both built-in, industry-aligned templates (HIPAA, ISO, SEBI, GDPR, DPDP, etc.) and fully customizable questionnaires. You can also set up domain-specific assessments (e.g., Privacy, ESG, Cybersecurity) and trigger them based on vendor profile or risk level.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Does TRACS support post-contract compliance monitoring?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely. TRACS is designed for full lifecycle management. It monitors contract-linked obligations, SLA performance, control expiry, and policy adherence — ensuring that vendors remain compliant well after onboarding.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                       Can TRACS integrate with our existing GRC or procurement tools?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes. TRACS offers API-based integrations and prebuilt connectors to synchronize with GRC systems, procurement platforms, risk data providers, and internal dashboards.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  {/* <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can i safely browse the internet?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui in, illo blanditiis quisquam quam asperiores
                        veritatis, earum quibusdam laudantium distinctio dolore
                        placeat recusandae ratione maxime odit delectus nobis
                        doloribus quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui in, illo blanditiis
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem> */}
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-right-shape shape-three">
          <Image
            src="/images/faq-right-shape.png"
            alt="Image"
            width={130}
            height={224}
          />
        </div>
      </div>
    </>
  );
};

export default FaqContent;
