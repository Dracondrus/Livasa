
import FilterBtnSvg from "@/components/SVG/BannerSvg/FilterBtnSvg";
import LocationSvg from "@/components/SVG/BannerSvg/LocationSvg";
import SearchSvg from "@/components/SVG/BannerSvg/SearchSvg";
import { propertyTypeOptions } from "@/data/dropdownData";
import NiceSelect from "@/components/UI/NiceSelect";
import { ITabContentProps } from "@/types/banner-d-t";

// TabContent Component
export default function HeroBannerTabContent({ id, isActive, onSortChange, toggleFilter }: ITabContentProps) {
    return (
        <div className={`tab-pane fade ${isActive ? 'show active' : ''}`} id={id} role="tabpanel">
            <div className="tp-hero-tab-box d-flex align-items-center">
                <div className="tp-hero-tab-input p-relative">
                    <input type="text" placeholder="Enter Keywords" />
                </div>
                <div className="tp-hero-tab-select tp-select">
                    <NiceSelect
                        options={propertyTypeOptions}
                        defaultCurrent={0}
                        onChange={onSortChange}
                        name="Sorting"
                    />
                </div>
                <div className="tp-hero-tab-input p-relative">
                    <input type="text" placeholder="Neighbourhoods" />
                    <span><LocationSvg /></span>
                </div>
                <div className="tp-hero-tab-filter">
                    <button className="tp-hero-filter-btn filter-btn" onClick={toggleFilter}>
                        <span><FilterBtnSvg /></span>
                    </button>
                </div>
                <div className="tp-hero-tab-search">
                    <button>
                        Search{" "}
                        <span>
                            <SearchSvg />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};