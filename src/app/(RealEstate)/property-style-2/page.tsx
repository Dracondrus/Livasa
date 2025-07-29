import PropertyTwoArea from "@/components/RealEstate/PropertyStyleTwo/PropertyTwoArea";
import PropertyLayout from "@/components/Layout/PropertyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property Style 2 - Bhumi Real Estate React NextJs Template",
};

export default function PropertyTwo() {
    return (
        <>
            {/* property two area start */}
            <PropertyLayout>
                <PropertyTwoArea />
            </PropertyLayout>
            {/* property area end */}
        </>
    )
}
