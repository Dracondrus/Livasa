
'use client'
import WebApp from "@twa-dev/sdk"
import { useEffect, useState } from "react";

 type TelegramWebAppUser = {
  id: number;

  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;

};



export default function Telegram () {

    const [userData,setUserData] = useState<TelegramWebAppUser | null>(null)

useEffect(() => {

    if(WebApp.initDataUnsafe.user) {
setUserData(WebApp.initDataUnsafe.user as TelegramWebAppUser )
    }
    
}, [])


    return (
        <>
        Telegram
        <br />
        {userData ? <div>

            {userData.id}
            <br />
            {userData.username}
            <br />
            {userData.first_name}
        </div> : <div>Loading</div>}
        </>
    )
}