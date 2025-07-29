import { BathroomsOptions, BedroomsOptions, GaragesOptions, propertyStatusOptions } from "@/data/dropdownData";
import NiceSelect from "@/components/UI/NiceSelect";
import RangeFilter from "./RangeFilter";
import Link from "next/link";

export default function PropertyFilterWidget() {

    const handleSorting = () => { }
    return (
        <div className="tp-property-widget mb-40">
            <div className="tp-property-filter-wrap">
                <h4 className="tp-team-details-item-title">Find your propety</h4>
                <div className="tp-team-contact-input p-relative">
                    <input type="text" placeholder="Property type" />
                </div>
                <div className="tp-team-contact-select tp-select">
                    <NiceSelect
                        options={propertyStatusOptions}
                        defaultCurrent={0}
                        onChange={handleSorting}
                        name="Sorting"
                        cls="select wide"
                    />
                </div>
                <div className="tp-team-contact-select tp-select">
                    <NiceSelect
                        options={BedroomsOptions}
                        defaultCurrent={0}
                        onChange={handleSorting}
                        name="Sorting"
                        cls="select wide"
                    />
                </div>
                <div className="tp-team-contact-select tp-select">
                    <NiceSelect
                        options={BathroomsOptions}
                        defaultCurrent={0}
                        onChange={handleSorting}
                        name="Sorting"
                        cls="select wide"
                    />
                </div>
                <div className="tp-team-contact-select tp-select">
                    <NiceSelect
                        options={GaragesOptions}
                        defaultCurrent={0}
                        onChange={handleSorting}
                        name="Sorting"
                        cls="select wide"
                    />
                </div>
                {/* slider range */}
                <RangeFilter />
                <div className="tp-property-filter-item-btn text-center">
                    <Link className="tp-btn w-100" href="/property-style-1">
                        <span className="btn-wrap">
                            <b className="text-1">Find Property</b>
                            <b className="text-2">Find Property</b>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}