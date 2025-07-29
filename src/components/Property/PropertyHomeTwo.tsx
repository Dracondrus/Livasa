import listingBgImg from "../../../public/assets/img/listing/listing-bg.png";
import PropertySingleCard from "../Common/PropertySingleCard";
import { propertyData } from "@/data/propertyData";

export default function PropertyHomeTwo() {
    return (
        <section className="tp-listing-area pt-140 pb-110" style={{ backgroundImage: `url(${listingBgImg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-listing-heading text-center mb-50">
                            <span className="tp-section-title-pre">Featured Listings</span>
                            <h3 className="tp-section-title">Bhumi’s featured listing</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        propertyData.slice(13, 16).map((item) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                    <PropertySingleCard item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}