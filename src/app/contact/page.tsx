'use client';

import { useState, FormEvent } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const subject = encodeURIComponent(`Website inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:apexmarketing427@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />

      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <FadeIn direction="down" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 sm:mb-6">
                Connect
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
                Let&apos;s start a conversation about growing your brand.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32">
            <div>
              <FadeIn delay={0.3} direction="right">
                <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                  <StaggerContainer staggerDelay={0.1} delay={0.4} className="space-y-8 sm:space-y-10">
                    <FadeIn direction="up" delay={0}>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 sm:py-4 focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600 text-sm sm:text-base"
                        placeholder="Your Name"
                      />
                    </FadeIn>
                    <FadeIn direction="up" delay={0}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 sm:py-4 focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600 text-sm sm:text-base"
                        placeholder="Email Address"
                      />
                    </FadeIn>
                    <FadeIn direction="up" delay={0}>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 sm:py-4 focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600 text-sm sm:text-base"
                        placeholder="Company Name"
                      />
                    </FadeIn>
                    <FadeIn direction="up" delay={0}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 sm:py-4 focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600 resize-none text-sm sm:text-base"
                        placeholder="Your Message"
                      />
                    </FadeIn>
                  </StaggerContainer>
                  <div className="pt-4 sm:pt-6">
                    <FadeIn direction="up" delay={0.8}>
                      <button
                        type="submit"
                        className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white px-6 sm:px-8 py-3 sm:py-4 transition-colors flex items-center gap-3 text-sm sm:text-base"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                        Send Message
                      </button>
                    </FadeIn>
                  </div>
                </form>
              </FadeIn>
            </div>

            <div className="space-y-8 sm:space-y-10">
              <FadeIn delay={0.4} direction="left">
                <div>
                  <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4 sm:mb-6">Get in Touch</h2>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    Whether you&apos;re looking to build a brand from scratch or take your marketing to the next level, we&apos;re here to help. Reach out and let&apos;s create something exceptional together.
                  </p>
                </div>
              </FadeIn>

              <StaggerContainer className="space-y-6 sm:space-y-8" delay={0.6}>
                <FadeIn direction="up" delay={0}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-base sm:text-lg font-medium mb-1">Timaru, New Zealand</p>
                      <p className="text-gray-500 text-sm sm:text-base">Serving clients worldwide</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <a href="mailto:apexmarketing427@gmail.com" className="text-white text-base sm:text-lg font-medium mb-1 block hover:text-gray-300 transition-colors">
                        apexmarketing427@gmail.com
                      </a>
                      <p className="text-gray-500 text-sm sm:text-base">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <a href="tel:+64273601331" className="text-white text-base sm:text-lg font-medium mb-1 block font-mono hover:text-gray-300 transition-colors">
                        027 360 1331
                      </a>
                      <p className="text-gray-500 text-sm sm:text-base font-mono">If outside of NZ (+64 27 360 1331)</p>
                    </div>
                  </div>
                </FadeIn>
              </StaggerContainer>

              <FadeIn delay={0.8} direction="up">
                <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-[#1a1a1a] rounded-lg border border-white/10">
                  <p className="text-white text-base sm:text-lg italic leading-relaxed text-center">
                    &quot;Success grows from genuine connection and shared vision.&quot;
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
