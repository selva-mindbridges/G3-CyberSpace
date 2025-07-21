import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import Link from "next/link";
import Image from "next/image";
import classes from "./style.module.css";
export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Professional Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Professional Services"
      />
      <br />
      <br />
      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/leadership.jpeg"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <h2>Expert security leadership</h2>
                  <p>
                    Empower your organization with expert leadership and
                    guidance in information security and data privacy through
                    our Virtual CISO (vCISO) and Virtual DPO (vDPO) services.
                    These professional services are designed to provide
                    strategic direction, ensure compliance, and strengthen your
                    overall security and privacy framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <h5 className={`${classes.center}`}>EXPERT SECURITY LEADERSHIP</h5>
            <h2 className={`${classes.center}`}>
              Tailored vCISO & vDPO solutions
            </h2>
            <br />
            <br />
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <h2>Virtual CISO (vCISO)</h2>
                  <p>
                    Our vCISO service delivers seasoned security leadership
                    on-demand. Whether you lack in-house expertise or need
                    additional strategic support, our vCISOs help you develop
                    and implement a robust information security program tailored
                    to your organization’s needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/virtual ciso.webp"
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

      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/vdpo.webp"
                  alt="Image"
                  width={498}
                  height={386}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <h2>Virtual DPO (vDPO)</h2>
                  <p>
                    Our vDPO service supports your organization in meeting data
                    privacy obligations with expert guidance and oversight.
                    Acting as your external Data Protection Officer, our vDPOs
                    ensure compliance with global privacy regulations such as
                    GDPR, CCPA, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* <div className="safety-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Cybersecurity Services</span>
            <h2>
              You Can Protect Your Organization’s Cybersecurity by Services Us
            </h2>
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

                  <Link href="/services/details">
                    <h3>Check Website Url</h3>
                  </Link>

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

                  <Link href="/services/details">
                    <h3>Check Emails Before Opening Them</h3>
                  </Link>

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

                  <Link href="/services/details">
                    <h3>Remember To Log Off</h3>
                  </Link>

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

                  <Link href="/services/details">
                    <h3>Choose Strong Passwords</h3>
                  </Link>

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

                  <Link href="/services/details">
                    <h3>Shop Safety In Trusted Websites</h3>
                  </Link>

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

                  <Link href="/services/details">
                    <h3>Update Your Antivirus</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
