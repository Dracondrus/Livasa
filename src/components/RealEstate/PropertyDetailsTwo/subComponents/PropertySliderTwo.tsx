"use client";

import smallThumb1 from "../../../../../public/assets/img/property/property-details-2/property-thumb-small-1.jpg";
import smallThumb2 from "../../../../../public/assets/img/property/property-details-2/property-thumb-small-2.jpg";
import smallThumb3 from "../../../../../public/assets/img/property/property-details-2/property-thumb-small-3.jpg";
import smallThumb4 from "../../../../../public/assets/img/property/property-details-2/property-thumb-small-4.jpg";
import thumb1 from "../../../../../public/assets/img/property/property-details-2/property-thumb-big-1.jpg";
import thumb2 from "../../../../../public/assets/img/property/property-details-2/property-thumb-big-2.jpg";
import thumb3 from "../../../../../public/assets/img/property/property-details-2/property-thumb-big-3.jpg";
import thumb4 from "../../../../../public/assets/img/property/property-details-2/property-thumb-big-4.jpg";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import Image, { StaticImageData } from "next/image";
import { useRef, useEffect } from "react";
import Slider from "react-slick";

interface IPropertyItem {
    bigImg: StaticImageData;
    title:string;
    address:string | undefined;
    price:number;
}

export default function PropertySliderTwo({ property = {} as IFeaturedPropertyDT}) {
    const properties: IPropertyItem[] = [
        { 
            bigImg: thumb1,
            title: property.title,
            address: property.address,
            price: property.price,
        },
        { 
            bigImg: thumb2,
            title: property.title,
            address: property.address,
            price: property.price,
        },
        { 
            bigImg: thumb3,
            title: property.title,
            address: property.address,
            price: property.price,
        },
        { 
            bigImg: thumb4,
            title: property.title,
            address: property.address,
            price: property.price,
        }
    ];

    const thumbnails: StaticImageData[] = [
        smallThumb1,
        smallThumb2,
        smallThumb3,
        smallThumb4
    ];

    const mainSliderRef = useRef<Slider>(null);
    const thumbSliderRef = useRef<Slider>(null);

    // **Main Slider Settings**
    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: thumbSliderRef.current || undefined
    };

    // **Thumbnail Slider Settings**
    const thumbnailSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current || undefined,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        centerPadding: "5px",
        arrows: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "15px",
                },
            },
        ],
    };

    // Handle thumbnail click
    const handleThumbClick = (index: number) => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(index);
        }
    };

    // Sync sliders after component mounts
    useEffect(() => {
        if (mainSliderRef.current && thumbSliderRef.current) {
            // Force re-render of sliders to ensure proper sync
            mainSliderRef.current.slickGoTo(0);
            thumbSliderRef.current.slickGoTo(0);
        }
    }, []);

    return (
        <>
            {/* Main Slider */}
            <Slider
                ref={mainSliderRef}
                {...mainSliderSettings}
                className="tp-slider-5-active"
            >
                {properties.map((property, index) => (
                    <div key={index}>
                        <div
                            className="tp-slider-5-bg"
                            style={{
                                backgroundImage: `url(${property.bigImg.src})`,
                            }}
                        >
                            <div className="container container-custom">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="tp-slider-5-wrapper d-flex align-items-end pb-140">
                                            <div className="tp-slider-5-heading p-relative z-index-1">
                                                <h4 className="tp-slider-5-title">{property?.title}</h4>
                                                <span>{property?.address}</span>
                                                <h4 className="tp-slider-5-price">${property?.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Thumbnail Slider */}
            <div className="slider tp-slider-5-arrow">
                <Slider
                    ref={thumbSliderRef}
                    {...thumbnailSliderSettings}
                >
                    {thumbnails.map((thumb, index) => (
                        <div key={index} className="tp-slider-5-next">
                            <div className="tp-slider-5-thumb-sm" onClick={() => handleThumbClick(index)} style={{ cursor: "pointer" }}>
                                <Image
                                    src={thumb}
                                    alt={`property thumbnail ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}