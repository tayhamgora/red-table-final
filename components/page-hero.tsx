import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHero({
  kicker,
  title,
  lede,
  crumbs,
  imageSrc,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lede: string;
  crumbs: Crumb[];
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink text-ivory">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
        </>
      ) : null}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-14 sm:px-6 sm:pt-36 lg:px-10 lg:pb-16">
        <nav aria-label="Breadcrumb" className="text-[12px] text-ivory/65">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-ivory">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ivory">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-8 text-[11px] tracking-[0.28em] text-bronze-soft uppercase">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.1] font-medium tracking-tight text-ivory sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-ivory/75">{lede}</p>
      </div>
    </section>
  );
}
