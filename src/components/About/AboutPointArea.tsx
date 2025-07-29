
import { AboutSvgFour, AboutSvgOne, AboutSvgThree, AboutSvgTwo } from "../SVG";
import { JSX } from "react";

interface AboutPoint {
    icon: JSX.Element;
    title: string;
}
const aboutPoints = [
    { icon: <AboutSvgOne />, title: "Excellence" },
    { icon: <AboutSvgTwo />, title: "Achievement" },
    { icon: <AboutSvgThree />, title: "Quality" },
    { icon: <AboutSvgFour />, title: "Transparency" },
];

const AboutPointItem = ({ icon, title }:AboutPoint) => (
    <div className="tp-about-point-item d-flex">
        <div className="tp-about-point-item-icon">
            <span>{icon}</span>
        </div>
        <div className="tp-about-point-item-content">
            <h4 className="tp-about-point-item-title">{title}</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing modo ligula eget dolor. Aenean massa.</p>
        </div>
    </div>
);

export default function AboutPointArea() {
    return (
        <section className="tp-about-point-ptb pt-130 pb-110" style={{ backgroundColor: "#262B35" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-about-point-heading text-center mb-50">
                            <h3 className="tp-section-title">
                                How we make real estate <br /> simple for you
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-12 gx-0">
                        <div className="tp-about-point-box d-flex flex-wrap">
                            {aboutPoints.map((point, index) => (
                                <AboutPointItem key={index} {...point} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
