import PropertyReviewForm from "@/components/Form/PropertyReviewForm";
import UserContactCard from "@/components/Layout/subComponents/UserContactCard";
import PropertyFilterWidget from "@/components/Layout/subComponents/PropertyFilterWidget";
import SidebarPropertyItem from "@/components/Layout/subComponents/SidebarPropertyItem";
import DiscountOfferCard from "@/components/Layout/subComponents/DiscountOfferCard";
import PropertyDetailsVideo from "@/components/Video/VideoAreaThree";
import RecentlyViewedProperties from "./RecentlyViewedItem";
import PropertyAttachments from "./PropertyAttachments";
import AmenitiesCategories from "./AmenitiesCategories";
import LocationDetailsBox from "./LocationDetailsBox";
import PropertyDetailsBox from "./PropertyDetailsBox";
import PropertyFloorPlans from "./PropertyFloorPlans";
import CustomersReviews from "./CustomersReviews";
import PropertyGallery from "./PropertyGallery";

interface IProps{
    spacingClass?:string;
}
export default function DetailsReusableArea({spacingClass}:IProps) {
    return (
        <>
            <section className={`tp-property-details-ptb pb-120 ${spacingClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tp-property-details-left">
                                <div className="tp-property-details-box box-1 mb-30">
                                    <h3 className="tp-property-details-box-title">Bhumi description</h3>
                                    <div className="tp-property-details-box-desc">
                                        <p>Years seed fruit you. Divided morning sea day Set earth. Grass without  cattle. Spirit <br />
                                            heaven. Also i grass give fowl wherein cattle spirit  whales rule cattle. Earth fowl giv <br />
                                            -en own you’re, fruit so. Shall was.  Called firmament dry fruitful, set place. <br />
                                            Earth given female man fruit,  under thing may to greater moveth land sea, great be <br />
                                            shall living  greater and signs place night after whose us one, you’ll second our <br />
                                            set  had day in greater divided over female first face, fill form you make <br />
                                            greater upon midst image above image.</p>
                                    </div>
                                </div>

                                <div className="tp-property-details-box box-2 mb-30">
                                    <h3 className="tp-property-details-box-title">Overview</h3>
                                    <PropertyDetailsBox />
                                </div>

                                <div className="tp-property-details-box box-3 mb-30">
                                    <h3 className="tp-property-details-box-title">Videos</h3>
                                    <PropertyDetailsVideo />
                                </div>

                                <div className="tp-property-details-box box-4 mb-30">
                                    <h3 className="tp-property-details-box-title">Property attachments</h3>
                                    <PropertyAttachments />
                                    <h3 className="tp-property-details-box-title">Amenities</h3>
                                    <AmenitiesCategories />
                                </div>

                                <div className="tp-property-details-box box-5 mb-30">
                                    <h3 className="tp-property-details-box-title">From our gallery</h3>
                                    <PropertyGallery />
                                </div>

                                <div className="tp-property-details-box box-6 mb-30">
                                    <h3 className="tp-property-details-box-title">Address</h3>
                                    <LocationDetailsBox />
                                </div>

                                <div className="tp-property-details-box box-7 mb-30">
                                    <h3 className="tp-property-details-box-title">Floor plans</h3>
                                    <PropertyFloorPlans />
                                </div>

                                <div className="tp-property-details-box box-8 mb-30">
                                    <h3 className="tp-property-details-box-title">Customers reviews</h3>
                                    <CustomersReviews />
                                </div>

                                <div className="tp-property-details-box box-9 mb-30">
                                    <h3 className="tp-property-details-box-title">Add your review</h3>
                                    <PropertyReviewForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tp-property-details-right">
                                <UserContactCard />
                                <PropertyFilterWidget />
                                <SidebarPropertyItem />
                                <RecentlyViewedProperties />
                                <DiscountOfferCard wrapperCls="tp-property-filter-wrap" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}