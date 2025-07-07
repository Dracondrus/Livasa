import DashboardLayout from "@/layouts/DashboardLayout"
import AddPropertyMain from "./components/AddPropertyMain"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Property - Bhumi Real Estate React NextJs Template",
};

export default function AddProperty() {
  return (
    <>
      <DashboardLayout>
        {/* tp dashboard area start */}
        <AddPropertyMain />
        {/* tp dashboard area end */}
      </DashboardLayout>
    </>
  )
}