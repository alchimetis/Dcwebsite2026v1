import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";

import cooking from "@/assets/company/bd.png";
import huawei from "@/assets/company/eurofins.png";
import lowaStateuniversity from "@/assets/company/lowaStateuniversity.svg";
import mcgill from "@/assets/company/mcgill.svg";
import montclairStateUniversity from "@/assets/company/montclairStateUniversity.svg";

const companies = [
  {
    id: 1,
    image: cooking,
    name: "Cooking",
  },
  {
    id: 2,
    image: huawei,
    name: "Huawei",
  },
  {
    id: 3,
    image: lowaStateuniversity,
    name: "Iowa State University",
  },
  {
    id: 4,
    image: mcgill,
    name: "McGill",
  },
  {
    id: 5,
    image: montclairStateUniversity,
    name: "Montclair State University",
  },
];

const infiniteCompanies = [
  ...companies,
  ...companies,
  ...companies,
  ...companies,
];

export default function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(companies.length);
  const [isResetting, setIsResetting] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => previousIndex + 1);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= companies.length * 3) {
      const timeout = window.setTimeout(() => {
        setIsResetting(true);
        setCurrentIndex(companies.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsResetting(false);
          });
        });
      }, 800);

      return () => window.clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-[#0d0d0d]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-8
          md:py-11
          lg:px-12
          lg:py-12
        "
      >
        <div className="relative w-full overflow-hidden">
          <div
            className="
              [--slide-width:100%]
              sm:[--slide-width:50%]
              lg:[--slide-width:20%]
            "
          >
            <motion.div
              className="flex w-full items-center"
              animate={{
                x: `calc(-1 * ${currentIndex} * var(--slide-width))`,
              }}
              transition={
                isResetting
                  ? {
                      duration: 0,
                    }
                  : {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
            >
              {infiniteCompanies.map((company, index) => (
                <div
                  key={`${company.id}-${index}`}
                  className="
                    flex
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    px-5

                    sm:w-1/2
                    sm:px-6

                    md:w-1/2
                    md:px-8

                    lg:w-1/5
                    lg:px-10

                    xl:px-12
                  "
                >
                  <div
                    className="
                      flex
                      h-[85px]
                      w-full
                      items-center
                      justify-center

                      sm:h-[95px]

                      md:h-[105px]

                      lg:h-[115px]
                    "
                  >
                    <img
                      src={company.image}
                      alt={company.name}
                      draggable={false}
                      className="
                        h-auto
                        w-auto
                        max-h-[52px]
                        max-w-[125px]
                        object-contain

                        sm:max-h-[58px]
                        sm:max-w-[140px]

                        md:max-h-[65px]
                        md:max-w-[155px]

                        lg:max-h-[72px]
                        lg:max-w-[175px]

                        xl:max-h-[82px]
                        xl:max-w-[190px]
                      "
                      style={{
                        filter: isDark
                          ? "brightness(0) invert(1)"
                          : "none",
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-8
              bg-gradient-to-r
              from-white
              to-transparent

              sm:w-12
              md:w-16

              dark:from-[#0d0d0d]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              w-8
              bg-gradient-to-l
              from-white
              to-transparent

              sm:w-12
              md:w-16

              dark:from-[#0d0d0d]
            "
          />
        </div>
      </div>
    </section>
  );
}