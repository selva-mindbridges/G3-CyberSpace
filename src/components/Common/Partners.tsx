"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="ptb-100 bg-gray-50">
        <div className="container mx-auto px-4">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-carousel"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#" target="_blank" className="block">
                  <Image
                    src="/images/partner/partner-1-1.png"
                    alt="Partner"
                    width={140}
                    height={140}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#" target="_blank" className="block">
                  <Image
                    src="/images/partner/partner-2-2.png"
                    alt="Partner"
                    width={140}
                    height={140}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#" target="_blank" className="block">
                  <Image
                    src="/images/partner/partner-3-3.png"
                    alt="Partner"
                    width={140}
                    height={140}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#" target="_blank" className="block">
                  <Image
                    src="/images/partner/Mindbridge-black-logo.png"
                    alt="Partner"
                    width={140}
                    height={140}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#" target="_blank" className="block">
                  <Image
                    src="/images/partner/E Logo 2.png"
                    alt="Partner"
                    width={140}
                    height={140}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
