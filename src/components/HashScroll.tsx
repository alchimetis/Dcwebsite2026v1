import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const id = hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return true;
      }

      return false;
    };

    const timer = window.setTimeout(() => {
      if (!scrollToElement()) {
        window.setTimeout(scrollToElement, 300);
      }
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}