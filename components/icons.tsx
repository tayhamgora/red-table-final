type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M17.47 14.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.08-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.21 1.3.18 1.79.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33ZM12.04 21.8h-.01a9.8 9.8 0 0 1-5-.14l-.36-.12-3.72.98 1-3.63-.24-.37a9.8 9.8 0 0 1-1.5-5.23 9.83 9.83 0 0 1 9.84-9.8c2.63 0 5.1 1.02 6.96 2.88a9.76 9.76 0 0 1 2.87 6.95 9.83 9.83 0 0 1-9.84 9.8Zm8.37-18.16A11.76 11.76 0 0 0 12.03 0C5.43 0 .07 5.35.07 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.6 0 11.96-5.36 11.96-11.95 0-3.19-1.24-6.19-3.5-8.44Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.75c0-.97.78-1.75 1.75-1.75h2.1c.74 0 1.4.46 1.65 1.16l.86 2.4a1.75 1.75 0 0 1-.4 1.82l-1.12 1.12a12.3 12.3 0 0 0 5.36 5.36l1.12-1.12a1.75 1.75 0 0 1 1.82-.4l2.4.86c.7.25 1.16.91 1.16 1.65v2.1c0 .97-.78 1.75-1.75 1.75C9.7 20.5 3.5 14.3 3.5 6.75c0-.55.08-.8.25-1Z"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.75h16A1.25 1.25 0 0 1 21.25 8v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 7.5 8 6 8-6"
      />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21Z"
      />
      <circle cx="12" cy="10.5" r="2.1" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M14.8 8.4h2.4V5.1h-2.4c-2.6 0-4.3 1.6-4.3 4.3v1.8H8.4v3.3h2.1V22h3.5v-7.5h2.6l.5-3.3h-3.1V9.8c0-.9.3-1.4 1.3-1.4Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
