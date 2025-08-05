import FeaturedPropertyListHomeTwo from '@/components/PropertyFeature/FeaturedPropertyListHomeTwo';
import RealEstateHighlights from '@/components/Property/RealEstateHighlights';
import HomeTwoTestimonial from '@/components/Testimonial/HomeTwoTestimonial';
import HomeTwoPortfolio from '@/components/Portfolio/HomeTwoPortfolio';
import PropertyHomeTwo from '@/components/Property/PropertyHomeTwo';
import HeroBannerTwo from '@/components/HeroBanner/HeroBannerTwo';
import HomeTwoCompany from '@/components/Company/HomeTwoCompany';
import BrandSectionTwo from '@/components/Barnd/BrandSectionTwo';
import HomeTwoBlogArea from '@/components/Blog/HomeTwoBlogArea';
import ReusableFaqArea from '@/components/FAQ/ReusableFaqArea';
import HomeTwoAwards from '@/components/Awards/HomeTwoAwards';
import ContactArea from '@/components/Contact/ContactArea';
import LocationArea from '@/components/Location/LocationArea';
import HomeTwoPricing from '@/components/Pricing/ProcingPlan';
import ServiceArea from '@/components/Service/ServiceArea';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Home Two - Bhumi Real Estate React NextJs Template",
  };


export default function HomeTwo() {
    return (
        <>
            {/* hero section */}
            <HeroBannerTwo />
            {/* hero section end */}
            {/* feature section */}
            <RealEstateHighlights />
            {/* feature section end */}
            {/* listing section */}
            <FeaturedPropertyListHomeTwo />
            {/* listing section end*/}
            {/* location area */}
            <LocationArea />
            {/* location area end */}
            {/* service area */}
            <ServiceArea />
            {/* service area end */}
            {/* portfolio area */}
            <HomeTwoPortfolio />
            {/* portfolio area end */}
            {/* company area */}
            <HomeTwoCompany />
            {/* company area end */}
            {/* price area */}
            <HomeTwoPricing />
            {/* price area end */}
            {/* faq area */}
            <ReusableFaqArea />
            {/* faq area end */}
            {/* listing arae */}
            <PropertyHomeTwo />
            {/* listing arae end */}
            {/* award area */}
            <HomeTwoAwards />
            {/* award area end */}
            {/* -- box wrapper area -- */}
            <div style={{ backgroundColor: "#262B35" }}>
                <HomeTwoTestimonial />
                <BrandSectionTwo />
            </div>
            {/* -- box wrapper area end -- */}
            {/* contact area */}
            <ContactArea />
            {/* contact area end */}
            {/* blog area */}
            <HomeTwoBlogArea />
            {/* blog area end */}
        </>
    );
};