import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

type WhatsAppLinkProps = {
  href?: string;
  message?: string;
  className?: string;
  iconClassName?: string;
  children?: React.ReactNode;
  hideIcon?: boolean;
};

export function WhatsAppLink({
  href,
  message,
  className,
  iconClassName = "h-4 w-4",
  children,
  hideIcon = false,
}: WhatsAppLinkProps) {
  return (
    <a
      href={href ?? whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {hideIcon ? null : <WhatsAppIcon className={iconClassName} />}
      {children}
    </a>
  );
}
