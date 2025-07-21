
"use client";
import { Range } from "react-range";
import { useState } from "react";

export default function RangeFilter() {
  const [priceValues, setPriceValues] = useState([20, 80]);
  const [areaValues, setAreaValues] = useState([100, 500]);

  return (
    <div className="tp-property-filter-box mb-30">
      {/* Price Range */}
      <div className="tp-property-filter-item-1 mb-40">
        <h4 className="tp-property-filter-title">Price range</h4>
        <div className="tp-property-widget-filter p-relative">
          <span className="tp-property-widget-filter-title">Your range</span>
          <span className="input-range">
            <input
              type="text"
              id="price-amount"
              value={`$${priceValues[0]} - $${priceValues[1]}`}
              readOnly
            />
          </span>
          <div className="slider-container">
            <Range
              step={1}
              min={0}
              max={100}
              values={priceValues}
              onChange={(values) => setPriceValues(values)}
              renderTrack={({ props, children}) => {
                const [min, max] = [0, 100];
                const left = ((priceValues[0] - min) / (max - min)) * 100;
                const right = ((priceValues[1] - min) / (max - min)) * 100;
                return (
                  <div 
                    {...props}
                    style={{
                      ...props.style,
                      height: "7px",
                      width: "100%",
                      background: `linear-gradient(to right, #ffffff ${left}%, #5758D6 ${left}%, #5758D6 ${right}%, #ffffff ${right}%)`,
                      boxShadow: "0px 0px 4px 0px rgba(192, 204, 231, 0.6)",
                      marginTop: "12px",
                    }}
                  >
                    {children}
                  </div>
                );
              }}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "12px",
                    width: "8px",
                    backgroundColor: "#5758D6",
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>

      {/* Area Range */}
      <div className="tp-property-filter-item-2">
        <h4 className="tp-property-filter-title">Area range</h4>
        <div className="tp-property-widget-filter p-relative">
          <span className="tp-property-widget-filter-title">Your range</span>
          <span className="input-range">
            <input
              type="text"
              id="area-amount"
              value={`${areaValues[0]} - ${areaValues[1]}`}
              readOnly
            />
          </span>
          <div className="slider-container">
            <Range
              step={10}
              min={50}
              max={1000}
              values={areaValues}
              onChange={(values) => setAreaValues(values)}
              renderTrack={({ props, children }) => {
                const [min, max] = [50, 1000];
                const left = ((areaValues[0] - min) / (max - min)) * 100;
                const right = ((areaValues[1] - min) / (max - min)) * 100;
                return (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "7px",
                      width: "100%",
                      background: `linear-gradient(to right, #ffffff ${left}%, #5758D6 ${left}%, #5758D6 ${right}%, #ffffff ${right}%)`,
                      boxShadow: "0px 0px 4px 0px rgba(192, 204, 231, 0.6)",
                      marginTop: "12px",
                    }}
                  >
                    {children}
                  </div>
                );
              }}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "12px",
                    width: "8px",
                    backgroundColor: "#5758D6",
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


