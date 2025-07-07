import PropertyLayout from "@/components/Layout/PropertyLayout";
import PropertyOneArea from "@/components/RealEstate/PropertyStyleOne/PropertyOneArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property Style 1 - Bhumi Real Estate React NextJs Template",
};

export default function PropertyOne() {
    return (
        <>
            {/* property area start */}
            <PropertyLayout>
                <PropertyOneArea />
            </PropertyLayout>
            {/* property area end */}
        </>
    )
}
