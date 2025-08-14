'use client'

import { IUser } from "@/app/[locale]/(dashboard)/dashboard/components/GetValues";
import PropertySingleCard from "@/components/Common/PropertySingleCard";
import { useEffect, useState } from "react";
import { AllRegions, CityNames } from "@/app/[locale]/(dashboard)/dashboard/components/Placesname";

export default function PropertyOneArea() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedUnitPrice, setSelectedUnitPrice] = useState("");
  const [selectedTypeProperty, setSelectedTypeProperty] = useState("");

  const [regions, setRegions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/properties/get");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data: IUser[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    setSelectedRegion("");
    const cityObj = AllRegions.find(c => c.name === value);
    setRegions(cityObj ? cityObj.regions : []);
  };

  if (loading) return <div>One moment — quality takes time.</div>;

  // Фильтруем свойства локально
  const filteredProperties = users.flatMap(user =>
    user.properties
      .filter(p => p.permission === "approved")
      .filter(p =>
        (!selectedCity || p.information.country === selectedCity) &&
        (!selectedRegion || p.information.neighborhood === selectedRegion) &&
        (!selectedUnitPrice || p.iAInformation.unitPrice === selectedUnitPrice) &&
        (!selectedTypeProperty || p.information.typeProperty === selectedTypeProperty)
      )
  );

  return (
    <div>
      {/* Фильтры */}
      <div style={filterContainerStyle}>
        <select
          value={selectedCity}
          onChange={e => handleCityChange(e.target.value)}
          style={selectStyle}
        >
          <option value="">All Cities</option>
          {CityNames.map(city => (
            <option key={city.value} value={city.value}>{city.label}</option>
          ))}
        </select>

        <select
          value={selectedRegion}
          onChange={e => setSelectedRegion(e.target.value)}
          disabled={!selectedCity}
          style={{ ...selectStyle, opacity: selectedCity ? 1 : 0.5, cursor: selectedCity ? 'pointer' : 'not-allowed' }}
        >
          <option value="">All Regions</option>
          {regions.map(region => (
            <option key={region.value} value={region.value}>{region.label}</option>
          ))}
        </select>

        <select
          value={selectedUnitPrice}
          onChange={e => setSelectedUnitPrice(e.target.value)}
          style={selectStyle}
        >
          <option value="">All Sale Types</option>
          <option value="forRent">For Rent</option>
          <option value="forSale">For Sale</option>
          <option value="dailyRent">Daily Rent</option>
        </select>

        <select
          value={selectedTypeProperty}
          onChange={e => setSelectedTypeProperty(e.target.value)}
          style={selectStyle}
        >
          <option value="">All Property Types</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="office">Office</option>
          <option value="shop">Shop</option>
        </select>
      </div>

      {/* Карточки */}
      <div className="row g-3">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <div className="col-6 col-md-4 col-lg-3" key={property.id}>
              <PropertySingleCard property={property} />
            </div>
          ))
        ) : (
          <div style={{ marginTop: "20px", fontWeight: 500 }}>No properties found for selected filters.</div>
        )}
      </div>
    </div>
  );
}

// Стили
const filterContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "20px",
};

const selectStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  cursor: "pointer",
  minWidth: "160px",
  fontWeight: 500,
  color: "#333",
};
