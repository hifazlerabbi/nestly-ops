import { PageHeader, Status } from "../components";
import { suppliers } from "../data";

export default function SuppliersPage() {
  return (
    <>
      <PageHeader eyebrow="Operations" title="Suppliers" copy="Track sourcing partners, sample quality, delivery performance, stock reliability and fulfillment risk." />
      <div className="toolbar"><button className="primaryButton">+ Add supplier</button><span>{suppliers.length} candidates</span></div>
      <div className="tableWrap">
        <table>
          <thead><tr><th>Supplier</th><th>Type</th><th>Status</th><th>Shipping</th><th>Score</th></tr></thead>
          <tbody>{suppliers.map((s)=><tr key={s.name}><td><strong>{s.name}</strong></td><td>{s.type}</td><td><Status>{s.status}</Status></td><td>{s.shipping}</td><td>{s.score}</td></tr>)}</tbody>
        </table>
      </div>
      <section className="noteCard"><strong>Validation rule</strong><p>Test-order critical products before scaling. Record processing time, packaging, tracking quality, product quality, communication and actual delivery time.</p></section>
    </>
  );
}
