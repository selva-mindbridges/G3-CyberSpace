"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-100 pb-70 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden" style={{backgroundImage: 'url(/images/footer-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <Link href="/" className="block mb-6">
                  <Image
                    src="/images/footer-logo.png"
                    alt="G3 CyberSpace Logo"
                    width={150}
                    height={42}
                    className="h-auto"
                  />
                </Link>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Empowering organizations worldwide to navigate cybersecurity, data protection, and compliance with confidence. 
                </p>

                <ul className="flex gap-3">
                  <li>
                    <a href="https://www.instagram.com/g3cyberspace?igsh=cXUyenR0amQzMjFt" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300">
                      <i className="bx bxl-instagram text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/g3-cyberspace-pvt-ltd/" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300">
                      <i className="bx bxl-linkedin-square text-xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Address</h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <i className="bx bxs-location-plus text-primary text-xl flex-shrink-0 mt-1"></i>
                    <span>4th floor, Tek Towers, Rajiv Gandhi Salai, OMR, Customs Colony, Sakthi Nagar, Thoraipakkam, Tamil Nadu 600097</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <i className="bx bxs-envelope text-primary text-xl"></i>
                    <a href="mailto:info@g3cyberspace.com" className="hover:text-primary transition-colors">info@g3cyberspace.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Services</h3>

                <ul className="space-y-3">
                  <li>
                    <Link href="/services/3/" className="text-gray-300 hover:text-primary hover:pl-2 transition-all duration-300 block">
                      Cybersecurity Assessments
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details/" className="text-gray-300 hover:text-primary hover:pl-2 transition-all duration-300 block">
                      Data Protection Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/2/" className="text-gray-300 hover:text-primary hover:pl-2 transition-all duration-300 block">
                      Professional Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/" className="text-gray-300 hover:text-primary hover:pl-2 transition-all duration-300 block">
                      VAPT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Resources</h3>

                <ul className="space-y-3">
                  <li>
                    <Link href="/services/details" className="text-gray-300 hover:text-primary hover:pl-2 transition-all duration-300 block">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions" className="text-gray-300 hover:text-primary hover:pl-2 transition-all duration-300 block">
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-400 text-center md:text-left">
                Copyright &copy; {currentYear} G3 CyberSpace. All rights reserved.
              </p>
            </div>

            <div>
              <ul className="flex gap-6">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
