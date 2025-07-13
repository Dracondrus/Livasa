import PropertyThreeArea from "@/components/RealEstate/PropertyStyleThree/PropertyStyleThree";
import PropertyLayout from "@/components/Layout/PropertyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property Style 3 - Bhumi Real Estate React NextJs Template",
  };

export default function PropertyThree() {
    return (
        <>
            {/* property two area start */}
            <PropertyLayout>
                <PropertyThreeArea />
            </PropertyLayout>
            {/* property area end */}
        </>
    )
}
