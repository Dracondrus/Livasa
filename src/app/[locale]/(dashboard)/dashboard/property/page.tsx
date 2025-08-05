
import PropertyPagination from "@/components/Common/pagination/PropertyPagination";
import DashboardPropertyItem from "./components/DashboardPropertyItem";
import DashboardLayout from "@/layouts/DashboardLayout";
import { propertyData } from "@/data/propertyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Properties",
};

export default function DashboardProperty() {
  return (
    <>
      <DashboardLayout>
        {/* Filter by property */}
      
        {/* My Property */}
        <div className="tp-dashboard-property-wrapper">
          <div className="row">
            {
              propertyData.slice(55, 59).map((property) => (
                <DashboardPropertyItem property={property} key={property.id} />
              ))
            }
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