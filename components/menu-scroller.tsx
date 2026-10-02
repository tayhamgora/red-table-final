"use client";

import { useRef } from "react";
import { menus } from "@/lib/site";

export function MenuScroller() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-menu-card]");
    const amount = (card?.offsetWidth ?? 320) + 20;
    node.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div className="mb-6 flex items-end justify-between gap-4">
        <p className="text-[12px] tracking-[0.16em] text-stone uppercase">
          Swipe / Scroll for more
        </p>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
            aria-label="Previous menu packages"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
            aria-label="Next menu packages"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10"
      >
        {menus.map((menu) => (
          <article
            key={menu.number}
            data-menu-card
            className="w-[min(86vw,22.5rem)] shrink-0 snap-start border border-line bg-cream p-6 sm:w-[23rem] sm:p-8"
          >
            <p className="text-[11px] tracking-[0.22em] text-bronze uppercase">
              Package {menu.number}
            </p>
            <h3 className="mt-3 font-display text-3xl text-ink">{menu.name}</h3>
            <div className="mt-8 space-y-6">
              {menu.courses.map((course) => (
                <div key={course.label}>
                  <p className="text-[11px] tracking-[0.18em] text-stone uppercase">
                    {course.label}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-6 text-ink/80">
                    {course.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
