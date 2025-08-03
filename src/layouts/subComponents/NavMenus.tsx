"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import menu_data_one from "@/data/menuData";

export default function NavMenus() {
   const [hoveredMenu, setHoveredMenu] = useState<number | null>(menu_data_one[0]?.id || null);

   useEffect(() => {
      setHoveredMenu(menu_data_one[0]?.id || null);
   }, []);

   return (
      <ul>
         {menu_data_one.map((menu) => (
            <li
               key={menu.id}
               className={`${menu.submenu ? `has-dropdown ${menu.previewImg ? "p-static" : ""}` : ""}`}
               onMouseEnter={() => setHoveredMenu(menu.id)}
            >
               <Link className={hoveredMenu === menu.id ? "hover" : ""} href={menu.url}>
                  {menu.label} {" "}
               </Link>

        

               {menu.submenu && !menu.home_menu && (
                  <ul className="sub-menu">
                     {menu.submenu.map((sub) => (
                        <li key={sub.id}>
                           <Link href={sub.url}><span>{sub.label}</span></Link>
                        </li>
                     ))}
                  </ul>
               )}
            </li>
         ))}
      </ul>
   );
}
