import Link from "next/link";

// Newsletter component
export default function FooterNewsletter() {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <div className="tp-footer-widget tp-footer-col-4 mb-50">
                <div className="tp-footer-widget-content">
                    <div className="tp-footer-widget-contact">
                        <h3 className="tp-footer-widget-title">Newsletter</h3>
                    </div>
                    <p>Subscribe to our newsletter to get the latest news & updates. <Link href="https://t.me/livasa_uz" target="_blank">Click here</Link>{" "}</p>
                 
                         
                 
                </div>
            </div>
        </div>
    )
}