import { motion } from "framer-motion";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="cont my-[50px]">
      <h2 className="text-[36px] font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-[20px] max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mb-[5px] last:border-none overflow-hidden transition-all duration-500"
          >
            <button
              className={`w-full cursor-pointer text-left font-semibold text-[24px] p-[20px] flex justify-between items-center text-white transition-all duration-600 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-secondary via-gradient to-secondary bg-[size:200%_200%] bg-[position:100%_100%]"
                  : "bg-gradient-to-r from-secondary via-gradient to-secondary bg-[size:200%_200%] bg-[position:0%_0%] hover:bg-[position:100%_100%]"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-2xl cursor-pointer">
                {activeIndex === index ? "✕" : "＋"}
              </span>
            </button>
            <div
              className={`grid transition-all bg-gray-200 px-[15px] duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100 py-[15px]"
                  : "grid-rows-[0fr] opacity-0 py-0"
              }`}
            >
              <p className="overflow-hidden text-gray-700">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
