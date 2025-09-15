import Koffert from "./images/suitcase.png";
import Java from "./images/Java.png";
import Python from "./images/python.png";
import JavaScript from "./images/JavaScript.png";
import CSHARP from "./images/C.png";
import { Box, Typography } from "@mui/material";
import Docker from "./images/Docker.png";
import GithubActions from "./images/githubactions.png";
import Firebase from "./images/Firebase.png";

function Resume() {
  const educationData = [
    {
      period: "August 2024 – now",
      institution: "University of Bergen (UiB)",
      program: "Software Engineering, master",
      info: "Currently writing a master's thesis on the analysis of study programs. Completed courses in model-driven development, information security, algorithms, and modern system development.",
    },
    {
      period: "August 2021 – June 2024",
      institution: "Western University of Applied Sciences (HVL)",
      program: "Software Engineering, bachelors",
      info: "Bachelor thesis: Library of Things. Specialization in Software Development and Architecture. Award winning bachelors project at HVL EXPO 2024.",
    },
    {
      period: "June 2018 – June 2020",
      institution: "Universitet of Bergen",
      program: "ICT-service, certificate of apprenticeship",
      info: "Two-years apprenticeship at University of Bergen. Mainly focusing on support towards 4000 employees, meanwhile specializing in client and server management.",
    },
  ];

  const workExperience = [
    {
      period: "June 2025 – August 2025",
      workplace: "Sparebanken Norge",
      typeofwork: "Summer Intern",
      info: `Worked with C# ASP.NET, React + TypeScript to develop a new online banking platform tailored for children aged 7 - 14 years old. A cross-disciplinary collaboration between 5 developers and 2 UX designers. Article in norwegian posted about the project <a href="https://www.bankshift.no/nyheter/studentene-fikk-syv-uker-pa-a-skape-en-nettbank-for-barn-et-resultat-som-overgikk-forventingene/415204" target="_blank" rel="noopener noreferrer"> here.</a>`,
    },
    {
      period: "June 2024 – August 2024",
      workplace: "Omega 365",
      typeofwork: "Summer Intern",
      info: "Summer intern as a System Developer",
    },
    {
      period: "August 2022 – June 2024",
      workplace: "Western University of Applied Sciences (HVL)",
      typeofwork: "Student assistent",
      info: "Working with technical support towards students. Student assistant in the course DAT110, Spring 2024.",
    },
    {
      period: "July 2018 – July 2020",
      workplace: "Universitetet i Bergen",
      typeofwork: "ICT-service apprentice",
      info: "",
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
    { name: "Docker", picture: Docker, skills: "" },
    { name: "GitHub Actions", picture: GithubActions, skills: "" },
    { name: "Firebase", picture: Firebase, skills: "" },
    { name: "SQL", picture: "", skills: "PostgreSQL, SQL Server" },
    { name: "NoSQL", picture: "", skills: "Firestore, MongoDB" },
  ];

  return (
    <>
      <div className="fremside">
        <img className="koffertbilde" src={Koffert} alt="profil" />
        <div className="toc">
          <a href="#education">Education</a>
          <a href="#work-experience">Experience</a>
          <a href="#programming-skills">Skills</a>
        </div>
        <div id="education">
          <h2 style={{ marginTop: "35px", marginBottom: "8px" }}>Education</h2>
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
                  {item?.info || ""}
                </Typography>
              </Box>
            ))}
          </ul>
        </div>
        <div id="work-experience">
          <h2 className="arbeid">Work experience</h2>
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

                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  dangerouslySetInnerHTML={{ __html: item?.info || "" }}
                />
              </Box>
            ))}
          </ul>

          <Box
            sx={{
              p: 4,
              backgroundColor: "#2c3e50",
              maxWidth: 500,
              margin: "auto",
              position: "relative", // Allows the button to be positioned absolutely inside this Box
              borderRadius: "8px", // Optional: Adds some border radius for smoother edges
            }}
          ></Box>
        </div>
        <div id="programming-skills">
          <h2 className="arbeid" style={{ marginTop: "0" }}>
            Programming skills
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
        </div>
      </div>
    </>
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
