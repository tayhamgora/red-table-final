"use client";

import { FormEvent, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { eventTypes, site, whatsappLink } from "@/lib/site";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [guests, setGuests] = useState("");
  const [details, setDetails] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      "New event inquiry from the Red Table website",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Event Type: ${eventType}`,
      `Approx. Guest Count: ${guests || "Not specified"}`,
      `Event Details & Dates: ${details || "Not specified"}`,
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-2">
        <span className="text-[11px] tracking-[0.18em] text-stone uppercase">
          Name
        </span>
        <input
          required
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="field"
          placeholder="Your full name"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-[11px] tracking-[0.18em] text-stone uppercase">
          Phone / WhatsApp
        </span>
        <input
          required
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="field"
          placeholder="+92 3XX XXXXXXX"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[11px] tracking-[0.18em] text-stone uppercase">
            Event Type
          </span>
          <select
            name="eventType"
            value={eventType}
            onChange={(event) => setEventType(event.target.value as typeof eventType)}
            className="field appearance-none"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-[11px] tracking-[0.18em] text-stone uppercase">
            Approx. Guest Count
          </span>
          <input
            name="guests"
            inputMode="numeric"
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            className="field"
            placeholder="e.g. 250"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-[11px] tracking-[0.18em] text-stone uppercase">
          Event Details & Dates
        </span>
        <textarea
          name="details"
          rows={5}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          className="field resize-y"
          placeholder="Tell us about your expected date, venue, and any menu notes."
        />
      </label>

      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-[12px] tracking-[0.18em] text-cream uppercase transition-colors hover:bg-charcoal"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Submit Inquiry & Chat on WhatsApp
      </button>
      <p className="text-xs leading-6 text-stone">
        Your inquiry opens WhatsApp to {site.phoneDisplay} so we can follow up
        directly.
      </p>
    </form>
  );
}
