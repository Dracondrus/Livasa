"use client";
import PropertyInformation from "./PropertyInformation";
import UploadMedia from "./UploadMedia";
import PriceDetails from "./PriceDetails";
import AdditionalInfoArea from "./AdditionalInfoArea";
import AmenitiesArea from "./AmenitiesArea";
import VirtualTourArea from "./VirtualTourArea";
import AgentInfomation from "./AgentInfomation";

export default function AddPropertyMain() {

  const handleSorting = () => { };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PropertyInformation handleSorting={handleSorting} />
      <UploadMedia />
      <PriceDetails handleSorting={handleSorting} />
      <AdditionalInfoArea handleSorting={handleSorting} />
      <AmenitiesArea />
      <VirtualTourArea />
      <AgentInfomation />

      <div className="tp-dashboard-new-btn">
        <button type="submit" className="add">Add Property</button>
        <button type="button" className="save">Save & Preview</button>
      </div>
    </form>
  );
}
