import { BlogQuoteSvg } from "@/components/SVG/BlogQuoteSvg";

export default function PostboxQuote() {
    return (
        <div className="tp-postbox-quote mb-40">
            <div className="tp-postbox-quote-box p-relative d-flex">
                <div className="tp-postbox-quote-icon">
                    <span><BlogQuoteSvg /></span>
                </div>
                <div className="tp-postbox-quote-content">
                    <h3 className="tp-postbox-quote-title">
                        “Quality is never an accident; it is always the result of hard work,
                        careful planning, and true dedication.”
                    </h3>
                    <div className="tp-postbox-quote-sub">
                        <span>Our Company Philosophy</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
