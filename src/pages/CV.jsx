import InfoCard from "../components/InfoCard.jsx";
import Section from "../components/Section.jsx";
import { education } from "../data/education.js";
import { experience } from "../data/experience.js";

export default function CV() {
  return (
    <div className="page">
      <Section title="Work experience">
        <ul className="info-list">
          {experience.map((item) => (
            <InfoCard
              key={`${item.workplace}-${item.period}`}
              period={item.period}
              title={item.workplace}
              subtitle={item.role}
              description={item.info}
              link={item.link}
            />
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <ul className="info-list">
          {education.map((item) => (
            <InfoCard
              key={item.institution}
              period={item.period}
              title={item.institution}
              subtitle={item.program}
              description={item.info}
            />
          ))}
        </ul>
      </Section>
    </div>
  );
}
