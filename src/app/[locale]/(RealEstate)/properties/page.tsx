import PropertyDetailsOneArea from "@/components/RealEstate/PropertyDetailsOne/Details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property Details - Bhumi Real Estate React NextJs Template",
};

export default async function PropertyDetails() {
    return (
        <Wrapper>
            <main>
                {/* property details area start */}
                <PropertyDetailsOneArea id={1} />
                {/* property details area end */}
            </main>
        </Wrapper>
    );
}