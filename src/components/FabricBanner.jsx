import './FabricBanner.css';

import './FabricBanner.css';

export default function FabricBanner() {
  return (
    <section className="fabric-banner">
      <div className="fabric-banner__image-col">
        <img
          src="/strategy_service.png"
          alt="Marketing strategy and growth"
          className="fabric-banner__img"
        />
      </div>
      <div className="fabric-banner__content">
        <p className="fabric-banner__eyebrow">Connect</p>
        <h2 className="fabric-banner__title">
          Ready to get started?
        </h2>
        <p className="fabric-banner__text">
          Let's discuss how we can help your brand grow with purpose. Reach out and let's create something exceptional together.
        </p>
        <div className="fabric-banner__actions">
          <a href="/contact" className="fabric-banner__btn fabric-banner__btn--primary">Contact Us</a>
          <a href="/services" className="fabric-banner__btn fabric-banner__btn--secondary">View Services</a>
        </div>
      </div>
    </section>
  );
}
