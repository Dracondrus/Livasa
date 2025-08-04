import DashboardLayout from "@/layouts/DashboardLayout"
import AddPropertyMain from "./components/AddPropertyMain"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Property ",
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