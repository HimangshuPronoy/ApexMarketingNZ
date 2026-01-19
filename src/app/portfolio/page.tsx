import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

const portfolioItems = [
  {
    type: "poster",
    category: "Client Project",
    title: "TradoxVPS",
    subtitle: "Trading Infrastructure",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c75d33ad-f488-499b-b831-06c838af12bd/image-1768809884547.png?width=8000&height=8000&resize=contain",
    tags: ["Branding", "Design", "Marketing"],
    orientation: "portrait",
  },
  {
    type: "script",
    category: "Concept Preview",
    title: "Script Example",
    tagline: "The world doesn't wait — neither should your brand.",
    platform: "Instagram / Facebook",
    format: "Copywriting only — not ad design.",
  },
  {
    type: "poster",
    category: "Service Showcase",
    title: "Digital Marketing",
    subtitle: "Social Media Solutions",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c75d33ad-f488-499b-b831-06c838af12bd/image-1768809890614.png?width=8000&height=8000&resize=contain",
    tags: ["Social Media", "Content", "Strategy"],
    orientation: "portrait",
  },
  {
    type: "tagline",
    category: "Concept Preview",
    title: "Precision Built for Performance.",
  },
  {
    type: "poster",
    category: "Client Project",
    title: "Tailor Service",
    subtitle: "Bespoke Fashion",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c75d33ad-f488-499b-b831-06c838af12bd/image-1768809896483.png?width=8000&height=8000&resize=contain",
    tags: ["Poster Design", "Advertising"],
    orientation: "portrait",
  },
  {
    type: "script",
    category: "Concept Preview",
    title: "Script Example",
    tagline: "Where strategy meets language.",
    platform: "Instagram / Facebook",
    format: "Copywriting only — not ad design.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />

      <main className="pt-32 pb-20">
        <section className="px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <FadeIn direction="down" delay={0.1}>
              <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase mb-4 block">Our Work</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-6">
                The APEX Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                Concept work. Real execution. Every piece here reflects the APEX standard — strategy, design, and precision working in sync.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1} delay={0.4}>
              {portfolioItems.map((item, index) => {
                if (item.type === "poster") {
                  return (
                    <ScaleIn key={index} className="group h-full flex flex-col">
                      <div className="relative rounded-xl overflow-hidden bg-[#111] aspect-[3/4] group border border-white/5">
                        <Image
                          src={item.image!}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Overlay Content on Hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                           <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags?.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-[10px] text-black bg-white/90 px-2 py-1 rounded font-medium uppercase tracking-wide">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#d4a853] text-xs tracking-[0.2em] uppercase">{item.category}</span>
                        </div>
                        <h3 className="text-white text-xl font-medium mb-1 group-hover:text-[#d4a853] transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.subtitle}</p>
                      </div>
                    </ScaleIn>
                  );
                }

                if (item.type === "script") {
                  return (
                    <FadeIn key={index} direction="up" className="group h-full flex flex-col">
                      <div className="bg-[#111] rounded-xl p-8 aspect-[3/4] flex flex-col justify-center items-center text-center border border-white/5 hover:border-[#d4a853]/30 transition-colors duration-300 h-full relative overflow-hidden">
                        <div className="absolute top-6 left-0 right-0">
                           <span className="text-[#d4a853] text-[10px] tracking-[0.2em] uppercase">Script Concept</span>
                        </div>
                        
                        <h4 className="text-white text-2xl font-medium mb-6">{item.title}</h4>
                        <p className="text-gray-300 text-base mb-2 italic">&quot;{item.tagline}&quot;</p>
                        <div className="my-6 w-12 h-[1px] bg-white/10" />
                        <p className="text-gray-500 text-sm mb-1"><span className="text-gray-400">Platform:</span> {item.platform}</p>
                        <p className="text-gray-500 text-sm"><span className="text-gray-400">Format:</span> {item.format}</p>
                        
                        <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                          <p className="text-gray-700 text-[10px] tracking-wide uppercase">Copywriting Sample</p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                }

                if (item.type === "tagline") {
                  return (
                    <ScaleIn key={index} className="group h-full">
                       <div className="bg-[#111] rounded-xl p-8 aspect-[3/4] flex flex-col justify-center items-center text-center border border-white/5 hover:border-[#d4a853]/30 transition-colors duration-300 h-full relative">
                        <div className="absolute top-6 left-0 right-0">
                           <span className="text-[#d4a853] text-[10px] tracking-[0.2em] uppercase">Brand Tagline</span>
                        </div>
                        <h4 className="text-white text-3xl font-cormorant font-medium leading-tight italic px-4">{item.title}</h4>
                      </div>
                    </ScaleIn>
                  );
                }

                return null;
              })}
            </StaggerContainer>
          </div>

          <FadeIn delay={0.6} direction="up" className="flex justify-center mt-20">
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-[#d4a853] text-black px-12 py-4 text-lg font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,83,0.3)]"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
