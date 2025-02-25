import Koffert from "./images/suitcase.png";
import Java from "./images/Java.png";
import Python from "./images/python.png";
import JavaScript from "./images/JavaScript.png";
import Docker from "./images/Docker.png";
import GithubActions from "./images/githubactions.png"
import Firebase from "./images/Firebase.png"
import { Box, Typography } from "@mui/material";

function Resume() {

  const educationData = [
    {
      period: "August 2024 – now",
      institution: "University of Bergen (UiB)",
      program: "Software Engineering, master",
      info: "Currently in my second semester, taking courses in model-driven development, modern system development methods, and programming languages. Completed courses in information security, algorithms, and modern system development. Planned start of master's thesis in fall 2025.",
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
    { name: "Java", picture: Java, skills: "Spring Boot, Gradle, Maven" },
    { name: "Python", picture: Python, skills: "" },
    {
      name: "JavaScript",
      picture: JavaScript,
      skills: "React.js, Vue.js, Express.js",
    },
    { name: "Docker", picture: Docker, skills: ""},
    { name: "GitHub Actions", picture: GithubActions, skills: ""},
    { name: "Firebase", picture: Firebase, skills: ""},
    { name: "SQL", picture: "", skills: "PostgreSQL, SQL Server" },
    { name: "NoSQL", picture: "", skills: "Firestore, MongoDB" },
  ];


  return (
    <div className="fremside">
      <img className="koffertbilde" src={Koffert} alt="profil" />

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
              width: "750px",
              color: "#fff", // To make text visible on dark background
              margin: "0 auto", // Centers the box horizontally
              textAlign: "center", // Optional, centers text inside the box
              marginBottom: "16px",
              marginTop: "20px",
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
              width: "750px",
              color: "#fff", // To make text visible on dark background
              margin: "0 auto", // Centers the box horizontally
              textAlign: "center", // Optional, centers text inside the box
              marginBottom: "16px",
              marginTop: "20px",
            }}
          >
            <Typography variant="h6">
              {`${item.period}: ${item.workplace}, ${item.typeofwork}`}
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item?.info || ""}
            </Typography>
          </Box>
        ))}
      </ul>

      
        <Box
          sx={{
            p: 4,
            backgroundColor: "#2c3e50",
            maxWidth: 500,
            margin: "auto",
            mt: 10,
            position: "relative", // Allows the button to be positioned absolutely inside this Box
            borderRadius: "8px", // Optional: Adds some border radius for smoother edges
          }}
        ></Box>
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
