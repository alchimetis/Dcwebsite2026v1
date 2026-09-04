import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

import star from "@/assets/star.svg";
import workflowOne from "@/assets/workflow/workflowOne.svg";
import workflowTwo from "@/assets/workflow/workflowTwo.svg";
import workflowThree from "@/assets/workflow/workflowThree.svg";
import workflowFour from "@/assets/workflow/workflowFour.svg";
import workflowFive from "@/assets/workflow/workflowFive.svg";
import workflowSix from "@/assets/workflow/workflowSix.svg";

const workflowItems = [
  {
    id: 1,
    label: "Dashboard",
    image: workflowOne,
  },
  {
    id: 2,
    label: "Product Section",
    image: workflowTwo,
  },
  {
    id: 3,
    label: "Project Section",
    image: workflowThree,
  },
  {
    id: 4,
    label: "Record Section",
    image: workflowFour,
  },
  {
    id: 5,
    label: "Compliance Genie",
    image: workflowFive,
  },
  {
    id: 6,
    label: "Smart Docs",
    image: workflowSix,
  },
];

export default function ComplianceWorkflow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const currentItem = workflowItems[currentIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % workflowItems.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const nextPage = () => {
    setCurrentIndex((previous) => (previous + 1) % workflowItems.length);
  };

  const selectWorkflow = (index: number) => {
    setCurrentIndex(index);

    const container = navRef.current;
    const button = container?.children[index] as HTMLElement | undefined;

    if (container && button) {
      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-[#0d0d0d]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          overflow-hidden
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          lg:px-12
          lg:py-20
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -18,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-md
            border
            border-[#ffb8ae]
            bg-[#fffafa]
            px-3
            py-1.5
            font-poppins
            text-[13px]
            font-normal
            leading-none
            text-[#071044]
            dark:border-[#fa4028]/50
            dark:bg-transparent
            dark:text-white
            sm:px-3.5
            sm:py-2
            sm:text-sm
          "
        >
          <img
            src={star}
            alt=""
            className="h-5 w-5 shrink-0 object-contain sm:h-6 sm:w-6"
          />

          <span className="whitespace-nowrap">
            Solutions for all Device Manufacturer
          </span>
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            w-full
            text-center
            font-playfair
            text-[30px]
            font-semibold
            leading-[1.18]
            tracking-[-0.02em]
            text-[#071044]
            dark:text-white
            sm:text-[38px]
            md:text-[46px]
            lg:text-[52px]
            xl:text-[56px]
          "
        >
          A complete toolkit to streamline engineering workflows, ensure
          device compliance with audit trail.
        </motion.h2>

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-9
            w-full
            max-w-[1100px]
          "
        >
          <div
            ref={navRef}
            className="
              flex
              w-full
              items-center
              justify-start
              gap-2
              overflow-x-auto
              px-1
              pb-2
              scrollbar-hide
              sm:justify-center
              sm:gap-2.5
              md:gap-3
            "
          >
            {workflowItems.map((item, index) => {
              const isActive = currentIndex === index;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => selectWorkflow(index)}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className={`
                    shrink-0
                    whitespace-nowrap
                    rounded-[7px]
                    border
                    px-3
                    py-2
                    font-poppins
                    text-[13px]
                    font-normal
                    leading-none
                    transition-all
                    duration-300
                    sm:px-3.5
                    sm:py-2.5
                    sm:text-[14px]
                    md:text-[15px]
                    ${
                      isActive
                        ? "border-[#2e2e2e] bg-[#2e2e2e] text-white dark:border-[#fa4028] dark:bg-[#fa4028] dark:text-white"
                        : "border-[#cfcfcf] bg-white text-[#2e2e2e] dark:border-[#fa4028]/45 dark:bg-transparent dark:text-white"
                    }
                  `}
                >
                  {item.label}
                </motion.button>
              );
            })}

            <motion.button
              type="button"
              onClick={nextPage}
              whileTap={{
                scale: 0.9,
              }}
              aria-label="Next workflow"
              className="
                flex
                h-10
                w-8
                shrink-0
                items-center
                justify-center
                text-[#555]
                dark:text-white/70
              "
            >
              <ChevronRight
                size={25}
                strokeWidth={1.6}
              />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-8
            w-full
            max-w-[1120px]
            sm:mt-10
            md:mt-12
          "
        >
          <div
            className="
              relative
              flex
              h-[250px]
              w-full
              items-center
              justify-center
              overflow-hidden
              sm:h-[330px]
              md:h-[420px]
              lg:h-[520px]
            "
          >
            <AnimatePresence
              initial={false}
              mode="wait"
            >
              <motion.img
                key={currentItem.id}
                src={currentItem.image}
                alt={currentItem.label}
                draggable={false}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
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
      </div>
    </section>
  );
}