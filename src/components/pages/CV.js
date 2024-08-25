import Koffert from "./images/suitcase.png";

function Resume() {
  const educationData = [
    {
      period: "August 2024 – nå",
      institution: "Universitetet i Bergen",
      program: "Software Engineering, master",
      info: "",
    },
    {
      period: "August 2021 – nå",
      institution: "Høgskulen på Vestlandet",
      program: "Dataingeniør, bachelor",
      info: "Bacheloroppgave: Library of Things. Spesialisering i Programutvikling- og arkitektur. Vinner av Grasrotprisen på HVL EXPO 2024.",
    },
    {
      period: "Juni 2018 – Juni 2020",
      institution: "Universitet i Bergen",
      program: "IKT-servicefaget , fagbrev",
      info: "To års læretid ved Universitetet i Bergen ble fullført med bestått fagbrev. Hovedfokus lå på brukerstøtte for 4000 ansatte, med vekt på følging av læreplanen som omfattet klient- og serverdrift.",
    },
  ];

  const workExperience = [
    {
      period: "Juni 2024 – August 2024",
      workplace: "Omega 365",
      typeofwork: "Summer Intern",
      info: "Internt opplegg samt utvikling av eget prosjekt sammen med to kollegaer for å kartlegge fiskeplasser. ",
    },
    {
      period: "August 2022 – Juni 2024",
      workplace: "Høgskulen på Vestlandet",
      typeofwork: "Studentassistent",
      info: "Studentassistent stilling som innebærer å gi brukerstøtte til medstudenter på deres tekniske spørsmål. Studentassistent i faget DAT110 våren 2024 som innebærer å rette obligatoriske innleveringer og å være til hjelp under laboratorieøvelser.",
    },
    {
      period: "Juni 2023 - Juli 2023",
      workplace: "Bergen Kommune",
      typeofwork: "Servicetekniker",
      info: "Sommerjobb som servicetekniker. Arbeidsoppgavene besto av montering, demontering og vedlikehold av hjelpemidler i hjemmebaserte tjenester.",
    },
    {
      period: "Juli 2018 – Juli 2020",
      workplace: "Universitetet i Bergen",
      typeofwork: "IKT-lærling",
      info: "Jeg fikk jobbe på IT-avdelingen til UiB. Lærte masse teknisk og menneskelig gjennom om det å drive brukerstøtte til ansatte på UiB.",
    },
  ];

  const programmingSkills = "Java, Python, JavaScript, SQL og NoSQL";

  return (
    <div className="fremside">
      <img className="koffertbilde" src={Koffert} alt="profil" />
      <h2>Utdanning</h2>
      <ul>
        {educationData.map((item, index) => (
          <li key={index}>
            <h3>{`${item.period}: ${item.institution}, ${item.program}`}</h3>
            <p>{item.info}</p>
          </li>
        ))}
      </ul>

      <h2 className="arbeid">Arbeidserfaring</h2>
      <ul>
        {workExperience.map((item, index) => (
          <li key={index}>
            <h3>{`${item.period}: ${item.workplace}, ${item.typeofwork} `}</h3>
            <p>{item.info}</p>
          </li>
        ))}
      </ul>

      <h2 className="arbeid">Programmeringskompetanse</h2>
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
