"use client";

import React from "react";

const GetInTouchForm: React.FC = () => {
  return (
    <>
      <div className="ptb-100 bg-gradient-to-r from-primary to-blue-600 relative overflow-hidden" style={{backgroundImage: 'url(/images/get-in-touch-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="section-title text-center mb-12">
            <span className="text-white text-lg font-semibold mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Contact Us Today To Speak With An Expert About Your Specific Needs
            </h2>
          </div>

          <form
            id="contactForm"
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="w-full md:col-span-2">
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="text"
                    cols={30}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
              </div>

              <div className="w-full md:col-span-2 text-center">
                <button type="submit" className="bg-white text-primary font-bold py-4 px-8 rounded hover:bg-gray-100 transition-all duration-300 inline-block">
                  Request Consultation
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInTouchForm;
