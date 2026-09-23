import { EmptyState, PageHeader } from "../components";

export default function CustomersPage() {
  return (
    <>
      <PageHeader eyebrow="Voice of Customer" title="Customers" copy="Turn support conversations, reviews, objections and returns into product and app insights." />
      <div className="metricsMini"><div><strong>0</strong><span>Customers</span></div><div><strong>0</strong><span>Feedback items</span></div><div><strong>0</strong><span>Returns</span></div></div>
      <EmptyState title="No customer signals yet" copy="Once Nestly starts receiving orders, capture repeated questions, objections, delivery issues, reviews and support pain here." />
    </>
  );
}
