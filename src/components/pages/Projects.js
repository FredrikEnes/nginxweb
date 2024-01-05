import WEB from "./images/web.png";
import SpringBoot from "./images/spring-boot-logo.png";

function DisplayProjects() {
  const data = [
    {
      Bilde: WEB,
      Tittel: "This website",
      Beskrivelse:
        "Denne nettsiden, har brukt React for å lage den, samt min egen css. Tenker senere å koble den opp til en MySQL database. ",
      Lenke: "https://github.com/h594754/nginxweb",
    },

    {
      Bilde: SpringBoot,
      Tittel: "DAT108 oblig",
      Beskrivelse:
        "En av de obligatoriske innleveringene vi hadde i faget DAT108, her er det brukt database oppkobling, hashing av passord samt visning av informasjon gjennom jstl-biblioteket.",
      Lenke: "https://github.com/h594754/DAT108_Oblig4",
    },
  ];

  const showList = data.map((element) => {
    return (
      <div className="projectview">
        <ul>
          <li>
            <img
              className="prosjektbilde"
              src={element.Bilde}
              alt="prosjektbilde"
            ></img>
            <h1>{element.Tittel}</h1>
            <p>{element.Beskrivelse}</p>
            <a href={element.Lenke} target="_blank" rel="noopener noreferrer">
              GitHub lenke
            </a>
          </li>
        </ul>
      </div>
    );
  });
  return <div>{showList}</div>;
}

export default function Projects() {
  const more = "More coming eventually.";

  return (
    <>
      <div>
        <DisplayProjects />
        <p className="projectview"> {more} </p>
      </div>
    </>
  );
}
