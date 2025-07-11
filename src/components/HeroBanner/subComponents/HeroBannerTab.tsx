
import SearchSvg from "@/components/SVG/BannerSvg/SearchSvg";
import { propertyTypeOptionsOfCity,propertyTypeOptionsRegion,propertyTypeOptionsOfSite } from "@/data/dropdownData";
import NiceSelect from "@/components/UI/NiceSelect";
import { ITabContentProps } from "@/types/banner-d-t";

// TabContent Component
export default function HeroBannerTabContent({ id, isActive, onSortChange }: ITabContentProps) {
    return (
        <div className={`tab-pane fade ${isActive ? 'show active' : ''}`} id={id} role="tabpanel">
            <div className="tp-hero-tab-box d-flex align-items-center">
             <div className="tp-hero-tab-select tp-select">
                    <NiceSelect
                        options={propertyTypeOptionsOfCity}
                        defaultCurrent={0}
                        onChange={onSortChange}
                        name="Sorting"
                    />
                </div>
                <div className="tp-hero-tab-select tp-select">
                    <NiceSelect
                        options={propertyTypeOptionsRegion}
                        defaultCurrent={0}
                        onChange={onSortChange}
                        name="Sorting"
                    />
                </div>
              <div className="tp-hero-tab-select tp-select">
                    <NiceSelect
                        options={propertyTypeOptionsOfSite  }
                        defaultCurrent={0}
                        onChange={onSortChange}
                        name="Sorting"
                    />
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