import Image from "next/image";

const LINKS = [
  { label: "Work", href: "#works" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "AI", href: "#ai" },
  { label: "Robotics", href: "#robotics" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-(--color-surface-border) bg-(--color-void) py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        {/* brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/companylogo.jpg"
              alt="InbredTechno"
              width={44}
              height={53}
              className="object-contain"
            />
            <div>
              <p className="font-display text-xl font-semibold text-(--color-ink)">
                INBREDTECHNO
              </p>
              <p className="hud-label mt-0.5 text-(--color-ink-faint)">
                WHERE WORLD CONNECTS TECHNICALLY
              </p>
            </div>
          </div>
          <p className="hud-label mt-4 text-(--color-ink-faint)">
            Software · AI · Applications · Robotics
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="link"
              className="hud-label text-(--color-ink-dim) transition-colors hover:text-(--color-ink)"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="hud-label text-(--color-ink-faint)">
          © {new Date().getFullYear()} INBREDTECHNO
        </p>
      </div>
    </footer>
  );
}
