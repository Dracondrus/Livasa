import blogImg1 from "../../../../public/assets/img/blog/blog-details/blog-details-1.png";
import blogImg2 from "../../../../public/assets/img/blog/blog-details/blog-details-2.png";
import Image from "next/image";

export default function PostboxDetailsText() {
    return (
        <div className="tp-postbox-details-text">
            <h4 className="tp-postbox-details-title">Building Your Dream Home with Care</h4>

            <p className="text-3">
                At our company, we believe that every home should be a perfect reflection of its owner.
                From the foundation to the finishing touches, we deliver quality, reliability, and style.
                Our skilled team works with precision to turn your vision into reality — on time and within budget.
            </p>

            <div className="row tp-gx-20">
                <div className="col-lg-6">
                    <div className="tp-postbox-details-thumb p-relative">
                        <Image
                            style={{ width: "100%", height: "auto" }}
                            src={blogImg1}
                            alt="Renovation in progress"
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tp-postbox-details-thumb p-relative">
                        <Image
                            style={{ width: "100%", height: "auto" }}
                            src={blogImg2}
                            alt="Beautiful finished interior"
                        />
                    </div>
                </div>
            </div>

            <p className="text-4">
                Whether you need a full renovation, modern interior design, or new construction from scratch —
                we handle every step with care. Your comfort, trust, and satisfaction are our top priorities.
                Let us help you create a home where every detail matters.
            </p>
        </div>
    );
}
