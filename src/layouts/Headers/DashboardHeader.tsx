"use client"

import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import HeaderCartSvg from "@/components/SVG/DashboardSvg/HeaderCartSvg";
import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";

import CartOffcanvas from "@/components/OffCanvas/CartOffcanvas";
import useShoppingCartMetrics from "@/hooks/useCart";
import useGlobalContext from "@/hooks/useContext";
import NavMenus from "../subComponents/NavMenus";
import useSticky from "@/hooks/useSticky";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function DashboardHeader() {
    const userImg = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_USER!)!)

    const [openCartMini, setOpenCartMini] = useState<boolean>(false);
    const { toggleOffcanvas } = useGlobalContext();
    const { useCartProductQuantity } = useShoppingCartMetrics();
    const TotalCartQuantity = useCartProductQuantity();
    const { sticky } = useSticky();

    const renderHeaderContent = () => (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                    <div className="tp-header-logo">
                        <Link href="/"><Image src={logoBlack} alt="image" /></Link>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-4 d-none d-lg-block">
                    <div className="tp-header-dashboard-menu d-flex justify-content-center">
                        <div className="tp-main-menu d-none d-xl-block">
                            <nav className="tp-mobile-menu-active">
                                <NavMenus />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-9 col-6">
                    <div className="tp-header-dashboard-main-right d-flex align-items-center justify-content-end">
                        <div className="tp-header-right-cart mr-30">
                            <button onClick={() => setOpenCartMini(true)} className="cartmini-open-btn">
                                <span><HeaderCartSvg /></span>
                                <em>{TotalCartQuantity}</em>
                            </button>
                        </div>
                        <div className="tp-header-dashboard-btn d-none d-md-block">
                            <Link className="tp-btn" href="/property-style-1">
                                <span className="btn-wrap">
                                    <b className="text-1">Add Listing</b>
                                    <b className="text-2">Add Listing</b>
                                </span>
                            </Link>
                        </div>

                        {/*for Sign In modal */}
                        <div className="tp-header-dashboard-user ml-20">
                          
                                <Image src={userImg.photo_url} width={20} height={20} loading="lazy" alt="user image" />
                          
                        </div>

                        <div className="tp-header-hamburger d-xl-none offcanvas-open-btn">
                            <button onClick={toggleOffcanvas} className="hamburger-btn">
                                <span></span>
                                <span></span>
                                <span></span> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* cart mini */}
            <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
            {/* off canvas */}
            <OffcanvasArea />

            {/* header area start */}
            <header className="tp-header-dashboard-ptb p-relative">
                <div className="tp-header-main-sticky p-relative">
                    {renderHeaderContent()}
                </div>
            </header>
            <header className={`tp-header-2-ptb p-relative tp-int-menu tp-header-sticky-cloned ${sticky ? "tp-header-pinned" : ""}`}>
                <div className="tp-header-main-sticky tp-header-5-main p-relative">
                    {renderHeaderContent()}
                </div>
            </header>
            {/* header area end */}

            {/* modal area start */}
        
            {/* modal area end */}
        </>
    )
}
