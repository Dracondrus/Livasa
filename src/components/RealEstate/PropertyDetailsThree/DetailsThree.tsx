"use client"
import { ActiveWishListSvg, BathroomsSvg, BedroomsSvg, CartSvg, CompireSvgTwo, LivingSvg, WishListSvg } from "@/components/SVG";
import DetailsReusableArea from "../PropertyDetailsOne/subComponents/DetailsReusableArea";
import PropertyDetailsSliderTwo from "./subComponents/PropertySlider";
import BookmarkSvg from "@/components/SVG/PropertySvg/BookmarkSvg";
import { toggle_wishlist } from "@/redux/slices/wishlistSlice";
import { compire_product } from "@/redux/slices/compireSlice";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import { cart_product } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { propertyData } from "@/data/propertyData";
import { IdProps } from "@/types/custom-interface";
import { RootState } from "@/redux/store";

export default function PropertyDetailsThreeArea({ id }: IdProps) {
    const dispatch = useDispatch()

    // Retrieve the property details that match the provided ID
    const property = propertyData.find((property) => property.id == id);


    // Handle adding a product to the cart
    const handleAddToCart = (product: IFeaturedPropertyDT) => {
        if (product) {
            dispatch(cart_product(product))
        }
    }
    //handle add to compire
        const handleAddToCompire = (product: IFeaturedPropertyDT) => {
            if (product) {
                dispatch(compire_product(product))
            }
        }
    // Access wishlist from Redux store
    const wishlist = useSelector((state: RootState) => state.wishlist.wishlistProducts);

    // Check if the current property is already in the wishlist
    const isWishlisted = wishlist?.some((wishlistItem) => wishlistItem.id === id);

    return (
        <>
            {/* slider-area-start  */}
            <section className="tp-property-details-area pb-120">
                <div className="container-fluid gx-0">
                    <PropertyDetailsSliderTwo />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-property-details-heading">
                                <h4 className="tp-property-details-title">{property?.title}</h4>
                                <span>{property?.address}</span>
                                <div className="tp-property-details-info">
                                    <span><BedroomsSvg /> {property?.bedrooms} Bed</span>
                                    <span><BathroomsSvg /> {property?.bathrooms} Baths</span>
                                    <span><LivingSvg /> {property?.livingArea}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-property-details-right-side text-lg-end">
                                <div className="tp-property-details-icon-box">
                                    <button><span><BookmarkSvg /></span></button>
                                    <button onClick={() => property && handleAddToCompire(property)}><span><CompireSvgTwo /></span></button>
                                    <button onClick={() => property && dispatch(toggle_wishlist(property))}>
                                        <span>{isWishlisted ? <ActiveWishListSvg width="26" height="26" /> : <WishListSvg width="20" height="20" />} </span>
                                    </button>
                                    <button onClick={() => property && handleAddToCart(property)}>
                                        <span><CartSvg width="24" height="24" /></span>
                                    </button>
                                </div>
                                <h4 className="tp-property-details-icon-price">
                                    ${property?.price}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* slider-area-start */}

            {/* property-details area */}
            <DetailsReusableArea />
            {/* property-details area end */}
        </>

    )
}