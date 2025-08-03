'use client'

import UserProfileForm from "@/components/Form/UserProfileForm";
import { LogoutSvg } from "@/components/SVG";
import DashboardLayout from "@/layouts/DashboardLayout";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";




export default function MyProfile() {
  const {data:session} = useSession()
 
  return (
    <>
      <DashboardLayout>
        <div className="tp-dashboard-profile-wrapper">
          <h5 className="tp-dashboard-new-title">Account Settings</h5>
          <div className="tp-dashboard-profile-top pb-60">
            <div className="tp-dashboard-profile-left d-flex align-items-center">
              <div className="tp-dashboard-profile-thumb">
             {session?.user.image ? (
  <Image src={session.user.image} alt="user image" height={20} width={20} />
) : (
  <div className="tp-dashboard-profile-thumb-placeholder">No Image</div>
)}
  
              </div>
              <div className="tp-dashboard-profile-inner">
                <h5>{session?.user.name}</h5>
                 <h6>{session?.user.email}</h6>
              </div>
            </div>
            <div className="tp-dashboard-profile-right" onClick={() => signOut({callbackUrl: "/sign-up"})}>
              
              
              
           <LogoutSvg  height={20} width={20}/>
            </div>
          </div>
          {/* Profile form information */}
          <UserProfileForm />
          {/* Profile form information */}
        </div>
      </DashboardLayout>
    </>
  )
}