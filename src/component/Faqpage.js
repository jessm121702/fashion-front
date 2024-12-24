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
      question: "What is Styloire?",
      answer:
        "STYLOIRE is an email automation platform designed specifically for fashion stylists. It simplifies the process of reaching out to brands for clothing loans by allowing stylists to send personalized email blasts with ease.",
    },
    {
      question: "How does STYLOIRE work?",
      answer:
        "STYLOIRE enables you to upload a market list (in Excel or CSV format), create email templates, and send customized email blasts to brands. The platform automatically personalizes emails by filling in brand-specific details like names and subject lines, while keeping the core message consistent.",
    },
    {
      question: "Can I send emails to multiple brands at once?",
      answer:
        "Yes! STYLORE is designed for bulk email sending while keeping each message personalized. This saves time and ensures a professional touch.",
    },
    {
      question:
        "What file formats does STYLOIRE support for uploading market lists?",
      answer:
        "STYLOIRE supports Excel (.xlsx) and CSV files, making it easy to import your contact lists.",
    },
    {
      question: "Is STYLOIRE user-friendly for non-technical users?",
      answer:
        "Yes, STYLOIRE is designed with a clean and intuitive interface, ensuring that stylists of all technical skill levels can easily navigate the platform.",
    },
    {
      question: "How does STYLOIRE ensure emails don’t end up in spam folders?",
      answer:
        "STYLOIRE integrates with trusted email service providers l to ensure high deliverability. Each email is sent individually, avoiding spam filters and maintaining a professional appearance.",
    },
    {
      question: "Is my data secure with STYLOIRE?",
      answer:
        "STYLOIRE prioritizes your privacy and security. All data is encrypted and handled according to industry best practices, ensuring your information is safe.",
    },
    {
      question: "Does STYLOIRE offer support if I encounter issues?",
      answer:
        "Of course! Our support team is here to help. You can reach out to us via email contact@styloire.com for assistance.",
    },
    {
      question: "Are there limits to how many emails I can send?",
      answer:
        "Your email-sending limits depend on your chosen subscription plan. Higher-tier plans allow for larger campaigns and additional features.",
    },
    {
      question: "What email providers does styloire integrate with?",
      answer:
        "STYLOIRE integrates seamlessly with leading email platforms like Gmail, Outlook, and custom domains, ensuring flexibility for all users.",
    },
  ];

  return (
    <div className="bg-[#dcd8d4]">
      <div className="max-w-4xl mx-auto p-6   ">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#000000] rounded-lg overflow-hidden shadow-sm "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left bg-[#dcd8d4]  focus:outline-none"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-[#dcd8d4] text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
