"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
               
               onMouseEnter={() => setHoveredMenu(menu.id)}
            >
               <Link className={hoveredMenu === menu.id ? "hover" : ""} href={menu.url}>
                  {menu.label} {" "}
               </Link>

             

             
            </li>
         ))}
      </ul>
   );
}
