import PricingCard from "./subComponents/PricingCard";

const pricingPlans = [
  { 
    name: "Basic", 
    price: "$4", 
    delay: ".2s",
    features: [
      "Add 3 properties",
      "Add 1 ad",
      "Queue status: Basic level."
    ]
  },
  { 
    name: "Standart", 
    price: "$9", 
    delay: ".3s",
    active: true,
    features: [
      "Add 7 properties",
      "Add 3 ads",
      "Queue status: Standart level."
    ]
  },
  { 
    name: "Premium", 
    price: "$15", 
    delay: ".4s",
    features: [
      "Add 12 properties",
      "Add 5 ads",
      "Queue status: Premium level."
    ]
  }
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
