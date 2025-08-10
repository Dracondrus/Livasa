import RealestateAboutArea from "@/components/PropertyFeature/RealestateAboutArea";
import RealEstateHighlights from "@/components/Property/RealEstateHighlights";
import BreadcrumbArea from "../../../../components/Breadcrumb/BreadcrumbAreaContact";
import AboutTestimonial from "@/components/Testimonial/AboutTestimonial";
import AboutHomeFive from "@/components/About/ReusableAboutArea";
import AboutPointArea from "@/components/About/AboutPointArea";
import TeamAgentsArea from "@/components/Agent/TeamAgentsArea";
import ContactArea from "@/components/Contact/ContactArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Bhumi Real Estate React NextJs Template",
  };

export default function About() {
    return (
        <>
            {/* breadcrumb area */}
            <BreadcrumbArea title="About us" />
            {/* breadcrumb area end */}
            {/* about area */}
            <AboutHomeFive />
            {/* about area end */}
            {/* feature section */}
            <RealEstateHighlights sectionClass="tp-feature-5-ptb" paddingClass="pt-90" bgColor="#F0F4FD" />
            {/* feature section end */}
            {/* about point area */}
            <AboutPointArea />
            {/* about point area end */}
            {/* team area */}
            <TeamAgentsArea />
            {/* team area end*/}
            {/* realestate area */}
            <RealestateAboutArea />
            {/* realestate area end */}
            {/* testimonial area */}
            <AboutTestimonial />
            {/* testimonial area end */}
            {/* contact area */}
            <ContactArea btnClass="tp-countact-btn"/>
            {/* contact area end */}
        </>
    )
}