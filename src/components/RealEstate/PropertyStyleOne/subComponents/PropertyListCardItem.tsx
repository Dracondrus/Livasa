"use client"
import { ActiveWishListSvg, BathsroomTwoSvg, BedroomsTwoSvg, CartSvg, CompireSvg, LivingTwoSvg, WishListSvg } from "@/components/SVG";
import { toggle_wishlist } from "@/redux/slices/wishlistSlice";
import { compire_product } from "@/redux/slices/compireSlice";
import { formatPrice } from "@/components/Utils/formatPrice";
import { IFeatureListProps } from "@/types/custom-interface";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import { cart_product } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

export default function PropertyListCardItem({ item }: IFeatureListProps) {
    const dispatch = useDispatch()

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
    const isWishlisted = wishlist?.some((wishlistItem) => wishlistItem.id === item.id);

    return (
        <div className="tp-team-details-warp mb-30">
            <div className="tp-property-item d-flex justify-content-between align-items-center">
                <div className="tp-property-content">
                    <h4 className="tp-property-title"><Link href={`/property-details-1/${item.id}`}>{item.title}</Link></h4>
                    <p>{item.address}</p>
                    <span className="tp-property-usd">{formatPrice(item.price, true)} USD/mo</span>
                    <div className="tp-property-meta-box">
                        <div className="tp-property-meta d-flex align-items-center">
                            <span><BedroomsTwoSvg /></span>
                            <p>{item.bedrooms} Bed</p>
                        </div>
                        <div className="tp-property-meta d-flex align-items-center">
                            <span><BathsroomTwoSvg /></span>
                            <p>{item.bathrooms} Baths</p>
                        </div>
                        <div className="tp-property-meta d-flex align-items-center">
                            <span><LivingTwoSvg /></span>
                            <p>{item.livingArea}</p>
                        </div>
                    </div>
                </div>
                <div className="tp-property-thumb list p-relative">
                    <Link href={`/property-details-1/${item.id}`}><Image src={item.image} alt="property thumb" /></Link>
                    {item.showTags && (
                    <div className="tp-rent-tags">
                        {item.isForRent === true ? <Link href="#">FOR RENT</Link> : ""} {" "}
                        {item.isFeatured === true ? <Link className="two" href="#">FEATURED</Link> : ""}
                    </div>
                )}
                    <div className="tp-rent-option">
                        <button onClick={() => handleAddToCompire(item)}><span><CompireSvg /></span> </button>
                        <button onClick={() => dispatch(toggle_wishlist(item))}>
                            <span> {isWishlisted ? <ActiveWishListSvg /> : <WishListSvg />}</span>
                        </button>
                        <button onClick={() => handleAddToCart(item)}><span><CartSvg /></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}