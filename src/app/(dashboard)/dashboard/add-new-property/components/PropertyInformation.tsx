import NiceSelect from "@/components/UI/NiceSelect";
import { CountryOptions } from "@/data/dropdownData";
// import LocationPickerMap from "./LocationPickerMap";
import { ISortingHandlerProps } from "@/types/custom-interface";

export default function PropertyInformation({ handleSorting }: ISortingHandlerProps) {

    return (
        <div className="tp-dashboard-new-property mb-50">
            <h5 className="tp-dashboard-new-title">Information</h5>
            <div className="tp-dashboard-new-property-box">
             
          
                <div className="row">
         <div className="col-lg-4">
                        <div className="tp-dashboard-new-input">
                            <label>Country </label>
                            <div className="tp-property-tabs-select tp-select">
                                <NiceSelect
                                    options={CountryOptions}
                                    defaultCurrent={0}
                                    onChange={handleSorting}
                                    name="Country"
                                />
                            </div>
                        </div>
                        
                    </div>
                       <div className="col-lg-4">
                        <div className="tp-dashboard-new-input">
                            <label> Neighborhood </label>
                            <div className="tp-property-tabs-select tp-select">
                                <NiceSelect
                                    options={[
                                        { value: "Office", label: "None" },
                                        { value: "Villa", label: "Texas" },
                                        { value: "Studio", label: "New York" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={() => handleSorting()}
                                    name="Sorting"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-dashboard-new-input">
                            <label> Type Property </label>
                            <div className="tp-property-tabs-select tp-select">
                                <NiceSelect
                                    options={[
                                        { value: "Office", label: "Office" },
                                        { value: "Apartment", label: "Apartment" },
                                        { value: "PrivateHouse", label: "Private House" },
                                        { value: "Hotel", label: "Hotel" },
                                        { value: "Cafe", label: "Cafe" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={() => handleSorting()}
                                    name="Sorting"
                                />
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-6">
                        <div className="tp-dashboard-new-input">
                            <label>Address </label>
                            <input type="text" placeholder="Enter property full address" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-dashboard-new-input">
                            <label>Location </label>
                            <input type="text" placeholder="Enter location" />
                        </div>
                    </div>
           
                    
                    
                </div>
              
                 
                
                {/* Location map */}
                {/* <LocationPickerMap /> */}
            </div>
        </div>
    );
};
