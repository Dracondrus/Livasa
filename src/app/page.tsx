'use client'
import HeaderOne from "@/layouts/Headers/HeaderOne";
import HomeOnePage from "./(homes)/home-one/page";
import BackToTop from "@/components/Common/BackToTop";
import Wrapper from "@/layouts/Wrapper";
import CommonFooter from "@/layouts/Footers/CommonFooter";
import WebApp from "@twa-dev/sdk"
import { useEffect, useState } from "react";

interface UserData {
  id:number;
  first_name:string;
  last_name?: string;
  username?:string;
  language_code?:string;
  is_premium?: boolean;
}


const Home = () => {
  const [user,SetUser] = useState<UserData | null>(null)

useEffect(() => {
  if(WebApp.initDataUnsafe.user) {
    SetUser(WebApp.initDataUnsafe.user as UserData)
    alert(user)
    console.log(user)
  }

}, [])

  return (
    <>
      <Wrapper>
        <HeaderOne />
        <main>
          <HomeOnePage />
        </main>
        <BackToTop />
        <CommonFooter />
      </Wrapper>
    </>
  );
};

export default Home;
