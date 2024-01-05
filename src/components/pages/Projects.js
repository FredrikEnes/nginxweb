import WEB from "./images/web.png";

function DisplayProjects() {
  const data = [
    {
      Bilde: WEB,
      Tittel: "This website",
      Beskrivelse: "This is this page",
      Lenke: "https://github.com/h594754/nginxweb",
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
  const more = "This section is coming eventually.";

  return (
    <>
      <div>
        {/* <DisplayProjects /> */}
        <p className="projectview"> {more} </p>
      </div>
    </>
  );
}
