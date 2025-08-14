"use client"
import propertyBg from "../../../public/assets/img/rent/property-bg.jpg";
// import PropertyFilterWidget from "./subComponents/PropertyFilterWidget";

import { ReactNode } from "react";
// import Link from "next/link";

export default function PropertyLayout({ children }: { children: ReactNode }) {

   
    return (
        <>
            <section className="tp-property-ptb pt-20 pb-10" style={{ backgroundImage: `url(${propertyBg.src})` }}>
                <div className="container">
                    <div className="row align-items-center">
                     
                    
                    </div>
               
                      
                            {/* Main content section */}
                            {children}
                       
                
                  
                </div>
            </section>
        </>
    )
}
