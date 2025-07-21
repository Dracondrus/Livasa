"use client"

import brandImg1 from "../../../public/assets/img/brand/barnd-1.png";
import brandImg2 from "../../../public/assets/img/brand/barnd-2.png";
import brandImg3 from "../../../public/assets/img/brand/barnd-3.png";
import brandImg4 from "../../../public/assets/img/brand/barnd-4.png";
import brandImg5 from "../../../public/assets/img/brand/barnd-5.png";
import brandImg6 from "../../../public/assets/img/brand/barnd-6.png";
import Image from "next/image";
import Link from "next/link";

// Import Swiper components with autoplay module for slider functionality
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import brand images
const brandImages = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6
];

export default function BrandAreaOne() {
    return (
        <section className="tp-brand-area pt-110 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-brand-heading text-center">
                            <h4 className="tp-brand-title">10,000 Customers Trust Us!</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="tp-brand-slider">
                        <div className="tp-brand-active swiper">
                            <div className="swiper-wrapper slider-transtion d-flex align-items-center">
                                {/* Auto-scrolling brand logos slider */}
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    freeMode= {true}
                                    slidesPerView='auto'
                                    spaceBetween={90}
                                    centeredSlides={false}
                                    allowTouchMove={false}
                                    speed={2000}
                                    autoplay={{
                                        delay: 1,
                                        disableOnInteraction: true,
                                    }}
                                >
                                    {brandImages.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="tp-brand-item">
                                                <Link href="#">
                                                    <Image style={{width:"100%", height:"auto"}} src={src} alt={`brand-image-${index + 1}`} />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
