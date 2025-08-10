"use client";

import NiceSelect from "@/components/UI/NiceSelect";
import { AllRegions, CityNames } from "../../components/Placesname";
import { useEffect, useState } from "react";
import { IInformation } from "../../components/GetValues";

type Props = {
  information: IInformation;
  onChange: (data: IInformation) => void;
};

type RegionType = {
  value: string;
  label: string;
};

export default function PropertyInformation({ information, onChange }: Props) {
  const defaultCity = information.country || "Navoi";
  const [addressQuestion, setAddressQuestion] = useState<boolean>(false)
  const [locationQuestion, setLocationQuestion] = useState<boolean>(false)
  const [selectCity, setSelectCity] = useState(defaultCity);
  const [selectedRegions, setSelectedRegions] = useState<RegionType[]>([]);

  useEffect(() => {
    const found = AllRegions.find((regionObj) => regionObj.name === selectCity);
    if (found) {
      setSelectedRegions(found.regions);
      // Если сменили город, сбросим район
      onChange({
        ...information,
        country: selectCity,
        neighborhood: found.regions[0]?.value || "",
      });
    }
  }, [selectCity]);

  const handleChange = (field: keyof IInformation, value: string) => {
    onChange({ ...information, [field]: value });
  };

  return (
    <div className="tp-dashboard-new-property mb-50">
      <h5 className="tp-dashboard-new-title">Information</h5>
      <div className="tp-dashboard-new-property-box">
        <div className="row">
          {/* Country */}
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Country</label>
              <div className="tp-property-tabs-select tp-select">
                <NiceSelect
                  options={CityNames}
                  defaultCurrent={CityNames.findIndex((c) => c.value === information.country)}
                  onChange={(item) => setSelectCity(item.value)}
                  name="Country"
                />
              </div>
            </div>
          </div>

          {/* Neighborhood */}
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Neighborhood</label>
              <div className="tp-property-tabs-select tp-select">
                <NiceSelect
                  options={selectedRegions}
                  defaultCurrent={selectedRegions.findIndex(r => r.value === information.neighborhood) || 0}
                  onChange={(item) => handleChange("neighborhood", item.value)}
                  name="Neighborhood"
                />
              </div>
            </div>
          </div>

          {/* Type Property */}
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Type Property</label>
              <div className="tp-property-tabs-select tp-select">
                <NiceSelect
                  options={[
      { value: "", label: "" },
      { value: "Office", label: "Office" },
      { value: "Apartment", label: "Apartment" },
      { value: "PrivateHouse", label: "Private House" },
      { value: "Hotel", label: "Hotel" },
      { value: "Cafe", label: "Cafe" },
      { value: "Shop", label: "Shop" },
      { value: "Warehouse", label: "Warehouse" },
      { value: "Resort", label: "Resort" }, // 🆕 курорт
 

   
    ]}
                  defaultCurrent={0}
                  onChange={(item) => handleChange("typeProperty", item.value)}
                  name="TypeProperty"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-6">
            <div className="tp-dashboard-new-input">
              <label>Address <span  style={{fontWeight:800, background: "#5a5a5aff",padding: "3px 7px",borderRadius:30, color:"#fff",fontSize: 13, cursor:"pointer"}} onClick={() => setAddressQuestion(!addressQuestion)}>?</span> </label>
              <p> { addressQuestion && <>Example : street New place, 000 local area</>}</p>
              <input
                type="text"
                placeholder="Enter property full address"
                value={information.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>
          </div>

          {/* Location */}
          <div className="col-lg-6">
            <div className="tp-dashboard-new-input">
              <label>Location <span  style={{fontWeight:800, background: "#5a5a5aff",padding: "3px 7px",borderRadius:30, color:"#fff",fontSize: 13, cursor:"pointer"}} onClick={() => setLocationQuestion(!locationQuestion)}>?</span> </label>
              <p> { locationQuestion && <>Example : https://yandex.ru/maps?whatshere%5Bpoint%5D=65.434366%2C40.058142....</>}</p>
              <input
                type="text"
                placeholder="Enter location"
                value={information.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
