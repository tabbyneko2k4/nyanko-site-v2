// Hero.jsx
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxOffset = scrollPosition * 0.3;
      heroRef.current.style.backgroundPositionY = `calc(50% + ${parallaxOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className={
        "relative h-screen flex items-end bg-cover bg-center bg-no-repeat " +
        "bg-[url('/hero-image-mobile.png')] " +
        "md:bg-[url('/hero-image.jpg')] " +
        "bg-fixed"
      }
    >
      {/* --- Top Darkening Overlay --- */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-0" />

      {/* --- Bottom Fade Overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-[1]" />

      {/* Hero content container */}
      <div
        className="container mx-auto relative z-10 px-6 pb-24 md:pb-32 flex justify-between items-end w-full"
      >
        {/* Text Content Block */}
        <div
          className={`max-w-xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming mb-4 text-glow">
            TABBY NEKO
          </h1>
          <p className="text-lg md:text-xl mb-6 font-medium">
            Hello. I'm Tabby Neko (also known as Nyanko), a music producer and programmer.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#categories"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors hover-scale"
            >
              Explore My Work
            </a>
            <a
              href="/commission"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors hover-scale"
            >
              Work With Me
            </a>
          </div>
        </div>

        {/* --- Logo Image Block --- */}
        <div
            className={`hidden md:block transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <img
                src="/tabbyneko-logo.png"
                alt="Tabby Neko Stylized Logo"
                // ---- THAY ĐỔI CHIỀU CAO LOGO Ở ĐÂY ----
                // Giảm chiều cao để cố gắng khớp với khối text
                // Thử nghiệm với các giá trị này, ví dụ: 44=11rem, 48=12rem, 52=13rem
                className="md:h-44 lg:h-52 w-auto object-contain"
                // Các class cũ: className="h-56 md:h-64 lg:h-72 w-auto object-contain"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;