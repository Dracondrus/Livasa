"use client"

import { LoginButton } from "@telegram-auth/react";

export default function SignUpForm() {

    return (
     <div style={{
        color: 'red'
     }}>
       <LoginButton
        onAuthCallback={(data) => {
                    localStorage.setItem(process.env.NEXT_PUBLIC_USER!, JSON.stringify(data))
                    window.location.href = "/"
                }}
        botUsername={process.env.NEXT_PUBLIC_AUTH!} 
        buttonSize="large"
        cornerRadius={20}
        showAvatar={true}
        lang="ru"
      />
     </div>
    );
}
