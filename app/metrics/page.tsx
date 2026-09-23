import { PageHeader } from "../components";

const metrics = [
  ["Revenue", "$0", "Total sales"],
  ["Orders", "0", "First milestone: 100"],
  ["Conversion rate", "—", "Store sessions → orders"],
  ["Average order value", "—", "Revenue / orders"],
  ["Gross margin", "—", "After product + shipping cost"],
  ["CAC", "—", "Paid acquisition cost"],
  ["Refund rate", "—", "Refunded orders / total orders"],
  ["Repeat purchase rate", "—", "Returning customers"],
];

export default function MetricsPage() {
  return (
    <>
      <PageHeader eyebrow="Business Health" title="Metrics" copy="Keep the dashboard focused on decisions. Shopify remains the source of truth for transactional commerce data." />
      <section className="metricGrid">{metrics.map(([label,value,copy])=><article className="metricCard" key={label}><span>{label}</span><strong>{value}</strong><p>{copy}</p></article>)}</section>
      <section className="noteCard"><strong>Data rule</strong><p>Do not duplicate every Shopify order into this repo. Store summarized metrics, experiment baselines, decisions and learning that need to survive beyond the commerce platform.</p></section>
    </>
  );
}
