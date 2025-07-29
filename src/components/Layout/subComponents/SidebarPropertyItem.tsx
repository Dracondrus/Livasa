import rentThumb from "../../../../public/assets/img/rent/rent-thumb-1.jpg";
import { BathroomsSvg, BedroomsSvg, LivingSvg } from "@/components/SVG";
import Image from "next/image";
import Link from "next/link";

interface IPropsWrapperCls {
    wrapperCls?: string;
    customClass?:string;
}

export default function SidebarPropertyItem({ wrapperCls, customClass }: IPropsWrapperCls) {

    return (
        <>
            <div className={`${wrapperCls ? wrapperCls : "tp-team-details-widget"} mb-40`}>
                <div className={customClass? customClass : ""}>
                    <h4 className="tp-team-details-item-title">Featured properties</h4>
                    <div className="tp-rent-thumb p-relative">
                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={rentThumb} alt="thumb image" /></Link>
                        <div className="tp-rent-tags">
                            <Link href="#">FOR RENT</Link>
                        </div>
                        <div className="tp-rent-user-wrap d-flex align-items-center justify-content-between">
                            <div className="tp-rent-user d-flex align-items-center">
                                <div className="tp-rent-user-content">
                                    <h5 className="tp-rent-user-content-title">Luxury villa texas</h5>
                                    <span>$8,50,000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-rent-meta-list team-details d-flex justify-content-between align-items-center">
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><BedroomsSvg /></span>
                            </div>
                            <p>05 Bed</p>
                        </div>
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><BathroomsSvg /></span>
                            </div>
                            <p>04 Baths</p>
                        </div>
                        <div className="tp-rent-meta-item">
                            <div className="tp-rent-meta-content d-flex">
                                <span><LivingSvg /></span>
                            </div>
                            <p>1500 sq</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}