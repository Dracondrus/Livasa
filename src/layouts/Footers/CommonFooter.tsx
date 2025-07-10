import React from "react";

import FooterCopyright from "./subComponents/FooterCopyright";

// Main Footer component
    export default function CommonFooter({className = "pt-100"}) {
    return (
        <footer className={`tp-footer-area p-relative ${className}`}>
            <div className="tp-footer-bg"></div>
            <div className="container">
                
                <FooterCopyright />
            </div>
        </footer>
    );
};

