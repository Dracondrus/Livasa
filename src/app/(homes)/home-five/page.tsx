import ReusableAboutArea from '@/components/About/ReusableAboutArea';
import ReusableBlogArea from '@/components/Blog/ReusableBlogArea';
import CompanyHomeFive from '@/components/Company/CompanyHomeFive';
import CountriesAreaTwo from '@/components/Countries/CountriesAreaTwo';
import ReusableFaqArea from '@/components/FAQ/ReusableFaqArea';
import HeroBannerFive from '@/components/HeroBanner/HeroBannerFive';
import PropertyHomeFive from '@/components/Property/PropertyHomeFive';
import RealEstateHighlights from '@/components/Property/RealEstateHighlights';
import RentAreaHomeFive from '@/components/Property/RentAreaHomeFive';
import PropertyFeatureListHomeFive from '@/components/PropertyFeature/PropertyFeatureListHomeFive';
import ServiceAreaTwo from '@/components/Service/ServiceAreaTwo';
import ReusableTestimonial from '@/components/Testimonial/ReusableTestimonial';
import VideoAreaTwo from '@/components/Video/VideoAreaTwo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home Five - Bhumi Real Estate React NextJs Template",
  };

export default function HomeFive() {
    return (
        <>
            {/* hero area */}
            <HeroBannerFive />
            {/* hero area end */}
            {/* feature area */}
            <RealEstateHighlights sectionClass="tp-feature-5-ptb" paddingClass="pt-90" />
            {/* feature area end */}
            {/* listing area */}
            <PropertyHomeFive />
            {/* listing area end */}
            {/* about area */}
            <ReusableAboutArea />
            {/* about area end */}
            {/* property-5 area */}
            <PropertyFeatureListHomeFive />
            {/* property-5 area end */}
            {/* rent area */}
            <RentAreaHomeFive />
            {/* rent area end */}
            {/* video area */}
            <VideoAreaTwo />
            {/* video area end */}
            {/* service area */}
            <ServiceAreaTwo />
            {/* service area end */}
            {/* countries area */}
            <CountriesAreaTwo />
            {/* countries area end */}
            {/* Faq Area */}
            <ReusableFaqArea />
            {/* Faq Area end*/}
            {/* testimonial area */}
            <ReusableTestimonial />
            {/* testimonial area end */}
            {/* company area */}
            <CompanyHomeFive />
            {/* company area end */}
            {/* blog area */}
            <ReusableBlogArea sectionClass='tp-blog-5-ptb' />
            {/* blog area end */}
        </>
    );
};