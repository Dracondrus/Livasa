import PropertyDetailsOneArea from "@/components/RealEstate/PropertyDetailsOne/Details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property Details ",
};

export default async function PropertyDetails() {
    return (
        <Wrapper>
            <main>
                {/* property details area start */}
                <PropertyDetailsOneArea id={"sosat"} />
                {/* property details area end */}
            </main>
        </Wrapper>
    );
}