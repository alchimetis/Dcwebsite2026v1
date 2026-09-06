import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Download,
  Mail,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ResourcesOne from "@/assets/Resources/ResourcesOne.png";
import ResourcesTwo from "@/assets/Resources/ResourcesTwo.png";
import ResourcesThree from "@/assets/Resources/ResourcesThree.png";
import ResourcesFour from "@/assets/Resources/ResourcesFour.png";
import ResourcesFive from "@/assets/Resources/ResourcesFive.png";
import resourceData from "@/components/resources/data.json";
import { ROUTES } from "@/router/routes";
import { downloadPdf } from "@/service/services";
import { toast } from "sonner";

type ResourceItem = {
  id: number;
  category: string;
  title: string;
  button: string;
  image: string;
  downloadLink: string;
  showImage: boolean;
};

const resourceImages: Record<string, string> = {
  "@/assets/Resources/ResourcesOne.png": ResourcesOne,
  "@/assets/Resources/ResourcesTwo.png": ResourcesTwo,
  "@/assets/Resources/ResourcesThree.png": ResourcesThree,
  "@/assets/Resources/ResourcesFour.png": ResourcesFour,
  "@/assets/Resources/ResourcesFive.png": ResourcesFive,
};

const resources: ResourceItem[] = resourceData.map((resource) => ({
  ...resource,
  image: resourceImages[resource.image] ?? resource.image,
}));

const carouselResources = [
  ...resources,
  ...resources,
  ...resources,
  ...resources,
  ...resources,
];

const COPY_LENGTH = resources.length;

export default function ExpertResources() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(COPY_LENGTH * 2);
  const [cardWidth, setCardWidth] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [downloadResource, setDownloadResource] =
    useState<ResourceItem | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  const updateCardWidth = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.children[0] as HTMLElement | undefined;

    if (!firstCard) {
      return;
    }

    setCardWidth(firstCard.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    updateCardWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateCardWidth();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", updateCardWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCardWidth);
    };
  }, [updateCardWidth]);

  const nextResource = () => {
    if (!isResetting) {
      setCurrentIndex((previous) => previous + 1);
    }
  };

  const previousResource = () => {
    if (!isResetting) {
      setCurrentIndex((previous) => previous - 1);
    }
  };

  useEffect(() => {
    if (currentIndex >= COPY_LENGTH * 3 || currentIndex <= COPY_LENGTH) {
      setIsResetting(true);

      const timeout = window.setTimeout(() => {
        setCurrentIndex(COPY_LENGTH * 2);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsResetting(false);
          });
        });
      }, 700);

      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [currentIndex]);

  const openDownloadModal = (resource: ResourceItem) => {
    if (!resource.downloadLink) {
      toast.error("Download file is not available.");
      return;
    }

    setDownloadResource(resource);
    setName("");
    setEmail("");
  };

  const closeDownloadModal = () => {
    if (isDownloading) {
      return;
    }

    setDownloadResource(null);
    setName("");
    setEmail("");
  };

  const handleDownload = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!downloadResource) {
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      toast.error("Please enter your name.");
      return;
    }

    if (!trimmedEmail) {
      toast.error("Please enter your email.");
      return;
    }

    setIsDownloading(true);

    try {
      await downloadPdf({
        name: trimmedName,
        email: trimmedEmail,
        pdfName: downloadResource.title,
      });

      const link = document.createElement("a");
      link.href = downloadResource.downloadLink;
      link.download =
        downloadResource.downloadLink.split("/").pop() ||
        `${downloadResource.title}.pdf`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.success("Your PDF download has started.");

      setDownloadResource(null);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("PDF download failed:", error);
      toast.error("Unable to download the PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDownloadModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDownloading]);

  const translateX = -(currentIndex * cardWidth);

  return (
    <>
      <section className="w-full overflow-hidden bg-[#EAF8EF] dark:bg-[#0D0D0D]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-playfair text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#071044] dark:text-white sm:text-5xl md:text-[48px] lg:text-[56px]"
            >
              Unlock Expert Resources
            </motion.h2>

            <div className="flex shrink-0 items-center gap-3">
              <motion.button
                type="button"
                onClick={previousResource}
                disabled={isResetting}
                whileTap={{ scale: 0.92 }}
                aria-label="Previous resource"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-[#071044] transition-all duration-300 hover:bg-[#071044] hover:text-white disabled:pointer-events-none dark:border-white/15 dark:bg-[#151515] dark:text-white dark:hover:bg-[#FA4028] sm:h-12 sm:w-12"
              >
                <ArrowLeft size={22} strokeWidth={1.6} />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextResource}
                disabled={isResetting}
                whileTap={{ scale: 0.92 }}
                aria-label="Next resource"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white text-[#071044] transition-all duration-300 hover:bg-[#071044] hover:text-white disabled:pointer-events-none dark:border-white/15 dark:bg-[#151515] dark:text-white dark:hover:bg-[#FA4028] sm:h-12 sm:w-12"
              >
                <ArrowRight size={22} strokeWidth={1.6} />
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-10 w-full overflow-hidden sm:mt-12 lg:mt-16"
          >
            <motion.div
              ref={trackRef}
              className="flex items-stretch will-change-transform"
              animate={{ x: translateX }}
              transition={
                isResetting
                  ? { duration: 0 }
                  : {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
            >
              {carouselResources.map((item, index) => (
                <article
                  key={`${item.id}-${index}`}
                  className="flex w-full shrink-0 px-2 sm:w-1/2 sm:px-2.5 lg:w-1/3 lg:px-3"
                >
                  <div className="flex min-h-[430px] w-full flex-col overflow-hidden rounded-sm bg-white shadow-[0_5px_25px_rgba(0,0,0,0.03)] dark:bg-[#171717]">
                    {item.showImage ? (
                      <div className="relative h-[205px] w-full shrink-0 overflow-hidden bg-[#f4f4f4] sm:h-[215px] md:h-[225px] lg:h-[275px]">
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
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-[205px] w-full shrink-0 bg-[#f4f4f4] sm:h-[215px] md:h-[225px] lg:h-[275px] dark:bg-[#202020]" />
                    )}

                    <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-6 lg:p-7">
                      <span className="w-fit rounded-md bg-[#EFF8FF] px-3 py-1.5 font-poppins text-xs font-normal text-[#2787F5] dark:bg-[#162638] dark:text-[#72B5FF]">
                        {item.category}
                      </span>

                      <h3 className="mt-5 font-playfair text-[22px] font-semibold leading-[1.18] text-[#071044] dark:text-white sm:text-[24px] md:text-[25px] lg:text-[27px]">
                        {item.title}
                      </h3>

                      <div className="mt-auto pt-7">
                        <motion.button
                          type="button"
                          onClick={() => {
                            if (item.button === "Download") {
                              openDownloadModal(item);
                            }
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="w-full rounded-md border border-[#2E2E2E] bg-white px-6 py-3 font-poppins text-sm font-normal text-[#2E2E2E] transition-all duration-300 hover:bg-[#2E2E2E] hover:text-white dark:border-white/60 dark:bg-transparent dark:text-white dark:hover:border-[#FA4028] dark:hover:bg-[#FA4028] sm:w-45"
                        >
                          {item.button}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-6 bg-linear-to-r from-[#EAF8EF] to-transparent sm:w-10 md:w-14 lg:w-20 dark:from-[#0D0D0D]" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-6 bg-linear-to-l from-[#EAF8EF] to-transparent sm:w-10 md:w-14 lg:w-20 dark:from-[#0D0D0D]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex justify-center sm:mt-12 lg:mt-14"
          >
            <motion.button
              type="button"
              onClick={() => navigate(ROUTES.RESOURCES)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-md bg-[#2E2E2E] px-7 py-3 font-poppins text-sm font-medium text-white transition-all duration-300 hover:bg-[#071044] dark:bg-[#FA4028] dark:hover:bg-[#e63822]"
            >
              See all our Resources
            </motion.button>
          </motion.div>
        </div>
      </section>

      {downloadResource && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeDownloadModal();
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-[480px] overflow-hidden rounded-xl bg-white p-6 shadow-2xl dark:bg-[#181818] sm:p-8"
          >
            <button
              type="button"
              onClick={closeDownloadModal}
              disabled={isDownloading}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#555] transition hover:bg-black/5 hover:text-black disabled:opacity-50 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="pr-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#2787F5] dark:bg-[#162638] dark:text-[#72B5FF]">
                <Download size={23} />
              </div>

              <h2 className="font-playfair text-2xl font-semibold leading-tight text-[#071044] dark:text-white sm:text-3xl">
                Download Resource
              </h2>

              <p className="mt-2 font-poppins text-sm leading-relaxed text-[#666] dark:text-gray-400">
                Enter your details to download:
              </p>

              <p className="mt-1 font-poppins text-sm font-medium text-[#071044] dark:text-white">
                {downloadResource.title}
              </p>
            </div>

            <form
              onSubmit={handleDownload}
              className="mt-7 space-y-5"
            >
              <div>
                <label
                  htmlFor="resource-name"
                  className="mb-2 block font-poppins text-sm font-medium text-[#071044] dark:text-white"
                >
                  Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="resource-name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    disabled={isDownloading}
                    className="w-full rounded-md border border-[#d9d9d9] bg-white py-3 pl-10 pr-4 font-poppins text-sm text-[#222] outline-none transition placeholder:text-gray-400 focus:border-[#2787F5] focus:ring-2 focus:ring-[#2787F5]/10 disabled:opacity-60 dark:border-white/15 dark:bg-[#222] dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="resource-email"
                  className="mb-2 block font-poppins text-sm font-medium text-[#071044] dark:text-white"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="resource-email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    disabled={isDownloading}
                    className="w-full rounded-md border border-[#d9d9d9] bg-white py-3 pl-10 pr-4 font-poppins text-sm text-[#222] outline-none transition placeholder:text-gray-400 focus:border-[#2787F5] focus:ring-2 focus:ring-[#2787F5]/10 disabled:opacity-60 dark:border-white/15 dark:bg-[#222] dark:text-white"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={
                  isDownloading ||
                  !name.trim() ||
                  !email.trim()
                }
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#2E2E2E] px-6 py-3.5 font-poppins text-sm font-medium text-white transition-all duration-300 hover:bg-[#071044] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#FA4028] dark:hover:bg-[#e63822]"
              >
                {isDownloading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Starting Download...
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    Download PDF
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}