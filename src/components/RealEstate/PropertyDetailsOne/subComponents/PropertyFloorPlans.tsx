import Image from "next/image";
import PropertyImg1 from "../../../../../public/assets/img/rent/property/property-details-thumb-4.png";
import PropertyImg2 from "../../../../../public/assets/img/rent/property/property-details-thumb-4-2.png";
import { BathroomsSvg, BedroomsSvg } from "@/components/SVG";

export default function PropertyFloorPlans() {
    return (
        <>
            <div className="tp-property-details-plans d-flex justify-content-between align-items-center">
                {/* Floor Plan Tabs */}
                <div className="tp-property-details-plans-btn">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button 
                                className="nav-link active" 
                                id="home-tab" 
                                data-bs-toggle="tab" 
                                data-bs-target="#home" 
                                type="button" 
                                role="tab" 
                                aria-controls="home" 
                                aria-selected="true"
                            >
                                First Floor
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button 
                                className="nav-link" 
                                id="profile-tab" 
                                data-bs-toggle="tab" 
                                data-bs-target="#profile" 
                                type="button" 
                                role="tab" 
                                aria-controls="profile" 
                                aria-selected="false"
                            >
                                Ground Floor
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Floor Plan Details */}
                <div className="tp-property-details-plans-tag d-flex">
                    <p>
                        <span><BedroomsSvg color="#262B35"/></span> 02 Bed
                    </p>
                    <p>
                        <span><BathroomsSvg color="#262B35"/></span> 03 Baths
                    </p>
                </div>
            </div>

            {/* Floor Plan Images */}
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="tp-property-details-plans-thumb d-flex justify-content-center">
                        <Image src={PropertyImg1} alt="property image" />
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="tp-property-details-plans-thumb d-flex justify-content-center">
                        <Image src={PropertyImg2} alt="property image" />
                    </div>
                </div>
            </div>
        </>
    );
}
