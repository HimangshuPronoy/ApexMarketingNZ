import './Categories.css';

const categories = [
  {
    title: 'Social Media',
    sub: 'Engaging content for all platforms',
    image: '/strategy_service.png',
    link: '/services',
  },
  {
    title: 'Video Campaigns',
    sub: 'Cinematic storytelling',
    image: '/film_service.png',
    link: '/services',
  },
  {
    title: 'Brand Strategy',
    sub: 'Data-driven growth',
    image: '/hero_agency.png',
    link: '/services',
  },
  {
    title: 'Copywriting',
    sub: 'Persuasive text that converts',
    image: '/script_service.png',
    link: '/services',
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="categories__eyebrow">Expertise</p>
          <h2 className="categories__title">Explore our capabilities</h2>
        </div>
        <div className="categories__grid">
          {categories.map((cat) => (
            <a key={cat.title} href={cat.link} className="cat-card">
              <div className="cat-card__img-wrap">
                <img src={cat.image} alt={cat.title} className="cat-card__img" />
                <div className="cat-card__overlay">
                  <span className="cat-card__shop">Learn more →</span>
                </div>
              </div>
              <div className="cat-card__body">
                <h3 className="cat-card__title">{cat.title}</h3>
                <p className="cat-card__sub">{cat.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
