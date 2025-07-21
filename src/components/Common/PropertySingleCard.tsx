"use client"
import { ActiveWishListSvg, BathroomsSvg, BedroomsSvg, CartSvg, CompireSvg, LivingSvg, WishListSvg } from "../SVG";
import { toggle_wishlist } from "@/redux/slices/wishlistSlice";
import { compire_product } from "@/redux/slices/compireSlice";
import { IFeatureListProps } from "@/types/custom-interface";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import { useDispatch, useSelector } from "react-redux";
import { cart_product } from "@/redux/slices/cartSlice";
import { formatPrice } from "../Utils/formatPrice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

export default function PropertySingleCard({ item }: IFeatureListProps) {
    const dispatch = useDispatch()

    //handle add to cart
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
    //handle wishlist
    const wishlist = useSelector((state: RootState) => state.wishlist.wishlistProducts);
    const isWishlisted = wishlist?.some((wishlistItem) => wishlistItem.id === item.id);

    return (
        <div
            className={`tp-rent-item p-relative ${item.spacing && "mb-30"} ${item.wowAnimation && "wow fadeInUp"}`}
            data-wow-duration={item.wowDelay ? "1s" : undefined}
            data-wow-delay={item.wowDelay ? item.wowDelay : undefined}
        >
            <div className="tp-rent-thumb p-relative">
                <Link href={`/${item.linkUrl}/${item.id}`}>
                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt={item.title} />
                </Link>
                <div className="tp-rent-user-wrap d-flex align-items-center justify-content-between">
                    <div className="tp-rent-user d-flex align-items-center">
                        <div className="tp-rent-user-thumb">
                            {item.userImage && <Image src={item.userImage} alt="User" />}
                        </div>
                        <div className="tp-rent-user-content">
                            <h5 className="tp-rent-user-content-title">{item.userName}</h5>
                            <span>{item.userRole}</span>
                        </div>
                    </div>
                    <div className="tp-rent-option d-flex">
                        <button onClick={() => handleAddToCompire(item)}><span><CompireSvg /></span> </button>
                        <button onClick={() => dispatch(toggle_wishlist(item))}>
                            <span> {isWishlisted ? <ActiveWishListSvg /> : <WishListSvg />}</span>
                        </button>
                        <button onClick={() => handleAddToCart(item)}><span><CartSvg /></span></button>
                    </div>
                </div>
                {item.showTags && (
                    <div className="tp-rent-tags">
                        {item.isForRent === true ? <Link href="#">FOR RENT</Link> : ""} {" "}
                        {item.isFeatured === true ? <Link className="two" href="#">FEATURED</Link> : ""}
                    </div>
                )}
            </div>
            <div className="tp-rent-content">
                <h4 className="tp-rent-title">
                    <Link className="textline" href={`/${item.linkUrl}/${item.id}`}>{item.title}</Link>
                </h4>
                <p>{item.address}</p>
                <div className="tp-rent-meta-list d-flex justify-content-between align-items-center">
                    <div className="tp-rent-meta-item">
                        <div className="tp-rent-meta-content d-flex">
                            <span><BedroomsSvg /></span>
                            <p>{item.bedrooms}</p>
                        </div>
                        <p>Bedrooms</p>
                    </div>
                    <div className="tp-rent-meta-item">
                        <div className="tp-rent-meta-content d-flex">
                            <span><BathroomsSvg /></span>
                            <p>{item.bathrooms}</p>
                        </div>
                        <p>Bathrooms</p>
                    </div>
                    <div className="tp-rent-meta-item">
                        <div className="tp-rent-meta-content d-flex">
                            <span><LivingSvg /></span>
                            <p>{item.livingArea}</p>
                        </div>
                        <p>Living Area</p>
                    </div>
                </div>
                <div className="tp-rent-btn-box d-flex justify-content-between align-items-center">
                    <div className="tp-rent-btn">
                        <Link className="tp-btn" href={`/${item.linkUrl}/${item.id}`}>
                            View Details
                        </Link>
                    </div>
                    <div className="tp-rent-price">
                        <span>{formatPrice(item.price, true)}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}