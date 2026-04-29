import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__main" style={{ backgroundImage: 'url(/nz_nature.png)' }}>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">Apex Marketing New Zealand</p>
          <h1 className="hero__title">
            Rooted in Vision.<br />Growing Global.
          </h1>
          <p className="hero__subtitle">
            Where Precision Meets Creativity.<br />
            Comprehensive marketing solutions to elevate your brand.
          </p>
          <a href="/portfolio" className="hero__cta">Explore Our Work</a>
        </div>
        
        <div className="hero__badge">
          <span className="hero__badge-title">VINCERE AUT MORI</span>
          <span className="hero__badge-sub">Strategic Vision</span>
        </div>
      </div>

      {/* Sub-hero tiles */}
      <div className="hero__tiles">
        <div className="hero__tile hero__tile--dark">
          <img
            src="/posters_service.png"
            alt="APEX Posters"
            className="hero__tile-img"
          />
          <div className="hero__tile-content">
            <span className="hero__tile-label">APEX Posters</span>
            <h3 className="hero__tile-title">Visuals that stop the scroll</h3>
            <a href="/services" className="hero__tile-link">Learn more →</a>
          </div>
        </div>
        <div className="hero__tile">
          <img
            src="/film_service.png"
            alt="APEX Film"
            className="hero__tile-img"
          />
          <div className="hero__tile-content hero__tile-content--light">
            <span className="hero__tile-label">APEX Film</span>
            <h3 className="hero__tile-title">High-performance video</h3>
            <a href="/services" className="hero__tile-link hero__tile-link--dark">Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
