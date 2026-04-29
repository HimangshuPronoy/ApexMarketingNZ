import { useState } from 'react';
import './FloatingWhatsApp.css';

const WHATSAPP_NUMBER = '64273601331';
const PREWRITTEN_MSG = encodeURIComponent(
  'Hi Apex Marketing! 👋\n\nI\'d love to find out more about your services. Can we chat?'
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREWRITTEN_MSG}`;

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      id="floating-whatsapp-btn"
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fwa-btn"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pulse rings */}
      <span className="fwa-pulse fwa-pulse--1" />
      <span className="fwa-pulse fwa-pulse--2" />

      {/* WhatsApp SVG icon */}
      <svg
        className="fwa-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          fill="#fff"
          d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6-.8-8.5-2.3l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.8 30.2 8 27.2 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.8-11.8c-.5-.2-2.8-1.4-3.2-1.5-.5-.2-.8-.2-1.1.2-.3.5-1.2 1.5-1.5 1.8-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1.1-2.6-1.5-3.6-.4-.9-.8-.8-1.1-.8h-1c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8 0 2.2 1.7 4.4 1.9 4.7.2.3 3.3 5.1 8 7.1 1.1.5 2 .8 2.7 1 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z"
        />
      </svg>

      {/* Tooltip */}
      <span className={`fwa-tooltip${hovered ? ' fwa-tooltip--visible' : ''}`}>
        Chat with us
      </span>
    </a>
  );
}
