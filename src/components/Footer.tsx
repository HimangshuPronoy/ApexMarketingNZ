import FadeIn from "./animations/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-6 border-t border-white/10">
      <FadeIn direction="up" delay={0.2} className="max-w-4xl mx-auto text-center">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c75d33ad-f488-499b-b831-06c838af12bd/apex_website_banner-1768811348999.png?width=8000&height=8000&resize=contain" 
          alt="APEX Logo" 
          className="w-64 h-48 object-contain mx-auto mb-8 opacity-90"
        />
        <p className="text-white text-lg tracking-[0.3em] mb-6 font-medium">
          &quot;VINCERE AUT MORI&quot;
        </p>
        <p className="text-gray-500 text-sm">
          © 2025 Apex Marketing New Zealand
        </p>
      </FadeIn>
    </footer>
  );
}
