"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoWhite from "../../../public/assets/img/logo/logo-white.png";
import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";
import CartOffcanvas from "@/components/OffCanvas/CartOffcanvas";
import { CartIconSvg } from "@/components/SVG/CartIconSvg";
import useShoppingCartMetrics from "@/hooks/useCart";
import useGlobalContext from "@/hooks/useContext";
import { WishlistIconSvg } from "@/components/SVG";
import NavMenus from "../subComponents/NavMenus";
import UserSvg from "@/components/SVG/UserSvg";
import useSticky from "@/hooks/useSticky";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HeaderOne() {
  const {data:session} = useSession()
  const [openCartMini, setOpenCartMini] = useState<boolean>(false);
  const { toggleOffcanvas } = useGlobalContext();
  const { sticky } = useSticky();
  //cart quantity
  const { useCartProductQuantity, useWishlstQuantity } = useShoppingCartMetrics();
  const TotalCartQuantity = useCartProductQuantity();
  const TotalWishlistQuantity = useWishlstQuantity();

  const renderHeaderContent = () => (
    <div className="container container-large">
      <div className="row align-items-center">
        <div className="col-xl-2 col-lg-4 col-md-3 col-6">
          <div className="tp-header-logo">
            <Link href="/">
              {
                sticky ? <><Image src={logoBlack} alt="image" /></> : <><Image src={logoWhite} alt="image" /></>
              }
            </Link>
          </div>
        </div>
        <div className="col-xl-7 col-lg-4 d-none d-lg-block">
          <div className="tp-header-1-menu">
            <div className="tp-main-menu d-none d-xl-block">
              <nav>
                <NavMenus />
              </nav>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-9 col-6">
          <div className="tp-header-main-right d-flex align-items-center justify-content-end">
            <div className="tp-header-right-user d-none d-md-flex align-items-center">

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
              {session ? 
           <div className="tp-header-right-user-icon">
  <Link href="/dashboard/my-profile">
    {session?.user?.image ? (
      <Image
        src={session.user.image}
        alt="User Image"
        width={40}
        height={40}
        className="rounded-full"
      />
    ) : (
      <span><UserSvg /></span>
    )}
  </Link>
</div>

              
              
              :  <div className="tp-header-right-user-icon">
                <Link href="/sign-up" >
                  <span><UserSvg /></span>
                </Link>
              </div>}
             
           
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
      <header className="tp-header-1-ptb tp-header-transparent top p-relative">
        <div className="tp-header-main-sticky p-relative">
          {renderHeaderContent()}
        </div>
      </header>
      <header className={`tp-header-1-ptb p-relative tp-int-menu tp-header-sticky-cloned ${sticky ? "tp-header-pinned" : ""}`}>
        <div className="tp-header-main-sticky tp-header-1-main p-relative">
          {renderHeaderContent()}
        </div>
      </header>
      {/* Offcanvas Area */}
      <OffcanvasArea />
    </>
  );
};
