import { useState } from "react";

export default function SubscriptionFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How often will I get a new bouquet?",
      answer:
        "You'll receive a fresh bouquet based on your chosen subscription plan - weekly, bi-weekly, or monthly. Each delivery is carefully timed to ensure your flowers arrive in perfect condition.",
    },
    {
      question: "Can i send subscription like as a gift ?",
      answer:
        "Yes! You can purchase a subscription as a gift for someone special. During checkout, simply enter the recipient's shipping address and add a personal message. They'll receive beautiful flowers regularly without any mention of pricing.",
    },
    {
      question: "Can I choose which bouquet I get ?",
      answer:
        "Our subscriptions feature curated seasonal selections chosen by our expert florists. While you can't select specific bouquets for each delivery, you can set preferences for colors and flower types in your account settings.",
    },
    {
      question: "Can I change the shipping address ?",
      answer:
        "Yes, you can update your shipping address at any time through your account settings. Please make changes at least 48 hours before your next scheduled delivery to ensure it goes to the correct location.",
    },
    {
      question: "What day will the subscription bouquet come?",
      answer:
        "Your delivery day is set when you first subscribe and remains consistent for each shipment. You can view your scheduled delivery dates in your account and adjust them if needed with advance notice.",
    },
    {
      question: "Can I suspend my subscription to flowers ?",
      answer:
        "Absolutely! You can pause your subscription at any time through your account dashboard. This is perfect for vacations or busy periods. Simply reactivate when you're ready to resume deliveries.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white border border-black max-w-3xl w-full p-8 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        Subscription FAQ
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 last:border-b-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-5 flex items-center justify-between text-left hover:text-gray-600 transition-colors"
            >
              <span className="text-base md:text-lg text-gray-800 pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
