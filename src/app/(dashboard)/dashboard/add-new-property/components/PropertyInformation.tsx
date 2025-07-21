import NiceSelect from "@/components/UI/NiceSelect";
import { CountryOptions } from "@/data/dropdownData";
import LocationPickerMap from "./LocationPickerMap";
import { ISortingHandlerProps } from "@/types/custom-interface";

export default function PropertyInformation({ handleSorting }: ISortingHandlerProps) {

    return (
        <div className="tp-dashboard-new-property mb-50">
            <h5 className="tp-dashboard-new-title">Information</h5>
            <div className="tp-dashboard-new-property-box">
                <div className="tp-dashboard-new-input">
                    <label>Title:* </label>
                    <input type="text" placeholder="Choose" />
                </div>
                <div className="tp-dashboard-new-input">
                    <label>Description: </label>
                    <textarea placeholder="Your Description"></textarea>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="tp-dashboard-new-input">
                            <label>Full Address:* </label>
                            <input type="text" placeholder="Enter property full address" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-dashboard-new-input">
                            <label>Zip Code:* </label>
                            <input type="text" placeholder="Enter property zip code" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-dashboard-new-input">
                            <label>Country:* </label>
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
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-dashboard-new-input">
                            <label> Province/State:* </label>
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
                    <div className="col-lg-6">
                        <div className="tp-dashboard-new-input">
                            <label> Neighborhood:* </label>
                            <div className="tp-property-tabs-select tp-select">
                                <NiceSelect
                                    options={[
                                        { value: "Office", label: "None" },
                                        { value: "Villa", label: "Little Italy" },
                                        { value: "Studio", label: "Bedford Park" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={() => handleSorting()}
                                    name="Sorting"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Location map */}
                <LocationPickerMap />
            </div>
        </div>
    );
};
