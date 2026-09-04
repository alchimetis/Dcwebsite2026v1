import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import star from "@/assets/star.svg";

const faqData = [
  {
    "id": 1,
    "question": "What services does daily compliance offer?",
    "answer": "daily compliance offers a range of services including SAAS platform for device safety and EMC/EMI compliance, ESG strategy development, reporting and disclosure, stakeholder engagement, climate risk assessment, sustainable investment advisory, and ESG software implementation, tailored to meet the unique requirements of Canadian businesses."
  },
  {
    "id": 2,
    "question": "Which ESG frameworks does daily compliance work with?",
    "answer": "daily compliance collaborates with a variety of ESG frameworks to ensure our clients have access to the most relevant and comprehensive sustainability reporting standards. Our expertise extends to widely recognized frameworks such as the Global Reporting Initiative (GRI), Sustainability Accounting Standards Board (SASB), Task Force on Climate-related Financial Disclosures (TCFD), and the Canadian-specific guidelines provided by the Canadian Securities Administrators (CSA). We tailor our approach to leverage the frameworks that best align with your industry, geography, and specific ESG priorities, ensuring robust and compliant reporting tailored to your needs."
  },
  {
    "id": 3,
    "question": "What services does daily compliance offer?",
    "answer": "daily compliance offers a unique combination of expertise and experience in all aspects of regulatory and ESG compliance. We provide tailored solutions that save you time and ensure your business meets all necessary standards and regulations."
  },
  {
    "id": 4,
    "question": "How can I get started with daily compliance for my business?",
    "answer": "daily compliance provides practical compliance solutions designed to help organizations understand applicable standards, manage regulatory requirements, and maintain reliable compliance processes."
  },
  {
    "id": 5,
    "question": "Does daily compliance provide ESG consulting?",
    "answer": "Yes. daily compliance provides ESG consulting and tailored sustainability solutions based on organizational requirements, reporting priorities, and applicable regulatory frameworks."
  }
];

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FQA() {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId((previous) => (previous === id ? null : id));
  };

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        dark:bg-[#0D0D0D]
        px-5
        py-6
        sm:px-8
        sm:py-8
        md:px-10
        md:py-10
        lg:px-12
        lg:py-6
      "
       id="fqa"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-330
        "
      >
        {/* =========================
            FAQ BADGE
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            flex
            w-fit
            items-center
            gap-2
            rounded-[6px]
            border
            border-[#ffb8ae]
            bg-[#fffafa]
            px-3
            py-2
            text-[#071044]
            dark:border-[#fa4028]/40
            dark:bg-[#fa4028]/5
            dark:text-white
            sm:px-4
            sm:py-2.5
          "
        >
          <img
            src={star}
            alt=""
            className="
              h-5
              w-5
              shrink-0
              object-contain
              sm:h-6
              sm:w-6
            "
          />

          <span
            className="
              whitespace-nowrap
              font-poppins
              text-[14px]
              font-normal
              px-2 py-1.5 
              leading-none
              sm:text-[15px]
              md:text-[16px]
            "
          >
            Frequently Asked Questions
          </span>
        </motion.div>

        {/* =========================
            FAQ LIST
        ========================== */}
        <div
          className="
            mt-8
            w-full
            sm:mt-8
            md:mt-8
          "
        >
          {(faqData as FAQItem[]).map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  w-full
                  border-b
                  border-[#d9dce1]
                  dark:border-white/10
                "
              >
                {/* =========================
                    QUESTION
                ========================== */}
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="
                    flex
                    w-full
                    items-start
                    justify-between
                    gap-6
                    py-6
                    text-left
                    transition-colors
                    hover:text-[#087CF0]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#087CF0]
                    focus-visible:ring-offset-4
                    dark:focus-visible:ring-offset-[#0D0D0D]
                    sm:py-7
                    md:py-7
                    lg:py-6.75
                  "
                >
                

                  <h2
                    className="
                      min-w-0
                      flex-1
                      font-normal
                      text-[22px]
                      leading-[1.2]
                      tracking-[-0.02em]
                      text-[#071044]
                      dark:text-white
                      sm:text-[18px]
                      md:text-[22px]
                      lg:text-[24]
                    "
                  >
                    {item.question}
                  </h2>

                  {/* RIGHT ARROW */}
                  <motion.span
                    animate={{
                      x: isOpen ? 3 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      mt-1
                      flex
                      shrink-0
                      items-center
                      justify-center
                      font-poppins
                      text-[30px]
                      font-light
                      leading-none
                      text-[#087CF0]
                      sm:text-[31px]
                      md:text-[32px]
                    "
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </button>

                {/* =========================
                    ANSWER
                ========================== */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <p
                        className="
                          max-w-362.5
                          pb-7
                          font-poppins
                          text-[14px]
                          font-normal
                          leading-[1.55]
                          text-[#33475b]
                          dark:text-gray-300
                          sm:pb-8
                          sm:text-[16px]
                          sm:leading-[1.55]
                          md:pb-9
                          md:text-[17px]
                          lg:pb-8.5
                          lg:text-[18px]
                          lg:leading-[1.55]
                        "
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}