import { quickLinks, serviceLinks } from "@/data/footerLinks";
import FooterColumn from "./subComponents/FooterColumn";
import FooterContact from "./subComponents/FooterContact";
import FooterNewsletter from "./subComponents/FooterNewsletter";

export default function FooterStyleTwo() {
    return (
        <footer className="tp-footer-area p-relative pt-200 pb-80">
            <div className="tp-footer-bg"></div>
            <div className="container">
                    <div className="row">
                        <FooterContact />
                        <FooterColumn title="Quick Link" links={quickLinks} />
                        <FooterColumn footerCol={3} title="Services" links={serviceLinks} />
                        <FooterNewsletter />
                    </div>
            </div>
        </footer>
    )
}