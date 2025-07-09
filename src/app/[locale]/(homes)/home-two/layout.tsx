import BackToTop from '@/components/Common/BackToTop';
import CommonFooter from '@/layouts/Footers/CommonFooter';
import HeaderTwo from '@/layouts/Headers/HeaderTwo';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Wrapper>
                <HeaderTwo />
                {children}
                <CommonFooter className='pt-140' />
                <BackToTop />
            </Wrapper>
        </>
    )
}
