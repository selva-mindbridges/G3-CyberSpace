"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="ptb-100 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden" style={{backgroundImage: 'url(/images/testimonials-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="block text-center text-primary text-lg font-semibold mb-8">
              What our customers say
            </span>

            <Swiper
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Navigation]}
              className="testimonials-carousel"
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg p-8 md:p-12 text-center shadow-xl">
                  <i className="flaticon-quote text-5xl text-primary mb-6 block"></i>
                  <p className="text-body text-lg leading-relaxed mb-8 italic">
                    "Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat."
                  </p>

                  <ul className="flex justify-center gap-2 mb-6">
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-heading mb-2">Jastin Anderson</h3>
                  <span className="text-body">CEO</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg p-8 md:p-12 text-center shadow-xl">
                  <i className="flaticon-quote text-5xl text-primary mb-6 block"></i>
                  <p className="text-body text-lg leading-relaxed mb-8 italic">
                    "G3 Cyberspace guided us through a smooth ISO 27001:2022 transition with clear, hands-on support across risk assessment, documentation, and audit prep. Their expertise made certification seamless."
                  </p>

                  <ul className="flex justify-center gap-2 mb-6">
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star text-yellow-400 text-xl"></i>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-heading mb-2">Ahmed Iqbal Sheriff, VP</h3>
                  <span className="text-body">20Cube Logistics</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
