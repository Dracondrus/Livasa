"use client"
import { selectPropertyOptions } from "@/data/dropdownData";
import NiceSelect from "@/components/UI/NiceSelect";

export default function FilterByProperty() {
    const handleSorting = () => { }
    return (
        <div className="tp-dashboard-property-top d-flex mb-50">
            <div className="tp-property-tabs-select tp-select">
                <NiceSelect
                    options={selectPropertyOptions}
                    defaultCurrent={0}
                    onChange={() => handleSorting()}
                    name="Sorting"
                />
            </div>
            <div className="tp-dashboard-property-search w-100">
                <input type="text" placeholder="Search by title" />
            </div>
        </div>
    )
}