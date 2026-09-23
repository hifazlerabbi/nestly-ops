import Link from "next/link";
import { ArrowUpRight, BarChart3, Boxes, FlaskConical, ShoppingBag, Sparkles } from "lucide-react";
import { business, focus, stats } from "./data";
import { PageHeader, Status } from "./components";

const links = [
  { href: "/products", title: "Products", copy: "Pipeline, pricing, bundles, margins and product decisions.", icon: Boxes },
  { href: "/suppliers", title: "Suppliers", copy: "Supplier scorecards, samples, shipping tests and issues.", icon: ShoppingBag },
  { href: "/marketing", title: "Marketing", copy: "Content, campaigns, SEO, email, paid growth and partnerships.", icon: BarChart3 },
  { href: "/experiments", title: "Shopify Apps", copy: "Merchant problems, experiments, costs and research learnings.", icon: FlaskConical },
];

export default function Home() {
  return (
    <>
      <div className="topbar">
        <PageHeader eyebrow="Nestly Operating System" title="Build the business. Learn from the merchant." copy={business.tagline} />
        <div className="statusPill"><span></span> Pre-launch</div>
      </div>

      <section className="heroGrid">
        <article className="goalCard">
          <div className="goalTop">
            <div>
              <p className="eyebrow">Current milestone</p>
              <h2>First {business.milestone} genuine orders</h2>
            </div>
            <Sparkles size={22} />
          </div>
          <p className="goalCopy">Operate Nestly as a real branded dropshipping business while turning merchant problems into Shopify app research and Blinto learning.</p>
          <div className="progress"><span style={{ width: "0%" }} /></div>
          <div className="progressMeta"><span>0 orders</span><span>{business.milestone} orders</span></div>
        </article>

        <article className="principleCard">
          <p className="eyebrow">Operating principle</p>
          <blockquote>“Shopify runs the store. Nestly Ops runs the business.”</blockquote>
          <p>Important product, supplier, marketing, customer and app decisions live here.</p>
        </article>
      </section>

      <section className="statsGrid">
        {stats.map((item) => (
          <article className="statCard" key={item.label}>
            <div className="statValue">{item.value}</div>
            <div className="statLabel">{item.label}</div>
            <div className="statMeta">{item.meta}</div>
          </article>
        ))}
      </section>

      <div className="sectionHeading">
        <div><p className="eyebrow">Execution</p><h2>Current focus</h2></div>
        <span className="muted">Keep this list short.</span>
      </div>

      <section className="focusList">
        {focus.map((item, index) => (
          <article className="focusRow" key={item.title}>
            <div className="focusNumber">0{index + 1}</div>
            <div className="focusMain"><strong>{item.title}</strong><span>{item.owner}</span></div>
            <Status>{item.status}</Status>
          </article>
        ))}
      </section>

      <div className="sectionHeading areasHeading">
        <div><p className="eyebrow">Business system</p><h2>Core areas</h2></div>
      </div>

      <section className="areaGrid">
        {links.map(({ href, title, copy, icon: Icon }) => (
          <Link href={href} className="areaCard" key={href}>
            <div className="areaIcon"><Icon size={20} /></div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <div className="areaLink">Open area <ArrowUpRight size={14} /></div>
          </Link>
        ))}
      </section>

      <footer>
        <span>Nestly Ops · Internal</span>
        <span>Storefront: {business.primaryDomain} · Current subdomain: {business.currentDomain}</span>
      </footer>
    </>
  );
}
