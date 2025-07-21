"use client";
  
import React from "react";
import Image from "next/image";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Professionals</span>
            <h2>Meet Our Skilled Team</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <Image
                  src="/images/team/team-img-1.jpg"
                  alt="Image"
                  width={550}
                  height={600}
                />

                <div className="team-content">
                  <h3>Ciaran Sebastian</h3>
                  <span>Commercial Director</span>

                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <Image
                  src="/images/team/team-img-2.jpg"
                  alt="Image"
                  width={550}
                  height={600}
                />

                <div className="team-content">
                  <h3>Jendoubi Bayer</h3>
                  <span>Financial Officer</span>

                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <Image
                  src="/images/team/team-img-3.jpg"
                  alt="Image"
                  width={550}
                  height={600}
                />

                <div className="team-content">
                  <h3>Andrew Gleeson</h3>
                  <span>Chief Executive Officer</span>

                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
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

export default TeamMember;
