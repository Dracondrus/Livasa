import AboutHomeFour from "@/components/About/AboutHomeFour";
import TextArea from "@/components/Awards/TextArea";
import BrandAreaThree from "@/components/Barnd/BrandAreaThree";
import HomeBlogArea from "@/components/Blog/HomeBlogArea";
import ContactHomeFour from "@/components/Contact/ContactHomeFour";
import CounterHomeFour from "@/components/Counter/CounterHomeFour";
import CtaArea from "@/components/CTA/CtaArea";
import FaqHomeFour from "@/components/FAQ/FaqHomeFour";
import HeroBannerFour from "@/components/HeroBanner/HeroBannerFour";
import LocationArea from "@/components/Location/LocationArea";
import PricingPlanTwo from "@/components/Pricing/PricingPlanTwo";
import PropertyFeaturesSlider from "@/components/PropertyFeature/PropertyFeaturesSlider";
import PropertyHomeFour from "@/components/Property/PropertyHomeFour";
import ReviewArea from "@/components/Review/ReviewArea";
import ServiceArea from "@/components/Service/ServiceArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home Four - Bhumi Real Estate React NextJs Template",
};

export default function HomeFour() {
    return (
        <>
            {/* hero area */}
            <HeroBannerFour />
            {/* hero area end */}
            {/* about area */}
            <AboutHomeFour />
            {/* about area end */}
            {/* rent area */}
            <PropertyHomeFour />
            {/* rent area end */}
            {/* text area */}
            <TextArea />
            {/* text area end */}
            {/* service area */}
            <ServiceArea sectionClass="tp-service-ptb" borderClass="tp-service-border-top" />
            {/* service area end */}
            {/* location area */}
            <LocationArea bgColor="#262B35" headingClass="tp-location-4-heading" ptClass="pt-140" itemClass="home-4" />
            {/* location area end */}
            {/* get in touch area */}
            <ContactHomeFour />
            {/* get in touch area end */}
            {/* barnd area */}
            <BrandAreaThree />
            {/* barnd area end */}
            {/* review area */}
            <ReviewArea />
            {/* review area end */}
            {/* counter area */}
            <CounterHomeFour />
            {/* counter area end */}
            {/* pricing area */}
            <PricingPlanTwo />
            {/* pricing area end */}
            {/* faq area */}
            <FaqHomeFour />
            {/* faq area end */}
            {/* property area */}
            <PropertyFeaturesSlider columnClass={true} showBtn={true} textAlign="align-items-end" textStart="text-start" />
            {/* property area end */}
            {/* blog area */}
            <HomeBlogArea wrapClass="tp-blog-4-ptb" />
            {/* blog area end */}
            {/* cta area */}
            <CtaArea wrapClass="tp-cta-4-ptb" />
            {/* cta area end */}
        </>
    )
}