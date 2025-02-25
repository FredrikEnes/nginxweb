import Logos from "../Logos";
import Profil from "./images/meg.jpg";

export default function Forside() {

  return (
    <>
      <div>
        <div className="fremside">
          <h1>Hello World!</h1>
          <img className="fremsidebilde" src={Profil} alt="profil" />
          <br />
          <br />
          <p>
            My name is Fredrik Enes. Former Software Engineering graduate from Western University of Applied Sciences. I also obtain a certificate of apprenticeship from University of Bergen. 
            Currently pursuing a Master's Degree in {" "}
            <a
              href="https://www.uib.no/studier/MAMN-PROG"
              target="_blank"
              rel="noreferrer"
            >
              Software Engineering.
            </a>
          </p>

          <p> Please reach out through one of the platforms below </p>
        </div>
        <Logos />
      </div>
    </>
  );
}
