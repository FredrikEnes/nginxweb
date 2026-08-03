import Profil from "../assets/images/meg.jpg";
import Logos from "../components/Logos.jsx";
import Section from "../components/Section.jsx";

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__avatar">
          <img src={Profil} alt="Fredrik Enes" />
        </div>
        <p className="hero__role">Software Developer</p>
        <h1 className="hero__title">Fredrik Enes</h1>
        <p className="hero__lead">
          Software Developer at Sparebanken Norge. Master's in Software
          Engineering from the University of Bergen and Western Norway
          University of Applied Sciences.
        </p>
        <Logos center />
      </header>

      <Section title="About">
        <div className="about">
          <div className="about__item">
            <h3>What I do</h3>
            <p>
              I work across the loan domain with C# ASP.NET and React +
              TypeScript, building user-focused products in cross-disciplinary
              teams.
            </p>
          </div>
          <div className="about__item">
            <h3>Education</h3>
            <p>
              Master's degree in{" "}
              <a
                href="https://www.uib.no/studier/MAMN-PROG"
                target="_blank"
                rel="noreferrer"
              >
                Software Engineering
              </a>{" "}
              from UiB and HVL, and a Bachelor of Science in Computer Engineering
              from HVL. I also hold a certificate of apprenticeship in
              ICT-service from the University of Bergen.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
