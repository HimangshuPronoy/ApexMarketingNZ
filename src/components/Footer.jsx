import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Services: [
    'APEX Posters',
    'APEX Film',
    'APEX Script',
    'Strategy & Consulting',
  ],
  Company: [
    'About Us',
    'Portfolio',
    'Careers',
    'Contact',
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service',
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main footer */}
      <div className="footer__main">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            APEX MARKETING NZ
          </a>
          <p className="footer__brand-text">
            Rooted in Vision. Growing Global. Where Precision Meets Creativity.
            <br /><br />
            "VINCERE AUT MORI"
          </p>
          
          <div className="footer__contact-info" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} />
              <span>Timaru, New Zealand (Serving Worldwide)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              <a href="mailto:apexmarketing427@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>apexmarketing427@gmail.com</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} />
              <a href="tel:+64273601331" style={{ color: 'inherit', textDecoration: 'none' }}>027 360 1331</a>
            </div>
          </div>

          <div className="footer__socials" style={{ marginTop: '1.5rem' }}>
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="footer__social-link">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="footer__social-link">
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="footer__social-link">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer__col">
            <h4 className="footer__col-title">{heading}</h4>
            <ul className="footer__col-links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Apex Marketing New Zealand · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
