export default function About() {
  const hei = "Hei der!";

  const tekstommeg =
    "Jeg er en 23 år gammel gutt fra Bergen. Jeg liker å gjøre ting på datamaskinen min. Fotball er min store lidenskap. Heia Rosenborg BK!";

  return (
    <div className="about">
      <div className="text-box">
        <h1>{hei}</h1>
        <p> {tekstommeg} </p>
      </div>
    </div>
  );
}
