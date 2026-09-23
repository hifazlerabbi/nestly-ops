"use client";

import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  ClipboardCheck,
  FlaskConical,
  LayoutDashboard,
  Megaphone,
  PackageSearch,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Users,
} from "lucide-react";

const stats = [
  { label: "Orders", value: "0", meta: "Goal: 100", icon: ShoppingBag },
  { label: "Revenue", value: "$0", meta: "Launch stage", icon: BarChart3 },
  { label: "Active products", value: "0", meta: "Target: 8–12", icon: Boxes },
  { label: "Experiments", value: "0", meta: "Merchant-led", icon: FlaskConical },
];

const focus = [
  { title: "Finalize launch products", owner: "Product", status: "Now", icon: PackageSearch },
  { title: "Validate suppliers", owner: "Operations", status: "Now", icon: Truck },
  { title: "Prepare launch marketing", owner: "Growth", status: "Next", icon: Megaphone },
  { title: "Start merchant app testing", owner: "Blinto Reviews", status: "Next", icon: FlaskConical },
];

const areas = [
  { title: "Products", copy: "Pipeline, pricing, bundles, margins and product decisions.", icon: Boxes },
  { title: "Suppliers", copy: "Supplier scorecards, samples, shipping tests and issues.", icon: Truck },
  { title: "Marketing", copy: "Content, campaigns, paid growth, SEO, email and partnerships.", icon: Megaphone },
  { title: "Shopify Apps", copy: "Merchant problems, experiments, costs and research learnings.", icon: FlaskConical },
  { title: "Customers", copy: "Feedback, support insights, reviews and pain points.", icon: Users },
  { title: "Decisions", copy: "Important business calls, assumptions and lessons learned.", icon: ClipboardCheck },
];

export default function Home() {
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
            <button className="navItem active"><LayoutDashboard size={18} /> Overview</button>
            <button className="navItem"><Boxes size={18} /> Products</button>
            <button className="navItem"><Truck size={18} /> Suppliers</button>
            <button className="navItem"><Megaphone size={18} /> Marketing</button>
            <button className="navItem"><FlaskConical size={18} /> App Experiments</button>
            <button className="navItem"><Users size={18} /> Customers</button>
            <button className="navItem"><BarChart3 size={18} /> Metrics</button>
          </nav>
        </div>

        <div className="storeCard">
          <Store size={18} />
          <div>
            <strong>mynestly.com</strong>
            <span>Customer-facing store</span>
          </div>
          <ArrowUpRight size={16} />
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Nestly Operating System</p>
            <h1>Build the business. Learn from the merchant.</h1>
            <p className="tagline">Simple things for an organized everyday life.</p>
          </div>
          <div className="statusPill"><span></span> Pre-launch</div>
        </header>

        <section className="heroGrid">
          <article className="goalCard">
            <div className="goalTop">
              <div>
                <p className="eyebrow">Current milestone</p>
                <h2>First 100 genuine orders</h2>
              </div>
              <Sparkles size={22} />
            </div>
            <p className="goalCopy">Operate Nestly as a real branded dropshipping business while turning merchant problems into Shopify app research and Blinto learning.</p>
            <div className="progress"><span style={{ width: "0%" }} /></div>
            <div className="progressMeta"><span>0 orders</span><span>100 orders</span></div>
          </article>

          <article className="principleCard">
            <p className="eyebrow">Operating principle</p>
            <blockquote>“Shopify runs the store. Nestly Ops runs the business.”</blockquote>
            <p>Every important product, supplier, marketing, customer and app decision should live here.</p>
          </article>
        </section>

        <section className="statsGrid">
          {stats.map(({ label, value, meta, icon: Icon }) => (
            <article className="statCard" key={label}>
              <div className="statIcon"><Icon size={18} /></div>
              <div className="statValue">{value}</div>
              <div className="statLabel">{label}</div>
              <div className="statMeta">{meta}</div>
            </article>
          ))}
        </section>

        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Execution</p>
            <h2>Current focus</h2>
          </div>
          <span className="muted">Keep this list short.</span>
        </div>

        <section className="focusList">
          {focus.map(({ title, owner, status, icon: Icon }, index) => (
            <article className="focusRow" key={title}>
              <div className="focusNumber">0{index + 1}</div>
              <div className="focusIcon"><Icon size={19} /></div>
              <div className="focusMain">
                <strong>{title}</strong>
                <span>{owner}</span>
              </div>
              <span className={`badge ${status === "Now" ? "now" : ""}`}>{status}</span>
            </article>
          ))}
        </section>

        <div className="sectionHeading areasHeading">
          <div>
            <p className="eyebrow">Business system</p>
            <h2>Core areas</h2>
          </div>
        </div>

        <section className="areaGrid">
          {areas.map(({ title, copy, icon: Icon }) => (
            <article className="areaCard" key={title}>
              <div className="areaIcon"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="areaLink">Open area <ArrowUpRight size={14} /></div>
            </article>
          ))}
        </section>

        <footer>
          <span>Nestly Ops · Internal</span>
          <span>Storefront: mynestly.com · Current subdomain: nestly.blinto.co</span>
        </footer>
      </section>
    </main>
  );
}
