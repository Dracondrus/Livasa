import breadcrumbBg from "../../../public/assets/img/others/breadcrumb3.png";
// import Link from "next/link";

export default function BreadcrumbAreaAgency({ title }: { title: string }) {
    return (
        <section className="tp-breadcrumb__ptb p-relative z-index-1 fix">
            <div className="tp-breadcrumb__bg" style={{ backgroundImage: `url(${breadcrumbBg.src})` }}></div>
            <div className="tp-breadcrumb__text">
                <h3 className="tp-breadcrumb__text-title">Livasa</h3>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12">
                        <div className="tp-breadcrumb__content">
                            <h3 className="tp-breadcrumb__title">{title}</h3>
                            <div className="tp-breadcrumb__list">
                                <span></span>
                                 <span style={{ color:"#ffffffff", fontWeight:700, background:"#000"}}>  Your Trusted Real Estate Partner.</span>
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}