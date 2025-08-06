"use client";
import featureShape from "../../../public/assets/img/feature/feature-shape.png";
import featureBg from "../../../public/assets/img/feature/feature-bg.png";
import featureIcon1 from "../../../public/assets/img/feature/icon-1.png";
import featureIcon2 from "../../../public/assets/img/feature/icon-2.png";
import featureIcon3 from "../../../public/assets/img/feature/icon-3.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
    { id: 1, title: "Buy a property", icon: featureIcon1, link: "/property-details-1", delay: "0.3s" },
    { id: 2, title: "Sell a property", icon: featureIcon2, link: "/dashboard/add-new-property", delay: "0.7s" },
    { id: 3, title: "Rent a property", icon: featureIcon3, link: "/dashboard/add-new-property", delay: "0.3s" },
];

export default function FeatureShowcaseCategory() {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);

    return (
        <section className="tp-feature-area p-relative pt-140 pb-110" style={{ backgroundImage: `url(${featureBg.src})` }}>
            <div className="container">
                <div className="row">
                    {/* Display individual feature item */}
                    {features.map((feature, index) => (
                        <div className="col-lg-4 col-sm-6" key={feature.id}>
                            <div
                                className={`tp-feature-item p-relative mb-30 wow fadeIn${index === 0 ? "Left" : index === 1 ? "Up" : "Right"} ${activeIndex === index ? "active" : ""}`}
                                data-wow-duration="1s"
                                data-wow-delay={feature.delay}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className="tp-feature-item-shape">
                                    <Image style={{ width: "100%", height: "auto" }} src={featureShape} alt="feature shape" />
                                </div>
                                <div className="tp-feature-item-content">
                                    <div className="tp-feature-item-icon">
                                        <Image src={feature.icon} alt={feature.title} />
                                    </div>
                                    <h4>
                                        <Link href={feature.link}>{feature.title}</Link>
                                    </h4>
                                </div>
                                <div className="tp-feature-item-btn">
                                    <Link href={feature.link}>
                                        <span>
                                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
