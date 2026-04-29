import './PortfolioPage.css';

const portfolioItems = [
  {
    id: 'tradox',
    client: 'TradoxVPS',
    category: 'Trading Infrastructure',
    description: '"The world doesn\'t wait — neither should your brand." A complete visual and strategic overhaul for a high-frequency trading server provider.',
    image: '/portfolio_saas.png'
  },
  {
    id: 'digital',
    client: 'Social Media Solutions',
    category: 'Digital Marketing',
    description: 'Precision Built for Performance. Multi-channel campaigns that shattered engagement records and established market dominance.',
    image: '/portfolio_digital.png'
  },
  {
    id: 'tailor',
    client: 'Bespoke Fashion',
    category: 'Tailor Service',
    description: '"Where strategy meets language." Elevating a premium tailoring brand through cinematic visuals and compelling copy.',
    image: '/portfolio_ecom.png'
  }
];

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <div className="portfolio-hero" style={{ backgroundImage: 'url(/portfolio_hero.png)' }}>
        <div className="portfolio-hero__overlay"></div>
        <div className="portfolio-hero__content">
          <p className="portfolio-hero__eyebrow">The Vault</p>
          <h1 className="portfolio-hero__title">Our Elite Portfolio.</h1>
          <p className="portfolio-hero__subtitle">
            Concept work. Real execution. Every piece here reflects the APEX standard — strategy, design, and precision working in absolute sync.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="portfolio-grid-section">
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-item__img-wrap">
                <img src={item.image} alt={item.client} className="portfolio-item__img" />
                <div className="portfolio-item__overlay">
                  <span className="portfolio-item__view-text">View Case Study</span>
                </div>
              </div>
              <div className="portfolio-item__info">
                <p className="portfolio-item__category">{item.category}</p>
                <h3 className="portfolio-item__client">{item.client}</h3>
                <p className="portfolio-item__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="portfolio-cta">
        <h2 className="portfolio-cta__title">Ready to elevate your brand?</h2>
        <a href="/contact" className="portfolio-cta__btn">Start Your Project</a>
      </div>
    </div>
  );
}
