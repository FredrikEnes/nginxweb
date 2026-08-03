import Logos from "./Logos.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy">© {year} Fredrik Enes</span>
        <Logos />
      </div>
    </footer>
  );
}
