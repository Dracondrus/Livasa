"use client";

import PropertyInformation from "./PropertyInformation";
import UploadMedia from "./UploadMedia";
import PriceDetails from "./PriceDetails";
import AdditionalInfoArea from "./AdditionalInfoArea";
import AmenitiesArea from "./AmenitiesArea";
import {
  IAInformation,
  IDescription,
  IGetAllValueProperty,
  IInformation,
  ICloudinaryImage,
} from "../../components/GetValues";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddPropertyMain() {
  
  const { data: session } = useSession();
  const router = useRouter();
      useEffect(() => {
      if (!session) {
        router.push("/sign-up");
      }
    }, []);
      
  const [localFiles, setLocalFiles] = useState<File[]>([]);
  const [quantityLeft, setQuantityLeft] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

  const [formData, setFormData] = useState<IGetAllValueProperty>({
    expirationDate: new Date().toISOString(),
    id: uuidv4(),
    information: {
      country: "",
      neighborhood: "",
      typeProperty: "",
      address: "",
      location: "",
      phonenumber: ""
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
    permission: "pending",
    review : "none"
  });

  // Загружаем данные пользователя и лимит
  useEffect(() => {

    if (!session?.user?.id) return;

    const fetchUserLimit = async () => {
      try {
        const res = await fetch(`/api/users/${session.user.id}/check`);
        if (!res.ok) throw new Error("Failed to fetch limit");

        const data = await res.json();
        setQuantityLeft(data.quantitysetuppropert);
      } catch {
      
        setErrorText("Не удалось получить данные пользователя");
      }
    };

    fetchUserLimit();
  }, [session]);

  const updateInformation = (data: IInformation) => {
    setFormData((prev) => ({ ...prev, information: data }));
  };

  const updateAInformation = (data: IAInformation) => {
    setFormData((prev) => ({ ...prev, iAInformation: data }));
  };

  const updateDescription = (data: IDescription) => {
    setFormData((prev) => ({ ...prev, iDescription: data }));
  };

  const onSubmit = async () => {
    const { information, iAInformation, iDescription } = formData;

    if (
      !information.country ||
      !information.neighborhood ||
      !information.typeProperty ||
      !information.address ||
      !information.location ||
      !iAInformation.unitPrice ||
      !iAInformation.price ||
      !iAInformation.size ||
      !iAInformation.rooms ||
      !iAInformation.bathrooms ||
      !iAInformation.yearBuilt ||
      !iDescription.description
    ) {
      setErrorText("Пожалуйста, заполните все обязательные поля");
      return;
    }

    setIsLoading(true);
    setErrorText("");
    setSuccessText("");

    try {
      const uploadedImages: ICloudinaryImage[] = [];

      for (const file of localFiles) {
        const uploadForm = new FormData();
        uploadForm.append("file", file);

        const res = await fetch("/api/images/upload", {
          method: "POST",
          body: uploadForm,
        });

        if (!res.ok) throw new Error("Ошибка при загрузке изображения");

        const data = await res.json();
        uploadedImages.push(data); // { url, public_id }
      }

      const finalForm: IGetAllValueProperty = {
        ...formData,
        id: uuidv4(),
        images: uploadedImages,
      };
      if (!session?.user?.id) return;

      const res = await fetch(`/api/users/${session.user.id}/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ property: finalForm }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Не удалось сохранить данные");
      }

      console.log("Успешно добавлено:", result);

      setSuccessText("Успешно добавлено! ...");

setTimeout(() => {

 router.push("/dashboard/property") // перенаправление на страницу свойств;

} , 2000)
    } catch (err) {
      console.error("Ошибка:", err);
      if (err instanceof Error && err.message.includes("Лимит")) {
        setErrorText(
          "У вас закончился лимит добавления. Напишите в Telegram: @elfasa_tasa"
        );
      } else {
        setErrorText("Произошла ошибка при сохранении данных");
      }
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

      {errorText && (
        <div style={{ marginTop: 16 }}>
          <Alert message={errorText} type="warning" showIcon />
        </div>
      )}

      {successText && (
        <div style={{ marginTop: 16 }}>
          <Alert message={successText} type="success" showIcon />
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          fontSize: 20,
          marginTop: 16,
        }}
      >
        {quantityLeft === null ? (
          <div>Загрузка...</div>
        ) : quantityLeft > 0 ? (
          <button
            onClick={onSubmit}
            style={{ padding: "14px 36px", background: "#262B35" }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        ) : (
          <Link
            href="/pricing"
            rel="noopener noreferrer"
            style={{
              padding: "14px 36px",
              background: "rgba(10, 173, 143, 1)",
              border: "none",
              borderRadius: 6,
              color: "white",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Buy
          </Link>
        )}
      </div>
    </div>
  );
}
