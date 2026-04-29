import { User } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero" style={{ backgroundImage: 'url(/about_vision.png)' }}>
        <div className="about-hero__overlay"></div>
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">Who We Are</p>
          <h1 className="about-hero__title">Architects of Growth.</h1>
          <p className="about-hero__subtitle">
            From Timaru to the world. We are Apex Marketing NZ, a premium agency rooted in vision and driven by precision. We exist to elevate brands that refuse to settle for average.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="about-stats">
        <div className="about-stat">
          <span className="about-stat__num">Global</span>
          <span className="about-stat__label">Reach & Execution</span>
        </div>
        <div className="about-stat">
          <span className="about-stat__num">Precision</span>
          <span className="about-stat__label">Data-Driven Strategy</span>
        </div>
        <div className="about-stat">
          <span className="about-stat__num">Vincere</span>
          <span className="about-stat__label">Aut Mori</span>
        </div>
      </div>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story__image-col">
          <img src="/about_team.png" alt="Apex Marketing Team" className="about-story__img" />
        </div>
        <div className="about-story__text-col">
          <h2 className="about-story__title">Our Philosophy</h2>
          <p className="about-story__text">
            Every piece of content we produce, every strategy we deploy, and every campaign we launch is built on three core pillars: Integrity, Discipline, and Innovation.
          </p>
          <p className="about-story__text">
            We don't just create; we architect growth. We believe in the power of visual storytelling and data-driven strategy to dominate the digital landscape.
          </p>
          <blockquote className="about-quote">
            "VINCERE AUT MORI" - To conquer or to die.
          </blockquote>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership">
        <div className="about-leadership__header">
          <p className="about-leadership__eyebrow">The Core</p>
          <h2 className="about-leadership__title">Leadership</h2>
        </div>
        
        <div className="about-leadership__grid">
          <div className="leadership-card">
            <div className="leadership-card__avatar">
              <User size={64} color="#555" />
            </div>
            <h3 className="leadership-card__name">Executive Director</h3>
            <p className="leadership-card__role">Strategy & Vision</p>
          </div>
          
          <div className="leadership-card">
            <div className="leadership-card__avatar">
              <User size={64} color="#555" />
            </div>
            <h3 className="leadership-card__name">Creative Director</h3>
            <p className="leadership-card__role">Design & Production</p>
          </div>
        </div>
      </section>
    </div>
  );
}
