import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ROUTES } from "@/router/routes";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const LinkedinLink = "https://www.linkedin.com/company/daily-compliance-usa/?viewAsMember=true";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="w-full overflow-hidden bg-[#ed2935] text-white"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-4
          px-5
          py-5
          sm:px-6
          md:px-8
          lg:grid-cols-[1fr_auto_1fr]
          lg:gap-8
          lg:px-9
          lg:py-4
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            flex
            min-w-0
            items-center
            justify-center
            lg:justify-start
          "
        >
          <p
            className="
              whitespace-nowrap
              text-[13px]
              font-normal
              leading-none
              sm:text-sm
              md:text-[15px]
            "
          >
            © TheDailyCompliance {currentYear}
          </p>
        </motion.div>

        <div className="hidden lg:block" />

        <motion.nav
          aria-label="Footer navigation"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            flex
            min-w-0
            flex-wrap
            items-center
            justify-center
            gap-x-2
            gap-y-2
            text-center
            text-[12px]
            font-normal
            leading-none
            sm:text-[13px]
            md:text-sm
            lg:justify-end
          "
        >
          <span className="whitespace-nowrap">
            All rights reserved
          </span>

          <span aria-hidden="true">|</span>

          <Link
            to={ROUTES.PRIVACY}
            className="whitespace-nowrap transition-opacity hover:opacity-80"
          >
            Privacy Policy
          </Link>

          <span aria-hidden="true">|</span>

          <Link
            to={ROUTES.TERMS}
            className="whitespace-nowrap transition-opacity hover:opacity-80"
          >
            Terms of Services
          </Link>

           <span aria-hidden="true">|</span>
           <Link
            to={LinkedinLink}
            className="whitespace-nowrap transition-opacity hover:opacity-80"
          >
            
            Linkedin
          </Link>
        </motion.nav>
      </div>
    </motion.footer>
  );
}