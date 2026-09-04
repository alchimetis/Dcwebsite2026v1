import { motion } from "framer-motion";
import { useTheme } from "@/theme/ThemeProvider";
import { Mail, Phone } from "lucide-react";
import { ROUTES } from "@/router/routes";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE;

  return (
    <section
      className={`w-full px-6 py-16 sm:px-8 md:px-10 lg:px-12 lg:py-20 ${
        isDark ? "bg-[#111111]" : "bg-white"
      }`}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          flex
          min-h-[360px]
          w-full
          max-w-[1298px]
          items-center
          justify-center
          overflow-hidden
          rounded-[3px]
          sm:min-h-[400px]
          lg:min-h-[425px]
        "
        style={{
          backgroundColor: isDark ? "#284969" : "#C9E1FA",
          backgroundImage: `
            linear-gradient(
              ${isDark ? "rgba(255,255,255,0.055)" : "rgba(7,16,68,0.055)"} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${isDark ? "rgba(255,255,255,0.055)" : "rgba(7,16,68,0.055)"} 1px,
              transparent 1px
            )
          `,
          backgroundSize: "53px 53px",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(circle at 50% 50%, rgba(82,145,205,0.22), transparent 58%)"
              : "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.38), transparent 58%)",
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            flex
            w-full
            max-w-[900px]
            flex-col
            items-center
            px-5
            text-center
            sm:px-8
          "
        >
          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`font-playfair text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl lg:text-[35px] ${
              isDark ? "text-white" : "text-[#202020]"
            }`}
          >
            Plan the Present. Build the Future. Automate
            <br className="hidden sm:block" />
            Compliance with Daily Compliance.
          </motion.h2>

          {/* Request Demo */}
          <motion.button
            type="button"
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={`mt-9 rounded-[3px] px-7 py-3.5 text-base font-normal text-white shadow-sm ${
              isDark ? "bg-[#FA4028]" : "bg-[#2E2E2E]"
            }`}
            onClick={()=> navigate(ROUTES.DEMO)}
          >
            Request a Demo
          </motion.button>


          <motion.div
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
              delay: 0.5,
            }}
            className="
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
              sm:gap-6
            "
          >
            {/* Email */}
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className={`
                  flex
                  items-center
                  gap-2
                  text-sm
                  transition-opacity
                  hover:opacity-70
                  sm:text-base
                  ${
                    isDark
                      ? "text-white"
                      : "text-[#071044]"
                  }
                `}
              >
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  color={isDark ? "white" : "grey"}
                />

                <span>{contactEmail}</span>
              </a>
            )}

            {/* Phone */}
            {contactPhone && (
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className={`
                  flex
                  items-center
                  gap-2
                  text-sm
                  transition-opacity
                  hover:opacity-70
                  sm:text-base
                  ${
                    isDark
                      ? "text-white"
                      : "text-[#071044]"
                  }
                `}
              >
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  color={isDark ? "white" : "grey"}
                />

                <span>{contactPhone}</span>
              </a>
            )}
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}