"use client"
import { BathroomsSvg, BedroomsSvg, CartSvg, CompireSvg, DeleteIconSvg, 
    DuplicateIconSvg, LivingSvg, MenuDotsSvg, MoveToDraftSvg, PropertyEditSvg, WishListSvg } from "@/components/SVG";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IProps {
    property: IFeaturedPropertyDT
}

export default function DashboardPropertyItem({ property }: IProps) {
    const [activePropertyId, setActivePropertyId] = useState<number | null>(null);

    const handleActionToggle = (id: number) => {
        setActivePropertyId(prev => (prev === id ? null : id));
    };

    return (
        <div className="col-xxl-3 col-xl-4 col-md-6" key={property.id}>
            <div className="tp-rent-item p-relative mb-30">
                <div className="tp-rent-thumb p-relative">
                    <Link href="#"><Image src={property?.image} style={{width:"100%", height:"auto"}} alt="propery image" /></Link>
                    <div className="tp-rent-user-wrap d-flex align-items-center justify-content-between">
                        <div className="tp-rent-user d-flex align-items-center">
                            <div className="tp-rent-user-thumb">
                                {property.userImage && <Image src={property?.userImage} alt="user image" />}
                            </div>
                            <div className="tp-rent-user-content">
                                <h5 className="tp-rent-user-content-title">{property.userName}</h5>
                                <span>{property.userRole}</span>
                            </div>
                        </div>
                        <div className="tp-rent-option d-flex">
                            <button>
                                <span><CompireSvg /></span>
                            </button>
                            <button>
                                <span><WishListSvg /></span>
                            </button>
                            <button>
                                <span><CartSvg /></span>
                            </button>
                        </div>
                    </div>
                    {property.showTags && (
                        <div className="tp-rent-tags">
                            {property.isForRent === true ? <Link href="#">FOR RENT</Link> : ""} {" "}
                            {property.isFeatured === true ? <Link className="two" href="#">FEATURED</Link> : ""}
                        </div>
                    )}
                </div>
                <div className="tp-rent-content">
                    <h4 className="tp-rent-title"><Link className="textline" href="#">{property.title}</Link></h4>
                    <p>{property?.address}</p>
                    <div className="tp-rent-meta-list d-flex justify-content-between align-items-center">
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><BedroomsSvg /></span>
                                <p>{property.bedrooms}</p>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><BathroomsSvg /></span>
                                <p>{property.bathrooms}</p>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><LivingSvg /></span>
                                <p>{property.livingArea}</p>
                            </div>
                            <p>Living Area</p>
                        </div>
                    </div>
                    <div className="tp-rent-btn-box d-flex justify-content-between align-items-center">
                        <div className="tp-rent-price">
                            <span>{`$${property.price}.000`}</span>
                        </div>
                        <div className="tp-rent-action-btn d-flex">
                            <div className="tp-action-btn">
                                <Link href="#"><PropertyEditSvg /></Link>
                            </div>
                            <div className={`tp-action-btn ${activePropertyId === property.id ? "active" : ""}`}>
                                <button className="click" onClick={() => handleActionToggle(property.id)}><MenuDotsSvg /></button>
                                <div className="tp-action-click-tooltip">
                                    <button>
                                        <span><DuplicateIconSvg /></span>
                                        Duplicate
                                    </button>
                                    <button>
                                        <span><MoveToDraftSvg /></span>
                                        Move to Draft
                                    </button>
                                    <button>
                                        <span><DeleteIconSvg /></span>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}