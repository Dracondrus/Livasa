"use client";
import PropertyInformation from "./PropertyInformation";
import UploadMedia from "./UploadMedia";
import PriceDetails from "./PriceDetails";
import AdditionalInfoArea from "./AdditionalInfoArea";
import AmenitiesArea from "./AmenitiesArea";
import { IAInformation, IDescription, IGetAllValue, IInformation } from "../../components/GetValues";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function AddPropertyMain() {
  const { data: session } = useSession();

  const [localFiles, setLocalFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState<IGetAllValue>({
  expirationDate: new Date().toISOString(), // ✅ ISO-строка, поддерживается PostgreSQL

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
    images: [],
    permission: false,
  });

  // Добавляем состояние загрузки
  const [isLoading, setIsLoading] = useState(false);

  const updateInformation = (data: IInformation) => {
    setFormData((prev) => ({ ...prev, information: data }));
  };

  const updateAInformation = (data: IAInformation) => {
    setFormData((prev) => ({ ...prev, iAInformation: data }));
  };

  const updateDescription = (data: IDescription) => {
    setFormData((prev) => ({ ...prev, iDescription: data }));
  };

const handleSubmit = async () => {
  const hasEmptyField = Object.values(formData).some(
    (value) => value === "" || value === null || value === undefined
  );

  if (hasEmptyField || localFiles.length === 0) {
    alert("Some fields and at least one image must be filled in");
    return;
  }

  setIsLoading(true);

  const uploadedUrls: string[] = [];

  try {
    for (const file of localFiles) {
      const formDataUpload = new FormData();
      formDataUpload.append("file", file);

      const res = await fetch("/api/images/upload", {
        method: "POST",
        body: formDataUpload,
      });

      if (!res.ok) {
        alert("Image upload failed");
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      uploadedUrls.push(data.url);
    }

    setFormData((prev) => ({ ...prev, images: uploadedUrls }));

    const response = await fetch("/api/property/add-property", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        ...formData, 
        images: uploadedUrls,
        userGmail: session?.user?.email // <-- тут
      }),
    });

    if (response.ok) {
      alert("Property added successfully! Your request has been accepted, please wait a bit to check the correctness");
      setLocalFiles([]);
      setFormData({
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
        iDescription: { description: "" },
        amenities: [],
        images: [],
        permission: false,
      });
    } else {
      alert("Failed to save property");
    }
  } catch (error) {
    alert("Error during submission");
  } finally {
    setIsLoading(false);
  }
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
      <UploadMedia images={localFiles} onChange={setLocalFiles} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          fontSize: 20,
          marginTop: 16,
        }}
      >
        <button
          onClick={handleSubmit}
          style={{ padding: "14px 36px", background: "#262B35" }}
          disabled={isLoading} // блокируем кнопку во время загрузки
        >
          {isLoading ? "Loading..." : "Save"}
        </button>
      </div>
    </div>
  );
}
