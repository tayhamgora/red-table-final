export function FaqList({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-6">
          <summary className="cursor-pointer list-none font-display text-xl text-ink marker:content-none">
            <span className="flex items-start justify-between gap-6">
              {item.q}
              <span className="text-stone transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
