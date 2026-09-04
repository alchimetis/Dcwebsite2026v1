import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Users,
  FileText,
  Component,
  Leaf,
} from "lucide-react";
import { ROUTES } from "@/router/routes";
import aboutGirl from "@/assets/aboutgirls.svg";
import { useTheme } from "@/theme/ThemeProvider";
import { Link } from "react-router-dom";

export default function AboutCompment() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Compliance Genie",
      text: "Helps manufacturers create compliance requirement lists for their products and target regions through our automated and AI-powered platform.",
    },
    {
      icon: Globe2,
      title: "Global Market Access",
      text: "Supporting manufacturers in understanding and managing product compliance requirements across international markets and regulations.",
    },
    {
      icon: Users,
      title: "Expert Support",
      text: "Practical consulting, training, and compliance guidance from experienced specialists to help manufacturers navigate complex regulatory requirements.",
    },
    {
      icon: FileText,
      title: "Device Portfolio",
      text: "Create a dedicated page for each device and manage all associated documents and technical information in one place, including user guides, manuals, manufacturer details, and device specifications.",
    },
    {
      icon: Component,
      title: "Critical Components",
      text: "Helps manufacturers capture critical component details automatically by parsing technical data, datasheets, specifications, and evidence of compliance for each component.",
    },
    {
      icon: Leaf,
      title: "ESG Compliance",
      text: "The EcoFocus platform streamlines and integrates ESG reporting, ESG initiatives, audits, and risk management for the Canadian context. It gathers and analyzes operational data, from energy usage to supply chain practices, to identify key performance indicators (KPIs), track ESG goals, measure sustainability efforts, and drive continuous improvement.",
    },
  ];

  return (
    <section
      className={`w-full overflow-hidden px-5 py-16 transition-colors duration-300 sm:px-8 sm:py-20 md:px-10 lg:px-12 lg:py-24 ${
        isDark ? "bg-[#0D0D0D]" : "bg-white"
      }`}
    >
      <div className="mx-auto w-full max-w-[1585px]">
        {/* Main About Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-2 lg:order-1"
          >
            {/* Small label */}
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-[5px] border px-3 py-2 sm:px-4 ${
                isDark
                  ? "border-[#FA4028]/40 bg-[#FA4028]/5 text-white"
                  : "border-[#ffb8ae] bg-[#fffafa] text-[#071044]"
              }`}
            >
              <span className="text-[18px] leading-none text-[#FA4028]">✦</span>

              <span className="font-poppins text-[13px] px-2 py-1.5 sm:text-[15px]">
                About Daily Compliance
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`max-w-[700px] font-playfair text-[38px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[46px] md:text-[52px] lg:text-[48px] xl:text-[58px] ${
                isDark ? "text-white" : "text-[#071044]"
              }`}
            >
              Step Closer to Your Strategy
            </h1>

            {/* Description */}
            <p
              className={`mt-6 max-w-[680px] font-poppins text-[15px] leading-[1.7] sm:text-[17px] md:text-[18px] ${
                isDark ? "text-gray-300" : "text-[#4f4f4f]"
              }`}
            >
              Daily Compliance is your trusted partner for navigating complex
              product safety, regulatory and ESG compliance requirements. We
              combine compliance expertise, technology and practical guidance to
              help manufacturers move confidently from product development to
              global market access.
            </p>

            <p
              className={`mt-4 max-w-[680px] font-poppins text-[15px] leading-[1.7] sm:text-[17px] ${
                isDark ? "text-gray-300" : "text-[#4f4f4f]"
              }`}
            >
              From EMC/EMI and product safety to regulatory affairs, ESG
              compliance, training and test-lab support, our solutions are
              designed to make compliance simpler, faster and more effective.
            </p>

            {/* CTA */}
            <motion.div
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex"
            >
              <Link
               to={`${ROUTES.ABOUT}#fqa`}
                className={`mt-8 inline-flex items-center gap-3 rounded-[3px] px-6 py-3.5 font-poppins text-[15px] font-medium transition-all ${
                  isDark
                    ? "bg-[#FA4028] text-white hover:bg-[#e93721]"
                    : "bg-[#2E2E2E] text-white hover:bg-[#151e59]"
                }`}
              >
                Frequently Asked Questions
                <ArrowRight size={18} strokeWidth={1.8} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 lg:order-2"
          >
            <div
              className={`relative overflow-hidden rounded-[3px] ${
                isDark ? "bg-[#191919]" : "bg-[#eef5f8]"
              }`}
            >
              {/* Decorative background */}
              <div
                className={`absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl ${
                  isDark ? "bg-[#284969]/40" : "bg-[#c9e1fa]"
                }`}
              />

              <div
                className={`relative flex min-h-[390px] items-end justify-center overflow-hidden sm:min-h-[480px] md:min-h-[540px] lg:min-h-[570px] ${
                  isDark ? "bg-[#24313a]" : "bg-[#dceef5]"
                }`}
              >
                <img
                  src={aboutGirl}
                  alt="Daily Compliance expert"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className={`absolute bottom-7 right-5 max-w-[245px] p-4 shadow-xl sm:bottom-10 sm:right-8 sm:max-w-[280px] sm:p-5 ${
                  isDark ? "bg-[#151515] text-white" : "bg-white text-[#071044]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2
                      size={22}
                      className="text-[#FA4028]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3 className="font-playfair text-[18px] font-semibold sm:text-[20px]">
                      Trusted Compliance Advisors
                    </h3>

                    <p
                      className={`mt-1.5 font-poppins text-[12px] leading-[1.5] sm:text-[13px] ${
                        isDark ? "text-gray-400" : "text-[#536174]"
                      }`}
                    >
                      Driving your compliance strategy forward with practical
                      expertise and technology.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="w-full mt-30 text-center">
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
      mx-auto
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
            Compliance expertise, without the complexity.
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
      mx-auto
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
            Navigate standards, reduce compliance risk, automate documentation,
            and accelerate product approvals - all in one intelligent Compliance
            SaaS Suite.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-14 sm:mt-20"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className={`group relative overflow-hidden border p-6 transition-all duration-500 sm:p-7 ${
                    isDark
                      ? "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                      : "border-[#d9dce1] bg-white hover:border-[#c9ccd1] hover:shadow-[0_18px_45px_rgba(7,16,68,0.07)]"
                  }`}
                >
                  {/* Top Accent Line */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#FA4028] transition-all duration-500 group-hover:w-full" />

                  {/* Icon + Title */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isDark
                          ? "bg-white/[0.06] text-white/60 group-hover:bg-white/[0.1] group-hover:text-white"
                          : "bg-[#f4f5f6] text-[#6b7280] group-hover:bg-[#eeeeef] group-hover:text-[#111827]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <h3
                      className={`font-playfair text-[21px] font-semibold leading-tight transition-colors duration-300 ${
                        isDark
                          ? "text-white group-hover:text-[#FA4028]"
                          : "text-[#071044] group-hover:text-[#FA4028]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`relative z-10 mt-5 text-[13px] leading-[1.7] sm:text-[16px] ${
                      isDark ? "text-gray-400" : "text-[#536174]"
                    }`}
                  >
                    {item.text}
                  </p>
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#FA4028]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
