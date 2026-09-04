import { motion } from "framer-motion";

import imageOne from "@/assets/compliance/imageOne.svg";
import imageTwo from "@/assets/compliance/imageTwo.svg";
import imageThree from "@/assets/compliance/ImageThree.svg";
import buttonImage from "@/assets/compliance/buttonImage.svg";
import darkButtonImage from "@/assets/compliance/darkButtonImage.svg";
import { useTheme } from "@/theme/ThemeProvider";

import darkBlue from "@/assets/compliance/darkBlue.svg";
import darkGreen from "@/assets/compliance/darkGreen.svg";
import darkYellow from "@/assets/compliance/darkYellow.svg";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Compliance SaaS Platform",
    para: "The industry’s first technical SaaS platform that centralizes compliance management, automates workflows, and simplifies global product approvals as per the standard IEC 61010/IEC 62368/IEC 60601 etc.",
    image: imageThree,
    darkimage: darkBlue,
    bg: "#C4DDFB",
  },
  {
    id: 2,
    title: "ESG Reporting",
    para: "Enhance ESG reporting with our tailored solutions, delivering clear insights and transparent communication to stakeholders and regulators, ensuring compliance and strategic alignment.",
    image: imageOne,
    darkimage: darkYellow,
    bg: "#FFF0BE",
  },
  {
    id: 3,
    title: "E-Learning",
    para: "IEC 61010, IEC 61326: Interactive e-learning modules that make complex device safety and EMC standards easy to understand, apply, and master—powered by AI tutoring, flashcards, and quizzes.",
    image: imageTwo,
    darkimage: darkGreen,
    bg: "#C7F8F8",
  },
];

export default function ComplianceIntro() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="service" className="w-full overflow-hidden bg-white dark:bg-[#0d0d0d]">
      <div
        className="
          mx-auto
          w-full
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          lg:px-[60px]
          lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            md:gap-12
            lg:gap-[100px]
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-start"
          >
            <motion.img
              src={isDark ? darkButtonImage : buttonImage}
              alt="What We Offer"
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mb-6
                h-auto
                w-auto
                max-w-[170px]
                object-contain
                sm:mb-7
                sm:max-w-[200px]
              "
            />

            <h2
              className="
                max-w-[710px]
                font-playfair
                text-[34px]
                font-semibold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#071044]
                dark:text-white
                sm:text-[40px]
                md:text-[44px]
                lg:text-[50px]
              "
            >
              Simplify Compliance. Secure Your Future.
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              items-start
              md:pt-[30px]
              lg:pt-[34px]
            "
          >
            <p
              className="
                max-w-[600px]
                font-poppins
                text-[14px]
                leading-[1.65]
                text-[#666666]
                dark:text-gray-300
                sm:text-[15px]
                lg:text-base
              "
            >
              Simplify device compliance with our SaaS platform and streamline
              your manufacturing with our automated ACR/ECR solutions.
            </p>

            <motion.button
              type="button"
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                mt-7
                rounded-[3px]
                border
                px-8
                py-3
                font-poppins
                text-[14px]
                font-normal
                transition-colors
                duration-300
                ${
                  isDark
                    ? "border-white bg-white text-black"
                    : "border-[#2E2E2E] bg-[#2E2E2E] text-white"
                }
              `}
              onClick={ ()=> navigate('/about')}
            >
              Explore All
            </motion.button>
          </motion.div>
        </div>

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-8
            sm:mt-20
            md:grid-cols-3
            md:gap-6
            lg:mt-[100px]
            lg:gap-[46px]
          "
        >
          {data.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="
                flex
                w-full
                min-w-0
                flex-col
                overflow-hidden
              "
            >
              <div
                className="
                  relative
                  aspect-[1.65/1]
                  w-full
                  overflow-hidden
                  sm:aspect-[1.7/1]
                  md:aspect-[1.45/1]
                  lg:aspect-[1.65/1]
                "
              >
                <motion.img
                  src={isDark ? item.darkimage : item.image}
                  alt={item.title}
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    absolute
                    inset-0
                    block
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />
              </div>

              <div
                className="
                  flex
                  min-h-[180px]
                  w-full
                  flex-col
                  px-6
                  py-6
                  sm:min-h-[190px]
                  sm:px-7
                  sm:py-6
                  md:min-h-[210px]
                  md:px-6
                  lg:min-h-[200px]
                  lg:px-7
                  lg:py-6
                "
                style={{
                  backgroundColor: item.bg,
                }}
              >
                <h3
                  className="
                    font-playfair
                    text-[21px]
                    font-semibold
                    leading-[1.15]
                    tracking-tight
                    text-[#071044]
                    sm:text-[22px]
                    md:text-[21px]
                    lg:text-[22px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    font-poppins
                    text-[13px]
                    leading-[1.55]
                    text-[#5d5d5d]
                    sm:text-[14px]
                    md:text-[13px]
                    lg:text-[14px]
                    xl:text-[15px]
                  "
                >
                  {item.para}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}