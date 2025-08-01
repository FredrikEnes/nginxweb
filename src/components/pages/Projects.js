import WEB from "./images/web.png";
import Thesis from "./images/thesis.png";
import Fotball from "./images/fotball.png";
import { Grid, Typography, Box } from "@mui/material";

function DisplayProjects() {
  const data = [
    {
      Bilde: Fotball,
      Tittel: "Hvem er spilleren?",
      Beskrivelse:
        `A norwegian game inspired by "Who Are Ya!". A game where the goal is to guess the correct Rosenborg BK player.`,
      Lenke: "https://github.com/h594754/hvemerspilleren",
      ProvDet: "https://hvemerspilleren.fredrikenes.no/",
    },

    {
      Bilde: Thesis,
      Tittel: "Bachelors thesis: Library of Things",
      Beskrivelse:
        `My bachelor thesis written togheter with two other student. Created a full-stack application for lending items. The application is internationalized using "i18-next" and utilizes Lightning Wallets for authentication. Awarded the Grasroots award at HVL EXPO 2024.`,
      Lenke: "https://hvlopen.brage.unit.no/hvlopen-xmlui/handle/11250/3143193",
    },
    {
      Bilde: WEB,
      Tittel: "fredrikenes.no",
      Beskrivelse:
        "This website is created using React and components from MaterialUI, first hosted via VPS and nginx, now hosted on Vercel.",
      Lenke: "https://github.com/h594754/nginxweb",
    },
  ];

  return (
    <Grid container spacing={1} justifyContent="center">
      {data.map((element, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            className="projectview"
            sx={{
              height: "400px", // Set a fixed height for uniformity
              maxWidth: "750px", // Set a max width
              mx: "auto", // Center the box horizontally
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#34495e",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
              },
            }}
          >
            <img
              className="prosjektbilde"
              src={element.Bilde}
              alt="prosjektbilde"
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ color: "#ecf0f1", marginTop: 2 }}
            >
              {element.Tittel}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#bdc3c7", marginBottom: 2 }}
            >
              {element.Beskrivelse}
            </Typography>
            {element.ProvDet ? (
              <a
                href={element.ProvDet}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the game!
              </a>
            ) : (
              ""
            )}
            <a href={element.Lenke} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default function Projects() {
  return (
    <>
      <DisplayProjects />
    </>
  );
}
