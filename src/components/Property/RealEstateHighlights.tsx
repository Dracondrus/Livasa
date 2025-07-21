"use client";
import { featureProps } from "@/types/custom-interface";
import featureThumb1 from "../../../public/assets/img/feature/home-2/feature-thumb-1.jpg";
import featureThumb2 from "../../../public/assets/img/feature/home-2/feature-thumb-2.jpg";
import featureThumb3 from "../../../public/assets/img/feature/home-2/feature-thumb-3.jpg";
import FeatureArrowIcon from "../SVG/PropertySvg/FeatureArrowIcon";
import Image from "next/image";
import Link from "next/link";

export default function RealEstateHighlights({ sectionClass, paddingClass, bgColor }: featureProps) {
    return (
        <section className={`${sectionClass ? sectionClass : "tp-feature-2-area"} 
        ${paddingClass ? paddingClass : "pt-140"} pb-110 `} style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="tp-feature-2-item mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="tp-feature-2-item-heading d-flex justify-content-between align-items-center">
                                <h3 className="tp-feature-2-item-title"><Link href="/property-style-2">Find your future <br /> home</Link></h3>
                                <span><Link href="/property-style-2"><FeatureArrowIcon /></Link></span>
                            </div>
                            <div className="tp-feature-2-item-content d-flex align-items-center">
                                <span className="tp-feature-2-item-date">Mar 12 <i>2024</i></span>
                                <Image src={featureThumb1} alt="feature image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-feature-2-item active mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="tp-feature-2-item-heading d-flex justify-content-between align-items-center">
                                <h3 className="tp-feature-2-item-title"><Link href="/property-style-2">Buy or rent <br /> house</Link></h3>
                                <span><Link href="/property-style-2"><FeatureArrowIcon /></Link></span>
                            </div>
                            <div className="tp-feature-2-item-content d-flex align-items-center">
                                <span className="tp-feature-2-item-date">Mar 12 <i>2024</i></span>
                                <Image src={featureThumb2} alt="feature image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-feature-2-item mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                            <div className="tp-feature-2-item-heading d-flex justify-content-between align-items-center">
                                <h3 className="tp-feature-2-item-title"><Link href="/property-style-2">List your own <br /> property</Link></h3>
                                <span><Link href="/property-style-2"><FeatureArrowIcon /></Link></span>
                            </div>
                            <div className="tp-feature-2-item-content d-flex align-items-center">
                                <span className="tp-feature-2-item-date">Mar 12 <i>2024</i></span>
                                <Image src={featureThumb3} alt="feature image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



