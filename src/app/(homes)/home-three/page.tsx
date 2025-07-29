import PropertyFeaturesSlider from "@/components/PropertyFeature/PropertyFeaturesSlider";
import ReusableTestimonial from "@/components/Testimonial/ReusableTestimonial";
import HomeThreeApartment from "@/components/Apartment/HomeThreeApartment";
import PropertyHomeThree from "@/components/Property/PropertyHomeThree";
import HeroBannerThree from "@/components/HeroBanner/HeroBannerThree";
import ExperienceArea from "@/components/Experience/ExperienceArea";
import CountriesArea from "@/components/Countries/CountriesArea";
import ImageSlideArea from "@/components/Features/ImageSlideArea";
import ReusableBlogArea from "@/components/Blog/ReusableBlogArea";
import ProgressArea from "@/components/Progress/ProgressArea";
import OfferArea from "@/components/OfferArea/OfferArea";
import TeamTwoArea from "@/components/Agent/TeamTwoArea";
import ChooseArea from "@/components/Choose/ChooseArea";
import VideoArea from "@/components/Video/VideoArea";
import CtaArea from "@/components/CTA/CtaArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home Three- Bhumi Real Estate React NextJs Template",
  };

export default function HomeThree() {
    return (
        <>
            {/* hero area */}
            <HeroBannerThree />
            {/* hero area end */}
            {/* experience area */}
            <ExperienceArea />
            {/* experience area end */}
            {/* apartment area */}
            <HomeThreeApartment />
            {/* apartment area end */}
            {/* listing area */}
            <PropertyHomeThree />
            {/* listing area end */}
            {/* offer area */}
            <OfferArea />
            {/* offer area end */}
            {/* countries area */}
            <CountriesArea />
            {/* countries area end */}
            {/* video area */}
            <VideoArea />
            {/* video area end */}
            {/* property area */}
            <PropertyFeaturesSlider />
            {/* property area end */}
            {/* progress area */}
            <ProgressArea />
            {/* progress area end */}
            {/* team area */}
            <TeamTwoArea />
            {/* team area end */}
            {/* slider image */}
            <ImageSlideArea />
            {/* slider image end */}
            {/* choose area */}
            <ChooseArea />
            {/* choose area end */}
            {/* testimonial area */}
            <ReusableTestimonial />
            {/* testimonial area end */}
            {/* cta area */}
            <CtaArea />
            {/* cta area end */}
            {/* blog area */}
            <ReusableBlogArea />
            {/* blog area end */}
        </>
    )
}