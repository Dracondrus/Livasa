"use client";
// import { useState } from "react";

interface AmenityGroupProps {
  title: string;
  amenities: string[];
  selected: string[];
  onToggle: (amenity: string) => void;
}

interface AmenityGroup {
  title: string;
  amenities: string[];
}

const amenityGroups: AmenityGroup[] = [
  {
    title: "General",
    amenities: [
      "Air conditioning",
      "Heating",
      "Wi-Fi",
      "Furnished",
      "Pets allowed",
      "Smoking allowed"
    ],
  },
  {
    title: "Bedroom",
    amenities: [
      "Built-in wardrobe",
      "Private bathroom",
      "Desk",
      "Double bed",
      "Balcony access"
    ],
  },
  {
    title: "Kitchen",
    amenities: [
      "Refrigerator",
      "Microwave",
      "Oven",
      "Dishwasher",
      "Cooking utensils"
    ],
  },
  {
    title: "Bathroom",
    amenities: [
      "Shower",
      "Bathtub",
      "Washer",
      "Dryer",
      "Hairdryer"
    ],
  },
  {
    title: "Building",
    amenities: [
      "Elevator",
      "Garage",
      "Security",
      "Gym",
      "Swimming pool"
    ],
  },
  {
    title: "Outdoor",
    amenities: [
      "Garden",
      "Terrace",
      "BBQ area",
      "Parking"
    ],
  },
];

function AmenityGroup({ title, amenities, selected, onToggle }: AmenityGroupProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <p><strong>{title}</strong></p>
      <ul>
        {amenities.map((amenity, index) => {
          const id = `amenity-${title}-${index}`;
          const checked = selected.includes(amenity);

          return (
            <li key={index}>
              <div className="tp-contact-input-remeber property">
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(amenity)}
                />
                <label htmlFor={id}>{amenity}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function AmenitiesArea({
  selectedAmenities,
  onChange,
}: {
  selectedAmenities: string[];
  onChange: (value: string[]) => void;
}) {
  const handleToggle = (amenity: string) => {
    const updated = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    onChange(updated);
  };

  return (
    <div className="tp-dashboard-new-property mb-50">
      <h5 className="tp-dashboard-new-title">Amenities</h5>
      <div className="tp-property-details-checking tp-dashboard-new-cheking">
        <div className="row">
          {amenityGroups.map((group, index) => (
            <AmenityGroup
              key={index}
              title={group.title}
              amenities={group.amenities}
              selected={selectedAmenities}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
