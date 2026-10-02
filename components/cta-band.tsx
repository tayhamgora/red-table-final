import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { routes } from "@/lib/site";

export function CtaBand({
  title = "Ready to plan catering in Lahore?",
  copy = "Tell us your date, venue, and guest count. We'll reply with a menu idea and a plan for the day.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-ivory/70">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={routes.contact}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ivory px-6 text-[12px] tracking-[0.14em] text-ink uppercase"
          >
            Request a Proposal
          </Link>
          <WhatsAppLink className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-[12px] tracking-[0.14em] text-ivory uppercase">
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
