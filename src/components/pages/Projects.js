import DHT from "./images/DHT.jpg";
import SpringBoot from "./images/springboot.jpg";

function DisplayProjects() {
  const data = [
    {
      Bilde: DHT,
      Tittel: "DHT-ring",
      Beskrivelse: "This is a project where we used a DHT ring",
      Lenke: "https://github.com/h594754/dat110-project3-dht-group68",
    },
    {
      Bilde: SpringBoot,
      Tittel: "Springboot webside",
      Beskrivelse:
        "Obligatorisk innlevering ved studie hvor det blir brukt JSP på frontend og Spring boot i backend. Inneholder databaseoppkobling og hashing/salting av passord",
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
  const more = "There is more coming eventually.";

  return (
    <>
      <div>
        <DisplayProjects />
        <p className="fremside"> {more} </p>
      </div>
    </>
  );
}
