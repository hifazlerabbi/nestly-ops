import { PageHeader } from "../components";
import { decisions } from "../data";

export default function DecisionsPage() {
  return (
    <>
      <PageHeader eyebrow="Institutional Memory" title="Decision Log" copy="Important decisions should survive Telegram, meetings and individual memory." />
      <div className="decisionList">
        {decisions.map((d) => (
          <article className="decisionCard" key={d.title}>
            <time>{d.date}</time>
            <h3>{d.title}</h3>
            <p className="decisionText">{d.decision}</p>
            <div className="reason">
              <strong>Why</strong>
              <p>{d.reason}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}