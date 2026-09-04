import { motion } from "framer-motion";
import { useState } from "react";

import videoThumbnail from "@/assets/vimeo-player.svg";

export default function ComplianceVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const video = "https://vimeo.com/1075714602/9701fd6a4c";

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-[#0d0d0d]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-10
          px-6
          py-16
          sm:px-8
          md:px-10
          lg:grid-cols-2
          lg:gap-16
          lg:px-12
          lg:py-24
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            className="
              max-w-[650px]
              font-playfair
              text-4xl
              font-semibold
              leading-[1.12]
              tracking-tight
              text-[#071044]
              dark:text-white
              sm:text-5xl
              lg:text-[52px]
            "
          >
            Compliance Reinvented.
            <br />
            See It in Action.
          </h2>

          <p
            className="
              mt-8
              max-w-[620px]
              font-poppins
              text-base
              font-normal
              leading-7
              text-[#4f4f4f]
              dark:text-gray-300
              sm:text-lg
            "
          >
            Watch how the industry’s first technical compliance SaaS makes
            product approvals faster, smarter, and future-ready.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
          className="w-full"
        >
          <div className="relative aspect-video w-full overflow-hidden bg-black shadow-sm">
            {!isPlaying ? (
              <motion.button
                type="button"
                onClick={() => setIsPlaying(true)}
                whileTap={{
                  scale: 0.985,
                }}
                className="absolute inset-0 h-full w-full cursor-pointer"
                aria-label="Play compliance video"
              >
                <img
                  src={videoThumbnail}
                  alt="Compliance video preview"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/5" />

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-16
                    w-16
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-md
                    bg-white/85
                    shadow-lg
                    backdrop-blur-sm
                    sm:h-20
                    sm:w-20
                  "
                >
                  <span
                    className="
                      ml-1
                      h-0
                      w-0
                      border-y-[11px]
                      border-l-[17px]
                      border-y-transparent
                      border-l-[#222]
                    "
                  />
                </motion.div>
              </motion.button>
            ) : (
              <motion.iframe
                initial={{
                  opacity: 0,
                  scale: 1.02,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src={`${video}?autoplay=1&title=0&byline=0&portrait=0`}
                title="Compliance Reinvented"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}