import RBK from "./images/rbk.JPG";

export default function About() {
  const tekstommeg =
    "23 år gammel og bor i Bergen. På fritiden er jeg lidenskapelig opptatt av norsk fotball og Rosenborg BK er favorittlaget! ";

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
