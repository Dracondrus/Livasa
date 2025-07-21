"use client"
import DetailsReusableArea from "../PropertyDetailsOne/subComponents/DetailsReusableArea";
import PropertySliderTwo from "./subComponents/PropertySliderTwo";
import { propertyData } from "@/data/propertyData";
import { IdProps } from "@/types/custom-interface";

export default function PropertyDetailsTwoArea({ id }: IdProps) {
    // Get the property object that matches the selected ID
    const property = propertyData.find((property) => property.id == id);

    return (
        <>
            {/* slider-area-start  */}
            <section className="slider-area fix tp-slider-5-wrap">
                <PropertySliderTwo property={property} />
            </section>
            {/* slider-area-start */}

            {/* property-details area */}
            <DetailsReusableArea spacingClass="pt-140" />
            {/* property-details area end */}

        </>

    )
}