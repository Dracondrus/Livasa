"use client"
import { useState } from "react";
import { ClosedEyeSvg, OpenEyeSvg } from "../SVG";

export default function UserProfileForm() {
    const [oldPassword, setOldPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <form>
                <div className="tp-dashboard-profile-information pb-50">
                    <h5 className="tp-dashboard-new-title">Information</h5>
                    <div className="tp-dashboard-profile-info">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-dashboard-new-input">
                                    <label>Full name:* </label>
                                    <input type="text" placeholder="Full name" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tp-dashboard-new-input">
                                    <label>Description:* </label>
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-dashboard-new-input">
                                    <label>Email:* </label>
                                    <input type="text" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-dashboard-new-input">
                                    <label>Social Link</label>
                                    <input type="text" placeholder="Enter Your Social link" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-dashboard-new-input">
                                    <label>Number</label>
                                    <input type="text" placeholder="Enter Your Number" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-dashboard-new-input">
                                    <label>Address</label>
                                    <input type="text" placeholder="Enter Your Adress" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-dashboard-profile-information mb-40">
                    <h5 className="tp-dashboard-new-title">Change password</h5>

                    <div className="tp-dashboard-profile-info">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="tp-dashboard-new-input">
                                    <label> Old Password:* </label>
                                    <div className="tp-sign-in-input p-relative">
                                        <div className="password-input p-relative">
                                            <input type={oldPassword ? "text" : "password"} placeholder="Password" />

                                            <div className="tp-sign-in-input-eye password-show-toggle"
                                                onClick={() => setOldPassword((prev) => !prev)}
                                            >
                                                <span className="open-eye open-eye-icon"
                                                    style={{ display: oldPassword ? "block" : "none" }}
                                                >
                                                    <OpenEyeSvg />
                                                </span>
                                                <span className="open-close close-eye-icon"
                                                    style={{ display: oldPassword ? "none" : "block" }}
                                                >
                                                    <ClosedEyeSvg />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tp-dashboard-new-input">
                                    <label> New Password:* </label>
                                    <div className="tp-sign-in-input p-relative">
                                        <div className="password-input p-relative">
                                            <input type={newPassword ? "text" : "password"} placeholder="Password" />
                                            <div className="tp-sign-in-input-eye password-show-toggle"
                                                onClick={() => setNewPassword((prev) => !prev)}
                                            >
                                                <span className="open-eye open-eye-icon"
                                                    style={{ display: newPassword ? "block" : "none" }}
                                                >
                                                    <OpenEyeSvg />
                                                </span>
                                                <span className="open-close close-eye-icon"
                                                    style={{ display: newPassword ? "none" : "block" }}
                                                >
                                                    <ClosedEyeSvg />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tp-dashboard-new-input">
                                    <label> Confirm Password:* </label>
                                    <div className="tp-sign-in-input p-relative">
                                        <div className="password-input p-relative">
                                            <input type={showConfirmPassword ? "text" : "password"} placeholder="Password" />
                                            <div className="tp-sign-in-input-eye password-show-toggle"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            >
                                                <span className="open-eye open-eye-icon"
                                                    style={{ display: showConfirmPassword ? "block" : "none" }}
                                                >
                                                    <OpenEyeSvg />
                                                </span>
                                                <span className="open-close close-eye-icon"
                                                    style={{ display: showConfirmPassword ? "none" : "block" }}
                                                >
                                                    <ClosedEyeSvg />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tp-dashboard-profile-info-btn">
                            <div className="tp-dashboard-new-btn">
                                <button>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}