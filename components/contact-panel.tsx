import { InquiryForm } from "@/components/inquiry-form";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { site } from "@/lib/site";

export function ContactPanel() {
  return (
    <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
      <div className="lg:col-span-5">
        <p className="section-kicker">Direct Inquiry</p>
        <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
          Let&apos;s discuss your event.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-stone">
          Tell us about your expected date, venue, and guest count. We&apos;ll
          follow up directly with a customized menu concept and schedule.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <p className="text-[11px] tracking-[0.18em] text-stone uppercase">
              WhatsApp & Call
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex items-center gap-3 text-lg text-ink"
            >
              <PhoneIcon className="h-5 w-5 text-bronze" />
              {site.phoneDisplay}
            </a>
            <WhatsAppLink className="mt-2 flex items-center gap-2 text-sm text-bronze hover:text-ink">
              Message on WhatsApp →
            </WhatsAppLink>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-stone uppercase">
              Email
            </p>
            <a
              href={site.emailHref}
              className="mt-2 inline-flex items-center gap-3 text-ink"
            >
              <MailIcon className="h-5 w-5 text-bronze" />
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-stone uppercase">
              Address
            </p>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-start gap-3 text-ink"
            >
              <PinIcon className="mt-0.5 h-5 w-5 text-bronze" />
              {site.address}
            </a>
          </div>
        </div>
      </div>

      <div className="border border-line bg-cream p-6 sm:p-8 lg:col-span-7">
        <InquiryForm />
      </div>
    </div>
  );
}
