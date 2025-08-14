"use client";

import { BathroomsSvg, BedroomsSvg, LivingSvg } from "../SVG";
import Image from "next/image";
import Link from "next/link";
import {
  
  IGetAllValueProperty,
} from "@/app/[locale]/(dashboard)/dashboard/components/GetValues";

interface Props {
 
  property: IGetAllValueProperty;
}

export default function PropertySingleCard({  property }: Props) {

  

const getUnitPriceLabel = (unitPrice: string) => {
  switch (unitPrice) {
    case "forRent":
      return "For Rent";
    case "forSale":
      return "For Sale";
    case "dailyRent":
      return "Daily Rent";
    default:
      return unitPrice;
  }
};


  const formatPrice = (price: number) =>
    price.toLocaleString("en-US", { minimumFractionDigits: 0 });

  return (
    <div
      className="border rounded shadow-sm bg-white d-flex flex-column"
      style={{
        overflow: "hidden",
        height: "100%",
        transition: "transform 0.2s ease",
      }}
    >
      {/* Фото */}
      <Link
        href={`/property-info/${property.id}`}
        className="position-relative"
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
        }}
      >
        {property.images?.[0]?.url ? (
          <Image
            src={property.images[0].url}
            fill
            alt={`${property.information.typeProperty} preview`}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="bg-light d-flex align-items-center justify-content-center text-muted w-100 h-100">
            No Image
          </div>
        )}
      </Link>

      {/* Контент */}
      <div className="p-3 d-flex flex-column flex-grow-1">
        {/* City + Region */}
        <div className="d-block d-sm-flex align-items-center gap-2 mb-2">
          <div
            style={{
              fontWeight: 700,
              color: "#000",
              fontSize: "1rem",
            }}
          >
            {property.information.country}
          </div>
          <div
            className="text-muted"
            style={{
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            {property.information.neighborhood}
          </div>
        </div>
          <div
  style={{
   
    color: "#3a3a3aff",

    fontSize: "0.9rem",
    fontWeight: 700,
   
  }}
>
  {getUnitPriceLabel(property.iAInformation.unitPrice)}
</div>

        {/* Цена */}
        <div
          className="fw-bold mb-2"
          style={{
            fontSize: "1.1rem",
            color: "#0ba7ceff",
          }}
        >
          {formatPrice(property.iAInformation.price)} uzs
        </div>

        {/* Метаданные — видно только на md и больше */}
        <div
          className="d-none d-md-flex justify-content-around text-muted small mb-3"
          style={{
            fontSize: "0.9rem",
            fontWeight: 700, // жирность чисел
          }}
        >
          <div className="d-flex align-items-center gap-1">
         {property.iAInformation.rooms}   <BedroomsSvg /> 
          </div>
          <div className="d-flex align-items-center gap-1">
         {property.iAInformation.bathrooms}   <BathroomsSvg /> 
          </div>
          <div className="d-flex align-items-center gap-1">
           {property.iAInformation.size} m² { " "} <LivingSvg /> 
          </div>
        </div>

        {/* Кнопка */}
        <Link
          className="btn btn-sm w-100 mt-auto"
          style={{
            backgroundColor: "#0ba7ceff",
            color: "#fff",
            fontWeight: 700,
            padding: "10px 0",
            fontSize: "0.95rem",
          }}
          href={`/property-info/${property.id}`}
        >
          Info
        </Link>
      </div>
    </div>
  );
}
