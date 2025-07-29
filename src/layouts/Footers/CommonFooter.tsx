import React from "react";
import { quickLinks, serviceLinks } from "@/data/footerLinks";
import FooterContact from "./subComponents/FooterContact";
import FooterColumn from "./subComponents/FooterColumn";
import FooterNewsletter from "./subComponents/FooterNewsletter";
import FooterCopyright from "./subComponents/FooterCopyright";

// Main Footer component
    export default function CommonFooter({className = "pt-100"}) {
    return (
        <footer className={`tp-footer-area p-relative ${className}`}>
            <div className="tp-footer-bg"></div>
            <div className="container">
                <div className="tp-footer-widget-border">
                    <div className="row">
                        <FooterContact />
                        <FooterColumn title="Quick Link" links={quickLinks} />
                        <FooterColumn footerCol={3} title="Services" links={serviceLinks} />
                        <FooterNewsletter />
                    </div>
                </div>
                <FooterCopyright />
            </div>
        </footer>
    );
};

