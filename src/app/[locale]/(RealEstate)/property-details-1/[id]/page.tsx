import PropertyDetailsOneArea from "@/components/RealEstate/PropertyDetailsOne/Details";
import { propertyData } from "@/data/propertyData";
import Wrapper from "@/layouts/Wrapper";
import { PageParamsProps } from "@/types/custom-interface";

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const property = propertyData.find((item) => item.id == Number(id));
    return {
        title: property?.title ? property.title : "Property Details",
    };
}

export default async function PropertyDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <Wrapper>
            <main>
                {/* property details area start */}
                <PropertyDetailsOneArea id={id} />
                {/* property details area end */}
            </main>
        </Wrapper>

    );
}