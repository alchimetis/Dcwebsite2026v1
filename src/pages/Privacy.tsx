import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import { useTheme } from "@/theme/ThemeProvider";

const sections = [
  {
    title: "1. Introduction",
    content: [
      "Daily Compliance respects your privacy and is committed to protecting the personal information you provide when using our website, services, platforms, and other digital resources.",
      "This Privacy Policy explains what information we may collect, how we may use it, how we may protect it, and the choices available to you.",
      "By using our website or submitting information through our forms, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We may collect information that you voluntarily provide to us when you contact us, request information, request a quotation, register for a service, download resources, or otherwise communicate with us.",
      "This information may include your name, business email address, telephone number, company name, job title, country, business requirements, and any other information you choose to provide.",
      "We may also collect limited technical information automatically when you visit our website, such as your IP address, browser type, device information, operating system, pages visited, referring website, and general usage information.",
    ],
  },
  {
    title: "3. How We Use Information",
    content: [
      "We may use information collected through our website and services to respond to enquiries, provide requested services, prepare quotations, communicate with customers and prospective customers, provide support, improve our website and services, and maintain the security and functionality of our systems.",
      "We may also use information where necessary to comply with applicable laws, regulations, legal processes, or legitimate business requirements.",
      "We do not use personal information for purposes that are materially incompatible with the purpose for which it was collected without providing appropriate notice where required by applicable law.",
    ],
  },
  {
    title: "4. Contact and Enquiry Information",
    content: [
      "When you submit a contact, enquiry, quotation, or similar form, the information you provide may be used by Daily Compliance to understand your requirements and communicate with you regarding your request.",
      "We may retain enquiry information for as long as reasonably necessary to handle the request, maintain business records, provide services, resolve disputes, and meet applicable legal or regulatory obligations.",
    ],
  },
  {
    title: "5. Cookies and Similar Technologies",
    content: [
      "Our website may use cookies and similar technologies to support website functionality, remember preferences, understand website usage, and improve user experience.",
      "Some cookies may be provided by third-party services used to operate, secure, analyze, or improve the website.",
      "You may be able to control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.",
    ],
  },
  {
    title: "6. Analytics and Website Usage",
    content: [
      "We may use analytics and similar technologies to understand how visitors interact with our website, identify technical issues, measure website performance, and improve our content and services.",
      "Where third-party analytics services are used, those providers may process technical or usage information according to their own privacy policies and applicable contractual requirements.",
    ],
  },
  {
    title: "7. Sharing of Information",
    content: [
      "We may share personal information with service providers, contractors, technology providers, professional advisers, and other trusted third parties where necessary to operate our business, provide requested services, maintain our systems, or process information on our behalf.",
      "We may also disclose information when required by law, regulation, court order, governmental request, or when reasonably necessary to protect our rights, property, security, users, or the public.",
      "We do not intend to sell personal information to third parties.",
    ],
  },
  {
    title: "8. Data Security",
    content: [
      "Daily Compliance takes reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
      "However, no internet transmission, electronic storage system, or security measure can be guaranteed to be completely secure. You should therefore avoid submitting information that is not necessary for your request.",
    ],
  },
  {
    title: "9. Data Retention",
    content: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business and transaction records, resolving disputes, enforcing agreements, and satisfying legal or regulatory requirements.",
      "Actual retention periods may vary depending on the type of information, the nature of the relationship, and applicable legal requirements.",
    ],
  },
  {
    title: "10. International Data Transfers",
    content: [
      "Depending on where you are located and where our service providers operate, personal information may be processed or stored in countries other than the country in which you are located.",
      "Where applicable, we take reasonable steps to ensure that international transfers of personal information are handled in accordance with applicable privacy and data protection requirements.",
    ],
  },
  {
    title: "11. Your Privacy Rights",
    content: [
      "Depending on your location and applicable law, you may have rights relating to your personal information, including the right to request access, correction, deletion, restriction of processing, or information about how your data is used.",
      "You may also have the right to object to certain processing activities or withdraw consent where processing is based on consent.",
      "Requests may be subject to verification and applicable legal limitations.",
    ],
  },
  {
    title: "12. Third-Party Websites",
    content: [
      "Our website may contain links to third-party websites, platforms, or services. These third parties operate independently from Daily Compliance and may have their own privacy policies and terms.",
      "We are not responsible for the privacy practices, content, security, or policies of third-party websites. We recommend reviewing the applicable privacy policy before providing information to a third party.",
    ],
  },
  {
    title: "13. Children's Privacy",
    content: [
      "Our website and services are intended for businesses and professional users and are not directed toward children.",
      "We do not knowingly request or intentionally collect personal information from children where such collection is prohibited by applicable law.",
    ],
  },
  {
    title: "14. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or privacy practices.",
      "When changes are made, the updated version will be posted on this page with an updated effective date where appropriate.",
    ],
  },
  {
    title: "15. Contact Us",
    content: [
      "If you have questions about this Privacy Policy, your personal information, or a privacy-related request, please contact Daily Compliance through the contact information provided on our website.",
      "For privacy requests, please provide enough information for us to understand and process your request.",
    ],
  },
];

export default function Privacy() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <main className="min-h-screen bg-white text-[#171717] dark:bg-[#0D0D0D] dark:text-white">
      <section className="relative overflow-hidden bg-[#071044] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 md:px-10 lg:px-12 lg:pb-24 lg:pt-24">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FA4028]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              to={ROUTES.HOME}
              className="mb-8 inline-flex items-center gap-2 font-poppins text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={17} strokeWidth={1.8} />
              Back to Home
            </Link>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <ShieldCheck size={27} strokeWidth={1.6} />
              </div>

              <div>
                <h1
                  className={`
  max-w-[1000px]
  font-playfair
  text-4xl
  font-semibold
  leading-[1.05]
  tracking-[-0.03em]
  sm:text-5xl
  md:text-6xl
  -mt-3
  lg:text-[64px]
  xl:text-[72px]
  ${isDark ? "text-white" : "text-[#fff]"}
`}
                >
                  Privacy Policy{" "}
                  <span className="font-dm-sans text-base font-semibold uppercase tracking-[0.15em] text-[#FA4028]">
                    Legal
                  </span>
                </h1>

                <p className="mt-5 max-w-[760px] font-poppins text-base leading-7 text-white/75 sm:text-lg">
                  Your privacy matters to us. This policy explains how Daily
                  Compliance handles information collected through our website
                  and services.
                </p>

                <p className="mt-5 font-poppins text-sm text-white/55">
                  Last Updated: September 4, 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-12 rounded-lg border border-[#E5E5E5] bg-[#F8F9FB] p-6 dark:border-white/10 dark:bg-[#151515] sm:p-8"
          >
            <h2 className="font-playfair text-2xl font-semibold text-[#071044] dark:text-white">
              Privacy at a glance
            </h2>

            <p className="mt-3 font-poppins text-[15px] leading-7 text-[#555] dark:text-gray-400">
              We collect information needed to operate our website, respond to
              business enquiries, provide services, improve our offerings, and
              maintain security. We take reasonable measures to protect
              information and do not intend to sell personal information to
              third parties.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-lg border border-[#E5E5E5] bg-white p-6 dark:border-white/10 dark:bg-[#151515]">
                <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-[#FA4028]">
                  Contents
                </p>

                <nav className="mt-5 space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.title}
                      href={`#${section.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "")}`}
                      className="block font-poppins text-sm leading-5 text-[#666] transition-colors hover:text-[#071044] dark:text-gray-400 dark:hover:text-white"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="max-w-[820px]">
              <div className="space-y-12">
                {sections.map((section, index) => {
                  const sectionId = section.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "");

                  return (
                    <motion.section
                      key={section.title}
                      id={sectionId}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{
                        once: true,
                        amount: 0.08,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: Math.min(index * 0.02, 0.15),
                      }}
                      className="scroll-mt-28"
                    >
                      <h2 className="font-playfair text-2xl font-semibold leading-tight text-[#071044] dark:text-white sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4">
                        {section.content.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="font-poppins text-[15px] leading-7 text-[#555] dark:text-gray-400 sm:text-[16px]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.section>
                  );
                })}
              </div>

              <div className="mt-16 border-t border-[#E5E5E5] pt-8 dark:border-white/10">
                <p className="font-poppins text-sm leading-6 text-[#777] dark:text-gray-500">
                  If you have a privacy question or need assistance with a
                  privacy request, please contact Daily Compliance through our
                  website contact page.
                </p>

                <Link
                  to={ROUTES.CONTACT}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#2E2E2E] px-6 py-3 font-poppins text-sm font-medium text-white transition-colors hover:bg-[#071044] dark:bg-[#FA4028] dark:hover:bg-[#e63822]"
                >
                  Contact Us
                  <ArrowLeft
                    size={16}
                    strokeWidth={1.8}
                    className="rotate-180"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
