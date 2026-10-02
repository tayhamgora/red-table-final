import { WhatsAppLink } from "@/components/whatsapp-link";

export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      className="whatsapp-pulse fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#2f6b4f] text-white shadow-[0_16px_40px_-16px_rgba(28,27,24,0.7)] transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
      iconClassName="h-7 w-7"
    >
      <span className="sr-only">Chat with Red Table on WhatsApp</span>
    </WhatsAppLink>
  );
}
