import React, { useState } from "react";
import "./FaqOfServiceSec.css";

const faqs = [
  {
    question: "Why Should I Use Your Services?",
    answer:
      "Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.",
  },
  {
    question: "How Do I Get Started With Your Services?",
    answer:
      "To get started, simply sign up, verify your email, and explore the features available in your account dashboard.",
  },
  {
    question: "How Secure Are Your Services?",
    answer:
      "We implement the latest security measures, including end-to-end encryption, to ensure your data remains safe and protected.",
  },
  {
    question: "Is There Customer Support Available?",
    answer:
      "Yes, we offer 24/7 customer support via live chat, email, and phone.",
  },
  {
    question: "How Can I Update My Account Information?",
    answer:
      "You can update your account information by navigating to the settings section in your profile.",
  },
];

const FaqOfServiceSec = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="full-Faq-Service-Sec-faq">
    <section className="Faq-Service-Sec-faq-section">
      <h2 className="Faq-Service-Sec-faq-title">Frequently Asked Questions</h2>
      <div className="Faq-Service-Sec-faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`Faq-Service-Sec-faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="Faq-Service-Sec-faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className={`Faq-Service-Sec-faq-icon ${openIndex === index ? "rotate" : ""}`}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div className="Faq-Service-Sec-faq-answer-wrapper">
              <p className="Faq-Service-Sec-faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default FaqOfServiceSec;
