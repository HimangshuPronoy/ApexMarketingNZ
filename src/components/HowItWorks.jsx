import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Discovery & Vision',
    desc: 'We start by understanding your brand, your goals, and the unique landscape you operate in.',
  },
  {
    number: '02',
    title: 'Strategic Planning',
    desc: 'Our team develops a comprehensive strategy, aligning international expertise with local understanding.',
  },
  {
    number: '03',
    title: 'Creative Execution',
    desc: 'From striking posters to cinematic film and persuasive scripts, we bring the vision to life.',
  },
  {
    number: '04',
    title: 'Growth & Optimization',
    desc: 'We monitor performance, refine our approach, and ensure your brand continues to grow with purpose.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how__inner">
        <div className="how__header">
          <p className="how__eyebrow">Our Approach</p>
          <h2 className="how__title">How we work</h2>
          <p className="how__sub">Built in the South Pacific, guided by a global perspective.</p>
        </div>
        <div className="how__steps">
          {steps.map((s, i) => (
            <div key={s.number} className="how__step">
              <div className="how__step-number">{s.number}</div>
              {i < steps.length - 1 && <div className="how__step-line" />}
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="how__cta-wrap">
          <a href="/contact" className="how__cta">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
