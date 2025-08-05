
import BackToTop from '@/components/Common/BackToTop';
import CommonFooter from '@/layouts/Footers/CommonFooter';
import HeaderThree from '@/layouts/Headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Wrapper>
                <HeaderThree />
                {children}
                <CommonFooter className='tp-footer-4-ptb' />
                <BackToTop />
            </Wrapper>
        </>
    )
}
