function Resume() {
  const education = [
    "August 2021 – nå: Høgskulen på Vestlandet, Dataingeniør.",
    "August 2020 – Juni 2021: Høgskulen på Vestlandet, Forkurs for ingeniør- og sivilingeniørutdanning.",
  ];

  const workExperience = [
    "August 2022 – nå: Studentassistent hos Høgskulen på Vestlandet.",
    "Juni 2023 - Juli 2023: Servicetekniker hos Bergen Kommune.",
    "Juni 2022 - August 2022: Instruktør hos A2G Kompetanse.",
    "Juli 2018 – Juli 2020: IKT-lærling hos Universitetet i Bergen.",
  ];

  const programmingSkills = "Java, Python og SQL";

  return (
    <div>
      <h2>Utdanning</h2>
      <ul>
        {education.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Arbeidserfaring</h2>
      <ul>
        {workExperience.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Programmeringskompetanse</h2>
      <p>{programmingSkills}</p>
    </div>
  );
}

export default function CV() {
  return (
    <>
      <div className="resume">
        <Resume />
      </div>
    </>
  );
}
