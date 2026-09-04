
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import { useTheme } from "@/theme/ThemeProvider";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Daily Compliance website, services, resources, platforms, or other materials made available by us, you agree to be bound by these Terms and Conditions.",
      "If you do not agree with these Terms and Conditions, you should not use our website or services.",
      "These Terms and Conditions apply to all visitors, users, customers, and other persons who access or use our website or services.",
    ],
  },
  {
    title: "2. About Our Services",
    content: [
      "Daily Compliance provides professional compliance-related information, consulting, regulatory, training, technology, and other business services.",
      "The specific scope, deliverables, fees, timelines, and conditions applicable to a particular service may be governed by a separate proposal, statement of work, order form, agreement, or other written arrangement.",
      "Where a separate written agreement conflicts with these Terms and Conditions, the specific written agreement will govern the applicable service to the extent permitted by law.",
    ],
  },
  {
    title: "3. Website Use",
    content: [
      "You agree to use this website only for lawful purposes and in a manner that does not violate applicable laws, regulations, contractual obligations, or the rights of others.",
      "You must not attempt to gain unauthorized access to our systems, interfere with the operation or security of the website, introduce malicious code, scrape or copy website content through unauthorized means, or use the website to distribute unlawful or harmful material.",
      "We reserve the right to restrict or terminate access to the website where we reasonably believe that these Terms and Conditions have been violated.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "Unless otherwise stated, the website and its content, including text, graphics, logos, designs, images, documents, downloadable resources, software, and other materials, are owned by or licensed to Daily Compliance and are protected by applicable intellectual property laws.",
      "You may access and use website content for your personal or legitimate internal business purposes in accordance with these Terms and Conditions.",
      "You may not reproduce, modify, distribute, publish, sell, license, create derivative works from, or commercially exploit our content without prior written permission, except where permitted by applicable law.",
    ],
  },
  {
    title: "5. Resource Downloads",
    content: [
      "Certain resources may be made available for download through our website. These resources are provided for informational and business purposes unless expressly stated otherwise.",
      "Downloading a resource does not transfer ownership or intellectual property rights in that resource to you.",
      "You agree not to redistribute, resell, reproduce, or commercially exploit downloaded resources without appropriate authorization.",
    ],
  },
  {
    title: "6. Information and Professional Advice",
    content: [
      "Information published on our website and in our resources is provided for general informational purposes and should not automatically be treated as legal, financial, regulatory, tax, or other professional advice.",
      "Compliance requirements may vary depending on the applicable jurisdiction, industry, business activity, facts, and circumstances.",
      "You should obtain appropriate professional advice before making decisions based on information provided through our website or resources.",
    ],
  },
  {
    title: "7. Accuracy of Information",
    content: [
      "We make reasonable efforts to provide useful and accurate information. However, we do not warrant that all website content will always be complete, accurate, current, or free from errors or omissions.",
      "Regulations, standards, requirements, technologies, and business circumstances may change over time. Information that was accurate when published may subsequently become outdated.",
      "We reserve the right to update, change, remove, or modify website content at any time without prior notice.",
    ],
  },
  {
    title: "8. Third-Party Links and Services",
    content: [
      "Our website may contain links to third-party websites, applications, services, or resources.",
      "These third-party services are operated independently from Daily Compliance. We do not control and are not responsible for their content, availability, security, privacy practices, or terms.",
      "Your use of third-party websites and services is subject to the terms and policies applicable to those third parties.",
    ],
  },
  {
    title: "9. User Submissions",
    content: [
      "When you submit information through our website, including enquiries, feedback, forms, or other communications, you represent that the information you provide is accurate and that you have the right to provide it.",
      "You should not submit confidential, sensitive, proprietary, or legally privileged information unless specifically requested through an appropriate secure process.",
      "Information submitted through our website may be handled in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "10. Fees and Payments",
    content: [
      "Where services are provided for a fee, applicable pricing, payment terms, taxes, cancellation terms, and other commercial conditions may be specified in the relevant proposal, quotation, order, invoice, or service agreement.",
      "Unless otherwise agreed in writing, fees are payable according to the payment terms communicated by Daily Compliance.",
      "Failure to make payments when due may result in suspension or termination of applicable services, subject to the terms of the relevant agreement.",
    ],
  },
  {
    title: "11. Confidentiality",
    content: [
      "Where confidential information is exchanged in connection with our services, the parties may be subject to separate confidentiality obligations or agreements.",
      "You should not assume that information submitted through a general website form is confidential unless Daily Compliance has expressly agreed to treat it as confidential.",
    ],
  },
  {
    title: "12. Disclaimer of Warranties",
    content: [
      "To the maximum extent permitted by applicable law, the website and its content are provided on an 'as is' and 'as available' basis.",
      "We do not guarantee that the website will always be available, uninterrupted, secure, error-free, or free from harmful components.",
      "Except where expressly provided in a written agreement, we disclaim warranties to the extent permitted by applicable law.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Daily Compliance will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or relating to your use of the website or reliance on website content.",
      "Nothing in these Terms and Conditions excludes or limits liability that cannot legally be excluded or limited under applicable law.",
      "Where a separate written service agreement applies, liability will be governed by the terms of that agreement to the extent applicable.",
    ],
  },
  {
    title: "14. Indemnification",
    content: [
      "To the extent permitted by applicable law, you agree to indemnify and hold harmless Daily Compliance and its officers, employees, representatives, and service providers from claims, liabilities, losses, damages, costs, and expenses arising from your unlawful use of the website, violation of these Terms and Conditions, or infringement of another person's rights.",
    ],
  },
  {
    title: "15. Suspension and Termination",
    content: [
      "We may suspend, restrict, or terminate access to the website or applicable services where reasonably necessary, including where you breach these Terms and Conditions, create a security risk, engage in unlawful conduct, or where required for operational or legal reasons.",
      "Termination or suspension will not affect provisions that are intended to survive termination, including provisions relating to intellectual property, confidentiality, disclaimers, limitations of liability, and applicable law.",
    ],
  },
  {
    title: "16. Changes to These Terms",
    content: [
      "We may update these Terms and Conditions from time to time to reflect changes in our services, website functionality, business practices, or applicable legal requirements.",
      "Updated Terms and Conditions will be posted on this page. Your continued use of the website after an update may constitute acceptance of the revised Terms and Conditions to the extent permitted by applicable law.",
    ],
  },
  {
    title: "17. Governing Law",
    content: [
      "These Terms and Conditions will be governed by and interpreted in accordance with the applicable laws specified in the relevant agreement between you and Daily Compliance.",
      "Where no separate agreement specifies governing law or jurisdiction, the applicable governing law and jurisdiction should be confirmed by Daily Compliance based on the relevant business entity, service, and customer relationship.",
    ],
  },
  {
    title: "18. Contact Us",
    content: [
      "If you have questions regarding these Terms and Conditions, our website, or our services, please contact Daily Compliance through the contact information provided on our website.",
      "For service-specific questions, please refer to your applicable proposal, agreement, statement of work, or other contractual documentation.",
    ],
  },
];

export default function Terms() {
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
          <FileText size={27} strokeWidth={1.6} />
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
                  Terms <span className="font-poltawski">&</span> Conditions{" "}
                  <span className="font-dm-sans text-base font-semibold uppercase tracking-[0.15em] text-[#FA4028]">
                    Legal
                  </span>
                </h1>

          <p className="mt-5 max-w-[760px] font-poppins text-base leading-7 text-white/75 sm:text-lg">
            Please review the terms and conditions that govern
            your use of Daily Compliance's website, resources,
            platforms, and services.
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-12 rounded-lg border border-[#E5E5E5] bg-[#F8F9FB] p-6 dark:border-white/10 dark:bg-[#151515] sm:p-8"
          >
            <h2 className="font-playfair text-2xl font-semibold text-[#071044] dark:text-white">
              Terms at a glance
            </h2>

            <p className="mt-3 font-poppins text-[15px] leading-7 text-[#555] dark:text-gray-400">
              These Terms and Conditions explain the rules and
              responsibilities that apply when you access or use
              Daily Compliance's website, resources, and services.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-lg border border-[#E5E5E5] bg-white p-6 dark:border-white/10 dark:bg-[#151515]">
                <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-[#FA4028]">
                  Contents
                </p>

                <nav className="mt-5 space-y-3">
                  {sections.map((section) => {
                    const sectionId = section.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-|-$/g, "");

                    return (
                      <a
                        key={section.title}
                        href={`#${sectionId}`}
                        className="block font-poppins text-sm leading-5 text-[#666] transition-colors hover:text-[#071044] dark:text-gray-400 dark:hover:text-white"
                      >
                        {section.title}
                      </a>
                    );
                  })}
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
                  If you have questions about these Terms and
                  Conditions or our services, please contact Daily
                  Compliance through our website.
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
