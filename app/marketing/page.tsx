import { PageHeader, Status } from "../components";
import { marketing } from "../data";

export default function MarketingPage() {
  return (
    <>
      <PageHeader eyebrow="Growth" title="Marketing" copy="Plan acquisition and retention around real product demand, not activity for activity’s sake." />
      <div className="cardGrid">
        {marketing.map((m)=><article className="infoCard" key={m.channel}><div className="cardTop"><h3>{m.channel}</h3><Status>{m.status}</Status></div><p>{m.objective}</p></article>)}
      </div>
      <section className="noteCard"><strong>Current growth sequence</strong><p>Hero-product validation → first 10 orders → identify strongest channel → improve conversion and AOV → scale only after supplier and unit-economics confidence.</p></section>
    </>
  );
}
