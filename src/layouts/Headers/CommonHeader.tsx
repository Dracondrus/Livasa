
"use client";
import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";
import CartOffcanvas from "@/components/OffCanvas/CartOffcanvas";
import WishlistIconSvg from "@/components/SVG/WishlistIconSvg";
import { CartIconSvg } from "@/components/SVG/CartIconSvg";
import useShoppingCartMetrics from "@/hooks/useCart";
import useGlobalContext from "@/hooks/useContext";
import NavMenus from "../subComponents/NavMenus";
import useSticky from "@/hooks/useSticky";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CommonHeader({ wrapClass = "" }) {
    const [openCartMini, setOpenCartMini] = useState<boolean>(false);
    const { useCartProductQuantity, useWishlstQuantity } = useShoppingCartMetrics();
    const { toggleOffcanvas } = useGlobalContext();
    const { sticky } = useSticky();
    //cart quantity
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
                <div className="col-xl-6 col-lg-4 d-none d-lg-block">
                    <div className="tp-header-2-menu">
                        <div className="tp-main-menu d-none d-xl-block">
                            <nav className="tp-mobile-menu-active">
                                <NavMenus />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-9 col-6">
                    <div className="tp-header-5-main-right d-flex align-items-center justify-content-end">

                        <div className="tp-header-right-wishlist color-black mr-30 d-none d-xxl-block">
                            <Link href="/wishlist"><span>
                                <WishlistIconSvg color="#000" />
                            </span>
                                <em>{TotalWishlistQuantity}</em>
                            </Link>
                        </div>

                        <div className="tp-header-right-cart color-black mr-30">
                            <button onClick={() => setOpenCartMini(true)} className="cartmini-open-btn">
                                <span><CartIconSvg color="#000" /></span>
                                <em>{TotalCartQuantity}</em>
                            </button>
                        </div>

                        <div className="tp-header-5-btn d-none d-md-block">
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
            <header className={`tp-header-5-ptb p-relative ${wrapClass}`}>
                <div className="tp-header-main-sticky p-relative">
                    {renderHeaderContent({ toggleOffcanvas })}
                </div>
            </header>

            {/* Sticky Header */}
            <header
                className={`tp-header-5-ptb p-relative tp-int-menu tp-header-sticky-cloned ${sticky ? "tp-header-pinned" : ""}`}>
                <div className="tp-header-main-sticky tp-header-5-main p-relative">
                    {renderHeaderContent({ toggleOffcanvas })}
                </div>
            </header>

            {/* Offcanvas Area */}
            <OffcanvasArea />
        </>
    )
}