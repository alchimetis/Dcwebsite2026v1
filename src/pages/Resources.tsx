import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, User, X } from "lucide-react";
import { toast } from "sonner";

import Header from "@/components/resources/Header";
import { downloadPdf } from "@/service/services";
import ResourcesOne from "@/assets/Resources/ResourcesOne.png";
import ResourcesTwo from "@/assets/Resources/ResourcesTwo.png";
import ResourcesThree from "@/assets/Resources/ResourcesThree.png";
import ResourcesFour from "@/assets/Resources/ResourcesFour.png";
import ResourcesFive from "@/assets/Resources/ResourcesFive.png";

import PdfOne from "@/assets/pdf/1.pdf";
import PdfTwo from "@/assets/pdf/2.pdf";
import PdfThree from "@/assets/pdf/3.pdf";
import PdfFour from "@/assets/pdf/4.pdf";
import PdfFive from "@/assets/pdf/5.pdf";



const data = [
  {
    id: 1,
    category: "White paper",
    subCategory: "ESG",
    title: "AI and ESG Data Capture Report",
    button: "Download",
    image: ResourcesOne,
    downloadLink: PdfOne,
    showImage: true,
  },
  {
    id: 2,
    category: "White paper",
    subCategory: "ESG",
    title: "Start Your ESG Journey with Confidence and Clarity.",
    button: "Download",
    image: ResourcesTwo,
    downloadLink: PdfTwo,
    showImage: true,
  },
  {
    id: 3,
    category: "White paper",
    subCategory: "ESG",
    title: "Robust Compliance and Enhanced Clarity",
    button: "Download",
    image: ResourcesThree,
    downloadLink: PdfThree,
    showImage: true,
  },
  {
    id: 4,
    category: "White paper",
    subCategory: "Whitepapers",
    title: "Smart Docs Templates",
    button: "Download",
    image: ResourcesFour,
    downloadLink: PdfFour,
    showImage: true,
  },
  {
    id: 5,
    category: "White paper",
    subCategory: "Whitepapers",
    title: "Advanced Compliance Resources",
    button: "Download",
    image: ResourcesFive,
    downloadLink: PdfFive,
    showImage: true,
  },
];

interface Resource {
  id: number;
  category: string;
  subCategory: string;
  title: string;
  button: string;
  image: string;
  downloadLink: string;
  showImage: boolean;
}

interface DownloadForm {
  name: string;
  email: string;
}
export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [downloadResource, setDownloadResource] = useState<Resource | null>(
    null,
  );

  const [form, setForm] = useState<DownloadForm>({
    name: "",
    email: "",
  });

  const [isDownloading, setIsDownloading] = useState(false);

const filteredResources = useMemo(() => {
  const resources = data as Resource[];

  if (activeCategory === "all") {
    return resources;
  }

  const selectedCategory = activeCategory.trim().toLowerCase();

  return resources.filter((item) => {
    const subCategory = item.subCategory?.trim().toLowerCase();

    return subCategory === selectedCategory;
  });
}, [activeCategory]);

  const openDownloadModal = (item: Resource) => {
    if (!item.downloadLink) {
      toast.error("Download is not available for this resource.");
      return;
    }

    setForm({
      name: "",
      email: "",
    });

    setDownloadResource(item);
  };

  const closeDownloadModal = () => {
    if (isDownloading) return;

    setDownloadResource(null);

    setForm({
      name: "",
      email: "",
    });
  };

  const handleDownload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!downloadResource) return;

    const name = form.name.trim();
    const email = form.email.trim();

    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setIsDownloading(true);

      await downloadPdf({
        name,
        email,
        pdfName: downloadResource.title,
      });

      toast.success("Download started successfully.");

      const link = document.createElement("a");
      link.href = downloadResource.downloadLink;
      link.download = "";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadResource(null);

      setForm({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Unable to process your download. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#fafafa] dark:bg-[#0d0d0d]">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-4
          py-10
          sm:px-6
          sm:py-14
          md:px-8
          lg:px-12
          lg:py-20
        "
      >
        {filteredResources.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:gap-7
              xl:grid-cols-3
            "
          >
            {filteredResources.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="
                  flex
                  w-full
                  min-w-0
                  flex-col
                  overflow-hidden
                  rounded-sm
                  bg-white
                  shadow-[0_5px_25px_rgba(0,0,0,0.03)]
                  dark:bg-[#171717]
                "
              >
                {item.showImage ? (
                  <div
                    className="
                      relative
                      h-[205px]
                      w-full
                      shrink-0
                      overflow-hidden
                      bg-[#f4f4f4]
                      sm:h-[215px]
                      md:h-[225px]
                      lg:h-[275px]
                    "
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      initial={{
                        opacity: 0,
                        scale: 1.03,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="
                      flex
                      h-[205px]
                      w-full
                      shrink-0
                      items-center
                      justify-center
                      bg-[#f4f4f4]
                      sm:h-[215px]
                      md:h-[225px]
                      lg:h-[275px]
                      dark:bg-[#202020]
                    "
                  >
                    <span
                      className="
                        font-playfair
                        text-2xl
                        font-semibold
                        text-[#071044]/20
                        dark:text-white/20
                      "
                    >
                      Resources
                    </span>
                  </div>
                )}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                    md:p-6
                    lg:p-7
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="
      w-fit
      rounded-md
      bg-[#EBF7FF]
      px-3
      py-1.5
      font-poppins
      text-xs
      font-normal
      text-[#2787F5]
      dark:bg-[#EBF7FF]
      dark:text-[#2787F5]
    "
                    >
                      {item.category}
                    </span>

                    {item.subCategory === "ESG" && (
                      <span
                        className="
        w-fit
        rounded-md
        bg-[#DEF2E5]
        px-3
        py-1.5
        font-poppins
        text-xs
        font-normal
        text-[#329352]
        dark:bg-[#DEF2E5]
        dark:text-[#329352]
      "
                      >
                        {item.subCategory}
                      </span>
                    )}
                  </div>

                  <h3
                    className="
                      mt-5
                      font-playfair
                      text-[22px]
                      font-semibold
                      leading-[1.18]
                      text-[#071044]
                      dark:text-white
                      sm:text-[24px]
                      md:text-[25px]
                      lg:text-[27px]
                    "
                  >
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-7">
                    <motion.button
                      type="button"
                      onClick={() => openDownloadModal(item)}
                      whileTap={{ scale: 0.97 }}
                      className="
                        flex
                        h-[48px]
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-md
                        border
                        border-[#2E2E2E]
                        bg-white
                        px-6
                        font-poppins
                        text-sm
                        font-normal
                        text-[#2E2E2E]
                        transition-all
                        duration-300
                        hover:border-[#071044]
                        hover:bg-[#071044]
                        hover:text-white
                        dark:border-white/60
                        dark:bg-transparent
                        dark:text-white
                        dark:hover:border-[#FA4028]
                        dark:hover:bg-[#FA4028]
                      "
                    >
                      <Download size={17} strokeWidth={1.7} />
                      Download
                    </motion.button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              px-5
              text-center
            "
          >
            <div>
              <h2
                className="
                  font-playfair
                  text-3xl
                  font-semibold
                  text-[#071044]
                  dark:text-white
                "
              >
                No resources found
              </h2>

              <p
                className="
                  mt-3
                  font-poppins
                  text-base
                  text-[#666]
                  dark:text-gray-400
                "
              >
                Try selecting another category or format.
              </p>
            </div>
          </div>
        )}
      </section>

      {downloadResource && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/70
            px-4
            py-6
            backdrop-blur-md
          "
          onClick={closeDownloadModal}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              w-full
              max-w-[530px]
              rounded-2xl
              bg-[#171717]
              p-7
              shadow-2xl
              sm:p-9
            "
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeDownloadModal}
              disabled={isDownloading}
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-gray-300
                transition
                hover:bg-white/10
                hover:text-white
                disabled:cursor-not-allowed
              "
              aria-label="Close"
            >
              <X size={21} />
            </button>

            <div
              className="
                flex
                h-[52px]
                w-[52px]
                items-center
                justify-center
                rounded-xl
                bg-[#10283d]
                text-[#68b5ff]
              "
            >
              <Download size={25} strokeWidth={1.7} />
            </div>

            <h2
              className="
                mt-6
                font-playfair
                text-[32px]
                font-semibold
                leading-tight
                text-white
              "
            >
              Download Resource
            </h2>

            <p
              className="
                mt-2
                font-poppins
                text-sm
                text-gray-400
              "
            >
              Enter your details to download:
            </p>

            <p
              className="
                mt-2
                font-poppins
                text-sm
                font-semibold
                leading-6
                text-white
              "
            >
              {downloadResource.title}
            </p>

            <form onSubmit={handleDownload} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="download-name"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    id="download-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(event) =>
                      setForm((previous) => ({
                        ...previous,
                        name: event.target.value,
                      }))
                    }
                    placeholder="Enter your name"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="words"
                    spellCheck={false}
                    disabled={isDownloading}
                    className="
                      h-[51px]
                      w-full
                      rounded-lg
                      border
                      border-[#444]
                      bg-[#222]
                      pl-11
                      pr-4
                      font-poppins
                      text-[15px]
                      text-white
                      outline-none
                      placeholder:text-gray-500
                      focus:border-[#FA4028]
                      disabled:opacity-60
                    "
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="download-email"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    id="download-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((previous) => ({
                        ...previous,
                        email: event.target.value,
                      }))
                    }
                    placeholder="Enter your email"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    disabled={isDownloading}
                    className="
                      h-[51px]
                      w-full
                      rounded-lg
                      border
                      border-[#444]
                      bg-[#222]
                      pl-11
                      pr-4
                      font-poppins
                      text-[15px]
                      text-white
                      outline-none
                      placeholder:text-gray-500
                      focus:border-[#FA4028]
                      disabled:opacity-60
                    "
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isDownloading}
                whileTap={{ scale: 0.98 }}
                className="
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#A92B22]
                  font-poppins
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#FA4028]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <Download
                  size={18}
                  className={isDownloading ? "animate-bounce" : ""}
                />

                {isDownloading ? "Processing..." : "Download PDF"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
}
