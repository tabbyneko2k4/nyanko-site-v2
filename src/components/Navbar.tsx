import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcherButton from "./ui/LanguageSwitcherButton";

// Import icons
import { FaFacebook, FaSpotify, FaSoundcloud, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const commissionPages = ['/commission', '/code-commission', '/music-commission'];
  const showLanguageSwitcher = commissionPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // --- Dữ liệu cho các link ---
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Programming", path: "/program" },
    { name: "Commission", path: "/commission" },
    { name: "About", path: "/about" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/tabbynekokawaii", darkModeColor: "dark:text-[#1877F2]" },
    { name: "X", icon: FaXTwitter, href: "https://x.com/tabbynekokawaii", darkModeColor: "dark:text-foreground" },
    { name: "Spotify", icon: FaSpotify, href: "https://open.spotify.com/artist/4ujVUQ6lsATVZc8BUKx6QC", darkModeColor: "dark:text-[#1DB954]" },
    { name: "SoundCloud", icon: FaSoundcloud, href: "https://soundcloud.com/tabbyneko", darkModeColor: "dark:text-[#FF5500]" },
    { name: "Email", icon: FaEnvelope, href: "mailto:tam.ha.cm.ag@gmail.com", darkModeColor: "dark:text-[#ffa69e]" },
    { name: "Phone", icon: FaPhoneAlt, href: "tel:+84766933787", darkModeColor: "dark:text-[#7fecd0]" },
  ];

  // Helper function để tạo class nhất quán cho các icon link
  const getIconLinkClasses = (social) => {
    const baseLayout = "inline-flex items-center justify-center rounded-full h-10 w-10 transition-colors hover:bg-primary/20"; // <-- Đảm bảo màu nền hover là `accent`
    const colorLogic = `text-foreground/80 ${social.darkModeColor} hover:text-foreground/60 dark:hover:opacity-80`;
    return `${baseLayout} ${colorLogic}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container relative mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo (Left Side) */}
        <div className="flex-shrink-0 z-10">
          <Link to="/" onClick={closeMobileMenu} aria-label="Go to Homepage">
            <img src="/logo.png" alt="Tabby Neko Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links (Center - Desktop Only) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Icons & Controls (Right Side) */}
        <div className="flex items-center gap-1 z-10">
          {/* Social Links (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-1">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={getIconLinkClasses(social)} aria-label={social.name}>
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Control Buttons */}
          {showLanguageSwitcher && <LanguageSwitcherButton language={language} setLanguage={setLanguage} />}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(prev => !prev)} aria-label="Toggle Menu" className="rounded-full">
              <div className="w-6 flex flex-col items-center justify-center gap-1.5">
                <span className={`block h-0.5 w-full bg-foreground transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "w-0" : "w-full"}`} />
                <span className={`block h-0.5 w-full bg-foreground transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container mx-auto px-4 py-4 bg-background/90 backdrop-blur-md">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-foreground hover:text-primary py-2 transition-colors block" onClick={closeMobileMenu}>
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile Social Links */}
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 py-2 border-t border-border/50 mt-2">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={getIconLinkClasses(social)} aria-label={social.name} onClick={closeMobileMenu}>
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;