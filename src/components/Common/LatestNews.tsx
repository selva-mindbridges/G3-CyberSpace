"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-12">
            <span className="text-primary text-lg font-semibold mb-4 block">
              Latest News
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading">
              Read The Latest Articles From Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="w-full max-w-sm">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="overflow-hidden">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-4.jpg"
                      alt="Blog Image"
                      width={810}
                      height={500}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                </div>

                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">September 20, 2024</span>
                  <h3 className="mt-3 mb-0">
                    <Link href="/blog/details" className="text-xl font-bold text-heading hover:text-primary transition-colors">
                      The Security Risks of Changing Package Owners
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="overflow-hidden">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-5.jpg"
                      alt="Blog Image"
                      width={810}
                      height={500}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                </div>

                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">September 19, 2024</span>
                  <h3 className="mt-3 mb-0">
                    <Link href="/blog/details" className="text-xl font-bold text-heading hover:text-primary transition-colors">
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="overflow-hidden">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-6.jpg"
                      alt="Blog Image"
                      width={810}
                      height={500}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                </div>

                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">September 18, 2024</span>
                  <h3 className="mt-3 mb-0">
                    <Link href="/blog/details" className="text-xl font-bold text-heading hover:text-primary transition-colors">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
