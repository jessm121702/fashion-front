// Import necessary libraries
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is this platform, and how does it help fashion stylists?",
      answer:
        "It simplifies emailing fashion brands by allowing stylists to send personalized email blasts with brand-specific subject lines using imported Excel/CSV data.",
    },
    {
      question: "Do I need to manually enter brand information for each email?",
      answer:
        "No, the platform automates this process by pulling data from the imported Excel/CSV files, saving you time and effort.",
    },
    {
      question: "How does the personalized email system work?",
      answer:
        "It simplifies emailing fashion brands by allowing stylists to send personalized email blasts with brand-specific subject lines using imported Excel/CSV data.",
    },
    {
      question: "Can I track the success of my email campaigns?",
      answer:
        "It simplifies emailing fashion brands by allowing stylists to send personalized email blasts with brand-specific subject lines using imported Excel/CSV data.",
    },
    {
      question:
        "Is this platform suitable for both small and large-scale fashion stylists?",
      answer:
        "It simplifies emailing fashion brands by allowing stylists to send personalized email blasts with brand-specific subject lines using imported Excel/CSV data.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 mb-6 ">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left bg-beige  focus:outline-none"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {activeIndex === index ? (
                <FaMinus className="text-gray-500" />
              ) : (
                <FaPlus className="text-gray-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-beige text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
