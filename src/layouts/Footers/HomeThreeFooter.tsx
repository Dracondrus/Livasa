
import React from "react";
import { quickLinks, serviceLinks } from "@/data/footerLinks";
import FooterContact from "./subComponents/FooterContact";
import FooterColumn from "./subComponents/FooterColumn";
import FooterAppLinks from "./subComponents/FooterAppLinks";
import FooterCopyright from "./subComponents/FooterCopyright";

// Home-3 Footer component
    export default function HomeThreeFooter() {
    return (
        <footer className="tp-footer-area p-relative pt-140">
            <div className="tp-footer-bg"></div>
            <div className="container">
                <div className="tp-footer-widget-border">
                    <div className="row">
                        <FooterContact />
                        <FooterColumn title="Quick Link" links={quickLinks} />
                        <FooterColumn footerCol={3} title="Services" links={serviceLinks} />
                        <FooterAppLinks />
                    </div>
                </div>
                <FooterCopyright />
            </div>
        </footer>
    );
};

