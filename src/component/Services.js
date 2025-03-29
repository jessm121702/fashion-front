import React from "react";
import Verctorimg from "../assests/Layer_1.png";
const Services = () => {
  const services = [
    {
      title: "Personalized Email Automation",
      description:
        "Effortlessly customize emails based on the multiple brands at once. Our dynamic email field automatically personalizes subject lines, ensuring every message feels tailored & professional.",
      img: Verctorimg,
    },
    {
      title: "Seamless Contact Management",
      description:
        "Easily upload your market list as excel or CSV files. Organize your data and integrate it into your campaigns with just a few clicks.",
      img: Verctorimg,
    },
    {
      title: "Streamlined Communication",
      description:
        "Cut through the noise with a platform built exclusively for the mailing industry. Styloire ensures maximum professionalism while simplifying every step of your outreach.",
      img: Verctorimg,
    },
  ];

  return (
    <div className=" mx-auto p-6 pb-12  bg-[#dcd8d4] border-t-2 border-[#000000]">
      <h2 className="text-center text-[#1D2026] text-3xl font-bold mb-8">
        Services We Offered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#dcd8d4] p-6  border-2 border-[#000000] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Circular Image */}
            <div className="flex justify-center mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16 rounded-full p-3 border-2 border-[#1A1718]"
              />
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-center mb-4">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
