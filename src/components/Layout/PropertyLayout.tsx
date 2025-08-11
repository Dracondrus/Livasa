"use client"
import propertyBg from "../../../public/assets/img/rent/property-bg.jpg";
import PropertyFilterWidget from "./subComponents/PropertyFilterWidget";
import SidebarPropertyItem from "./subComponents/SidebarPropertyItem";
import DiscountOfferCard from "./subComponents/DiscountOfferCard";
import AdvancedSearch from "./subComponents/AdvancedSearch";
import { selectPropertyOptions } from "@/data/dropdownData";
// import ColumnFilterSvg from "../SVG/ColumnFilterSvg";
// import GridFilterSvg from "../SVG/GridFilterSvg";
import NiceSelect from "../UI/NiceSelect";
import { ReactNode } from "react";
import Link from "next/link";

export default function PropertyLayout({ children }: { children: ReactNode }) {

    const handleSorting = () => { }
    return (
        <>
            <section className="tp-property-ptb pt-140 pb-120" style={{ backgroundImage: `url(${propertyBg.src})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-property-heading mb-60">
                                <h4 className="tp-property-section-title">Properties</h4>
                                <div className="tp-property-list">
                                    <span><Link href="/">Home</Link></span>{" "}
                                    <span className="dvdr"></span>{" "}
                                    <span className="active">Property</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-property-tabs-box d-flex flex-wrap mb-40">
                                <div className="tp-property-tabs-select tp-select">
                                    <NiceSelect
                                        options={selectPropertyOptions}
                                        defaultCurrent={0}
                                        onChange={handleSorting}
                                        name="Sorting"
                                        cls="select"
                                    />
                                </div>
                                {/* <div className="tp-property-tabs">
                                    <ul className="nav nav-tabs" id="filterTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                                <GridFilterSvg />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                                <ColumnFilterSvg />
                                            </button>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Main content section */}
                            {children}
                        </div>
                        <div className="col-lg-4">
                            <AdvancedSearch />
                            <PropertyFilterWidget />
                            <SidebarPropertyItem customClass="tp-team-details-item"/>
                            <DiscountOfferCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
