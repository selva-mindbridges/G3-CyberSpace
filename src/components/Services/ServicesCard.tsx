"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import classes from "./style.module.css";

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <span>Cybersecurity Services</span>
            <h2>Our Framework Implementation Services</h2>
          </div>

          {/* add  carousel */}
          <div className="certificate-carousel mb-5">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              modules={[Navigation, Autoplay]}
              className={classes.certificateSwiper}
            >
              {[...Array(8)].map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className={classes.certificateItem}>
                    <Image
                      src={`/images/carousel/certificate-${idx + 1}.png`}
                      alt={`Certificate ${idx + 1}`}
                      width={140}
                      height={140}
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>


            {/* <Swiper
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
              autoplay={{
                delay: 300,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[Autoplay]}
              className="certificate-swiper"
            >
              {[...Array(8)].map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className={classes.certificateItem}>
                    <Image
                      src={`/images/carousel/certificate-${idx + 1}.png`}
                      alt={`Certificate ${idx + 1}`}
                      width={140}
                      height={140}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  {/* <Link href="/services/details"> */}
                  <Image
                    src="/images/services/services-1.jpg"
                    alt="Image"
                    width={550}
                    height={650}
                  />
                  {/* </Link> */}
                </div>

                <div className="services-content">
                  <h3 className="text-white">
                    {/* <Link href="/services/details">ISO 27001 implementation</Link> */}
                    ISO 27001
                  </h3>
                  <p>
                    Achieve robust information security management with ISO
                    27001.
                  </p>

                  {/* <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  {/* <Link href="/services/details"> */}
                  <Image
                    src="/images/services/services-2.jpg"
                    alt="Image"
                    width={550}
                    height={650}
                  />
                  {/* </Link> */}
                </div>

                <div className="services-content">
                  <h3 className="text-white">
                    {/* <Link href="/services/details">PCI DSS compliance</Link> */}
                    PCI DSS
                  </h3>
                  <p>
                    Ensure your organization meets PCI DSS standards for payment
                    security.
                  </p>

                  {/* <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  {/* <Link href="/services/details"> */}
                  <Image
                    src="/images/services/services-3.jpg"
                    alt="Image"
                    width={550}
                    height={650}
                  />
                  {/* </Link> */}
                </div>

                <div className="services-content">
                  <h3 className="text-white">
                    {/* <Link href="/services/details">SOC 2 implementation services</Link> */}
                    SOC 2
                  </h3>
                  <br />
                  <p>Achieve compliance with SOC 2 standards effortlessly.</p>

                  {/* <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  {/* <Link href="/services/details"> */}
                  <Image
                    src="/images/services/services-4.jpg"
                    alt="Image"
                    width={550}
                    height={650}
                  />
                  {/* </Link> */}
                </div>

                <div className="services-content">
                  <h3 className="text-white">
                    {/* <Link href="/services/details">GDPR compliance</Link> */}
                    GDPR
                  </h3>
                  <br />
                  <p>Navigate the complexities of GDPR with expert guidance.</p>

                  {/* <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  {/* <Link href="/services/details"> */}
                  <Image
                    src="/images/services/services-5.jpg"
                    alt="Image"
                    width={550}
                    height={650}
                  />
                  {/* </Link> */}
                </div>

                <div className="services-content">
                  <h3 className="text-white">
                    {/* <Link href="/services/details">ISO 42001 implementation service</Link> */}
                    ISO 42001
                  </h3>
                  <p>
                    Achieve compliance with ISO 42001 standards to enhance
                    resilience.
                  </p>

                  {/* <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  {/* <Link href="/services/details"> */}
                  <Image
                    src="/images/services/services-6.jpg"
                    alt="Image"
                    width={550}
                    height={650}
                  />
                  {/* </Link> */}
                </div>

                <div className="services-content">
                  <h3 className="text-white">
                    {/* <Link href="/services/details">HIPPA implementation</Link> */}
                    HIPPA
                  </h3>
                  <p>
                    Ensure compliance with HIPPA standards for healthcare
                    organizations.
                  </p>

                  {/* <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  {/* <Link href="/services/details"> */}
                  <Image
                    src="/images/services/services-7.jpg"
                    alt="Image"
                    width={550}
                    height={650}
                  />
                  {/* </Link> */}
                </div>

                <div className="services-content">
                  <h3 className="text-white">
                    {/* <Link href="/services/details">ISO 9001 implementation</Link> */}
                    ISO 9001
                  </h3>
                  <p>
                    Achieve quality management excellence with ISP 9001
                    services.
                  </p>

                  {/* <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-8.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Networking Security</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                    do.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
