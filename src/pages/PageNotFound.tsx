import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

import { ROUTES } from "@/router/routes";

export default function PageNotFound() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-[#0d0d0d]">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fa4028]/5 blur-3xl dark:bg-[#fa4028]/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 py-20 text-center sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="
            mb-3
            font-poppins
            text-[15px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#fa4028]
            sm:text-[16px]
          "
        >
          Error 404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="
            font-playfair
            text-5xl
            font-semibold
            leading-[1.05]
            tracking-tight
            text-[#000]
            dark:text-white
            sm:text-6xl
            lg:text-[72px]
          "
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="
            mt-6
            max-w-[620px]
            font-poppins
            text-base
            leading-7
            text-[#4f4f4f]
            dark:text-gray-300
            sm:text-lg
          "
        >
          Sorry, the page you are looking for doesn&apos;t exist,
          has been moved, or the URL may be incorrect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="
            mt-9
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            sm:w-auto
            sm:flex-row
          "
        >
          <Link
            to={ROUTES.HOME}
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              bg-[#000]
              px-7
              font-poppins
              text-[15px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#fa4028]
              sm:h-[52px]
              sm:w-auto
              sm:text-[16px]
            "
          >
            <Home size={18} strokeWidth={1.5} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              border
              border-[#d5d5d5]
              bg-white
              px-7
              font-poppins
              text-[15px]
              font-medium
              text-[#000]
              transition-all
              duration-300
              hover:border-[#000]
              dark:border-[#444]
              dark:bg-[#151515]
              dark:text-white
              dark:hover:border-[#fa4028]
              sm:h-[52px]
              sm:w-auto
              sm:text-[16px]
            "
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="
            mt-14
            h-px
            w-full
            max-w-[500px]
            bg-[#e5e5e5]
            dark:bg-[#292929]
          "
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="
            mt-5
            font-poppins
            text-[13px]
            text-[#888]
            dark:text-gray-500
          "
        >
          Daily Compliance
        </motion.p>
      </div>
    </section>
  );
}