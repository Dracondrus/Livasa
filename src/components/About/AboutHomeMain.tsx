import aboutThumb from "../../../public/assets/img/about/about-thumb-1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function AboutHomeMain() {
    return (
        <section className="tp-about-area p-relative pt-140 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="tp-about-thumb">
                            <Image src={aboutThumb} alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div
                            className="tp-about-wrapper p-relative z-index-1 wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay=".7s"
                        >
                            <div className="tp-about-heading">
                                <h3 className="tp-section-title">
                                    Engage in lively urban lifestyle <br /> from outstanding property.
                                </h3>
                            </div>
                            <div className="tp-about-content">
                                <p>
                                    At the heart of each of our investments is a strategy to build or buy a <br />
                                    portfolio of real estate <span>12+ years of experience</span> a specific user <br />
                                    group. We believe that by doing this well we create better <br />
                                    outcomes, not only for our investors, but for society as a <br />
                                    whole. Matter invests in companies.
                                </p>
                                <div className="tp-about-btn d-flex">
                                    <Link className="tp-btn" href="/about">
                                        <span className="btn-wrap">
                                            <b className="text-1">About Company</b>
                                            <b className="text-2">About Company</b>
                                        </span>
                                    </Link>
                                    <Link className="tp-btn btn-2" href="/property-style-1">
                                        <span className="btn-wrap">
                                            <b className="text-1">Find Property</b>
                                            <b className="text-2">Find Property</b>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}