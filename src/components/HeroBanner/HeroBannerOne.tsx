"use client"
import heroBg from "../../../public/assets/img/hero/hero-bg-1.png";
import HeroBannerTabContent from './subComponents/HeroBannerTab';
import BannerFromFilter from '../Form/BannerFromFilter';
import { SocialLinks } from '../UI/SocialLinks';
import React, { useState } from 'react';

export default function HeroBannerOne() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [activeTab,] = useState("nav-profile");
    const toggleFilter = () => setIsFilterVisible((prev) => !prev);
    const handleSorting = () => { };

    return (
        <>
            {/* -- hero area start -- */}
            <section className="tp-hero-ptb tp-hero-hight pt-325 p-relative" style={{ backgroundImage: `url(${heroBg.src})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-hero-content">
                                <div className="tp-hero-heading text-center">
                                    <h3 className="tp-hero-heading-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Discover Your Place</h3>
                                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Get Started in Few Clicks</p>
                                </div>
                                <div className="tp-hero-tab p-relative wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    <div className="row">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All Status</button>
                                                <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">For Rent</button>
                                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">For Sale</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <HeroBannerTabContent id="nav-home" isActive={activeTab === "nav-home"} onSortChange={handleSorting} toggleFilter={toggleFilter} />
                                            <HeroBannerTabContent id="nav-profile" isActive={activeTab === "nav-profile"} onSortChange={handleSorting} toggleFilter={toggleFilter} />
                                            <HeroBannerTabContent id="nav-contact" isActive={activeTab === "nav-contact"} onSortChange={handleSorting} toggleFilter={toggleFilter} />
                                        </div>
                                    </div>
                                    {/* -- form area start -- */}
                                    <section className={`tp-from-filter ${isFilterVisible ? "show" : "hidden"}`}>
                                        <BannerFromFilter />
                                    </section>
                                    {/* -- form area end -- */}

                                </div>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- hero area end -- */}
        </>
    );
};
