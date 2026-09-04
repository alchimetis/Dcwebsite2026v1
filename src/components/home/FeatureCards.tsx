import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import featureCardsOne from "@/assets/FeatureCards/FeatureCardsOne.svg";
import featureCardsTwo from "@/assets/FeatureCards/FeatureCardsTwo.svg";
import featureCardsThree from "@/assets/FeatureCards/FeatureCardsThree.svg";
import featureCardsFour from "@/assets/FeatureCards/FeatureCardsFour.svg";

import OrangeStar from "@/assets/star.svg";
import BlueStar from "@/assets/blueStar.svg";
import { useTheme } from "@/theme/ThemeProvider";

const tabs = [
  {
    id: 1,
    title: "ACR/ECO",
    description:
      "Streamline engineering change requests (ECRs/ACRs) through our online portal with pre-built templates, improving communication and speeding up approvals. Maintain a complete audit trail for compliance.",
  },
  {
    id: 2,
    title: "Smart Docs",
    description:
      "Manage engineering operations, approvals, records, and workflows through a centralized platform designed for faster and more reliable execution.",
  },
  {
    id: 3,
    title: "Compliance Genie",
    description:
      "Simplify compliance activities with intelligent workflows, regulatory requirements, documentation, and complete audit visibility.",
  },
  {
    id: 4,
    title: "E-learning",
    description:
      "Create structured learning experiences that help teams understand processes, compliance requirements, and operational best practices.",
  },
];

const featureImages = [
  featureCardsOne,
  featureCardsTwo,
  featureCardsThree,
  featureCardsFour,
];

export default function FeatureCards() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTab = tabs[currentIndex];
  const currentImage = featureImages[currentIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tabs.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tabs.length);
  };

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-[#0d0d0d]">
      <div className="mx-auto w-full max-w-362.5 px-5 py-14 sm:px-7 sm:py-16 md:px-10 lg:px-14 lg:py-20">
        <motion.div
          initial={{
            opacity: 0,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              y: -2,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-[8px]
              border
              border-[#ffb9ae]
              bg-[#fffafa]
              px-3
              py-2
              text-[13px]
              font-normal
              leading-none
              text-[#071044]
              shadow-[0_4px_20px_rgba(250,64,40,0.04)]
              dark:border-[#5067ff]/50
              dark:bg-[#161616]
              dark:text-white
              dark:shadow-none
              sm:px-4
              sm:py-2.5
              sm:text-sm
            "
          >
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center sm:h-6 sm:w-6">
              <img
                src={OrangeStar}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain dark:hidden"
              />

              <img
                src={BlueStar}
                alt=""
                aria-hidden="true"
                className="hidden h-full w-full object-contain dark:block"
              />
            </span>

            <span className="whitespace-nowrap">All Services</span>
          </motion.div>
        </motion.div>

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-7 max-w-312.5 text-center sm:mt-8"
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
                      max-w-full
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
                   Streamline Workflow, Compliance Audit{" "}
            <span className="font-poltawski">&</span> Create Regulatory
            Requirement at Ease
                  </motion.h1>
          
          <motion.p
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
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="
              mt-6
              text-[15px]
              leading-6
              text-[#4b4b4b]
              dark:text-white/70
              sm:mt-7
              sm:text-base
              md:text-lg
            "
          >
            Why Leading Manufacturers Trust Daily Compliance.
          </motion.p>
        </motion.div>

        <div
          className="
  mt-10
  grid
  grid-cols-1
  gap-8
  lg:mt-12
  lg:grid-cols-[0.85fr_1.65fr]
  lg:items-center
  lg:gap-12
  xl:gap-16
"
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
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
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentTab.id}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className="
                      font-playfair
                      text-[25px]
                      font-semibold
                      leading-tight
                      text-[#071044]
                      dark:text-white
                      sm:text-[28px]
                      md:text-[30px]
                    "
                  >
                    {currentTab.title}
                  </h3>

                  <motion.button
                    type="button"
                    onClick={handleNext}
                    whileHover={{
                      x: 5,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    aria-label="Next service"
                    className="
                      shrink-0
                      text-[30px]
                      font-light
                      leading-none
                      text-[#1683ff]
                      dark:text-[#1683ff]
                    "
                  >
                    →
                  </motion.button>
                </div>

                <p
                  className="
                    mt-5
                    max-w-135
                    text-[14px]
                    leading-6
                    text-[#4f5968]
                    dark:text-white/70
                    sm:text-[15px]
                    sm:leading-7
                    md:text-base
                  "
                >
                  {currentTab.description}
                </p>

                <div className="relative mt-7 h-px w-full bg-[#dedede] dark:bg-white/10">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "42%",
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-px bg-[#1683ff]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-0">
              {tabs.slice(1).map((tab, index) => {
                const isActive = currentIndex === index + 1;

                return (
                  <motion.button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(index + 1)}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.08,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      border-b
                      py-5
                      text-left
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-[#1683ff]"
                          : "border-[#dedede] dark:border-white/10"
                      }
                    `}
                  >
                    <span
                      className={`
                        font-playfair
                        text-[23px]
                        font-semibold
                        transition-colors
                        duration-300
                        sm:text-[25px]
                        ${
                          isActive
                            ? "text-[#1683ff]"
                            : "text-[#071044] dark:text-white"
                        }
                      `}
                    >
                      {tab.title}
                    </span>

                    <span
                      className={`
                        text-xl
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "translate-x-1 text-[#1683ff]"
                            : "text-[#888] dark:text-white/40"
                        }
                      `}
                    >
                      →
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              w-full
              overflow-hidden
              rounded-[16px]
            "
          >
            <div className="relative aspect-[1.55/1] w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={currentIndex}
                  src={currentImage}
                  alt={currentTab.title}
                  draggable={false}
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.97,
                    x: -25,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.55,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    x: {
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-contain
                  "
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
