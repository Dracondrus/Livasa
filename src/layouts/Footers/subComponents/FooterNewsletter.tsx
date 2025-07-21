import Link from "next/link";

// Newsletter component
export default function FooterNewsletter() {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <div className="tp-footer-widget tp-footer-col-4 mb-50">
                <div className="tp-footer-widget-content">
                    <div className="tp-footer-widget-contact">
                        <h3 className="tp-footer-widget-title">News in Telegram group</h3>
                    </div>
                    <p>Subscribe to our Telegram to get the latest news & updates. <b>    <Link href={""}>Click here</Link></b></p>
             
                      
                 
                </div>
            </div>
        </div>
    )
}