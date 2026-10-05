"use client";

import { createPortal } from "react-dom";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "@/lib/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((value) =>
          value === null ? value : (value + 1) % gallery.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((value) =>
          value === null ? value : (value - 1 + gallery.length) % gallery.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {gallery.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className={`group relative overflow-hidden bg-ink ${
              item.span === "lg"
                ? "col-span-2 aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[28rem]"
                : "aspect-[4/3]"
            }`}
            
          >
            <Image
              src={item.type === "video" ? (item.poster ?? item.src) : item.src}
              alt={item.alt}
              fill
              sizes={
                item.span === "lg"
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-80" />
            <span className="absolute inset-x-0 bottom-0 p-3 text-left text-[11px] tracking-[0.16em] text-ivory uppercase sm:p-4">
              {item.caption}
              
            </span>
            {item.type === "video" ? (
                <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-ink">
                  ▶
                </span>
              ) : null}
          </button>
        ))}
      </div>

            {active !== null
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label={gallery[active].caption}
              onClick={() => setActive(null)}
            >
              <button
                type="button"
                className="absolute top-4 right-4 rounded-full border border-ivory/30 px-4 py-2 text-[11px] tracking-[0.2em] text-ivory/80 uppercase hover:text-ivory"
                onClick={() => setActive(null)}
              >
                Close
              </button>

              <div
                className="relative h-[72svh] w-full max-w-5xl"
                onClick={(event) => event.stopPropagation()}
              >
                {gallery[active].type === "video" ? (
                  <video
                    key={gallery[active].src}
                    src={gallery[active].src}
                    poster={gallery[active].poster}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={gallery[active].src}
                    alt={gallery[active].alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                )}
              </div>

              <p className="mt-4 text-center text-[12px] tracking-[0.18em] text-ivory/70 uppercase">
                {gallery[active].caption}
              </p>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
