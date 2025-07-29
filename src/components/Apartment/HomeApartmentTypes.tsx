
import apartmentTypes from "@/data/apartmentTypeData";
import Image from "next/image";
import Link from "next/link";

export default function HomeApartmentTypes() {
    return (
        <section className="tp-apartment-area pt-130 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-apartment-heading text-center mb-50">
                            <h3 className="tp-section-title">Universe of apartment types</h3>
                        </div>
                        <div className="tp-apartment-wrap d-flex align-items-center justify-content-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                            {apartmentTypes.map((apartment) => (
                                <div key={apartment.id} className="tp-apartment-item d-flex align-items-center mb-30">
                                    <div className="tp-apartment-item-icon">
                                        <span>
                                            <Image src={apartment.image} alt={apartment.title}/>
                                        </span>
                                    </div>
                                    <div className="tp-apartment-item-content">
                                        <h5 className="tp-apartment-item-title">
                                            <Link href="#">{apartment.title}</Link>
                                        </h5>
                                        <p>{apartment.properties} Property</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}