import userImg from "../../../../public/assets/img/team/team-details/user.png";
import { SocialLinksThree } from "@/components/UI/SocialLinks";
import LeaveMessageForm from "@/components/Form/LeaveMessageForm";
import { CallThreeSvg, TeamEmailSvg } from "@/components/SVG";
import Image from "next/image";
import Link from "next/link";

export default function UserContactCard () {
    return (
        <>
        <div className="tp-team-details-widget mb-40">
                <div className="tp-team-details-info-box">
                    <div className="tp-team-details-info-top">
                        <div className="tp-team-details-info-user d-flex align-items-center">
                            <div className="tp-team-details-info-user-thumb">
                                <Image src={userImg} alt="user image" />
                            </div>
                            <div className="tp-team-details-info-user-content">
                                <h4>David Hussy</h4>
                                <p>25 Property</p>
                            </div>
                        </div>
                        <div className="tp-team-details-info-user-social text-center">
                            <SocialLinksThree />
                        </div>
                    </div>
                    <div className="tp-team-details-info-content">
                        <div className="tp-team-details-info-contact">
                            <Link href="tel:2566"> <span><CallThreeSvg width="16" height="16" /></span>+999 325 654 8596</Link>
                            <Link href="mailto:hi@gmail.com"><span><TeamEmailSvg /></span>bhumi@gmail.com</Link>
                        </div>
                        <div className="tp-team-details-info-form">
                            <h3 className="tp-team-details-info-form-title">Leave your message</h3>
                            <LeaveMessageForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}