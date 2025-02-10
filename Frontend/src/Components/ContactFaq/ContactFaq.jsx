import React, { useState } from "react";
import "./ContactFaq.css";

const faqs = [
  {
    question: "Why Should I Use Your Services?",
    answer:
      "Once your account is set up and you are familiar with the platform, you are ready to start using our services.",
  },
  {
    question: "How Do I Get Started With Your Services?",
    answer:
      "Simply sign up, log in, and explore our services to find what suits your needs.",
  },
  {
    question: "How Secure Are Your Services?",
    answer:
      "We use advanced encryption and security protocols to ensure your data remains safe and private.",
  },
  {
    question: "Is There Customer Support Available?",
    answer: "Yes, we offer 24/7 customer support to help you with any queries.",
  },
  {
    question: "How Can I Update My Account Information?",
    answer:
      "You can update your account details from the profile section in your dashboard.",
  },
];

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="contact-faq">
    <div className="contact-faq-container">
      <h2 className="contact-faq-title">Frequently Asked Questions</h2>
      <div className="contact-faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`contact-faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="contact-faq-question">
              {faq.question}
              <span className="contact-faq-toggle">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="contact-faq-answer"
              style={{
                maxHeight: openIndex === index ? "200px" : "0",
                opacity: openIndex === index ? "1" : "0",
                padding: openIndex === index ? "15px" : "0",
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ContactFaq;