"use client";
import PropertyInformation from "./PropertyInformation";
import UploadMedia from "./UploadMedia";
import PriceDetails from "./PriceDetails";
import AdditionalInfoArea from "./AdditionalInfoArea";
import AmenitiesArea from "./AmenitiesArea";
import { IAInformation, IDescription, IGetAllValue, IInformation } from "../../components/GetValues";
import { useState } from "react";

export default function AddPropertyMain() {
const [formData, setFormData] = useState<IGetAllValue>({
  expirationDate: "",
  information: {
    country: "",
    neighborhood: "",
    typeProperty: "",
    address: "",
    location: "",
  },
  iAInformation: {
    unitPrice: "",
    price: 0,
    size: 0,
    rooms: 0,
    bathrooms: 0,
    yearBuilt: 0,
  },
  iDescription: {
    description: "",
  },
  amenities: [],

  images: [], // ✅ Правильно! Просто пустой массив, а не File[]
});


  // Обновляем секции
  const updateInformation = (data: IInformation) => {
    setFormData((prev) => ({ ...prev, information: data }));
  };

  const updateAInformation = (data: IAInformation) => {
    setFormData((prev) => ({ ...prev, iAInformation: data }));
  };

  const updateDescription = (data: IDescription) => {
    setFormData((prev) => ({ ...prev, iDescription: data }));
  };

  // Обработчик кнопки
  const handleSubmit = () => {
    console.log("Final Data:", formData);
  };

  return (
    <div>
      <PropertyInformation
        information={formData.information}
        onChange={updateInformation}
      />
      <AdditionalInfoArea
        iAInformation={formData.iAInformation}
        onChange={updateAInformation}
      />
      <PriceDetails
        iDescription={formData.iDescription}
        onChange={updateDescription}
      />
      <AmenitiesArea
  selectedAmenities={formData.amenities}
  onChange={(amenities) =>
    setFormData((prev) => ({ ...prev, amenities }))
  }
/>
      <UploadMedia
  images={formData.images}
  onChange={(newImages) =>
    setFormData((prev) => ({ ...prev, images: newImages }))
  }
/>

      <div style={{ display: "flex", justifyContent: "center", color: "#fff", fontSize: 20 }}>
        <button
          onClick={handleSubmit}
          style={{ padding: "14px 36px", background: "#262B35" }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
