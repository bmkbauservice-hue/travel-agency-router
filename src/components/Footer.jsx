import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer bg-neutral p-10 text-neutral-content sm:footer-horizontal">
      <nav>
        <h6 className="footer-title">Dienstleistungen</h6>
        <span>Markenbildung</span>
        <span>Design</span>
        <span>Marketing</span>
        <span>Werbung</span>
      </nav>

      <nav>
        <h6 className="footer-title">Unternehmen</h6>

        <Link to="/about" className="link-hover link">
          Über uns
        </Link>

        <Link to="/contact" className="link-hover link">
          Kontakt
        </Link>

        <span>Jobs</span>
        <span>Pressemappe</span>
      </nav>

      <nav>
        <h6 className="footer-title">Rechtliches</h6>
        <span>Nutzungsbedingungen</span>
        <span>Datenschutzrichtlinie</span>
        <span>Cookie-Richtlinie</span>
      </nav>
    </footer>
  );
}

export default Footer;