"use client"
import Image from "next/image";
import propertyImg1 from "../../../../../public/assets/img/property/property-details-3/property-details-4.jpg"
import propertyImg2 from "../../../../../public/assets/img/property/property-details-3/property-details-5.jpg"
import propertyImg3 from "../../../../../public/assets/img/property/property-details-3/property-details-6.jpg"
import propertyImg4 from "../../../../../public/assets/img/property/property-details-3/property-details-7.jpg"

// Import Swiper components and Scrollbar module
import { Swiper, SwiperSlide } from "swiper/react";

const sliderImage = [
    { id: 1, image: propertyImg1 },
    { id: 2, image: propertyImg2 },
    { id: 3, image: propertyImg3 },
    { id: 4, image: propertyImg4 },
    { id: 5, image: propertyImg2 },
]

export default function PropertyDetailsSliderTwo() {

    return (
        <div className="tp-property-details-slider-two mb-50">
            <div className="tp-property-details-two swiper">
                <div className="swiper-wrapper ">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        loop={true}
                        breakpoints={{
                            '1400': { slidesPerView: 4 },
                            '1200': { slidesPerView: 4 },
                            '768': { slidesPerView: 2 },
                            '576': { slidesPerView: 1 },
                            '0': { slidesPerView: 1 },
                        }}
                    >
                        {
                            sliderImage.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="tp-property-details-slider-thumb">
                                        <Image src={item.image} alt="property image" />
                                    </div>
                                </SwiperSlide>
                            ))

                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}