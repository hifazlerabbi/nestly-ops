"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Boxes,
  ClipboardCheck,
  FlaskConical,
  LayoutDashboard,
  Megaphone,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { business } from "./data";

const nav = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/products", label: "Products", icon: Boxes },
  { href: "/suppliers", label: "Suppliers", icon: Truck },
  { href: "/marketing", label: "Marketing", icon: Megaphone },
  { href: "/experiments", label: "App Experiments", icon: FlaskConical },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/metrics", label: "Metrics", icon: BarChart3 },
  { href: "/decisions", label: "Decisions", icon: ClipboardCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="shell">
      <aside className="sidebar">
        <div>
          <div className="brandRow">
            <div className="mark">N</div>
            <div>
              <strong>Nestly</strong>
              <span>Ops</span>
            </div>
          </div>
          <nav>
            {nav.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className={`navItem ${pathname === href ? "active" : ""}`}>
                <Icon size={18} /> {label}
              </Link>
            ))}
          </nav>
        </div>

        <a className="storeCard" href={"https://" + business.primaryDomain} target="_blank" rel="noreferrer">
          <Store size={18} />
          <div>
            <strong>{business.primaryDomain}</strong>
            <span>Customer-facing store</span>
          </div>
        </a>
      </aside>

      <section className="content">{children}</section>
    </main>
  );
}

export function PageHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <header className="pageHeader">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {copy ? <p className="pageCopy">{copy}</p> : null}
    </header>
  );
}

export function Status({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

export function EmptyState({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="emptyState">
      <strong>{title}</strong>
      <p>{copy}</p>
    </div>
  );
}
