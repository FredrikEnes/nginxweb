import RBK from "./images/rbk.JPG";

export default function About() {
  const hei = "Hei der!";

  const tekstommeg =
    "Jeg er en 23 år gammel gutt fra Bergen. Går på Høgskulen på Vestlandet og er ferdig våren 2024 med bachelor som Dataingeniør. Jeg liker å gjøre spennende ting på datamaskinen min. Fotball er min store lidenskap. Heia Rosenborg BK!";

  return (
    <div className="about">
      <div className="text-box">
        <h1>{hei}</h1>
        <img className="fremsidebilde" src={RBK} alt="profil" />
        <p> {tekstommeg} </p>
      </div>
    </div>
  );
}
