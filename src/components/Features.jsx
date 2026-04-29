import './Features.css';

const features = [
  {
    icon: '✦',
    title: 'APEX Posters',
    desc: 'Static visuals that stop the scroll. Striking digital posters optimized for social placement.',
  },
  {
    icon: '◈',
    title: 'APEX Film',
    desc: 'High-performance video advertising made to convert across every feed.',
  },
  {
    icon: '⬡',
    title: 'APEX Script',
    desc: 'Words that sell. From ad copy to full campaign scripts, we craft persuasive text.',
  },
  {
    icon: '◎',
    title: 'Strategic Vision',
    desc: 'Combining strategic precision with creative clarity to deliver work that connects and endures.',
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__inner">
        <div className="features__header">
          <p className="features__eyebrow">What We Do</p>
          <h2 className="features__title">
            Strategic precision.<br />Creative clarity.<br />Enduring growth.
          </h2>
        </div>
        <div className="features__grid">
          {features.map((f) => (
            <div key={f.title} className="features__card">
              <span className="features__card-icon">{f.icon}</span>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
