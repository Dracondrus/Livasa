
import PropertyDetailsThreeArea from "@/components/RealEstate/PropertyDetailsThree/DetailsThree";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property Details - Bhumi Real Estate React NextJs Template",
  };

export default async function PropertyDetailsThree() {
    return (
        <main>
            <>
                {/* property details two main area start */}
                    <PropertyDetailsThreeArea id={14} />
                {/* property details two main area end */}
            </>
        </main>
    );
}