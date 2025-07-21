"use client";
  
import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

const BlogColumnOne: React.FC = () => {
  return (
    <>
      <div className="blog-column-one-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single-blog-posts">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog/blog-4.jpg"
                        alt="Image"
                        width={810}
                        height={500}
                      />
                    </Link>

                    <div className="single-blog-content">
                      <span>Security</span>

                      <h3>
                        <Link href="/blog/details">
                          The Essentials of Cybersecurity Solutions
                        </Link>
                      </h3>

                      <p>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euis mod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        consectetuer adipiscing elit
                      </p>

                      <ul className="admin">
                        <li>
                          <Link href="#">
                            <i className="bx bx-user-circle"></i>
                            Posted by: Carl Bradshaw
                          </Link>
                        </li>
                        <li className="float">
                          <i className="bx bx-calendar-alt"></i>
                          September 20, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-blog-posts">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog/blog-5.jpg"
                        alt="Image"
                        width={810}
                        height={500}
                      />
                    </Link>

                    <div className="single-blog-content">
                      <span>Security</span>

                      <h3>
                        <Link href="/blog/details">
                          Top 10 Cybersecurity Tips For Working Place
                        </Link>
                      </h3>

                      <p>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euis mod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        consectetuer adipiscing elit
                      </p>

                      <ul className="admin">
                        <li>
                          <Link href="#">
                            <i className="bx bx-user-circle"></i>
                            Posted by: William Gordon
                          </Link>
                        </li>
                        <li className="float">
                          <i className="bx bx-calendar-alt"></i>
                          September 19, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-blog-posts">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog/blog-6.jpg"
                        alt="Image"
                        width={810}
                        height={500}
                      />
                    </Link>

                    <div className="single-blog-content">
                      <span>Security</span>

                      <h3>
                        <Link href="/blog/details">
                          Cloud Network Detection And Rsponse
                        </Link>
                      </h3>

                      <p>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euis mod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        consectetuer adipiscing elit
                      </p>

                      <ul className="admin">
                        <li>
                          <Link href="#">
                            <i className="bx bx-user-circle"></i>
                            Posted by: Brian Eortiz
                          </Link>
                        </li>
                        <li className="float">
                          <i className="bx bx-calendar-alt"></i>
                          September 18, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-blog-posts">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog/blog-7.jpg"
                        alt="Image"
                        width={810}
                        height={500}
                      />
                    </Link>

                    <div className="single-blog-content">
                      <span>Security</span>

                      <h3>
                        <Link href="/blog/details">
                          Don’t Forget Cybersecurity on Your Computer
                        </Link>
                      </h3>

                      <p>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euis mod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        consectetuer adipiscing elit
                      </p>

                      <ul className="admin">
                        <li>
                          <Link href="#">
                            <i className="bx bx-user-circle"></i>
                            Posted by: Daniel Brady
                          </Link>
                        </li>
                        <li className="float">
                          <i className="bx bx-calendar-alt"></i>
                          September 17, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-blog-posts">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog/blog-8.jpg"
                        alt="Image"
                        width={810}
                        height={500}
                      />
                    </Link>

                    <div className="single-blog-content">
                      <span>Security</span>

                      <h3>
                        <Link href="/blog/details">
                          Top 5 Cybersecurity Threats in 2024
                        </Link>
                      </h3>

                      <p>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euis mod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        consectetuer adipiscing elit
                      </p>

                      <ul className="admin">
                        <li>
                          <Link href="#">
                            <i className="bx bx-user-circle"></i>
                            Posted by: Bradshaw
                          </Link>
                        </li>
                        <li className="float">
                          <i className="bx bx-calendar-alt"></i>
                          September 16, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <a href="#" className="prev page-numbers">
                      <i className="bx bx-chevron-left"></i>
                    </a>

                    <span className="page-numbers current" aria-current="page">
                      1
                    </span>
                    <a href="#" className="page-numbers">
                      2
                    </a>
                    <a href="#" className="page-numbers">
                      3
                    </a>

                    <a href="#" className="next page-numbers">
                      <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogColumnOne;
