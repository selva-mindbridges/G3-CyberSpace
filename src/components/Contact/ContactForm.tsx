"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="main-contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact-wrap">
                <div className="contact-form">
                  <div className="contact-title">
                    <h2>Write Us</h2>
                  </div>

                  <form id="contactForm"
                            action="https://formspree.io/f/myzpkgyb" 
                            method="POST"                  
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
                          <label>Email Address</label>
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
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            name="text"
                            className="form-control"
                            cols={30}
                            rows={5}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn btn-two">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-info">
                <h3>Our contact details</h3>
                <p>
                  Empowering organizations worldwide to navigate cybersecurity, data protection, and compliance with confidence.
                </p>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    <span>Address</span>
                    4th floor, Tek Towers, Rajiv Gandhi Salai, OMR, Customs Colony, Sakthi Nagar, Thoraipakkam, Tamil Nadu 600097
                  </li>
                  {/* <li>
                    <i className="bx bxs-phone-call"></i>
                    <span>Phone</span>
                    <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                    <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
                  </li> */}
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <span>Email</span>
                    <a href="mailto:info@g3cyberspace.com">info@g3cyberspace.com</a>
                    {/* <a href="#">skype: example</a> */}
                  </li>
                </ul>

                <div className="sidebar-follow-us">
                  <h3>Follow us:</h3>

                  <ul className="social-wrap">
                    {/* <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
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
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
