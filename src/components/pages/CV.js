import Koffert from "./images/suitcase.png";
import Java from "./images/Java.png";
import Python from "./images/python.png";
import JavaScript from "./images/JavaScript.png";
import CSHARP from "./images/C.png";
import { Box, Typography } from "@mui/material";

function Resume() {
  const educationData = [
    {
      period: "August 2024 – nå",
      institution: "Universitetet i Bergen",
      program: "Software Engineering, master",
      info: "Skriver for tiden en masteroppgave rundt analyse av studieprogrammer. Fullført kurs i modelldrevet utvikling, informasjonssikkerhet, algoritmer og moderne systemutvikling. Planlagt oppstart av masteroppgave høst 2025",
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
      period: "Juni 2025 – August 2025",
      workplace: "Sparebanken Norge",
      typeofwork: "Summer Intern",
      info: "Jobbet med C# ASP.NET, React + TypeScript for å utvikle en ny nettbank tilpasset barn. Et tverrfaglig samarbeid mellom 5 utviklere og 2 UX-designere.",
    },
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

  const programmingSkills = [
    { name: "Java", picture: Java, skills: "Spring Boot" },
    { name: "C#", picture: CSHARP, skills: "ASP.NET" },
    { name: "Python", picture: Python, skills: "" },
    {
      name: "JavaScript",
      picture: JavaScript,
      skills: "React.js, TypeScript, Express",
    },
    { name: "SQL", picture: "", skills: "PostgreSQL, SQL Server" },
    { name: "NoSQL", picture: "", skills: "Firestore, MongoDB" },
  ];

  return (
    <div className="fremside">
      <img className="koffertbilde" src={Koffert} alt="profil" />

      <h2 className="arbeid" style={{ marginTop: "0" }}>
        Programmeringskompetanse
      </h2>
      <Box className="skill-card-container">
        {programmingSkills.map((item, index) => (
          <Box key={index} className="skill-card">
            <p style={{ fontWeight: "bold" }}>{item.name}</p>
            {item.picture ? (
              <img src={item.picture} alt={`logo of ${item.name}`} />
            ) : (
              ""
            )}

            {item.skills ? (
              <p style={{ marginTop: "5px" }}> {item.skills} </p>
            ) : (
              ""
            )}
          </Box>
        ))}
      </Box>
      <h2 style={{ marginTop: "35px", marginBottom: "8px" }}>Utdanning</h2>
      <ul>
        {educationData.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              border: "1px solid #ccc",
              borderRadius: "15px",
              backgroundColor: "#2c3e50",
              width: { xs: "90%", sm: "750px" }, // Responsive width
              color: "#fff", // To make text visible on dark background
              margin: "20px auto", // Centers the box horizontally
              textAlign: "center", // Centers text inside the box
            }}
          >
            <Typography variant="h6">
              {`${item.period}: ${item.institution}, ${item.program}`}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item?.info || "No additional information available yet"}
            </Typography>
          </Box>
        ))}
      </ul>

      <h2 className="arbeid">Arbeidserfaring</h2>
      <ul>
        {workExperience.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              border: "1px solid #ccc",
              borderRadius: "15px",
              backgroundColor: "#2c3e50",
              width: { xs: "90%", sm: "750px" }, // Responsive width
              color: "#fff", // To make text visible on dark background
              margin: "20px auto", // Centers the box horizontally
              textAlign: "center", // Centers text inside the box
            }}
          >
            <Typography variant="h6">
              {`${item.period}: ${item.workplace}, ${item.typeofwork}`}
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item?.info || "No additional information available yet"}
            </Typography>
          </Box>
        ))}
      </ul>
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
