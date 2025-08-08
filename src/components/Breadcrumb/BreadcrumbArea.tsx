import breadcrumbBg from "../../../public/assets/img/others/breadcrumb2.png";
// import Link from "next/link";

export default function BreadcrumbArea({ title }: { title: string }) {
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
                                 <span style={{ color:"#ffffffff", fontWeight:700, background:"#000"}}>  Choose the perfect plan — affordable, transparent, and designed for you.</span>
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}