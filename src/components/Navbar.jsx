import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  {
    label: 'Services',
    id: 'services',
    sub: ['APEX Posters', 'APEX Film', 'APEX Script', 'Strategy & Consulting'],
  },
  {
    label: 'Portfolio',
    id: 'portfolio',
    sub: ['View All Work', 'Social Media', 'Video Campaigns', 'Copywriting'],
  },
  {
    label: 'About',
    id: 'about',
    sub: ['Who We Are', 'Our Approach', 'Careers'],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  };

  return (
    <header className="navbar">
      {/* Top row */}
      <div className="navbar__top">
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link to="/" className="navbar__logo" onClick={closeMenus}>
          <span className="navbar__logo-main">APEX MARKETING NZ</span>
        </Link>

        <div className="navbar__actions">
          {/* Icons removed as per user request */}
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="navbar__nav">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`navbar__nav-item ${activeDropdown === item.label ? 'is-active' : ''}`}
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to={`/${item.id}`} className="navbar__nav-btn" onClick={closeMenus}>
              {item.label}
              <ChevronDown size={12} className="navbar__nav-chevron" />
            </Link>
            {activeDropdown === item.label && (
              <div className="navbar__dropdown">
                {item.sub.map((s) => (
                  <Link 
                    key={s} 
                    to={`/${item.id}`} 
                    className="navbar__dropdown-link"
                    onClick={closeMenus}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to="/contact" className="navbar__nav-btn navbar__nav-special">Contact Us</Link>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navItems.map((item) => (
            <div key={item.label} className="navbar__mobile-item">
              <button
                className="navbar__mobile-btn"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                }
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={14}
                  className={mobileExpanded === item.label ? 'rotated' : ''}
                />
              </button>
              {mobileExpanded === item.label && (
                <div className="navbar__mobile-sub">
                  {item.sub.map((s) => (
                    <Link 
                      key={s} 
                      to={`/${item.id}`} 
                      className="navbar__mobile-sub-link"
                      onClick={closeMenus}
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="navbar__mobile-btn contact-mobile" onClick={closeMenus}>Contact Us</Link>
          <div className="navbar__mobile-divider" />
        </div>
      )}
    </header>
  );
}
