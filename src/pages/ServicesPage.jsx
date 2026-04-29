import './ServicesPage.css';

const services = [
  {
    id: 'posters',
    title: 'APEX Posters',
    description: 'High-converting, visually stunning digital posters designed to capture attention instantly. We blend psychology with premium design to ensure your message isn\'t just seen, it\'s felt.',
    image: '/posters_service.png',
  },
  {
    id: 'film',
    title: 'APEX Film',
    description: 'Cinematic video production that tells your brand\'s story with unparalleled clarity and impact. From commercial shoots to social-first short form content, we produce visual excellence.',
    image: '/film_service.png',
  },
  {
    id: 'script',
    title: 'APEX Script',
    description: 'Where strategy meets language. Our copywriting team crafts compelling, persuasive narratives that drive action and build lasting brand authority.',
    image: '/script_service.png',
  }
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-page__header">
        <p className="services-page__eyebrow">Our Expertise</p>
        <h1 className="services-page__title">Precision Built Services.</h1>
        <p className="services-page__subtitle">
          We don't offer generic packages. We deliver targeted, high-performance solutions engineered for market dominance.
        </p>
      </div>

      <div className="services-page__list">
        {services.map((service, index) => (
          <section key={service.id} className={`service-block ${index % 2 !== 0 ? 'service-block--reverse' : ''}`}>
            <div className="service-block__image-col">
              <img src={service.image} alt={service.title} className="service-block__img" />
            </div>
            <div className="service-block__content-col">
              <h2 className="service-block__title">{service.title}</h2>
              <p className="service-block__text">{service.description}</p>
              <a href="/contact" className="service-block__btn">Request a Consultation</a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
