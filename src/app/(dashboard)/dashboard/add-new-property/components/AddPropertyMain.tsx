"use client";
import PropertyInformation from "./PropertyInformation";
import UploadMedia from "./UploadMedia";
import PriceDetails from "./PriceDetails";
import AdditionalInfoArea from "./AdditionalInfoArea";
import AmenitiesArea from "./AmenitiesArea";

export default function AddPropertyMain() {

  const handleSorting = () => { };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PropertyInformation handleSorting={handleSorting} />
         <AdditionalInfoArea handleSorting={handleSorting} />
         <PriceDetails handleSorting={handleSorting}/>
            <AmenitiesArea />
      <UploadMedia />
    
    
     
    

    
    </form>
  );
}
