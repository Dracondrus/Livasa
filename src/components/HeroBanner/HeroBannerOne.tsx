"use client"
import heroBg from "../../../public/assets/img/hero/hero-bg-1.png";
// import HeroBannerTabContent from './subComponents/HeroBannerTab';
// import BannerFromFilter from '../Form/BannerFromFilter';
import { SocialLinks } from '../UI/SocialLinks';
import React from 'react';
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function HeroBannerOne() {
      const t = useTranslations('Home');
    // const [isFilterVisible, setIsFilterVisible] = useState(false);
    // const [activeTab,] = useState("nav-profile");
    // const toggleFilter = () => setIsFilterVisible((prev) => !prev);
    // const handleSorting = () => { };
      const router = useRouter();

    return (
        <>
            {/* -- hero area start -- */}
            <section className="tp-hero-ptb tp-hero-hight pt-325 p-relative" style={{ backgroundImage: `url(${heroBg.src})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-hero-content">
                                <div className="tp-hero-heading text-center">
                                    <h3 className="tp-hero-heading-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">{t("Discover_Your_Place")}</h3>
                                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">{t("Get_Started_in_Few_Clicks")}</p>
                                </div>
                                {/* <div className="tp-hero-tab p-relative wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    <div className="row">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Rent Daily</button>
                                                <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Rent</button>
                                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Sale</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <HeroBannerTabContent id="nav-home" isActive={activeTab === "nav-home"} onSortChange={handleSorting} toggleFilter={toggleFilter} />
                                            <HeroBannerTabContent id="nav-profile" isActive={activeTab === "nav-profile"} onSortChange={handleSorting} toggleFilter={toggleFilter} />
                                            <HeroBannerTabContent id="nav-contact" isActive={activeTab === "nav-contact"} onSortChange={handleSorting} toggleFilter={toggleFilter} />
                                        </div>
                                    </div>
                                  
                                    <section className={`tp-from-filter ${isFilterVisible ? "show" : "hidden"}`}>
                                        <BannerFromFilter />
                                    </section>
                               
                                </div> */}
                  <div className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <button
        onClick={() => router.push("/properties")}
        style={{
          padding: "16px 36px",
          backgroundColor: "#282828ff",
          color: "#fff",
          fontWeight: 600,
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(255, 255, 255, 0.8)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6d6d6dff")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#282828ff")}
      >
        Start Browsing
      </button>
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
