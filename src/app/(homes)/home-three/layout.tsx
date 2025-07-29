
import BackToTop from '@/components/Common/BackToTop';
import HomeThreeFooter from '@/layouts/Footers/HomeThreeFooter';
import HeaderOne from '@/layouts/Headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Wrapper>
                <HeaderOne />
                {children}
                <HomeThreeFooter />
                <BackToTop />
            </Wrapper>
        </>
    )
}
