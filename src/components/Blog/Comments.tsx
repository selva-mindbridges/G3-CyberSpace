"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Comments: React.FC = () => {
  return (
    <>
      <div className="comments">
        <h3>Comments (2)</h3>

        <ul>
          <li>
            <Image
              src="/images/blog-details/comments-img-1.jpg"
              alt="Image"
              width={75}
              height={75}
            />
            <h3>Juanita Jones</h3>
            <span>Monday, September 20, 2024</span>

            <p>
              Lorem ipsum dolora sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incdidunt labore et dolore magna aliqua. Veniam
              quis nostrud exercitation ullaco laboris
            </p>

            <Link href="#">Reply</Link>
          </li>

          <li>
            <Image
              src="/images/blog-details/comments-img-2.jpg"
              alt="Image"
              width={75}
              height={75}
            />
            <h3>Ward F. Nelson</h3>
            <span>Monday, September 20, 2024</span>

            <p>
              Lorem ipsum dolora sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incdidunt labore et dolore magna aliqua. Veniam
              quis nostrud exercitation ullaco laboris
            </p>

            <Link href="#">Reply</Link>
          </li>
        </ul>
      </div>

      <div className="leave-reply">
        <h3>Leave a reply</h3>
        <p>
          Your email address will not be published. Required fields are marked
          <span className="star">*</span>
        </p>

        <form>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <label>
                  Name<span className="star">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <label>
                  Email Address<span className="star">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Your Website</label>
                <input
                  type="text"
                  name="your-website-link"
                  id="your-website-link"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Comment</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows={8}
                ></textarea>
              </div>
            </div>

            <div className="col-12">
              <div className="form-group">
                <input type="checkbox" id="chb2" />
                <span>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <button type="submit" className="default-btn page-btn">
                <span>Post A Comment</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comments;
