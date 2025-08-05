import PropertyDetailsTwoArea from "@/components/RealEstate/PropertyDetailsTwo/DetailsTwo";
import { propertyData } from "@/data/propertyData";
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
        <main>
            <>
                {/* property details area start */}
                <PropertyDetailsTwoArea id={id} />
                {/* property details area end */}
            </>
        </main>
    );
}