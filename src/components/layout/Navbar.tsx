import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/theme/ThemeProvider";
import { ROUTES } from "@/router/routes";
import logo from "@/assets/logo.svg";
import ecofocus from "@/assets/ecofocus.svg";

const navItems = [
  {
    label: "About",
    href: ROUTES.ABOUT,
  },
  {
    label: "Resources",
    href: ROUTES.RESOURCES,
  },
  {
    label: "Services",
    href: `${ROUTES.HOME}#service`,
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isDark = theme === "dark";
  const getServicePath = () => {
    return `${location.pathname}#service`;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        sticky
        top-0
        z-50
        w-full
        bg-white
        text-[#171717]
        transition-colors
        duration-300
        dark:bg-[#0d0d0d]
        dark:text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[62px]
          w-full
          items-center
          justify-between
          px-5
          sm:px-7
          md:px-9
          lg:px-12
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <Link
            to={ROUTES.HOME}
            onClick={() => setMobileOpen(false)}
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="TheDailyCompliance"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>
        </motion.div>

        <nav className="ml-8 hidden items-center gap-9 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.05,
              }}
            >
              {item.href === ROUTES.SERVICE ? (
                <Link
                  to={getServicePath()}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    text-[15px]
                    font-normal
                    transition-colors
                    duration-200
                    ${isDark ? "text-white" : "text-[#171717]"}
                  `}
                >
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `
                      text-[15px]
                      font-normal
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? ""
                          : isDark
                            ? "text-white"
                            : "text-[#171717]"
                      }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </motion.div>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            className="
              flex
              h-[44px]
              w-11
              items-center
              justify-center
              rounded-md
              bg-transparent
              text-[#171717]
              dark:text-white
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center justify-center"
                >
                  <Sun size={27} strokeWidth={1.8} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center justify-center"
                >
                  <Moon size={27} strokeWidth={1.8} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <Link
            to={ROUTES.ESG}
            className="
              flex
              h-[44px]
              min-w-[145px]
              items-center
              justify-center
              gap-2.5
              rounded-[3px]
              bg-[#2d2d2d]
              px-6
              text-[15px]
              font-normal
              text-white
              dark:bg-[#ed2935]
            "
          >
            <span>ESG</span>

            <img
              src={ecofocus}
              alt=""
              className="h-5.25 w-auto object-contain"
            />
          </Link>
        </div>

        <motion.button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          className="
            ml-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-md
            md:hidden
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{ duration: 0.25 }}
              >
                <X size={25} strokeWidth={1.8} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{ duration: 0.25 }}
              >
                <Menu size={25} strokeWidth={1.8} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              bg-white
              dark:bg-[#0d0d0d]
              md:hidden
            "
          >
            <nav className="flex flex-col px-6 pb-6 pt-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                >
                  {item.href === ROUTES.SERVICE ? (
                    <Link
                      to={getServicePath()}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        block
                        py-4
                        text-[16px]
                        font-normal
                        ${isDark ? "text-white" : "text-[#171717]"}
                      `}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `
                          block
                          py-4
                          text-[16px]
                          font-normal
                          ${
                            isActive
                              ? ""
                              : isDark
                                ? "text-white"
                                : "text-[#171717]"
                          }
                        `
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
                className="
                  mt-4
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  text-[16px]
                  font-medium
                  text-[#171717]
                  dark:text-white
                "
              >
                {isDark ? (
                  <Sun size={20} strokeWidth={1.8} />
                ) : (
                  <Moon size={20} strokeWidth={1.8} />
                )}

                <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
              </motion.button>

              <Link
                to={ROUTES.ESG}
                onClick={() => setMobileOpen(false)}
                className="
                  mt-4
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2.5
                  rounded-md
                  bg-[#2d2d2d]
                  text-[16px]
                  font-normal
                  text-white
                  dark:bg-[#ed2935]
                "
              >
                <span>ESG</span>

                <img
                  src={ecofocus}
                  alt=""
                  className="h-[20px] w-auto object-contain"
                />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}