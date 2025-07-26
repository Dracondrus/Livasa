'use client'

import DashboardLayout from "@/layouts/DashboardLayout";
import { IUser } from "@/types/user";


import Link from "next/link";



export default function MyProfile() {

  const user : IUser = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_USER!)!)
  

  return (
    <>
      <DashboardLayout>
        <div className="tp-dashboard-profile-wrapper">
          <h5 className="tp-dashboard-new-title">Account Settings</h5>
          <div className="tp-dashboard-profile-top pb-60">
                <div className="tp-dashboard-profile-inner">
                <h6> {user.first_name} </h6>
             
              </div>
            <div className="tp-dashboard-profile-left d-flex align-items-center">
           
              <div className="tp-dashboard-profile-inner">
                <h4> {user.id} </h4>
             
              </div>
              <br />
          
            </div>
                <div className="tp-dashboard-profile-inner">
                <h6> {user.username} </h6>
             
              </div>
            <div className="tp-dashboard-profile-right">
              <div className="tp-dashboard-profile-btn">
                <Link href="/sign-uo" onClick={() => {
                  localStorage.clear()
                  window.location.reload()
                }}>Logout</Link>
              </div>
            </div>
          </div>
          {/* Profile form information */}
          {/* <UserProfileForm /> */}
          {/* Profile form information */}
        </div>
      </DashboardLayout>
    </>
  )
}