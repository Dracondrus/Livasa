"use client";
import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";
import CartOffcanvas from "@/components/OffCanvas/CartOffcanvas";
import { CartIconSvg } from "@/components/SVG/CartIconSvg";
import useShoppingCartMetrics from "@/hooks/useCart";
import { WishlistIconSvg } from "@/components/SVG";
import useGlobalContext from "@/hooks/useContext";
import NavMenus from "../subComponents/NavMenus";
import useSticky from "@/hooks/useSticky";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderTwo = () => {
    const [openCartMini, setOpenCartMini] = useState<boolean>(false);
    const { toggleOffcanvas } = useGlobalContext();
    const { sticky } = useSticky();
    //cart quantity
    const { useCartProductQuantity, useWishlstQuantity } = useShoppingCartMetrics();
    const TotalCartQuantity = useCartProductQuantity();
    const TotalWishlistQuantity = useWishlstQuantity();

    // Header Content Component
    const renderHeaderContent = ({ toggleOffcanvas }: { toggleOffcanvas: () => void }) => (
        <div className="container container-large">
            <div className="row align-items-center">
                <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                    <div className="tp-header-logo">
                        <Link href="/">
                            <Image src={logoBlack} alt="image" />
                        </Link>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-4 d-none d-lg-block">
                    <div className="tp-header-2-menu">
                        <div className="tp-main-menu d-none d-xl-block">
                            <nav>
                                <NavMenus />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-9 col-6">
                    <div className="tp-header-2-main-right d-flex align-items-center justify-content-end">

                        <div className="tp-header-right-wishlist mr-30 d-none d-xxl-block">
                            <Link href="/wishlist"><span>
                                <WishlistIconSvg color="currentColor" />
                            </span>
                                <em>{TotalWishlistQuantity}</em>
                            </Link>
                        </div>

                        <div className="tp-header-right-cart mr-30">
                            <button onClick={() => setOpenCartMini(true)} className="cartmini-open-btn">
                                <span><CartIconSvg color="currentColor" /></span>
                                <em>{TotalCartQuantity}</em>
                            </button>
                        </div>

                        <div className="tp-header-2-btn d-none d-md-block">
                            <Link className="tp-btn" href="/property-style-1">
                                <span className="btn-wrap">
                                    <b className="text-1">Find Property</b>
                                    <b className="text-2">Find Property</b>
                                </span>
                            </Link>
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
            {/* cart mini */}

            {/* Main Header */}
            <header className="tp-header-2-ptb tp-header-transparent p-relative">
                <div className="tp-header-main-sticky p-relative">
                    {renderHeaderContent({ toggleOffcanvas })}
                </div>
            </header>

            {/* Sticky Header */}
            <header
                className={`tp-header-2-ptb p-relative tp-int-menu tp-header-sticky-cloned ${sticky ? "tp-header-pinned" : ""}`}>
                <div className="tp-header-main-sticky tp-header-2-main p-relative">
                    {renderHeaderContent({ toggleOffcanvas })}
                </div>
            </header>

            {/* Offcanvas Area */}
            <OffcanvasArea />
        </>
    );
};

export default HeaderTwo;
