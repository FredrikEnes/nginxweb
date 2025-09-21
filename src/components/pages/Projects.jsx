import WEB from "./images/web.png";
import Thesis from "./images/thesis.png";
import Fotball from "./images/fotball.png";
import Bank from "./images/bank.png";
import { Grid, Typography, Box } from "@mui/material";

export default function Projects() {
  const data = [
    {
    Bilde: Bank,
    Tittel: "Piggybank",
    Beskrivelse: "New banking service for Sparebanken Norge customers aged 7–14, built with TypeScript, C# and MongoDB. Guardians assign paid tasks, while kids set saving goals and can interact with their customizable saving buddy. With a clean, intuitive interface, the service makes managing finances simple and engaging for the users.",
    Lenke: "https://www.bankshift.no/nyheter/studentene-fikk-syv-uker-pa-a-skape-en-nettbank-for-barn-et-resultat-som-overgikk-forventingene/415204",
    },
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
        `My bachelor thesis written together with two other students. Created a full-stack application for lending items. The application is internationalized using "i18-next" and utilizes Lightning Wallets for authentication. Awarded the Grasroots award at HVL EXPO 2024.`,
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
    <>
    <h1>Projects</h1>
    <Grid container spacing={1} justifyContent="center">
      {data.map((element, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            className="projectview"
            sx={{
              minHeight: "300px",
              maxWidth: "750px",
              mx: "auto",
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
    </>
  );
}
