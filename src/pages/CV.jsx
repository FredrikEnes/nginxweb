import Suitcase from "../assets/images/suitcase.png";
import InfoCard from "../components/InfoCard.jsx";
import { education } from "../data/education.js";
import { experience } from "../data/experience.js";

export default function CV() {
  return (
    <div className="page">
      <img className="cv-image" src={Suitcase} alt="profil" />

      <section>
        <h2 className="section-heading">Work experience</h2>
        <ul>
          {experience.map((item) => (
            <InfoCard
              key={`${item.workplace}-${item.period}`}
              title={`${item.period}: ${item.workplace}, ${item.role}`}
              description={item.info}
              link={item.link}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-heading">Education</h2>
        <ul>
          {education.map((item) => (
            <InfoCard
              key={item.institution}
              title={`${item.period}: ${item.institution}, ${item.program}`}
              description={item.info}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
