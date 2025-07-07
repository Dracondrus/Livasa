import ActiveWishListSvg from "@/components/SVG/PropertySvg/ActiveWishListSvg";
import BathsroomTwoSvg from "@/components/SVG/PropertySvg/BathsroomTwoSvg";
import BedroomsTwoSvg from "@/components/SVG/PropertySvg/BedroomsTwoSvg";
import LivingTwoSvg from "@/components/SVG/PropertySvg/LivingTwoSvg";
import MapMarkerSvg from "@/components/SVG/PropertySvg/MapMarkerIcon";
import WishListSvg from "@/components/SVG/PropertySvg/WishListSvg";
import { toggle_wishlist } from "@/redux/slices/wishlistSlice";
import CartSvg from "@/components/SVG/PropertySvg/CartSvg";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import { cart_product } from "@/redux/slices/cartSlice";
import { formatPrice } from "../Utils/formatPrice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

interface propertyProps {
    item: IFeaturedPropertyDT;
    isWishlisted: boolean
}

export default function PropertySingleCardTwo({ item, isWishlisted }: propertyProps) {
    const dispatch = useDispatch()

    //handle add to cart
    const handleAddToCart = (product: IFeaturedPropertyDT) => {
        if (product) {
            dispatch(cart_product(product))
        }
    }
    return (
        <div className={`tp-listing-2-item ${item.spacing && "mb-30"} ${item.wowAnimation && "wow fadeInUp"}`}
            data-wow-duration={item.wowDelay ? "1s" : undefined}
            data-wow-delay={item.wowDelay ? item.wowDelay : undefined}>
            <div className="tp-rent-item p-relative">
                <div className="tp-rent-thumb p-relative">
                    <Link href={`/${item.linkUrl}/${item.id}`}>
                        <Image src={item.image} alt="property image" />
                    </Link>

                    {item.showTags && (
                        <div className="tp-rent-tags">
                            {item.isForRent && <Link href="#">FOR RENT</Link>}
                            {item.isFeatured && <Link className="two" href="#">FEATURED</Link>}
                        </div>
                    )}

                    <div className="tp-rent-option d-flex">
                        <button onClick={() => dispatch(toggle_wishlist(item))}>
                            <span> {isWishlisted ? <ActiveWishListSvg /> : <WishListSvg />}</span>
                        </button>
                        <button onClick={() => handleAddToCart(item)}><span><CartSvg /></span></button>
                    </div>
                </div>
                <div className="tp-rent-content">
                    <h4 className="tp-rent-title">
                        <Link className="textline" href={`/${item.linkUrl}/${item.id}`}>{item.title}</Link>
                    </h4>
                    <p><MapMarkerSvg /> {item.address}</p>
                    <div className="tp-rent-meta-list d-flex justify-content-between align-items-center">
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><BedroomsTwoSvg /></span>
                                <p>{item.bedrooms} Bed</p>
                            </div>
                        </div>
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><BathsroomTwoSvg /></span>
                                <p>{item.bathrooms} Baths</p>
                            </div>
                        </div>
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><LivingTwoSvg /></span>
                                <p>{item.livingArea}</p>
                            </div>
                        </div>
                    </div>
                    <div className="tp-rent-btn-box d-flex justify-content-between align-items-center">
                        <div className="tp-rent-btn">
                            <Link className="tp-btn" href={`/${item.linkUrl}/${item.id}`}>View Details</Link>
                        </div>
                        <div className="tp-rent-price">
                            <span>{formatPrice(item.price, true)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}