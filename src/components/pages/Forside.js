import Logos from "../Logos";
import Profil from "./images/meg.jpg";

export default function Forside() {
  //Gjør klart for en database.
  // const [info, setInfo] = useState("");

  //useEffect(() => {
  //  fetch("http://localhost:3001/api/data")
  //    .then((response) => response.json())
  //    .then((data) => {
  //      setInfo(data);
  //    });
  //}, []);

  return (
    <>
      <div>
        <div className="fremside">
          <h1>Hallo verden</h1>
          <img className="fremsidebilde" src={Profil} alt="profil" />
          <br />
          <br />
          <p>
            Mitt navn er Fredrik Enes. Jeg har studert Dataingeniør på Høgskulen
            på Vestlandet og har fagbrev i IKT-servicefaget. For tiden så tar
            jeg en mastergrad i{" "}
            <a
              href="https://www.uib.no/studier/MAMN-PROG"
              target="_blank"
              rel="noreferrer"
            >
              Software Engineering.
            </a>
          </p>

          <p> Ta gjerne kontakt via en av logoene under </p>
        </div>
        <Logos />
      </div>
    </>
  );
}
