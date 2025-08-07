
'use client';
import PropertyPagination from "@/components/Common/pagination/PropertyPagination";
import DashboardLayout from "@/layouts/DashboardLayout";
// import DashboardPropertyItem from "../property/components/DashboardPropertyItem";
// import { propertyData } from "@/data/propertyData";
// import { Metadata } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";



export default function DashboardFavourite() {
  const router = useRouter();
  const {data:session} = useSession()
      useEffect(() => {
      if (!session) {
        router.push("/sign-up");
      }
    }, [session, router]);
      

  return (
    <>
      <DashboardLayout>
        <div className="tp-dashboard-property-wrapper">
          <div className="row">
            {/* My Property */}
        
            {/* pagination area */}
            <div className="col-lg-12">
              <PropertyPagination />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}