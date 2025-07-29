import aboutImg1 from "../../../public/assets/img/about/home-5/about-5-1.jpg";
import aboutImg2 from "../../../public/assets/img/about/home-5/about-5-2.jpg";
import aboutIcon1 from "../../../public/assets/img/about/home-5/about-5-icon-1.svg";
import aboutIcon2 from "../../../public/assets/img/about/home-5/about-5-icon-2.svg";
import Image from "next/image";
import Link from "next/link";

export default function ReusableAboutArea() {
    return (
        <section className="tp-about-5-ptb fix pt-130 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-about-5-thumb p-relative wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                            <Image src={aboutImg1} alt="About Image" />
                            <div className="tp-about-5-img image-anime">
                                <Image style={{width:"100%", height:"auto"}} src={aboutImg2} alt="About Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-about-5-wrapper wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="tp-about-5-heading mb-50">
                                <span className="tp-section-title-pre">THE REASON FOR LOVE BHUMI</span>
                                <h3 className="tp-section-title">Accurate to 99% of a property details.</h3>
                            </div>
                            <div className="tp-about-5-item-box mb-55">
                                {[{ icon: aboutIcon1, title: "Affordable price" }, { icon: aboutIcon2, title: "Experienced agents" }].map((item, index) => (
                                    <div className="tp-about-5-item d-flex mb-30" key={index}>
                                        <div className="tp-about-5-item-icon mr-30">
                                            <Image src={item.icon} alt={item.title} />
                                        </div>
                                        <div className="tp-about-5-item-content">
                                            <h4 className="tp-about-5-title">{item.title}</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> modo ligula eget dolor. Aenean massa. Cum</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="tp-about-btn d-flex">
                                {[
                                    { href: "/about", text: "About More" },
                                    { href: "/contact", text: "Trusted Agents", className: "btn-2" }
                                ].map((btn, index) => (
                                    <Link className={`tp-btn ${btn.className || ""}`} href={btn.href} key={index}>
                                        <span className="btn-wrap">
                                            <b className="text-1">{btn.text}</b>
                                            <b className="text-2">{btn.text}</b>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}