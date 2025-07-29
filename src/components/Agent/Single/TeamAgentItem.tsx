import TeamAgentSocialLink from "./TeamAgentSocialLink";
import EmailSvg from "@/components/SVG/EmailSvg";
import ShareSvg from "@/components/SVG/ShareSvg";
import { ITeamDT } from "@/types/team-d-t";
import Image from "next/image";
import Link from "next/link";

// Create a separate component for each team member
export default function TeamAgentItem({ id, image, name, designation, socialLinks }: ITeamDT) {
    return (
        <div className="tp-team-item text-center">
            <div className="tp-team-thumb p-relative">
                <Link href={`/agent-details/${id}`}>
                    <Image style={{ width: "100%", height: "auto" }} src={image} alt="team-image" />
                </Link>
                <div className="tp-team-social">
                    <button><span><EmailSvg /></span></button>
                    <div className="share-btn">
                        <span><ShareSvg /></span>
                        <TeamAgentSocialLink socialLinks={socialLinks} />
                    </div>
                </div>
            </div>
            <div className="tp-team-content">
                <h5 className="tp-team-title">
                    <Link href={`/agent-details/${id}`}>{name}</Link>
                </h5>
                <p>{designation}</p>
            </div>
        </div>
    )

};