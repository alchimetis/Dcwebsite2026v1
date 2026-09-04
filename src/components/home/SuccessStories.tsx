import { motion } from "framer-motion";

import men1 from "@/assets/Stories/men1.png";
import men2 from "@/assets/Stories/men2.png";
import star from "@/assets/Stories/Star.svg";

export default function SuccessStories() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-12
        dark:bg-[#0D0D0D]
        sm:px-6
        sm:py-14
        md:px-8
        md:py-16
        lg:px-12
        lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-[1298px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            flex
            w-fit
            max-w-full
            items-center
            gap-2
            rounded-[4px]
            border
            border-[#ffddd8]
            bg-[#fffafa]
            px-3
            py-1.5
            font-poppins
            text-[13px]
            font-normal
            leading-none
            text-[#071044]
            dark:border-[#fa4028]/30
            dark:bg-[#fa4028]/5
            dark:text-white
            sm:px-3.5
            sm:py-2
            sm:text-sm
          "
        >
          <img
            src={star}
            alt=""
            className="h-4 w-4 shrink-0 object-contain sm:h-5 sm:w-5"
          />

          <span className="whitespace-nowrap">
            News and Testimonial
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-5
            max-w-[700px]
            text-center
            font-playfair
            text-3xl
            font-semibold
            leading-[1.15]
            tracking-[-0.02em]
            text-[#071044]
            dark:text-white
            sm:mt-6
            sm:text-4xl
            md:text-5xl
            lg:text-[42px]
            xl:text-[44px]
          "
        >
          Proven Success, Real Stories
        </motion.h2>

        {/* Cards */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:gap-5
            md:grid-cols-12
            md:gap-5
            lg:mt-11
            lg:gap-6
          "
        >
          {/* =========================================
              TESTIMONIAL 1
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-7"
          >
            <div
              className="
                flex
                h-full
                flex-col
                gap-4
                bg-[#dff2ff]
                p-3
                dark:bg-[#163044]
                sm:flex-row
                sm:gap-4
                sm:p-3.5
                md:gap-5
              "
            >
              {/* Person */}
              <div
                className="
                  flex
                  min-h-[240px]
                  shrink-0
                  items-end
                  justify-center
                  overflow-hidden
                  bg-[#7bc5f5]
                  sm:min-h-0
                  sm:w-[40%]
                  md:w-[42%]
                "
              >
                <img
                  src={men1}
                  alt="Staff Engineer"
                  draggable={false}
                  className="
                    block
                    h-[250px]
                    w-full
                    object-contain
                    object-bottom
                    sm:h-[280px]
                    md:h-full
                    md:min-h-[300px]
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  justify-between
                  px-1
                  pb-1
                  sm:py-1
                  md:py-2
                "
              >
                <p
                  className="
                    font-poppins
                    text-[13px]
                    leading-[1.55]
                    text-[#252525]
                    dark:text-gray-200
                    sm:text-[13px]
                    md:text-[14px]
                    md:leading-[1.5]
                  "
                >
                  Navigating global regulations was daunting until we found
                  Daily Compliance. Their comprehensive directory of product
                  safety labs and EMC labs worldwide made our compliance
                  journey seamless. From the US to Asia, we easily located
                  accredited labs for testing our electronics. Their training
                  programs were equally invaluable, equipping our team with
                  the latest standards. With Daily Compliance, ensuring our
                  products meet global safety standards is not just achievable
                  but efficient!
                </p>

                <div
                  className="
                    mt-5
                    border-t
                    border-black/10
                    pt-3
                    dark:border-white/10
                    sm:mt-4
                  "
                >
                  <h3
                    className="
                      font-inter
                      text-[16px]
                      font-semibold
                      leading-tight
                      text-[#071044]
                      dark:text-white
                      sm:text-[17px]
                      md:text-[18px]
                    "
                  >
                    Staff Engineer, Safety & Compliance
                  </h3>

                  <p
                    className="
                      mt-1
                      font-poppins
                      text-[12px]
                      text-[#555]
                      dark:text-gray-400
                      sm:text-[13px]
                    "
                  >
                    Becton, Dickinson & Company
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              GLOBAL REGULATORY
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-5"
          >
            <div
              className="
                flex
                min-h-[280px]
                h-full
                flex-col
                justify-between
                bg-[#e8ffd9]
                p-5
                dark:bg-[#191919]
                sm:min-h-[300px]
                sm:p-6
                md:min-h-[323px]
              "
            >
              <div>
                <h3
                  className="
                    font-poppins
                    text-[16px]
                    font-medium
                    leading-snug
                    text-[#171717]
                    dark:text-white
                    sm:text-[17px]
                    md:text-[18px]
                  "
                >
                  Global Regulatory Compliance Support
                </h3>

                <div
                  className="
                    mt-3
                    h-px
                    w-full
                    bg-black/10
                    dark:bg-white/10
                  "
                />

                <div
                  className="
                    mt-4
                    space-y-3
                    font-poppins
                    text-[12px]
                    leading-[1.55]
                    text-[#3f4b3c]
                    dark:text-gray-300
                    sm:text-[13px]
                    md:text-[14px]
                  "
                >
                  <p>
                    Standards Covered - IEC 61010, IEC 62368, IEC 60601 etc.
                  </p>

                  <p>
                    EMC/EMI Compliance - IEC 61326, IEC 60601-1-2 etc.
                  </p>

                  <p>
                    Markets Covered - Global Market Access
                  </p>

                  <p>
                    e-learning - IEC 61010/62368/60601/61326 Masterclass
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <span
                  className="
                    text-xl
                    leading-none
                    text-[#293b31]
                    dark:text-white
                  "
                >
                  →
                </span>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              SUSTAINABILITY
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-5"
          >
            <div
              className="
                flex
                min-h-[280px]
                h-full
                flex-col
                justify-between
                bg-[#fde8f2]
                p-5
                dark:bg-[#191919]
                sm:min-h-[300px]
                sm:p-6
                md:min-h-[323px]
              "
            >
              <div>
                <h3
                  className="
                    font-poppins
                    text-[16px]
                    font-medium
                    leading-snug
                    text-[#171717]
                    dark:text-white
                    sm:text-[17px]
                    md:text-[18px]
                  "
                >
                  Sustainability & Compliance Offerings
                </h3>

                <div
                  className="
                    mt-3
                    h-px
                    w-full
                    bg-black/10
                    dark:bg-white/10
                  "
                />

                <div
                  className="
                    mt-4
                    space-y-2.5
                    font-poppins
                    text-[12px]
                    leading-[1.5]
                    text-[#4c3e45]
                    dark:text-gray-300
                    sm:text-[13px]
                    md:text-[14px]
                  "
                >
                  <p>Life Cycle Assessment (LCA)</p>
                  <p>Carbon Accounting & GHG Reporting</p>
                  <p>ESG Reporting Software</p>
                  <p>Materiality Assessments</p>
                  <p>ESG Risk Analysis</p>
                  <p>Supplier Sustainability Audits</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <span
                  className="
                    text-xl
                    leading-none
                    text-[#49323d]
                    dark:text-white
                  "
                >
                  →
                </span>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              TESTIMONIAL 2
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-7"
          >
            <div
              className="
                flex
                h-full
                flex-col
                gap-4
                bg-[#fff9a8]
                p-3
                dark:bg-[#3a3818]
                sm:flex-row
                sm:gap-4
                sm:p-3.5
                md:gap-5
              "
            >
              {/* Person */}
              <div
                className="
                  flex
                  min-h-[240px]
                  shrink-0
                  items-end
                  justify-center
                  overflow-hidden
                  bg-[#ffe927]
                  sm:order-1
                  sm:min-h-0
                  sm:w-[40%]
                  md:w-[42%]
                "
              >
                <img
                  src={men2}
                  alt="EHS Lead"
                  draggable={false}
                  className="
                    block
                    h-[250px]
                    w-full
                    object-contain
                    object-bottom
                    sm:h-[280px]
                    md:h-full
                    md:min-h-[300px]
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  justify-between
                  px-1
                  pb-1
                  sm:order-2
                  sm:py-1
                  md:py-2
                "
              >
                <p
                  className="
                    font-poppins
                    text-[13px]
                    leading-[1.55]
                    text-[#252525]
                    dark:text-gray-200
                    sm:text-[13px]
                    md:text-[14px]
                    md:leading-[1.5]
                  "
                >
                  Thanks to Daily Compliance, our product development process
                  has been revolutionized. Their extensive network of
                  consulting services and global lab listings helped us
                  navigate complex regulatory landscapes effortlessly. We
                  found top-notch experts to guide us through compliance and
                  certification processes, ensuring our products are
                  market-ready worldwide. Whether it&apos;s training sessions
                  or tailored consulting, Daily Compliance delivers unmatched
                  support every step of the way. Trustworthy, efficient, and
                  indispensable for any manufacturer serious about product
                  safety!
                </p>

                <div
                  className="
                    mt-5
                    border-t
                    border-black/10
                    pt-3
                    dark:border-white/10
                    sm:mt-4
                  "
                >
                  <h3
                    className="
                      font-playfair
                      text-[17px]
                      font-semibold
                      leading-tight
                      text-[#071044]
                      dark:text-white
                      sm:text-[18px]
                    "
                  >
                    EHS Lead
                  </h3>

                  <p
                    className="
                      mt-1
                      font-poppins
                      text-[12px]
                      text-[#555]
                      dark:text-gray-400
                      sm:text-[13px]
                    "
                  >
                    MedTech Company
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}