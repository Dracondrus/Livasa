"use client";

import { useEffect, useState } from "react";
import { BathroomsSvg, BedroomsSvg, LivingSvg } from "@/components/SVG";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { IGetAllValueProperty } from "@/app/[locale]/(dashboard)/dashboard/components/GetValues";
interface ws {
  id: string
}
export default function PropertyDetailsOneArea({ id }: ws) {
  const [property, setProperty] = useState<IGetAllValueProperty | null>(null);

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

  useEffect(() => {
    async function fetchProperty() {
      try {
        const res = await fetch(`/api/properties/get-property/${id}`);
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProperty();
  }, [id]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  if (!property) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <div className="property-details-page">
      {/* Main Info */}
      <section className="tp-property-details-area pt-30 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-property-details-heading mb-5">
                <h2 style={{ fontWeight: 700, fontSize: "2rem" }}>
                  {property.information.country}, {property.information.neighborhood}
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {property.information.address}
                </p>
                {property.information.phonenumber && (
                  <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                     +998 {property.information.phonenumber}
                  </p>
                )}

                <div className="tp-property-details-info mt-3" style={{ display: "flex", gap: "15px" }}>
                  <span><BedroomsSvg /> {property.iAInformation.rooms} Bed</span>
                  <span><BathroomsSvg /> {property.iAInformation.bathrooms} Baths</span>
                  <span><LivingSvg /> {property.iAInformation.size} m²</span>
                </div>

                <button
                  onClick={() => {
                    const location = encodeURIComponent(property.information.location);
                    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
                    window.open(googleMapsUrl, "_blank");
                  }}
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    backgroundColor: "#484848ff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Show on Map
                </button>
                <br />
              </div>
            </div>

            <div className="col-lg-6 text-lg-end">
              <div style={{ marginBottom: "15px" }}>
                <h5 style={{ fontWeight: 600 }}>
                  {getUnitPriceLabel(property.iAInformation.unitPrice)}
                </h5>
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#333" }}>
                {property.iAInformation.price
                  .toLocaleString("en-US", { minimumFractionDigits: 0 })
                  .replace(/,/g, " ")}{" "}
                uzs
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="property-image-carousel mb-50">
        <div className="container">
          <Slider {...sliderSettings}>
            {property.images.map((image, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={image.url}
                  alt={`Property ${index + 1}`}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    minHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Description */}
      <section className="property-description mb-50">
        <div className="container">
          <h3 style={{ marginBottom: "15px" }}>About</h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#555", wordBreak: "break-word" }}>
            {property.iDescription.description}
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section className="property-amenities mb-50">
        <div className="container">
          <h3 style={{ marginBottom: "15px" }}>Amenities</h3>
         <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  }}
>
  {property.amenities.map((amenity, index) => (
    <div
      key={index}
      style={{
        flex: "1 1 30%",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontWeight: 500,
        color: "#000",
        marginBottom: "10px",
      }}
      className="amenity-item"
    >
      <span style={{ color: "#000" }}>✓</span>
      <span>{amenity}</span>
    </div>
  ))}
</div>

<style jsx>{`
  @media (max-width: 576px) {
    .amenity-item {
      flex: 1 1 100% !important;
    }
  }
`}</style>

        </div>
      </section>

      {/* Additional Info */}
      <section className="property-additional-info mb-50">
        <div className="container">
          <h3 style={{ marginBottom: "15px" }}>Additional Information</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            
            <div><strong>Property Type:</strong> {property.information.typeProperty}</div>
            <div><strong>Year Built:</strong> {property.iAInformation.yearBuilt}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
