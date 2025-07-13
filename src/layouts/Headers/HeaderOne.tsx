"use client";

import React, { useEffect, useState } from "react";

import OffcanvasArea from "../../components/OffCanvas/OffcanvasArea";
import CartOffcanvas from "@/components/OffCanvas/CartOffcanvas";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import useGlobalContext from "@/hooks/useContext";

import NavMenus from "../subComponents/NavMenus";

import useSticky from "@/hooks/useSticky";
import Link from "next/link";
import ELFASA from "../../../public/elfasa.png"
import Image from "next/image";

import { Select } from "antd";

const languageOptions = [
  {
    value: 'uz',
    label: <span className="fi fi-uz" style={{ fontSize: '20px' }}></span>
  },
  {
    value: 'ru',
    label: <span className="fi fi-ru" style={{ fontSize: '20px' }}></span>
  },
  {
    value: 'en',
    label: <span className="fi fi-gb" style={{ fontSize: '20px' }}></span>
  }
];
export default function HeaderOne() {
  const locale = useLocale(); // текущая локаль ('ru', 'uz', 'en')
  const router = useRouter();
  const pathname = usePathname(); // например: /ru/main или /uz/about
  const [currency, setCurrency] = useState<string>('USD');


  useEffect(() => {

    const stored = localStorage.getItem('user_selected_usd');
    if (stored == 'false') {
      setCurrency('UZS');
    } else {
      setCurrency('USD');
    }
  }, []);

  const handleChange = (value: string) => {
    window.location.reload();
    setCurrency(value);
    // Сохраняем в localStorage
    localStorage.setItem('user_selected_usd', value === 'USD' ? 'true' : 'false');

  };
  const handleChangeLang = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // заменяем локаль в URL
    const newPath = segments.join('/');
    router.push(newPath);
  };


  const [openCartMini, setOpenCartMini] = useState<boolean>(false);
  const { toggleOffcanvas } = useGlobalContext();
  const { sticky } = useSticky();


  const renderHeaderContent = () => (
    <div className="container container-large">
      <div className="row align-items-center">
        <div className="col-xl-2 col-lg-4 col-md-3 col-6">
          <div className="tp-header-logo">

            <Link href="/">
              {
                sticky ? <div className="flex items-center ">
                  <Image alt="ELFASA" src={ELFASA} loading="lazy" height={50} width={50} style={{ marginRight: 10 }} />
                  <span className="logo__title logo__title_black" >LIVASA</span>
                </div>
                  :
                  <div className="flex items-center ">
                    <Image alt="ELFASA" src={ELFASA} loading="lazy" height={50} width={50} style={{ marginRight: 10 }} />
                    <span className="logo__title">LIVASA</span>
                  </div>

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

              <div className="tp-header-right-wishlist mr-0 d-none d-xxl-block">
                <Select
                  value={locale}
                  onChange={handleChangeLang}
               
                  style={{ width: 60 }}
                  bordered={false}
                  suffixIcon={null}
                  options={languageOptions}
                />

              </div>


              <div className="tp-header-right-cart mr-100 pb-10"  >
                <Select
                  value={currency}
                  onChange={handleChange}
                  className="custom-currency-select"
                  style={{ width: 60 }}
                  bordered={false}
                  suffixIcon={null}
                >
                  <Select.Option value="USD">USD</Select.Option>
                  <Select.Option value="UZS">UZS</Select.Option>
                </Select>

              </div>
              <div className="tp-header-right-user-icon">
                {/* <Link href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                  <span><UserSvg /></span>
                </Link> */}
              </div>
              <div className="tp-header-right-user-content">
                {/* <p>Hello, Sign In</p>
                <span>Your Account</span> */}
              </div>
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
