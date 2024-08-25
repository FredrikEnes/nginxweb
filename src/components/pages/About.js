import RBK from "./images/rbk.JPG";

export default function About() {
  const hei = "Hei der!";

  const tekstommeg =
    "23 år gammel fra Bergen, født i år 2000. På fritiden er jeg lidenskapelig opptatt av norsk fotball og Rosenborg BK er favorittlaget! ";

  return (
    <div className="about">
      <div className="text-box">
        <img className="fremsidebilde" src={RBK} alt="profil" />
        <p> {tekstommeg} </p>
        <p>
          Epost:{" "}
          <a href="mailto:fredrik.enes@gmail.com"> fredrik.enes@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
