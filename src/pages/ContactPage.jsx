import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './ContactPage.css';

// ── Contact details ─────────────────────────────────────────────────────────
// WhatsApp number must be in international format without +/spaces/dashes
const WHATSAPP_NUMBER = '64273601331'; // 027 360 1331 in NZ international format
const SMS_NUMBER = '+64273601331';     // same number with + prefix

const SERVICE_LABELS = {
  posters: 'APEX Posters',
  film: 'APEX Film',
  script: 'APEX Script',
  strategy: 'Strategy Consulting',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [fallback, setFallback] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const buildMessage = () => {
    const service = SERVICE_LABELS[form.service] || form.service;
    return (
      `Hi Apex Marketing! 👋\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Service: ${service}\n\n` +
      `Project Details:\n${form.message}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = encodeURIComponent(buildMessage());

    // 1️⃣ Try WhatsApp web/app deep link
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    const smsUrl = `sms:${SMS_NUMBER}?body=${msg}`;

    // Open WhatsApp in a new tab; if the user has WhatsApp it will open the app.
    // We also set a short timer — if the tab is still here after 2 s the user
    // probably doesn't have WhatsApp, so we reveal the SMS fallback banner.
    const waWindow = window.open(waUrl, '_blank');

    // On mobile Safari/Chrome, window.open returns null for app deep links.
    // On desktop it opens a new tab. We handle both cases.
    if (!waWindow || waWindow.closed || typeof waWindow.closed === 'undefined') {
      // Deep link couldn't open a new window → try SMS directly
      window.location.href = smsUrl;
    } else {
      // Give WhatsApp 2.5 s to intercept; if the user returns, show fallback
      const timer = setTimeout(() => {
        try {
          // If the tab is still accessible and not closed, user is on desktop
          if (!waWindow.closed) {
            setFallback(true);
          }
        } catch (_) {
          // Cross-origin / security error — WhatsApp probably took over, do nothing
        }
      }, 2500);

      // Clean up timer if component unmounts
      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="contact-page" style={{ backgroundImage: 'url(/contact_office.png)' }}>
      <div className="contact-page__overlay"></div>

      <div className="contact-page__content">
        <div className="contact-glass">
          <div className="contact-glass__header">
            <h1 className="contact-glass__title">Let's Talk.</h1>
            <p className="contact-glass__subtitle">
              Strategy, production, or consultation. Start the conversation.
            </p>
          </div>

          <form className="contact-glass__form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="form-label">Name</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form-label">Email</label>
              </div>
            </div>

            <div className="form-group">
              <select
                id="service"
                className="form-select"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Service</option>
                <option value="posters">APEX Posters</option>
                <option value="film">APEX Film</option>
                <option value="script">APEX Script</option>
                <option value="strategy">Strategy Consulting</option>
              </select>
              <label htmlFor="service" className="form-label form-label--select">Service</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                className="form-input form-textarea"
                placeholder="Project Details"
                rows="3"
                value={form.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="message" className="form-label">Project Details</label>
            </div>

            <button type="submit" className="form-submit">
              Send via WhatsApp
            </button>
          </form>

          {/* ── SMS fallback banner (shown when WhatsApp likely not installed) ── */}
          {fallback && (
            <div className="contact-fallback">
              <p className="contact-fallback__text">
                No WhatsApp? No problem — reach us directly:
              </p>
              <div className="contact-fallback__actions">
                <a
                  href={`sms:${SMS_NUMBER}?body=${encodeURIComponent(buildMessage())}`}
                  className="contact-fallback__btn contact-fallback__btn--sms"
                >
                  📱 Send SMS
                </a>
                <a
                  href={`mailto:apexmarketing427@gmail.com?subject=Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(buildMessage())}`}
                  className="contact-fallback__btn contact-fallback__btn--email"
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>
          )}

          <div className="contact-glass__footer">
            <div className="contact-info">
              <MapPin size={16} /> <span>Timaru, NZ</span>
            </div>
            <div className="contact-info">
              <Mail size={16} /> <span>apexmarketing427@gmail.com</span>
            </div>
            <div className="contact-info">
              <Phone size={16} /> <span>027 360 1331</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
