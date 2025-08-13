import PropertyLayout from "@/components/Layout/PropertyLayout";
import PropertyOneArea from "@/components/RealEstate/PropertyStyleOne/PropertyOneArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Properties",
};

export default function PropertyOne() {
    return (
        <>
            {/* property area start */}
            <PropertyLayout>
                <PropertyOneArea />
                <br />
                <br />
                <br />
                <br />
                
            </PropertyLayout>
            {/* property area end */}
        </>
    )
}
