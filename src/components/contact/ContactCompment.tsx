import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { contactUs } from "@/service/services";
import { ROUTES } from "@/router/routes";
import { toast } from "sonner";
import img from "@/assets/contactus.svg";

export default function ContactCompment() {
  const [loading, setLoading] = useState(false);

  const email =
    import.meta.env.VITE_CONTACT_EMAIL || "info@dailycompliance.com";
  const phone =
    import.meta.env.VITE_CONTACT_PHONE || "+1 000 000 0000";

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const businessEmail =
      String(formData.get("businessEmail") || "").trim();

    const firstName =
      String(formData.get("firstName") || "").trim();

    const lastName =
      String(formData.get("lastName") || "").trim();

    const companyName =
      String(formData.get("companyName") || "").trim();

    const subject =
      String(formData.get("subject") || "").trim();

    const message =
      String(formData.get("message") || "").trim();

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
        company: companyName,
        message: subject
          ? `Subject: ${subject}\n\n${message}`
          : message,
      });

      toast.success("Message sent successfully!", {
        description:
          "Thank you for contacting us. Our team will get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error("Unable to send your message.", {
        description:
          "Please try again later or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full overflow-hidden bg-white dark:bg-[#0D0D0D]">
      <section className="relative w-full px-5 pb-12 pt-16 sm:px-8 sm:pt-20 md:px-10 lg:px-12 lg:pt-24">
        <div className="mx-auto w-full max-w-[1298px]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-2
              rounded-[5px]
              border
              border-[#ffb8ae]
              bg-[#fffafa]
              px-3
              py-2
              dark:border-[#fa4028]/40
              dark:bg-[#fa4028]/5
            "
          >
            <span className="text-[20px] leading-none text-[#FA4028]">
              ✦
            </span>

            <span
              className="
                font-poppins
                text-[14px]
                text-[#071044]
                sm:text-[16px]
                dark:text-white
              "
            >
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-[900px]
              text-center
              font-playfair
              text-[34px]
              font-semibold
              leading-[1.12]
              tracking-[-0.025em]
              text-[#071044]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[58px]
              dark:text-white
            "
          >
            Let&apos;s build a safer,
            <br className="hidden sm:block" />
            more sustainable future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-5
              max-w-[720px]
              text-center
              font-poppins
              text-[15px]
              leading-[1.75]
              text-[#465468]
              sm:text-[17px]
              dark:text-gray-300
            "
          >
            Have questions about compliance, sustainability, or our
            solutions? Get in touch with our team and let&apos;s discuss
            how Daily Compliance can help your business.
          </motion.p>
        </div>
      </section>

      <section className="relative w-full px-5 pb-16 sm:px-8 md:px-10 lg:px-12 lg:pb-24">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1298px]
            grid-cols-1
            gap-6
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-8
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[430px]
              overflow-hidden
              bg-[#C9E1FA]
              p-6
              sm:p-8
              md:p-10
              dark:bg-[#19354d]
            "
          >
            <img
              src={img}
              alt=""
              draggable={false}
              className="
                absolute
                inset-x-0
                bottom-0
                h-auto
                w-full
                object-contain
                object-bottom
                opacity-90
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-[#C9E1FA]/90
                via-[#C9E1FA]/30
                to-transparent
                dark:from-[#19354d]/95
                dark:via-[#19354d]/40
                dark:to-transparent
              "
            />

            <div className="relative z-10">
              <h2
                className="
                  max-w-[480px]
                  font-playfair
                  text-[30px]
                  font-semibold
                  leading-[1.2]
                  tracking-tight
                  text-[#071044]
                  sm:text-[36px]
                  dark:text-white
                "
              >
                We&apos;re here to help.
              </h2>

              <p
                className="
                  mt-4
                  max-w-[470px]
                  font-poppins
                  text-[15px]
                  leading-[1.75]
                  text-[#34465a]
                  sm:text-[16px]
                  dark:text-gray-300
                "
              >
                Whether you need regulatory compliance support,
                sustainability guidance, or want to learn more about
                Daily Compliance, our team is ready to help.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={`mailto:${email}`}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    font-poppins
                    text-[15px]
                    text-[#071044]
                    transition
                    hover:opacity-70
                    dark:text-white
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/80
                      dark:bg-white/10
                    "
                  >
                    <Mail size={18} strokeWidth={1.5} />
                  </span>

                  <span className="break-all">
                    {email}
                  </span>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    font-poppins
                    text-[15px]
                    text-[#071044]
                    transition
                    hover:opacity-70
                    dark:text-white
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/80
                      dark:bg-white/10
                    "
                  >
                    <Phone size={18} strokeWidth={1.5} />
                  </span>

                  <span>{phone}</span>
                </a>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    font-poppins
                    text-[15px]
                    text-[#071044]
                    dark:text-white
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/80
                      dark:bg-white/10
                    "
                  >
                    <MapPin size={18} strokeWidth={1.5} />
                  </span>

                  <span>Global Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              bg-[#f7f7f7]
              p-5
              sm:p-7
              md:p-9
              lg:p-10
              dark:bg-[#151515]
            "
          >
            <div className="mb-7">
              <h2
                className="
                  font-playfair
                  text-[30px]
                  font-semibold
                  leading-[1.2]
                  text-[#071044]
                  sm:text-[34px]
                  dark:text-white
                "
              >
                Send us a message
              </h2>

              <p
                className="
                  mt-2
                  font-poppins
                  text-[15px]
                  leading-[1.7]
                  text-[#657080]
                  dark:text-gray-400
                "
              >
                Fill in the details below and our team will get back
                to you.
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
                    text-[14px]
                    font-medium
                    text-[#444]
                    dark:text-gray-200
                  "
                >
                  Business Email
                  <span className="text-[#FA4028]">*</span>
                </label>

                <input
                  id="businessEmail"
                  name="businessEmail"
                  type="email"
                  required
                  autoComplete="new-password"
                  spellCheck={false}
                  placeholder="Enter your work email"
                  className="
                    h-12
                    w-full
                    rounded-none
                    border
                    border-[#d4d4d4]
                    bg-white
                    px-4
                    font-poppins
                    text-[15px]
                    text-[#222]
                    outline-none
                    transition
                    placeholder:text-[#999]
                    focus:border-[#071044]
                    dark:border-[#3f3f3f]
                    dark:bg-[#1f1f1f]
                    dark:text-white
                    dark:placeholder:text-[#8d8d8d]
                    dark:focus:border-[#FA4028]
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
                      text-[14px]
                      font-medium
                      text-[#444]
                      dark:text-gray-200
                    "
                  >
                    First Name
                    <span className="text-[#FA4028]">*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="new-password"
                    spellCheck={false}
                    placeholder="Enter your first name"
                    className="
                      h-12
                      w-full
                      rounded-none
                      border
                      border-[#d4d4d4]
                      bg-white
                      px-4
                      font-poppins
                      text-[15px]
                      text-[#222]
                      outline-none
                      transition
                      placeholder:text-[#999]
                      focus:border-[#071044]
                      dark:border-[#3f3f3f]
                      dark:bg-[#1f1f1f]
                      dark:text-white
                      dark:placeholder:text-[#8d8d8d]
                      dark:focus:border-[#FA4028]
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
                      text-[14px]
                      font-medium
                      text-[#444]
                      dark:text-gray-200
                    "
                  >
                    Last Name
                    <span className="text-[#FA4028]">*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="new-password"
                    spellCheck={false}
                    placeholder="Enter your last name"
                    className="
                      h-12
                      w-full
                      rounded-none
                      border
                      border-[#d4d4d4]
                      bg-white
                      px-4
                      font-poppins
                      text-[15px]
                      text-[#222]
                      outline-none
                      transition
                      placeholder:text-[#999]
                      focus:border-[#071044]
                      dark:border-[#3f3f3f]
                      dark:bg-[#1f1f1f]
                      dark:text-white
                      dark:placeholder:text-[#8d8d8d]
                      dark:focus:border-[#FA4028]
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
                    text-[14px]
                    font-medium
                    text-[#444]
                    dark:text-gray-200
                  "
                >
                  Company Name
                  <span className="text-[#FA4028]">*</span>
                </label>

                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  autoComplete="new-password"
                  spellCheck={false}
                  placeholder="Enter your company name"
                  className="
                    h-12
                    w-full
                    rounded-none
                    border
                    border-[#d4d4d4]
                    bg-white
                    px-4
                    font-poppins
                    text-[15px]
                    text-[#222]
                    outline-none
                    transition
                    placeholder:text-[#999]
                    focus:border-[#071044]
                    dark:border-[#3f3f3f]
                    dark:bg-[#1f1f1f]
                    dark:text-white
                    dark:placeholder:text-[#8d8d8d]
                    dark:focus:border-[#FA4028]
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-[14px]
                    font-medium
                    text-[#444]
                    dark:text-gray-200
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  autoComplete="new-password"
                  spellCheck={false}
                  placeholder="How can we help?"
                  className="
                    h-12
                    w-full
                    rounded-none
                    border
                    border-[#d4d4d4]
                    bg-white
                    px-4
                    font-poppins
                    text-[15px]
                    text-[#222]
                    outline-none
                    transition
                    placeholder:text-[#999]
                    focus:border-[#071044]
                    dark:border-[#3f3f3f]
                    dark:bg-[#1f1f1f]
                    dark:text-white
                    dark:placeholder:text-[#8d8d8d]
                    dark:focus:border-[#FA4028]
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
                    text-[14px]
                    font-medium
                    text-[#444]
                    dark:text-gray-200
                  "
                >
                  Message
                  <span className="text-[#FA4028]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  autoComplete="new-password"
                  spellCheck={true}
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="
                    min-h-[150px]
                    w-full
                    resize-none
                    rounded-none
                    border
                    border-[#d4d4d4]
                    bg-white
                    px-4
                    py-3.5
                    font-poppins
                    text-[15px]
                    leading-[1.6]
                    text-[#222]
                    outline-none
                    transition
                    placeholder:text-[#999]
                    focus:border-[#071044]
                    dark:border-[#3f3f3f]
                    dark:bg-[#1f1f1f]
                    dark:text-white
                    dark:placeholder:text-[#8d8d8d]
                    dark:focus:border-[#FA4028]
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
                "
              >
                By submitting this form, you agree to Daily
                Compliance&apos;s{" "}
                <a
                  href={ROUTES.TERMS}
                  className="
                    text-[#071044]
                    underline
                    underline-offset-2
                    transition
                    hover:text-[#FA4028]
                    dark:text-gray-300
                    dark:hover:text-[#FA4028]
                  "
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href={ROUTES.PRIVACY}
                  className="
                    text-[#071044]
                    underline
                    underline-offset-2
                    transition
                    hover:text-[#FA4028]
                    dark:text-gray-300
                    dark:hover:text-[#FA4028]
                  "
                >
                  Privacy Policy
                </a>
                .
              </p>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  y: loading ? 0 : -1,
                }}
                whileTap={{
                  scale: loading ? 1 : 0.98,
                }}
                className="
                  group
                  flex
                  h-13
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[2px]
                  bg-[#2E2E2E]
                  font-poppins
                  text-[15px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#071044]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  dark:bg-[#FA4028]
                  dark:hover:bg-[#e93821]
                "
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 md:px-10 lg:px-12 lg:pb-24">
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            flex
            w-full
            max-w-[1298px]
            flex-col
            items-center
            justify-between
            gap-5
            bg-[#071044]
            px-6
            py-8
            text-center
            sm:flex-row
            sm:text-left
            sm:px-9
            lg:px-12
          "
        >
          <div>
            <h3
              className="
                font-playfair
                text-[24px]
                font-semibold
                text-white
                sm:text-[28px]
              "
            >
              Need a full demo?
            </h3>

            <p
              className="
                mt-1
                font-poppins
                text-[13px]
                text-white/70
                sm:text-[14px]
              "
            >
              See how Daily Compliance can support your business.
            </p>
          </div>

          <a
            href={ROUTES.DEMO}
            className="
              flex
              shrink-0
              items-center
              gap-2
              bg-white
              px-5
              py-3
              font-poppins
              text-[14px]
              text-[#071044]
              transition
              hover:bg-gray-100
            "
          >
            Request a Demo
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}