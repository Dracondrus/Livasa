
import userImg from "../../../../../public/assets/img/shop/user-1.jpg";
import UserProfileForm from "@/components/Form/UserProfileForm";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Profile - Bhumi Real Estate React NextJs Template",
};

export default function MyProfile() {
  return (
    <>
      <DashboardLayout>
        <div className="tp-dashboard-profile-wrapper">
          <h5 className="tp-dashboard-new-title">Account Settings</h5>
          <div className="tp-dashboard-profile-top pb-60">
            <div className="tp-dashboard-profile-left d-flex align-items-center">
              <div className="tp-dashboard-profile-thumb">
                <Image src={userImg} alt="user image" />
                <div className="tp-dashboard-profile-thumb-edit">
                  <input id="profile-thumb-input" className="profile-img-popup" type="file" />
                  <label htmlFor="profile-thumb-input"><i className="fa-light fa-camera"></i></label>
                </div>
              </div>
              <div className="tp-dashboard-profile-inner">
                <h4>Welcome Mr. Admin!</h4>
                <p>You have <span>08</span> notifications</p>
              </div>
            </div>
            <div className="tp-dashboard-profile-right">
              <div className="tp-dashboard-profile-btn">
                <Link href="/sign-in">Logout</Link>
              </div>
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