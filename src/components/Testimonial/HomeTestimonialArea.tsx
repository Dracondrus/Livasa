"use client"
import testimonialBg from "../../../public/assets/img/testimonial/testimonail-bg.png";
import { testimonials_home } from "@/data/testimonialData";
import HomeTestimonialItem from "./subComponents/HomeTestimonialItem";

// Import Swiper components and Pagination module
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function HomeTestimonialArea() {
    return (
        <section
            className="tp-testimonial-area pt-140 pb-135 include-bg"
            style={{ backgroundImage: `url(${testimonialBg.src})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-testimonial-heading text-center">
                            <h3 className="tp-section-title">
                                What people are saying about <br /> our real estate
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="tp-testimonial-slider-active swiper">
                    <div className="pb-80">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            loop={true}
                            breakpoints={{
                                '1400': { slidesPerView: 3 },
                                '1200': { slidesPerView: 3 },
                                '768': { slidesPerView: 2 },
                                '576': { slidesPerView: 1 },
                                '0': { slidesPerView: 1 },
                            }}
                            pagination={{
                                el: ".tp-testimonial-slider-dot",
                                clickable: true,
                            }}
                        >
                            {testimonials_home.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <HomeTestimonialItem {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="tp-testimonial-slider-dot"></div>
                </div>
            </div>
        </section>
    );
}
