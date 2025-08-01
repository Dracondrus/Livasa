"use client"

import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import HeaderCartSvg from "@/components/SVG/DashboardSvg/HeaderCartSvg";
import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";
import userImg from "../../../public/assets/img/shop/user-1.jpg";
import CartOffcanvas from "@/components/OffCanvas/CartOffcanvas";
import useShoppingCartMetrics from "@/hooks/useCart";
import useGlobalContext from "@/hooks/useContext";
import NavMenus from "../subComponents/NavMenus";
import useSticky from "@/hooks/useSticky";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";


export default function DashboardHeader() {
    const { data: session } = useSession();
  
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
                  
                        {/*for Sign In modal */}
                        <div className="tp-header-dashboard-user ml-20">
                          
                                {session? <Image src={session.user.image!} height={40} width={40} alt="user image" /> : <Image src={userImg} alt="user image" />}
                          
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
            <div className="tp-modal-box">
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="tp-sign-in-register-box p-relative text-center">
                                <div className="tp-sign-in-register-heading mb-30">
                                    <h4 className="tp-sign-in-register-title">Hello again</h4>
                                    <p>Enter your credentials to access your account.</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal area end */}
        </>
    )
}
