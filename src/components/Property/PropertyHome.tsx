"use client"
// import PropertySingleCard from "../Common/PropertySingleCard";
import { propertyData } from "@/data/propertyData";
import React from "react";

// Import Swiper components and Pagination module
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function PropertyHome() {
  return (
    <section className="tp-rent-area p-relative pt-135 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-rent-heading text-center mb-50">
              <span className="tp-section-title-pre">Featured Listings</span>
              <h3 className="tp-section-title">Property for sell and rent </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-1600">
        <div className="row">
          <div className="tp-rent-slider">
            <div className="tp-rent-slider-active pb-rent-slider swiper">
              <div className="pb-110 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={4}
                  spaceBetween={30}
                  loop={true}
                  freeMode={true}
                  breakpoints={{
                    1400: { slidesPerView: 4 },
                    1200: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    576: { slidesPerView: 1 },
                    0: { slidesPerView: 1 },
                  }}
                  pagination={{
                    el: ".tp-rent-slider-dot",
                    clickable: true,
                  }}
                >
                  {propertyData.slice(0, 5).map((item) => (
                    <SwiperSlide key={item.id}>
                     
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="tp-rent-slider-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
