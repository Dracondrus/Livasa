"use client"
import propertyBg from "../../../public/assets/img/rent/property-bg.jpg";
// import PropertyFilterWidget from "./subComponents/PropertyFilterWidget";
// import SidebarPropertyItem from "./subComponents/SidebarPropertyItem";
// import DiscountOfferCard from "./subComponents/DiscountOfferCard";
// import AdvancedSearch from "./subComponents/AdvancedSearch";
import { selectPropertyOptions } from "@/data/dropdownData";
// import ColumnFilterSvg from "../SVG/ColumnFilterSvg";
// import GridFilterSvg from "../SVG/GridFilterSvg";
import NiceSelect from "../UI/NiceSelect";
import { ReactNode } from "react";
// import Link from "next/link";

export default function PropertyLayout({ children }: { children: ReactNode }) {

    const handleSorting = () => { }
    return (
        <>
            <section className="tp-property-ptb pt-40 pb-10" style={{ backgroundImage: `url(${propertyBg.src})` }}>
                <div className="container">
                    <div className="row align-items-center">
                     
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
                       
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Main content section */}
                            {children}
                        </div>
                        <div className="col-lg-4">
                            {/* <AdvancedSearch /> */}
                            {/* <PropertyFilterWidget /> */}
                            {/* <SidebarPropertyItem customClass="tp-team-details-item"/> */}
                            {/* <DiscountOfferCard /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
