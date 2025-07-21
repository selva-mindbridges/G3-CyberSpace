import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import classes from "./style.module.css"
export default function Page() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="privacy-policy">
            <div className="title">
              <h2>G3 Privacy Policy</h2>
              <p>This policy was last updated {formattedDate}.</p>
            </div>

            <div className="privacy-content">
              <h3>Information collection</h3>
              <p>
                This Privacy Policy explains how G3 Cyberspace Pvt Ltd and its affiliate product Soltrisk (hereinafter referred to as “we”, “us”, “our”) may collect, use, store, disclose, discard, or otherwise process your data including personal data provided when using our websites and describes the rights you have with respect to your personal data. We are committed to providing the highest level of protection regarding the processing of their vendors’/clients’/customers’/job applicants’/website visitors’ personal data based on applicable data protection laws and regulations at respective locations. In general, you can visit our website without providing personal data. However, there are times when we will request personal data.
              </p>
            </div>

            <div className="privacy-content">
              <h3>Personal Data</h3>
              <p>
                In this Privacy Policy, “personal data” is any data which relates to an individual who may be identified from that data, or from a combination of a set of data, and other information which is or may be in possession of us, for instance information about your identity and contact details (such as name, email-ID, contact number).
              </p><br></br>
              <h3>Your rights in relation to personal data</h3>
              <ul>
                <li>
                  To access the personal data we hold about you.
                </li>
                <li>
                  To have your personal data corrected, for example, if it is incomplete or incorrect.
                </li>
                <li>
                  To opt out of receiving marketing communications at any time
                </li>
                <li>
                  To restrict or object to the processing of personal data or request erasing personal data (in certain circumstances and subject to applicable law)
                </li>
                <li>
                  To receive a copy of the personal data which you have provided to us (in certain circumstances and subject to applicable law)
                </li>
              </ul>
            </div>

            <div className="privacy-content">
              <h3>Purposes for which we process Personal Data</h3>
              <p>We may process your personal data for legitimate purposes as follows, but not limited to:</p>
              <ul>
                <li>
                  Marketing / promoting and providing products and services.
                </li>
                <li>
                  Monitoring and improving our website and its content.
                </li>
                <li>
                  Conducting market research and surveys with the aim of improving / demonstrating our products and services.
                </li>
                <li>
                  Complying with applicable local or foreign law, regulation, policy, voluntary codes, directive.
                </li>
                <li>
                  Establishing, exercising, or defending legal rights in connection with legal proceedings (including any prospective legal proceedings) and seeking professional or legal advice in relation to such legal proceedings.
                </li>
              </ul>

            </div>

            <div className="privacy-content">
              <h3>We process your personal data for the performance of the contracts, employment concluded with you, compliance with applicable legal or regulatory obligations or for legitimate interests to provide you with adequate and qualitative information about products and services and to prevent against any excessive risk.</h3>
              <br></br>
              <h3>Transfer of Personal Data</h3>
              <p>
                We may transfer personal data, to any other body corporate or a person located in any other country. We ensure that data protection is adhered to as per the global rules and regulations. The transfer may be allowed only if it is necessary for the performance of the lawful contract between us or any person on its behalf.
              </p>
            </div>

            <div className="privacy-content">
              <h3>Data Retention</h3>
              <p>
                Personal Data is important to us and we have invested significantly in technology and processes to protect the safeguarding and confidentiality of your personal data. If we engage external service providers to act as processor, we ensure that they adhere to the same standards as us. Irrespective of where your personal information is transferred or stored, we take all necessary steps to ensure that personal data is kept secure.
              </p>
            </div>

            <div className="privacy-content mb-0">
              <h3>Changes to this Privacy Policy</h3>
              <p className="mb-0">
                We may update this policy from time to time. The use of our Websites and any products and services supplied are subject to our Terms and Conditions.
              </p>
              <br></br>
              <h3>Contact Details</h3>
              <p>
                If you have any questions regarding this privacy policy or the protection of your personal data, you may reach out to our company representative at &nbsp;
                 <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@g3cyberspace.com
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${classes.emailCyber}`} 
                >
                   info@g3cyberspace.com
                </a>.
              </p>


            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}