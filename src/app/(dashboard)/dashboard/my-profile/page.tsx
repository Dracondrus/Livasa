'use client'

import UserProfileForm from "@/components/Form/UserProfileForm";
import DashboardLayout from "@/layouts/DashboardLayout";

import { useSession } from "next-auth/react";
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
                <Image src={session?.user.image!} alt="user image" height={30} width={30}/>
              </div>
              <div className="tp-dashboard-profile-inner">
                <h6>{session?.user.name}</h6>
                
              </div>
            </div>
            <div className="tp-dashboard-profile-right">
           
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