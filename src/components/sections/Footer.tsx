import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Products", href: "#works" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "AI & ML", href: "#ai" },
  { label: "Robotics", href: "#robotics" },
  { label: "SaaS Cloud", href: "#saas" },
  { label: "Engineering Process", href: "#process" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(246,238,227,0.08)] bg-[rgba(16,11,8,0.95)] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand - strictly using logo.png */}
          <div className="max-w-md">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/logo.png"
                  alt="InbredTechno"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(223,157,86,0.3)]"
                />
              </div>
              <div>
                <p className="font-display text-xl font-bold tracking-tight text-(--color-ink) cream-gradient-text">
                  INBREDTECHNO
                </p>
                <p className="font-mono text-[9px] tracking-widest text-(--color-caramel) uppercase">
                  WHERE WORLD CONNECTS TECHNICALLY
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-(--color-ink-dim)">
              Engineering next-generation intelligent SaaS products, autonomous robotics, AI computer vision models, and enterprise software.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[rgba(92,184,138,0.3)] bg-[rgba(24,17,12,0.8)] px-3.5 py-1 font-mono text-[10px] text-(--color-active)">
              <span className="h-1.5 w-1.5 rounded-full bg-(--color-active) shadow-[0_0_6px_#5cb88a]" />
              <span>DELHI HQ · GLOBAL FLEET OPERATIONAL</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs font-semibold tracking-widest text-(--color-caramel) uppercase">
              NAVIGATION
            </p>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-cursor="link"
                  className="font-mono text-xs text-(--color-ink-dim) transition-colors hover:text-(--color-caramel)"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[rgba(246,238,227,0.08)] pt-8">
          <p className="font-mono text-[10px] tracking-wider text-(--color-ink-faint)">
            © {new Date().getFullYear()} INBREDTECHNO PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[10px] tracking-wider text-(--color-ink-faint)">
            ENGINEERED WITH PASSION IN NEW DELHI, INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}
