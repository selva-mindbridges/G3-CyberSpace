"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="logo">
                  <Image
                    src="/images/footer-logo.png"
                    alt="Image"
                    width={150}
                    height={42}
                  />
                </Link>

                <p>
                  Empowering organizations worldwide  

                  to navigate cybersecurity, data protection,  

                  and compliance with confidence. 
                </p>

                <ul className="social-icon">
                  {/* <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.instagram.com/g3cyberspace?igsh=cXUyenR0amQzMjFt" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/g3-cyberspace-pvt-ltd/" target="_blank">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                  {/* <li>
                  <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    4th floor, Tek Towers, Rajiv Gandhi Salai, OMR, Customs Colony, Sakthi Nagar, Thoraipakkam, Tamil Nadu 600097 
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:info@g3cyberspace.com"> info@g3cyberspace.com </a>
                    {/* <a href="#" target="_blank">
                      skype: example
                    </a> */}
                  </li>
                  {/* <li>
                    <i className="bx bxs-phone-call"></i>
                    <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                    <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="import-link">
                  <li>
                    <Link href="/services/3/">Cybersecurity Assessments </Link>
                  </li>
                  <li>
                    <Link href="/services/details/">Data Protection Services </Link>
                  </li>
                  <li>
                    <Link href="/services/2/">Professional Services  </Link>
                  </li>
                  <li>
                    <Link href="/services/">VAPT</Link>
                  </li>
                  {/* <li>
                    <Link href="/solutions/details">Enterprise Networks</Link>
                  </li>
                  <li>
                    <Link href="/solutions/details">Collaboration</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Resources</h3>

                <ul className="import-link">
                  <li>
                    <Link href="/services/details">
                      Blogs 
                    </Link>
                  </li>
                 {/* <li>
                    <Link href="/services/details">Security Advisories</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Security News</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li> */}
                  <li>
                    <Link href="/solutions">Case Studies</Link>
                  </li>
                  {/* <li>
                    <Link href="/contact">User Guides</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright &copy; {currentYear} G3 CyberSpace.
                 {/* Designed{" "}
                <a href="https://envytheme.com/" target="_blank">
                  EnvyTheme
                </a> */}
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul className="footer-menu">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                {/* <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
