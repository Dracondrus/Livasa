"use client"
import aboutThumb from "../../../public/assets/img/about/home-4/about-4-thumb.jpg";
import { useVideoModal } from "@/provider/VideoProvider";
import { CircleCheckSvg } from "../SVG";
import VideoSvg from "../SVG/VideoSvg";
import StarSvg from "../SVG/StarSvg";
import Image from "next/image";
import Link from "next/link";

export default function AboutHomeFour() {
    const { playVideo } = useVideoModal();
    return (
        <section className="tp-about-4-ptb pt-140 pb-140">
            <div className="container">
                <div className="row">
                    {/* Image Section */}
                    <div className="col-lg-6">
                        <div
                            className="tp-about-4-thumb image-anime wow fadeInLeft"
                            data-wow-duration="1s"
                            data-wow-delay=".3s"
                        >
                            <Image
                                src={aboutThumb}
                                alt="About Us Thumbnail"
                                priority
                            />
                            <div className="tp-about-4-thumb-video-box">
                                <button onClick={() => playVideo("293438220", "vimeo")} className="tp-about-4-thumb-video popup-video">
                                    <span>
                                        <VideoSvg width="12" height="14" />
                                    </span>
                                </button>
                            </div>
                            <div className="tp-about-4-thumb-box">
                                <h4 className="tp-about-4-thumb-title">4.9</h4>
                                <div className="rating-stars">
                                    {[...Array(5)].map((_, index) => (
                                        <StarSvg key={index} />
                                    ))}
                                </div>
                                <p>Trust score</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div
                        className="col-lg-6 wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                    >
                        <div className="tp-about-4-heading">
                            <span className="tp-section-title-pre">
                                IT’S TIME TO KNOW ABOUT US
                            </span>
                            <h3 className="tp-section-title">
                                We help you find your new places.
                            </h3>
                            <p>
                                Online property marketplace to buy, sell, and rent
                                residential and commercial properties. Used by millions
                                of renters to find property. Browse millions of properties
                                in your city and save your favorites.
                            </p>
                        </div>

                        {/* List Section */}
                        <div className="tp-about-4-list">
                            <ul>
                                <li>
                                    <span>
                                        <CircleCheckSvg />
                                    </span>
                                    More than 10 years of experience
                                </li>
                                <li>
                                    <span>
                                        <CircleCheckSvg />
                                    </span>
                                    1000+ Clients trusting our agency
                                </li>
                            </ul>
                        </div>
                        {/* Button Section */}
                        <div className="tp-about-btn d-flex">
                            <Link className="tp-btn mb-20" href="/about">
                                <span className="btn-wrap">
                                    <b className="text-1">About Company</b>
                                    <b className="text-2">About Company</b>
                                </span>
                            </Link>

                            {/* <Link className="tp-btn btn-2 mb-20" href="/property-style-1">
                                <span className="btn-wrap">
                                    <b className="text-1">Find Property</b>
                                    <b className="text-2">Find Property</b>
                                </span>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
