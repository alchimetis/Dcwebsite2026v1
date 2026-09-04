import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      className="
        inline-flex
        h-9
        w-9
        items-center
        justify-center
        rounded-md
        border
        bg-background
        text-foreground
        transition
        hover:bg-black/5
        dark:hover:bg-white/10
      "
    >
      {theme === "light" ? (
        <Moon size={17} />
      ) : (
        <Sun size={17} />
      )}
    </button>
  );
}