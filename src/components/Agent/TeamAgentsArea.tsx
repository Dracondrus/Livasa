"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamAgentItem from "./Single/TeamAgentItem";
import TeamArrowSvg from "../SVG/TeamArrowSvg";
import { Pagination } from "swiper/modules";
import teamAgentData from "@/data/teamData";
import Link from "next/link";

export default function TeamAgentsArea() {
    return (
        <section className="tp-team-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tp-team-heading mb-50">
                            <span className="tp-section-title-pre">our team members</span>
                            <h3 className="tp-section-title">Meet with agents</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-team-btn-box text-start text-lg-end">
                            <Link className="textline" href="/agent">
                                Join With Team {" "}
                                <span><TeamArrowSvg /></span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Renders a responsive swiper slider for team agents. */}
                <div className="row">
                    <div className="tp-team-slider wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                        <div className="tp-team-active swiper">
                            <div className="pb-100">
                                <Swiper
                                    modules={[Pagination]}
                                    spaceBetween={30}
                                    loop
                                    breakpoints={{
                                        1400: { slidesPerView: 4 },
                                        1200: { slidesPerView: 3 },
                                        992: { slidesPerView: 2 },
                                        768: { slidesPerView: 2 },
                                        0: { slidesPerView: 1 },
                                    }}
                                    pagination={{ el: ".tp-team-slider-dot", clickable: true }}
                                >
                                    {teamAgentData.slice(0, 5).map(({ id, image, name, designation, socialLinks }) => (
                                        <SwiperSlide key={id}>
                                            <TeamAgentItem
                                                key={id}
                                                id={id}
                                                image={image}
                                                name={name}
                                                designation={designation}
                                                socialLinks={socialLinks}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="tp-team-slider-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
