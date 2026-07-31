import Logos from "../components/Logos.jsx";
import Profil from "../assets/images/meg.jpg";

export default function Home() {
  return (
    <div className="page">
      <h1>Hello World!</h1>
      <img className="home-image" src={Profil} alt="profil" />
      <p>
        My name is Fredrik Enes.
        <br />
        Currently working as a software developer at Sparebanken Norge.
        <br />
        Masters degree in{" "}
        <a
          href="https://www.uib.no/studier/MAMN-PROG"
          target="_blank"
          rel="noreferrer"
        >
          Software Engineering
        </a>{" "}
        from University of Bergen and Western Norway University of Applied
        Sciences.
        <br />
        Bachelor of Science in Computer Engineering from Western Norway
        University of Applied Sciences.
        <br />
        I also obtain a certificate of apprenticeship in ICT-service from
        University of Bergen.
      </p>
      <p>Please reach out through one of the platforms below</p>
      <Logos />
    </div>
  );
}
