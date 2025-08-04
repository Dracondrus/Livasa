// import AboutHomeMain from '@/components/About/AboutHomeMain';
// import HomeApartmentArea from '@/components/Apartment/HomeApartment';
// import HomeApartmentTypes from '@/components/Apartment/HomeApartmentTypes';
// import BrandAreaOne from '@/components/Barnd/BarndAreaOne';
import HomeBlogArea from '@/components/Blog/HomeBlogArea';
// import HomeApproachCounter from '@/components/Counter/HomeApproachCounter';
import HeroBannerOne from '@/components/HeroBanner/HeroBannerOne';
// import HomePropertiesByCity from '@/components/Neighborhood/HomePropertiesByCity';
// import HomeNewsletter from '@/components/Newsletter/HomeNewsletter';
import FeatureShowcaseCategory from '@/components/Property/FeatureShowcaseCategory';
import PropertyHome from '@/components/Property/PropertyHome';
// import TeamAgentsArea from '@/components/Agent/TeamAgentsArea';
import HomeTestimonialArea from '@/components/Testimonial/HomeTestimonialArea';
// import TextSlide from '@/components/Features/TextSlide';
import React from 'react';
// import UsersPage from '@/components/Users/Users';


    export default function HomeOnePage() {
    return (
        <>
            {/* hero banner  */}
            <HeroBannerOne />
            {/* <UsersPage/>     */}
          
            {/* hero banner end */}
            {/*feature area*/}
            <FeatureShowcaseCategory />
            {/*feature area end*/}
            {/* about area  */}
            {/* <AboutHomeMain /> */}
            {/* about area end */}
            {/* apartment area type*/}
             <PropertyHome />
            {/* <HomeApartmentTypes /> */}
            {/*apartment area type end */}
            {/* newsletter area */}
            {/* <HomeNewsletter /> */}
            {/* newsletter area end */}
            {/* rent area */}
           
            {/* rent area end */}
            {/* apartment area*/}
            {/* <HomeApartmentArea /> */}
            {/* apartment area end*/}
            {/* explore area */}
            {/* <HomePropertiesByCity /> */}
             {/* <TextSlide /> */}
            {/* explore area end */}
            {/* counter area */}
            {/* <HomeApproachCounter /> */}
            {/* counter area end */}
            {/* testimonial area */}
            <HomeTestimonialArea />
            {/* testimonial area end */}
            {/* text slide */}
           
            {/* text slide end*/}
            {/* team area */}
            {/* <TeamAgentsArea /> */}
            {/* team area end*/}
            {/* barnd area */}
            {/* <BrandAreaOne /> */}
            {/* barnd area end */}
            {/* blog area */}
            <HomeBlogArea />
            {/* blog area end */}

        </>
    );
};
