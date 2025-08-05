import PricingCard from "./subComponents/PricingCard";

const pricingPlans = [
        { name: "Basic", price: "$3", delay: ".2s",active: true  },
    { name: "Standard", price: "$8", delay: ".4" ,active: true },
    { name: "Premium", price: "$14", delay: ".6", active: true },
    { name: "Business", price: "$22", delay: ".7", active: true }
];


export default function PricingPlanTwo() {
    return (
        <section className="tp-pricing-ptb pt-130 pb-100" style={{ backgroundColor: "#262B35" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-pricing-heading mb-50">
                            <span className="tp-section-title-pre">OUR PRICING PLAN</span>
                            <h4 className="tp-section-title">Choose the right pricing <br /> plan for you</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}
