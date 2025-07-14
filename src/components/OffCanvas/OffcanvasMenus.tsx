'use client'
import menu_data_one from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OffcanvasMenus = () => {
    const [navTitle, setNavTitle] = useState("");
    //openMobileMenu
    const openMobileMenu = (menu: string) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return (
        <ul>
            {/* Mapping through header menu data to render offcanvas navigation items */}
            {menu_data_one.map((menu) => (
                <li key={menu.id} className={menu.home_menu ? 'p-static' : navTitle === menu.label ? 'active' : ''}>
                    <Link href={menu.url}>{menu.label}</Link>
                    {menu.home_menu && (
                        <div className="tp-mega-menu" style={{ display: navTitle === menu.label ? "block" : "none" }}>
                            <div className="tp-main-has-submenu">
                                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-5">
                                  
                                </div>
                            </div>
                        </div>
                    )}
                  
                
                </li>
            ))}
        </ul>
    )
}

export default OffcanvasMenus;