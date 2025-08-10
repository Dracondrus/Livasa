
import TeamAgencyDetailsMain from "@/components/Agency/Details/TeamAgencyDetailsMain";
import BreadcrumbArea from "@/components/Breadcrumb/BreadcrumbAreaAgency";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agency Details - Bhumi Real Estate React NextJs Template",
  };

export default async function AgencyDeails() {

    return (
        <main>
            <>
                {/* breadcrumb area start */}
                <BreadcrumbArea title="Agency" />
                {/* breadcrumb area end */}

                {/* agency details area start */}
                <TeamAgencyDetailsMain id={1} />
                {/* agency details area end */}
            </>
        </main>
    );
}