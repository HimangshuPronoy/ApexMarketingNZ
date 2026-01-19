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
                      <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] aspect-[3/4] group border border-white/5 shadow-2xl">
                        {/* Background Blur Effect for Fill */}
                        <div 
                          className="absolute inset-0 opacity-20 blur-xl scale-125"
                          style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        />
                        
                        <Image
                          src={item.image!}
                          alt={item.title}
                          fill
                          className="object-contain z-10 transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      </div>
                      
                      <div className="mt-5 px-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#d4a853] text-[10px] tracking-[0.2em] uppercase font-semibold">{item.category}</span>
                          <div className="flex gap-1">
                            {item.tags?.slice(0, 2).map((tag, i) => (
                              <span key={i} className="text-[9px] text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{tag}</span>
                            ))}
                          </div>
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
                      <div className="bg-[#111] rounded-xl p-8 aspect-[3/4] flex flex-col relative overflow-hidden border border-white/5 hover:border-[#d4a853]/30 transition-all duration-300 shadow-lg group-hover:shadow-[#d4a853]/5">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a853]/50 to-transparent opacity-50" />
                        
                        <div className="mb-auto">
                           <span className="text-[#d4a853] text-[10px] tracking-[0.2em] uppercase font-semibold">Script Concept</span>
                        </div>
                        
                        <div className="flex-grow flex flex-col justify-center text-center">
                          <h4 className="text-white text-2xl font-medium mb-4">{item.title}</h4>
                          <p className="text-gray-300 text-lg italic font-light leading-relaxed">&quot;{item.tagline}&quot;</p>
                        </div>
                        
                        <div className="mt-auto border-t border-white/10 pt-6">
                           <div className="flex justify-between text-xs text-gray-500 mb-2">
                             <span>Platform</span>
                             <span className="text-gray-400">{item.platform}</span>
                           </div>
                           <div className="flex justify-between text-xs text-gray-500">
                             <span>Format</span>
                             <span className="text-gray-400">{item.format}</span>
                           </div>
                        </div>
                      </div>
                      
                      {/* Spacer to align with poster text area if needed, though aspect ratio handles most */}
                      <div className="mt-5 px-1 opacity-0 pointer-events-none" aria-hidden="true">
                         <div className="h-4 w-1/3 bg-gray-800 mb-2" />
                         <div className="h-6 w-2/3 bg-gray-800" />
                      </div>
                    </FadeIn>
                  );
                }

                if (item.type === "tagline") {
                  return (
                    <ScaleIn key={index} className="group h-full flex flex-col">
                       <div className="bg-[#111] rounded-xl p-8 aspect-[3/4] flex flex-col relative overflow-hidden border border-white/5 hover:border-[#d4a853]/30 transition-colors duration-300 shadow-lg justify-center items-center text-center">
                        <div className="absolute top-8 left-0 right-0">
                           <span className="text-[#d4a853] text-[10px] tracking-[0.2em] uppercase font-semibold">Brand Tagline</span>
                        </div>
                        <h4 className="text-white text-3xl md:text-4xl font-cormorant font-medium leading-tight italic px-4 text-balance">{item.title}</h4>
                      </div>
                      
                      <div className="mt-5 px-1 opacity-0 pointer-events-none" aria-hidden="true">
                         <div className="h-6 w-2/3 bg-gray-800" />
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
