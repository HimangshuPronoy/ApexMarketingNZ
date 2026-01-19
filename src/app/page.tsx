import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c75d33ad-f488-499b-b831-06c838af12bd/APEXNZ-1768811265214.png?width=8000&height=8000&resize=contain')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-light italic mb-6 tracking-wide leading-tight">
              Rooted in Vision.<br className="hidden sm:block" /> Growing Global.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up">
            <p className="text-white text-lg md:text-2xl mb-12 font-light max-w-2xl mx-auto">
              Apex Marketing New Zealand — Where Precision Meets Creativity.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <Link
              href="/portfolio"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-10 sm:px-16 py-4 sm:py-5 text-lg sm:text-xl transition-all duration-300 hover:scale-105"
            >
              Explore Our Work
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
