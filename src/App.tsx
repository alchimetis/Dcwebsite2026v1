import AllRouter from "@/router/AllRouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import whatsapp from "@/assets/whatsapp.svg";
import { Toaster } from "sonner";

export default function App() {
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;

  const handleWhatsAppClick = () => {
    if (!whatsappUrl) {
      console.error("VITE_WHATSAPP_URL is not configured");
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <AllRouter />

      <Footer />

      <Toaster position="top-right" richColors />
      <button
        type="button"
        onClick={handleWhatsAppClick}
        aria-label="Chat with us on WhatsApp"
        className="
          fixed
       bottom-14 
       sm:bottom-22
          right-5
          z-9999
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white
          p-2.5
          shadow-[0_4px_18px_rgba(0,0,0,0.20)]
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_6px_24px_rgba(0,0,0,0.28)]
          active:scale-95
          sm:bottom-6
          sm:right-6
          sm:h-14
          sm:w-14
          sm:p-3
          md:bottom-15
          md:right-7
        "
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          draggable={false}
          className="h-full w-full object-contain"
        />
      </button>
    </div>
  );
}
