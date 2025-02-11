import React, { useState } from "react";
import "./PricingSec.css";

const PricingSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const plans = [
    {
      price: "$20",
      period: "/month",
      name: "Intro",
      features: [
        "Transportation for you",
        "A hotel or homestay",
        "Free meals and drinks",
      ],
      disabledFeatures: ["24/7 Support", "Unlimited users"],
    },
    {
      price: "$99",
      period: "/month",
      name: "Base",
      features: [
        "Transportation for you",
        "A hotel or homestay",
        "Free meals and drinks",
      ],
      disabledFeatures: ["24/7 Support", "Unlimited users"],
    },
    {
      price: "$150",
      period: "/month",
      name: "Pro",
      features: [
        "Transportation for you",
        "A hotel or homestay",
        "Free meals and drinks",
        "24/7 Support",
        "Unlimited users",
      ],
    },
    {
      price: "$200",
      period: "/month",
      name: "Enterprise",
      features: [
        "Transportation for you",
        "A hotel or homestay",
        "Free meals and drinks",
        "24/7 Support",
        "Unlimited users",
      ],
    },
  ];

  return (
    <div className="pricing-sec">
    <div className="pricing-container">
      <h3 className="pricing-title">Our Subscription Plans</h3>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${hoveredIndex === index ? "highlight" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2>{plan.price} <span>{plan.period}</span></h2>
            <h4>{plan.name}</h4>
            <p>Best plan for your needs at a reasonable price</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx} className="enabled">{feature}</li>
              ))}
              {plan.disabledFeatures &&
                plan.disabledFeatures.map((feature, idx) => (
                  <li key={idx} className="disabled">{feature}</li>
                ))}
            </ul>
            <button className="pricing-btn">Join Now →</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PricingSection;
