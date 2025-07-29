
import Image from "next/image";
import roundShape from "../../../public/assets/img/feature/round-shape.png";

export default function TextSlide() {
  return (
    <section className="tp-text-area p-relative pt-120">
      <div className="tp-text-round-box">
        <Image src={roundShape} alt="" />
        <span>1</span>
      </div>
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-lg-12">
            <div className="tp-text-sliding mb-30">
              <div className="tp-text-scroll-hr">
                <div className="tp-text-scroll-wrap">
                  <h2 className="tp-text-title">
                    Luxury Apartments Property Residential Modern House Luxury
                    Apartments Property Residential Modern House Luxury Apartments
                    Property Residential Modern House Luxury Apartments Property
                    Residential Modern House Luxury Apartments Property Residential
                    Modern House Luxury Apartments Property Residential Modern House
                    Luxury Apartments Property Residential Modern House Luxury
                    Apartments Property Residential Modern House Luxury Apartments
                    Property Residential Modern House
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-text-sliding-2">
              <div className="tp-text-scroll-hr-2">
                <div className="tp-text-scroll-wrap-2">
                  <h2 className="tp-text-title-2">
                    <span>Property</span>
                    <span>Residential</span>
                    <span>Modern</span>
                    <span>House</span>
                    <span>Property</span>
                    <span>Residential</span>
                    <span>Modern</span>
                    <span>House</span>
                    <span>Property</span>
                    <span>Residential</span>
                    <span>Modern</span>
                    <span>House</span>
                    <span>Property</span>
                    <span>Residential</span>
                    <span>Modern</span>
                    <span>House</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
