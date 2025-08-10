import detailsImg from "../../../../public/assets/img/team/team-details/agent-details.png"
// import SidebarPropertyItem from "@/components/Layout/subComponents/SidebarPropertyItem";
// import DiscountOfferCard from "@/components/Layout/subComponents/DiscountOfferCard";
// import UserContactCard from "@/components/Layout/subComponents/UserContactCard";
import { SocialLinksTwo } from "@/components/UI/SocialLinks";
// import RelatedTeamAgencyItem from "./RelatedTeamAgencyItem";
// import MessageSvg from "@/components/SVG/MessageSvg";
import { IdProps } from "@/types/custom-interface";
import { teamAgencyData } from "@/data/teamData";
import Image from "next/image";
// import Link from "next/link";

export default function TeamAgencyDetailsMain({ id }: IdProps) {
    // Fetch agency details based on the provided 'id' prop.
    const agency = teamAgencyData.find((agency) => agency.id == id);

    return (
        <section className="tp-team-details-ptb pt-140 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-team-details-box d-flex mb-60">
                            <div className="tp-team-details-thumb">
                                <Image src={detailsImg} style={{width:"100%", height:"auto"}} alt="agency image" />
                            </div>
                            <div className="tp-team-details-content">
                                <h4 className="tp-team-details-content-title">ELFASA TASA</h4>
                                <div className="tp-team-details-share d-flex align-items-center flex-wrap">
                                    <div className="tp-team-details-social">
                                        <SocialLinksTwo />
                                    </div>
                                    <div className="tp-team-details-message">
                                     
                                    </div>
                                </div>
                          <div className="tp-team-details-text">
    <p className="mb-20">
        At <strong>Livasa</strong>, we are more than just a real estate platform — we connect people, ideas, and opportunities. 
        We help clients not only find and rent properties, but also offer construction, renovation, and property management services. 
        Our goal is to make real estate simple, transparent, and accessible for everyone.
    </p>
    <p>
        Operating in the market for over 2 years, we have built a reputation for reliability and innovation. 
        Whether you need to buy, rent, or even build your dream property — our team is here to guide you every step of the way. 
        You can explore our full range of services on the <a href="/services">Services</a> page.
    </p>
</div>

                            </div>
                        </div>
                    </div>
                </div>

             
            </div>
        </section>
    )
}