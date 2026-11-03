import { useEffect, useMemo, useRef, useState } from "react";
import { MENU, itemCount, type MenuItem, type MenuKind, type MenuSection } from "@/data/menu";
import { Search, UtensilsCrossed, Wine, X } from "lucide-react";

const WIDE_PRICE = 22;

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function sectionQuery(section: MenuSection, query: string): MenuSection | null {
  if (!query) return section;
  const q = normalize(query);
  if (normalize(`${section.title} ${section.eyebrow}`).includes(q)) return section;
  const groups = section.groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        normalize(`${item.name} ${item.detail ?? ""} ${item.price} ${group.title ?? ""}`).includes(q),
      ),
    }))
    .filter((group) => group.items.length > 0);
  if (!groups.length) return null;
  return { ...section, groups };
}

function ItemRow({ item }: { item: MenuItem }) {
  const wide = item.price.length > WIDE_PRICE;
  return (
    <div className={wide ? "py-3.5" : "flex items-start justify-between gap-4 py-3.5"}>
      <div className="min-w-0">
        <p className="text-base font-medium leading-snug text-cream">{item.name}</p>
        {item.detail ? (
          <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
        ) : null}
        {wide ? <p className="mt-2 text-sm font-medium tabular-nums text-gold">{item.price}</p> : null}
      </div>
      {wide ? null : (
        <p className="shrink-0 pt-0.5 text-sm font-medium tabular-nums text-gold">{item.price}</p>
      )}
    </div>
  );
}

function SectionBlock({ section }: { section: MenuSection }) {
  return (
    <section id={section.id} className="scroll-mt-52 lg:scroll-mt-40">
      <header className="mb-2 border-b border-line pb-3">
        <p className="text-xs font-medium tracking-widest text-gold uppercase">{section.eyebrow}</p>
        <h2 className="font-display text-3xl leading-tight text-cream">{section.title}</h2>
      </header>
      {section.note ? (
        <p className="mt-3 border-l-2 border-gold-dim pl-3 text-sm leading-relaxed text-muted">
          {section.note}
        </p>
      ) : null}
      <div className="mt-2">
        {section.groups.map((group) => (
          <div key={group.title ?? section.id} className="mt-4">
            {group.title ? (
              <h3 className="text-xs font-semibold tracking-widest text-gold uppercase">{group.title}</h3>
            ) : null}
            {group.note ? <p className="mt-1 text-sm text-muted">{group.note}</p> : null}
            <ul className={section.dense ? "md:columns-2 md:gap-x-12" : undefined}>
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={
                    item.featured
                      ? "my-2 break-inside-avoid rounded-xl border border-gold/40 bg-raised px-3"
                      : "break-inside-avoid border-b border-line"
                  }
                >
                  <ItemRow item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function NavList({
  sections,
  activeId,
  onJump,
}: {
  sections: MenuSection[];
  activeId: string;
  onJump: (id: string) => void;
}) {
  return (
    <ul className="space-y-1">
      {sections.map((section) => {
        const active = section.id === activeId;
        return (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => onJump(section.id)}
              className={
                "flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-3 text-left text-sm transition-colors " +
                (active ? "bg-raised text-cream" : "text-muted hover:bg-surface hover:text-cream")
              }
              aria-current={active ? "true" : undefined}
            >
              <span className="font-medium">{section.title}</span>
              <span className="tabular-nums text-xs text-gold">{itemCount(section)}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function MenuBoard() {
  const [kind, setKind] = useState<MenuKind>("food");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(MENU[0].id);
  const chipRow = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const q = query.trim();

  const visible = useMemo(
    () =>
      MENU.map((section) => (section.kind === kind ? sectionQuery(section, q) : null)).filter(
        (section): section is MenuSection => section !== null,
      ),
    [kind, q],
  );

  const otherMatches = useMemo(() => {
    if (!q) return 0;
    const other: MenuKind = kind === "food" ? "drinks" : "food";
    return MENU.reduce((sum, section) => {
      if (section.kind !== other) return sum;
      const hit = sectionQuery(section, q);
      return sum + (hit ? itemCount(hit) : 0);
    }, 0);
  }, [kind, q]);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const section = MENU.find((entry) => entry.id === id);
    if (!section) return;
    setKind(section.kind);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    }, 60);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const nodes = visible
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    const row = chipRow.current;
    const chip = row?.querySelector<HTMLElement>(`[data-chip="${activeId}"]`);
    if (!row || !chip) return;
    const left = chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2;
    row.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [activeId, kind]);

  function switchKind(next: MenuKind) {
    setKind(next);
    setOpen(false);
    const first = MENU.find((section) => section.kind === next);
    if (first) setActiveId(first.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function jump(id: string) {
    const section = MENU.find((entry) => entry.id === id);
    setOpen(false);
    setQuery("");
    if (section && section.kind !== kind) setKind(section.kind);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }, 40);
  }

  const navSections = MENU.filter((section) => section.kind === kind);
  const matchCount = visible.reduce((sum, section) => sum + itemCount(section), 0);

  return (
    <div className="min-h-screen bg-bg text-cream">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-3 sm:px-5">
          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-full text-cream lg:hidden"
            aria-label="Open menu sections"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-px w-5 bg-cream" />
              <span className="block h-px w-5 bg-cream" />
              <span className="block h-px w-3 bg-gold" />
            </span>
          </button>
          <img
            src="/bon-logo.jpg"
            alt="BON Hotel Stino Agbarho"
            className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
          />
          <div className="ml-auto flex rounded-full bg-surface p-1" role="tablist" aria-label="Menu">
            <button
              type="button"
              role="tab"
              aria-selected={kind === "food"}
              className={
                "inline-flex h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium sm:px-4 " +
                (kind === "food" ? "bg-gold text-on-gold" : "text-muted")
              }
              onClick={() => switchKind("food")}
            >
              <UtensilsCrossed className="size-4" aria-hidden="true" />
              Food
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={kind === "drinks"}
              className={
                "inline-flex h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium sm:px-4 " +
                (kind === "drinks" ? "bg-gold text-on-gold" : "text-muted")
              }
              onClick={() => switchKind("drinks")}
            >
              <Wine className="size-4" aria-hidden="true" />
              Drinks
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-3 sm:px-5">
          <label className="flex h-12 items-center gap-3 rounded-full border border-gold bg-raised px-4 shadow-sm">
            <Search className="size-5 shrink-0 text-gold" aria-hidden="true" />
            <span className="sr-only">Search the menu</span>
            <input
              ref={searchRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the menu"
              className="w-full bg-transparent text-base text-cream outline-none placeholder:text-cream/70"
              enterKeyHint="search"
              autoComplete="off"
            />
            {query ? (
              <button
                type="button"
                className="grid size-8 place-items-center rounded-full text-muted"
                aria-label="Clear search"
                onClick={() => {
                  setQuery("");
                  searchRef.current?.focus();
                }}
              >
                <X className="size-4" />
              </button>
            ) : null}
          </label>
        </div>
        <div
          ref={chipRow}
          className="chip-row flex gap-2 overflow-x-auto px-4 pb-3 lg:hidden"
        >
          {(q ? visible : navSections).map((section) => {
            const active = section.id === activeId;
            return (
              <button
                key={section.id}
                type="button"
                data-chip={section.id}
                onClick={() => jump(section.id)}
                className={
                  "h-10 shrink-0 rounded-full border px-3 text-sm " +
                  (active
                    ? "border-gold bg-gold text-on-gold"
                    : "border-line bg-surface text-cream")
                }
              >
                {section.short}
              </button>
            );
          })}
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10 lg:px-5">
        <aside className="menu-scroll sticky top-36 hidden h-[calc(100vh-9rem)] overflow-y-auto py-8 pr-2 lg:block">
          <p className="mb-3 px-3 text-xs font-medium tracking-widest text-gold uppercase">
            {kind === "food" ? "Food menu" : "Drinks menu"}
          </p>
          <NavList sections={navSections} activeId={activeId} onJump={jump} />
          <p className="mt-8 px-3 text-xs leading-relaxed text-muted">
            VAT and service charges apply.
          </p>
        </aside>

        <main className="px-4 py-6 sm:px-5 lg:px-0 lg:py-8">
          {q ? (
            <p className="mb-6 text-sm text-muted">
              {matchCount === 0
                ? "Nothing on this menu matches that."
                : `${matchCount} ${matchCount === 1 ? "match" : "matches"} in ${kind === "food" ? "food" : "drinks"}.`}
              {otherMatches > 0 ? (
                <>
                  {" "}
                  <button
                    type="button"
                    className="font-medium text-gold underline decoration-gold/40 underline-offset-4"
                    onClick={() => switchKind(kind === "food" ? "drinks" : "food")}
                  >
                    {otherMatches} in {kind === "food" ? "drinks" : "food"}
                  </button>
                </>
              ) : null}
            </p>
          ) : (
            <div className="mb-8 max-w-xl">
              <h1 className="font-display text-4xl leading-none text-cream">Menu</h1>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Breakfast through the grill, native soups, and the full bar. Prices are in naira.
                Ask the floor for today’s protein if a plate says “choice of”.
              </p>
            </div>
          )}

          {visible.length === 0 ? (
            <div className="rounded-2xl border border-line bg-surface px-5 py-10 text-center">
              <p className="font-display text-2xl text-cream">Not on this list</p>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted">
                Try yam, pepper soup, shawarma, Heineken, or cappuccino.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {visible.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}
            </div>
          )}

          <footer className="mt-16 border-t border-line py-8 text-center">
            <p className="font-display text-2xl text-cream">BON Hotel</p>
            <p className="mt-1 text-xs font-medium tracking-widest text-gold uppercase">Stino Agbarho</p>
            <p className="mt-3 text-sm text-muted">VAT and service charges apply.</p>
          </footer>
        </main>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/70"
            aria-label="Close menu sections"
            onClick={() => setOpen(false)}
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu sections"
            className="menu-scroll absolute inset-y-0 left-0 flex w-72 max-w-[88vw] flex-col border-r border-line bg-surface p-4"
          >
            <div className="mb-4 flex items-start justify-between gap-3 border-b border-line pb-4">
              <div>
                <p className="text-xs font-medium tracking-widest text-gold uppercase">Sections</p>
                <p className="mt-1 text-sm text-muted">{kind === "food" ? "Food menu" : "Drinks menu"}</p>
              </div>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full text-cream"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
            <NavList sections={navSections} activeId={activeId} onJump={jump} />
            <p className="mt-auto pt-6 text-center text-xs text-muted">VAT and service charges apply.</p>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
