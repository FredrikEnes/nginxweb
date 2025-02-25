import RBK from "./images/rbk.JPG";

export default function About() {
  const tekstommeg =
    "24 year old living in Bergen. Passion for norwegian football and most interested in Rosenborg BK! ";

  return (
    <div className="about">
      <div className="text-box">
        <img className="fremsidebilde" src={RBK} alt="profil" />
        <p> {tekstommeg} </p>
        <p>
          E-mail:{" "}
          <a href="mailto:fredrik.enes@gmail.com"> fredrik.enes@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
