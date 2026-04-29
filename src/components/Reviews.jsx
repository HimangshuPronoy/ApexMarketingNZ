import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Auckland, NZ',
    rating: 5,
    text: 'Apex completely transformed our digital presence. The video campaigns they produced drove record engagement for our Q3 launch.',
    product: 'Video Campaigns',
  },
  {
    name: 'James D.',
    location: 'Sydney, AU',
    rating: 5,
    text: 'Their strategic approach to our social media made all the difference. The ad copy was spot-on and perfectly captured our brand voice.',
    product: 'Strategy & Copywriting',
  },
  {
    name: 'Elena R.',
    location: 'London, UK',
    rating: 5,
    text: 'High-quality visuals delivered with absolute precision. They are true professionals who understand how to make a brand stand out.',
    product: 'APEX Posters',
  },
];

function StarRow({ count }) {
  return (
    <div className="star-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#c8a96e' : 'none'}
          stroke={i < count ? '#c8a96e' : '#ccc'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__inner">
        {/* Trust bar */}
        <div className="reviews__trust">
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">Global</span>
            <span className="reviews__trust-stat-label">Client Reach</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">Data-Driven</span>
            <span className="reviews__trust-stat-label">Performance Strategy</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">Cinematic</span>
            <span className="reviews__trust-stat-label">Video Production</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">High-Converting</span>
            <span className="reviews__trust-stat-label">Ad Copy & Visuals</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="reviews__header">
          <p className="reviews__eyebrow">Client Success</p>
          <h2 className="reviews__title">What our partners say</h2>
        </div>
        <div className="reviews__grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <StarRow count={r.rating} />
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__footer">
                <div>
                  <p className="review-card__name">{r.name}</p>
                  <p className="review-card__location">{r.location}</p>
                </div>
                <span className="review-card__product">{r.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
