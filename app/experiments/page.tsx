import { PageHeader, Status } from "../components";
import { experiments } from "../data";

export default function ExperimentsPage() {
  return (
    <>
      <PageHeader eyebrow="Merchant Research" title="Shopify App Experiments" copy="Every test starts from a real merchant problem, not from a need to publish another review." />
      <div className="toolbar"><button className="primaryButton">+ New experiment</button><span>{experiments.length} in backlog</span></div>
      <div className="cardGrid">
        {experiments.map((e)=><article className="infoCard" key={e.name}><div className="cardTop"><h3>{e.name}</h3><Status>{e.status}</Status></div><dl><dt>Problem</dt><dd>{e.problem}</dd><dt>Hypothesis</dt><dd>{e.hypothesis}</dd><dt>Primary metric</dt><dd>{e.metric}</dd></dl></article>)}
      </div>
      <section className="noteCard"><strong>Experiment format</strong><p>Merchant problem → hypothesis → apps considered → selected app → baseline → test → result → friction → keep / replace / remove → Blinto research opportunity.</p></section>
    </>
  );
}
