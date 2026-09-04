interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "ESG",
    value: "esg",
  },
  {
    label: "Whitepapers",
    value: "white paper",
  },
  {
    label: "Newsletters",
    value: "newsletters",
  },
];

export default function Header({
  activeCategory,
  onCategoryChange,
}: HeaderProps) {
  return (
    <header className="w-full bg-[#e7f6ea] dark:bg-[#0d0d0d]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-4
          py-7
          sm:px-6
          sm:py-8
          md:px-8
          lg:px-12
          lg:py-9
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            gap-2
            overflow-x-auto
            whitespace-nowrap
            pb-1
            font-poppins
            text-[13px]
            text-[#777]
            scrollbar-hide
            sm:gap-3
            sm:text-[14px]
          "
        >
          <span className="shrink-0">Daily Compliance</span>

          <span className="text-[#999] dark:text-gray-600">
            ›
          </span>

          <span className="shrink-0">Resources</span>

          <span className="text-[#999] dark:text-gray-600">
            ›
          </span>

          <span className="shrink-0 text-[#222] dark:text-gray-200">
            Ebooks
          </span>
        </div>

        <h1
          className="
            mt-6
            font-playfair
            text-[36px]
            font-semibold
            leading-[1.08]
            tracking-tight
            text-[#071044]
            dark:text-white
            sm:mt-8
            sm:text-[44px]
            md:text-[48px]
            lg:mt-9
            lg:text-[52px]
          "
        >
          Resources Center
        </h1>

        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            gap-7
            sm:mt-9
            md:gap-8
            lg:mt-11
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
          "
        >
          <nav
            aria-label="Resource categories"
            className="
              -mx-1
              flex
              w-[calc(100%+8px)]
              items-center
              gap-1
              overflow-x-auto
              px-1
              pb-1
              scrollbar-hide
              sm:gap-2
              lg:w-auto
              lg:gap-4
            "
          >
            {categories.map((category) => {
              const isActive =
                activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() =>
                    onCategoryChange(category.value)
                  }
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`
                    flex
                    min-h-[46px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[3px]
                    px-5
                    font-poppins
                    text-[14px]
                    font-normal
                    transition-all
                    duration-200
                    active:scale-[0.98]
                    sm:min-h-[48px]
                    sm:px-6
                    sm:text-[15px]
                    md:px-7
                    md:text-[16px]
                    lg:min-w-[99px]
                    ${
                      isActive
                        ? "bg-[#303030] text-white dark:bg-[#fa4028]"
                        : "text-[#333] hover:text-[#fa4028] dark:text-gray-300 dark:hover:text-[#fa4028]"
                    }
                  `}
                >
                  {category.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}