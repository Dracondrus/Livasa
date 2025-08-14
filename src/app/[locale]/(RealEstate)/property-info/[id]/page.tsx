import PropertyDetailsOneArea from "@/components/RealEstate/PropertyDetailsOne/Details";
// import { propertyData } from "@/data/propertyData";
import Wrapper from "@/layouts/Wrapper";
 interface PageParamsPropss {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetails(props: PageParamsPropss) {
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