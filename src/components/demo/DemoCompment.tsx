import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import img from "@/assets/contactus.png";
import { ROUTES } from "@/router/routes";
import { contactUs } from "@/service/services";

export default function ContactCompment() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const businessEmail = String(formData.get("businessEmail") || "").trim();

    const firstName = String(formData.get("firstName") || "").trim();

    const lastName = String(formData.get("lastName") || "").trim();

    const companyName = String(formData.get("companyName") || "").trim();

    const message = String(formData.get("message") || "").trim();

    if (!businessEmail) {
      toast.error("Please enter your business email.");
      return;
    }

    if (!firstName) {
      toast.error("Please enter your first name.");
      return;
    }

    if (!lastName) {
      toast.error("Please enter your last name.");
      return;
    }

    if (!companyName) {
      toast.error("Please enter your company name.");
      return;
    }

    if (!message) {
      toast.error("Please enter your message.");
      return;
    }

    try {
      setLoading(true);

      await contactUs({
        name: `${firstName} ${lastName}`,
        email: businessEmail,
        company: `Demo for ${companyName}`,
        message,
      });

      toast.success("Message sent successfully!", {
        description:
          "Thank you for contacting us. Our team will get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error("Unable to send your message.", {
        description: "Please try again later or contact our team directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d]">
      <div className="absolute inset-x-0 bottom-0 z-0 flex w-full justify-center">
        <img
          src={img}
          alt=""
          draggable={false}
          className="
            h-auto
            w-full
            min-w-225
            max-w-[1600px]
            object-cover
            object-bottom
            sm:min-w-0
          "
        />
      </div>

      <div className="absolute inset-0 z-10 bg-white/25 dark:bg-black/30" />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-8
          lg:px-12
        "
      >
        <div
          className="
            relative
            w-full
            max-w-[620px]
            bg-white
            px-6
            pb-9
            pt-11
            shadow-[0_15px_50px_rgba(0,0,0,0.08)]
            dark:bg-[#151515]
            sm:px-9
            sm:pb-11
            sm:pt-12
            md:px-14
            md:pb-14
            md:pt-14
          "
        >
          <div className="mb-7 text-center">
            <div
              className="
                mx-auto
                mb-4
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-[#fa4028]/30
                bg-[#fa4028]/5
                px-4
                py-2
                dark:border-[#fa4028]/40
                dark:bg-[#fa4028]/10
              "
            >
              <span className="text-[18px] leading-none text-[#fa4028]">✦</span>

              <span
                className="
                  font-poppins
                  text-[15px]
                  font-medium
                  text-[#071044]
                  dark:text-white
                "
              >
              Request for  Demo
              </span>
            </div>

            <h1
              className="
                font-playfair
                text-[30px]
                font-semibold
                leading-[1.2]
                tracking-[-0.02em]
                text-[#071044]
                dark:text-white
                sm:text-[34px]
                md:text-[38px]
              "
            >
              Get a full demo of Daily Compliance
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-[500px]
                font-poppins
                text-[15px]
                leading-[1.7]
                text-[#667085]
                dark:text-gray-400
                sm:text-[16px]
              "
            >
              Contact us today and discover how Daily Compliance can help your
              organization build a safer and more sustainable future.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="businessEmail"
                className="
                  mb-2
                  block
                  font-poppins
                  text-[15px]
                  font-medium
                  text-[#444]
                  dark:text-gray-200
                  sm:text-[16px]
                "
              >
                Business Email
                <span className="ml-1 text-[#fa4028]">*</span>
              </label>

              <input
                id="businessEmail"
                name="businessEmail"
                type="email"
                required
                autoComplete="off"
                spellCheck={false}
                placeholder="Enter your work email"
                className="
                  h-12
                  w-full
                  rounded-none
                  border
                  border-[#d1d1d1]
                  bg-white
                  px-4
                  font-poppins
                  text-[15px]
                  text-[#222]
                  outline-none
                  transition
                  placeholder:text-[#a5a5a5]
                  focus:border-[#071044]
                  dark:border-[#444]
                  dark:bg-[#1b1b1b]
                  dark:text-white
                  dark:placeholder:text-[#888]
                  dark:focus:border-[#fa4028]
                  sm:h-[52px]
                  sm:text-[16px]
                "
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-[15px]
                    font-medium
                    text-[#444]
                    dark:text-gray-200
                    sm:text-[16px]
                  "
                >
                  First Name
                  <span className="ml-1 text-[#fa4028]">*</span>
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Enter your first name"
                  className="
                    h-12
                    w-full
                    rounded-none
                    border
                    border-[#d1d1d1]
                    bg-white
                    px-4
                    font-poppins
                    text-[15px]
                    text-[#222]
                    outline-none
                    transition
                    placeholder:text-[#a5a5a5]
                    focus:border-[#071044]
                    dark:border-[#444]
                    dark:bg-[#1b1b1b]
                    dark:text-white
                    dark:placeholder:text-[#888]
                    dark:focus:border-[#fa4028]
                    sm:h-[52px]
                    sm:text-[16px]
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-[15px]
                    font-medium
                    text-[#444]
                    dark:text-gray-200
                    sm:text-[16px]
                  "
                >
                  Last Name
                  <span className="ml-1 text-[#fa4028]">*</span>
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Enter your last name"
                  className="
                    h-12
                    w-full
                    rounded-none
                    border
                    border-[#d1d1d1]
                    bg-white
                    px-4
                    font-poppins
                    text-[15px]
                    text-[#222]
                    outline-none
                    transition
                    placeholder:text-[#a5a5a5]
                    focus:border-[#071044]
                    dark:border-[#444]
                    dark:bg-[#1b1b1b]
                    dark:text-white
                    dark:placeholder:text-[#888]
                    dark:focus:border-[#fa4028]
                    sm:h-[52px]
                    sm:text-[16px]
                  "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="
                  mb-2
                  block
                  font-poppins
                  text-[15px]
                  font-medium
                  text-[#444]
                  dark:text-gray-200
                  sm:text-[16px]
                "
              >
                Company Name
                <span className="ml-1 text-[#fa4028]">*</span>
              </label>

              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                autoComplete="off"
                spellCheck={false}
                placeholder="Enter your company name"
                className="
                  h-12
                  w-full
                  rounded-none
                  border
                  border-[#d1d1d1]
                  bg-white
                  px-4
                  font-poppins
                  text-[15px]
                  text-[#222]
                  outline-none
                  transition
                  placeholder:text-[#a5a5a5]
                  focus:border-[#071044]
                  dark:border-[#444]
                  dark:bg-[#1b1b1b]
                  dark:text-white
                  dark:placeholder:text-[#888]
                  dark:focus:border-[#fa4028]
                  sm:h-[52px]
                  sm:text-[16px]
                "
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  font-poppins
                  text-[15px]
                  font-medium
                  text-[#444]
                  dark:text-gray-200
                  sm:text-[16px]
                "
              >
                Message
                <span className="ml-1 text-[#fa4028]">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                required
                autoComplete="off"
                spellCheck={true}
                rows={5}
                placeholder="Tell us about your requirements..."
                className="
                  min-h-[145px]
                  w-full
                  resize-none
                  rounded-none
                  border
                  border-[#d1d1d1]
                  bg-white
                  px-4
                  py-3.5
                  font-poppins
                  text-[15px]
                  leading-[1.65]
                  text-[#222]
                  outline-none
                  transition
                  placeholder:text-[#a5a5a5]
                  focus:border-[#071044]
                  dark:border-[#444]
                  dark:bg-[#1b1b1b]
                  dark:text-white
                  dark:placeholder:text-[#888]
                  dark:focus:border-[#fa4028]
                  sm:text-[16px]
                "
              />
            </div>

            <p
              className="
                font-poppins
                text-[12px]
                leading-[1.7]
                text-[#777]
                dark:text-gray-400
                sm:text-[13px]
              "
            >
              By submitting this form, you agree to Daily Compliance&apos;s{" "}
              <Link
                to={ROUTES.TERMS}
                className="
                  text-[#071044]
                  underline
                  underline-offset-2
                  transition
                  hover:text-[#fa4028]
                  dark:text-gray-200
                  dark:hover:text-[#fa4028]
                "
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to={ROUTES.PRIVACY}
                className="
                  text-[#071044]
                  underline
                  underline-offset-2
                  transition
                  hover:text-[#fa4028]
                  dark:text-gray-200
                  dark:hover:text-[#fa4028]
                "
              >
                Privacy Policy
              </Link>
              .
            </p>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.01,
              }}
              whileTap={{
                scale: loading ? 1 : 0.98,
              }}
              className="
                mt-2
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xs
                border
                border-[#2e2e2e]
                bg-[#2e2e2e]
                font-poppins
                text-[15px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#071044]
                disabled:cursor-not-allowed
                disabled:opacity-60
                dark:border-[#fa4028]
                dark:bg-[#fa4028]
                dark:hover:bg-[#e93821]
                sm:h-[52px]
                sm:text-[16px]
              "
            >
              {loading ? "Sending..." : "Get a Demo"}

              {!loading && <ArrowRight size={19} strokeWidth={1.5} />}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
