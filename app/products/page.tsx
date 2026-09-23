import { PageHeader, Status } from "../components";
import { products } from "../data";

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Catalog" title="Products" copy="Manage the launch assortment, pricing, margin assumptions, bundles and product decisions." />
      <div className="toolbar"><button className="primaryButton">+ Add product</button><span>{products.length} in pipeline</span></div>
      <div className="tableWrap">
        <table>
          <thead><tr><th>Product</th><th>Role</th><th>Status</th><th>Target price</th><th>Margin</th></tr></thead>
          <tbody>
            {products.map((p) => <tr key={p.name}><td><strong>{p.name}</strong></td><td>{p.role}</td><td><Status>{p.status}</Status></td><td>{p.targetPrice}</td><td>{p.margin}</td></tr>)}
          </tbody>
        </table>
      </div>
      <section className="noteCard"><strong>Launch rule</strong><p>Start with 8–12 products: 1 hero product, 3–4 complementary products, and 3–5 add-ons. Avoid catalog bloat before real customer data exists.</p></section>
    </>
  );
}
