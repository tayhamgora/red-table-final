import Image from "next/image";

type LogoProps = {
  variant?: "ink" | "ivory";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "ink",
  className = "h-10 w-[6.4rem] sm:h-11 sm:w-[7rem]",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={variant === "ivory" ? "/logo-white.png" : "/logo.png"}
      alt="Red Table"
      width={487}
      height={378}
      priority={priority}
      className={`object-contain object-left ${className}`}
    />
  );
}
