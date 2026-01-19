import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function Services() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />

      <main className="pt-24 pb-20">
        <section className="px-6 md:px-12 lg:px-24 py-20">
          <FadeIn direction="down" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-light italic text-center mb-6">
              What We Do
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-20">
              Comprehensive marketing solutions designed to elevate your brand and drive growth.
            </p>
          </FadeIn>

          <StaggerContainer className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-20" staggerDelay={0.15} delay={0.3}>
            <FadeIn delay={0.0} direction="up" className="h-full">
              <div className="bg-[#1a1a1a] rounded-lg p-8 border border-white/10 h-full hover:border-white/30 transition-colors duration-300">
                <svg className="w-12 h-12 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-white text-2xl font-medium mb-4">APEX Posters</h3>
                <p className="text-gray-400 leading-relaxed">
                  Static visuals that stop the scroll. We design striking digital posters optimized for social placement, Facebook, Messenger, and Instagram. Every frame delivers your message with precision and visual impact.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.0} direction="up" className="h-full">
              <div className="bg-[#1a1a1a] rounded-lg p-8 border border-white/10 h-full hover:border-white/30 transition-colors duration-300">
                <svg className="w-12 h-12 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                <h3 className="text-white text-2xl font-medium mb-4">APEX Film</h3>
                <p className="text-gray-400 leading-relaxed">
                  High-performance video advertising made to convert. Short-form or cinematic, each piece is built for TikTok Ads, Facebook, Messenger, or Instagram to drive attention and action across every feed.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.0} direction="up" className="h-full">
              <div className="bg-[#1a1a1a] rounded-lg p-8 border border-white/10 h-full hover:border-white/30 transition-colors duration-300">
                <svg className="w-12 h-12 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-white text-2xl font-medium mb-4">APEX Script</h3>
                <p className="text-gray-400 leading-relaxed">
                  Words that sell. From ad copy to full campaign scripts, we craft persuasive text that captures intent and emotion - Ready to power your next ad or promotional push.
                </p>
              </div>
            </FadeIn>
          </StaggerContainer>

          <div className="max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.5}>
              <Link 
                href="/contact"
                className="block border border-white/30 rounded-lg p-8 hover:border-white/50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-white text-3xl font-light mb-2">Ready to Get Started?</h2>
                    <p className="text-gray-400">Let&apos;s discuss how we can help your brand grow with purpose.</p>
                  </div>
                  <svg className="w-8 h-8 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
