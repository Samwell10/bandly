import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png"
// Dummy JSON (this can later be fetched from an API or local JSON file)
const faqData = [
  {
    id: 1,
    question: "What do I need to onboard my band?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    id: 2,
    question: "How can I as a solo band get on this platform and make money?",
    answer:
      "You can join as a solo performer by registering, creating a profile, and listing your services. Clients can then find and book you directly.",
  },
  {
    id: 3,
    question: "How am I sure the payment on this platform is safe and secure?",
    answer:
      "All payments are processed via trusted gateways with encryption to ensure your money and data are secure.",
  },
];

const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState(faqData[0]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Tabs */}
      <div className="flex gap-4 mb-8 bg-[#0E1416] rounded-full px-4 py-2">
        <button className="bg-[#127968] text-white font-clash font-medium text-sm 2xl:text-xl rounded-full px-4 py-2">
          All
        </button>
        <button className="px-4 py-2 text-white font-clash font-medium text-sm 2xl:text-xl hover:text-white">
          For Bands
        </button>
        <button className="px-4 py-2 text-white font-clash font-medium text-sm 2xl:text-xl hover:text-white">
          For Bookings
        </button>
      </div>

      {/* FAQ Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Questions */}
        <div>
          <h2 className="text-[#7C7C79] text-xl 2xl:text-4xl font-montserrat font-bold mb-2">FAQs</h2>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <button
                key={faq.id}
                onClick={() => setSelectedFaq(faq)}
                className={`w-full text-left font-clash text-sm 2xl:text-2xl border rounded-[14.03px] px-[22px] py-[20px] xl:px-[33px] xl:py-[30px] transition flex items-center justify-between gap-3 ${
                  selectedFaq.id === faq.id
                    ? "border-white font-semibold text-white"
                    : "border-[#7C7C79] text-[#7C7C79]"
                }`}
              >
                {faq.question}
                {selectedFaq.id === faq.id && <img src={logo} alt="Logo" className="h-6 w-6"/>}
                
              </button>
            ))}
          </div>
        </div>

        {/* Answer */}
        <div>
          <h2 className="text-[#7C7C79] text-xl 2xl:text-4xl font-montserrat font-bold mb-2">Answer</h2>
          <div className="bg-[#127968] p-6 rounded-md text-white font-clash font-medium text-sm 2xl:text-xl leading-[29px]">
            <img src={logo} alt="Logo" className="h-6 w-6 mb-4"/>
            {selectedFaq.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
