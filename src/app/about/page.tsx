import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function About() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />

      <main className="pt-24 pb-20">
        <section className="px-6 md:px-12 lg:px-24 py-20">
          <FadeIn direction="down" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-light italic text-center mb-20">
              Who We Are
            </h1>
          </FadeIn>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <StaggerContainer delay={0.2} staggerDelay={0.15} className="space-y-8">
              <FadeIn direction="up">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Apex Marketing New Zealand was built in the South Pacific where integrity, discipline, and innovation meet.
                </p>
              </FadeIn>
              <FadeIn direction="up">
                <p className="text-gray-400 text-lg leading-relaxed">
                  We are strategists and storytellers grounded in the values of Aotearoa and guided by a global perspective. Our approach combines strategic precision with creative clarity to deliver work that connects, engages, and endure.
                </p>
              </FadeIn>
              <FadeIn direction="up">
                <p className="text-gray-400 text-lg leading-relaxed">
                  From Timaru to the world, we operate with intent and insight. Aligning international expertise with local understanding to help brands grow with purpose.
                </p>
              </FadeIn>
            </StaggerContainer>

            <ScaleIn delay={0.4} className="flex justify-center">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c75d33ad-f488-499b-b831-06c838af12bd/image-1768811327164.png?width=8000&height=8000&resize=contain" 
                alt="APEX Logo" 
                className="w-80 h-auto object-contain"
              />
            </ScaleIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
