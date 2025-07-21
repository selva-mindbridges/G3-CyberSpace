"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-sidebar">
        <div className="sidebar-widget search">
          <form className="search-form">
            <input
              className="form-control"
              name="search"
              placeholder="Search here"
              type="text"
            />
            <button className="search-button" type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>

        <div className="sidebar-widget recent-post">
          <h3 className="widget-title">Recent Post</h3>

          <ul>
            <li>
              <Link href="/blog/details">
                The essentiaaals of cybersecurity solutions
                <Image
                  src="/images/blog-details/recent-post-1.jpg"
                  alt="Image"
                  width={80}
                  height={80}
                />
              </Link>
              <span>September 19,2024</span>
            </li>
            <li>
              <Link href="/blog/details">
                Top 10 cybersecurity tips for working place
                <Image
                  src="/images/blog-details/recent-post-2.jpg"
                  alt="Image"
                  width={80}
                  height={80}
                />
              </Link>
              <span>September 18,2024</span>
            </li>
            <li>
              <Link href="/blog/details">
                Don’t forget caybersecurity on your computer
                <Image
                  src="/images/blog-details/recent-post-3.jpg"
                  alt="Image"
                  width={80}
                  height={80}
                />
              </Link>
              <span>September 09,2024</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-widget categories">
          <h3>Categories</h3>

          <ul>
            <li>
              <Link href="/blog">Cyber Security</Link>
            </li>
            <li>
              <Link href="/blog">Network Security</Link>
            </li>
            <li>
              <Link href="/blog">Threat Hunter</Link>
            </li>
            <li>
              <Link href="/blog">Incident Responder</Link>
            </li>
            <li>
              <Link href="/blog">Secure Managed IT</Link>
            </li>
            <li>
              <Link href="/blog">Server Monitoring</Link>
            </li>
            <li>
              <Link href="/blog">Penetration Testing</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-widget tags mb-0">
          <h3>Tags</h3>

          <ul>
            <li>
              <Link href="/blog">Cyber</Link>
            </li>
            <li>
              <Link href="/blog">Security</Link>
            </li>
            <li>
              <Link href="/blog">Network</Link>
            </li>
            <li>
              <Link href="/blog">Responder</Link>
            </li>
            <li>
              <Link href="/blog">Secure</Link>
            </li>
            <li>
              <Link href="/blog">Monitoring</Link>
            </li>
            <li>
              <Link href="/blog">Penetration</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
