import { useState, useEffect } from "react";
import NiceSelect from "@/components/UI/NiceSelect";
import { IAInformation } from "../../components/GetValues";

interface Props {
  iAInformation: IAInformation;
  onChange: (data: IAInformation) => void;
}

const formatNumber = (num: number | null) => {
  if (num === null || isNaN(num)) return "";
  return new Intl.NumberFormat("ru-RU").format(num);
};

const parseNumber = (str: string) => {
  const num = Number(str.replace(/\D/g, ""));
  return isNaN(num) ? 0 : num;
};

export default function AdditionalInfoArea({ iAInformation, onChange }: Props) {
  const [unitPrice, setUnitPrice] = useState(iAInformation.unitPrice);
  const [price, setPrice] = useState(formatNumber(iAInformation.price));
  const [size, setSize] = useState(formatNumber(iAInformation.size));
  const [rooms, setRooms] = useState(formatNumber(iAInformation.rooms));
  const [bathrooms, setBathrooms] = useState(formatNumber(iAInformation.bathrooms));
  const [yearBuilt, setYearBuilt] = useState(formatNumber(iAInformation.yearBuilt));

  useEffect(() => {
    setUnitPrice(iAInformation.unitPrice);
    setPrice(formatNumber(iAInformation.price));
    setSize(formatNumber(iAInformation.size));
    setRooms(formatNumber(iAInformation.rooms));
    setBathrooms(formatNumber(iAInformation.bathrooms));
    setYearBuilt(formatNumber(iAInformation.yearBuilt));
  }, [iAInformation]);

  const handleUnitPriceChange = (item: { value: string; label: string }) => {
    setUnitPrice(item.value);
    onChange({
      ...iAInformation,
      unitPrice: item.value,
    });
  };

  const handleNumberChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: keyof IAInformation
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setter(val);
    const num = parseNumber(val);
    onChange({
      ...iAInformation,
      [field]: num,
    });
  };

  return (
    <div className="tp-dashboard-new-property mb-50">
      <h5 className="tp-dashboard-new-title">Additional Information</h5>
      <div className="row">
        <div className="col-lg-4">
          <div className="tp-dashboard-new-input">
            <label>Unit Price</label>
            <div className="tp-property-tabs-select tp-select">
              <NiceSelect
                options={[
                  { value: "forRent", label: "For Rent" },
                  { value: "forSale", label: "For Sale" },
                  { value: "dailyRent", label: "Daily Rent" },
                ]}
                defaultCurrent={
                  ["forRent", "forSale", "dailyRent"].indexOf(unitPrice)
                }
                onChange={handleUnitPriceChange}
                name="unitPrice"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="tp-dashboard-new-input">
            <label>Price ( uzs )</label>
            <input
              type="text"
              value={price}
              onChange={handleNumberChange(setPrice, "price")}
              placeholder="Enter price"
            />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="tp-dashboard-new-input">
            <label>Size ( Sq m )</label>
            <input
              type="text"
              value={size}
              onChange={handleNumberChange(setSize, "size")}
              placeholder="Enter size"
            />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="tp-dashboard-new-input">
            <label>Rooms</label>
            <input
              type="text"
              value={rooms}
              onChange={handleNumberChange(setRooms, "rooms")}
              placeholder="Enter rooms"
            />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="tp-dashboard-new-input">
            <label>Bathrooms</label>
            <input
              type="text"
              value={bathrooms}
              onChange={handleNumberChange(setBathrooms, "bathrooms")}
              placeholder="Enter bathrooms"
            />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="tp-dashboard-new-input">
            <label>Year Built</label>
            <input
              type="text"
              value={yearBuilt}
              onChange={handleNumberChange(setYearBuilt, "yearBuilt")}
              placeholder="Enter year built"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
