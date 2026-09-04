import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import heroSectionOne from "@/assets/hero/heroSectionOne.svg";
import heroSectionTwo from "@/assets/hero/heroSectionTwo.svg";
import heroSectionThree from "@/assets/hero/heroSectionThree.svg";
import heroSectionFour from "@/assets/hero/heroSectionFour.svg";
import { useTheme } from "@/theme/ThemeProvider";
import { ROUTES } from "@/router/routes";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    image: heroSectionOne,
    alt: "Regulatory compliance platform",
  },
  {
    id: 2,
    image: heroSectionTwo,
    alt: "Compliance workflow",
  },
  {
    id: 3,
    image: heroSectionThree,
    alt: "Regulatory compliance dashboard",
  },
  {
    id: 4,
    image: heroSectionFour,
    alt: "Compliance technology",
  },
];

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`w-full overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#0d0d0d]" : "bg-white"
      }`}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-360
          flex-col
          items-center
          px-5
          pb-12
          pt-12
          text-center
          sm:px-8
          sm:pb-16
          sm:pt-14
          md:px-10
          md:pb-20
          md:pt-16
          lg:px-12
          lg:pb-24
          lg:pt-20
        "
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            max-w-230
            font-playfair
            text-3xl
            font-semibold
            leading-[1.12]
            tracking-[-0.02em]
            sm:text-4xl
            md:text-5xl
            lg:text-[52px]
            ${isDark ? "text-white" : "text-[#172554]"}
          `}
        >
          First Technical SaaS Built for Regulatory Compliance
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            mt-5
            max-w-212.5
            font-poppins
            text-sm
            font-normal
            leading-6
            sm:mt-6
            sm:text-base
            sm:leading-7
            md:text-[17px]
            md:leading-7
            ${isDark ? "text-gray-300" : "text-[#5b5b5b]"}
          `}
        >
          The industry’s first regulatory compliance SaaS platform built for
          startups — empowering businesses with automation, expert workflows,
          and actionable insights — IEC 61010, 62368, 60601, 61326 series
          standards.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <motion.button
            type="button"
            whileTap={{
              scale: 0.96,
            }}
            className={`
              min-w-31.25
              rounded-sm
              border
              px-6
              py-3
              font-poppins
              text-sm
              font-medium
              transition-colors
              duration-300
              ${
                isDark
                  ? "border-[#FA4028] text-[#FA4028]"
                  : "border-[#2E2E2E] text-[#2E2E2E]"
              }
            `}
            onClick={()=> navigate(ROUTES.CONTACT)}
          >
            Contact Us
          </motion.button>

          <motion.button
            type="button"
            whileTap={{
              scale: 0.96,
            }}
            className={`
              min-w-36.25
              rounded-sm
              px-6
              py-3
              font-poppins
              text-sm
              font-medium
              text-white
              transition-colors
              duration-300
              ${
                isDark
                  ? "bg-[#FA4028]"
                  : "bg-[#2E2E2E]"
              }
            `}
             onClick={()=> navigate(ROUTES.DEMO)}
          >
            Request a Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-10
            flex
            w-full
            max-w-287.5
            items-center
            justify-center
            sm:mt-12
            md:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              relative
              flex
              h-60
              w-full
              items-center
              justify-center
              sm:h-80
              md:h-100
              lg:h-125
            "
          >
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={data[currentImage].id}
                src={data[currentImage].image}
                alt={data[currentImage].alt}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                }}
                transition={{
                  opacity: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="
                  absolute
                  inset-0
                  m-auto
                  h-full
                  w-full
                  object-contain
                "
              />
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-3 flex items-center justify-center gap-1.5">
          {data.map((item, index) => (
            <motion.span
              key={item.id}
              animate={{
                width: currentImage === index ? 24 : 6,
                opacity: currentImage === index ? 1 : 0.35,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                block
                h-1.5
                rounded-full
                ${
                  isDark
                    ? "bg-[#FA4028]"
                    : "bg-[#2E2E2E]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}