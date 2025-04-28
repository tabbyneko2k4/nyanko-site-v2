// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
// Import icons từ react-icons
import { FaFacebook, FaSpotify, FaSoundcloud, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Đóng menu mobile nếu cửa sổ được resize lớn hơn lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px là breakpoint 'lg'
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- Navigation Links ---
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Programming", path: "/program" },
    { name: "Commission", path: "/commission" },
    { name: "About", path: "/about" },
  ];

  // --- Social & Contact Links Data ---
  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/tabbynekokawaii", brandDarkClass: "dark:text-[#1877F2] dark:hover:text-[#1877F2]/80", type: "social" },
    { name: "Spotify", icon: FaSpotify, href: "https://open.spotify.com/artist/4ujVUQ6lsATVZc8BUKx6QC", brandDarkClass: "dark:text-[#1DB954] dark:hover:text-[#1DB954]/80", type: "social" },
    { name: "X", icon: FaXTwitter, href: "https://x.com/tabbynekokawaii", brandDarkClass: "", type: "social" },
    { name: "SoundCloud", icon: FaSoundcloud, href: "https://soundcloud.com/tabbyneko", brandDarkClass: "dark:text-[#FF5500] dark:hover:text-[#FF5500]/80", type: "social" },
    { name: "Email", icon: FaEnvelope, href: "mailto:tam.ha.cm.ag@gmail.com", brandDarkClass: "dark:text-[#ffa69e] dark:hover:text-[#FF5500]/80", type: "contact" }, // Sửa lại màu hover contact dark
    { name: "Phone", icon: FaPhoneAlt, href: "tel:+84766933787", brandDarkClass: "dark:text-[#7fecd0] dark:hover:text-[#FF5500]/80", type: "contact" }, // Sửa lại màu hover contact dark
  ];

  // Helper function to build classes for social links
  const getSocialLinkClasses = (social) => {
    const baseClasses = "text-foreground hover:text-foreground/80 transition-colors duration-200";
    const darkOverrideClasses = social.brandDarkClass ? social.brandDarkClass : "dark:hover:text-foreground/80";
    return `group ${baseClasses} ${darkOverrideClasses}`;
  };


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container relative mx-auto px-4 py-4 flex items-center">

        {/* Logo Section (Left) - Giữ nguyên */}
        <div className="flex-shrink-0 z-10">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Tabby Neko Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links Section (Center - Desktop Only) */}
        {/* ---- THAY ĐỔI: md -> lg ---- */}
        <div className="hidden lg:flex absolute inset-x-0 justify-center pointer-events-none">
          <div className="flex items-center space-x-6 pointer-events-auto">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (Social Links & Theme Toggle - Desktop Only) */}
        {/* ---- THAY ĐỔI: md -> lg ---- */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0 ml-auto z-10">
          {/* Social Links Icons */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              const targetProp = social.type === 'social' ? '_blank' : '_self';
              const relProp = targetProp === '_blank' ? 'noopener noreferrer' : undefined;
              const finalClasses = getSocialLinkClasses(social);
              return (
                <a key={social.name} href={social.href} target={targetProp} rel={relProp} className={finalClasses} aria-label={social.name}>
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Area (Mobile Only) */}
        {/* ---- THAY ĐỔI: md -> lg ---- */}
        <div className="flex items-center lg:hidden gap-2 ml-auto"> {/* Thay md:hidden thành lg:hidden */}
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="ml-1" aria-label="Menu">
            {/* Hamburger Icon */}
            <div className="w-6 flex flex-col items-center justify-center gap-1.5">
               <span className={`block h-0.5 w-full bg-foreground transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
               <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "w-0" : "w-full"}`}></span>
               <span className={`block h-0.5 w-full bg-foreground transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {/* ---- THAY ĐỔI: md -> lg ---- */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${ // Thay md:hidden thành lg:hidden
          isMobileMenuOpen
            ? "max-h-[400px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
         <div className="container mx-auto px-4 py-4 bg-background/90 backdrop-blur-md">
           <div className="flex flex-col gap-4">
             <div className="flex flex-col gap-2">
               {navLinks.map((link) => ( <Link key={link.name} to={link.path} className="text-foreground hover:text-primary py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link> ))}
             </div>
             <div className="flex items-center flex-wrap gap-x-5 gap-y-3 py-2 border-t border-border/50 mt-2">
               {socialLinks.map((social) => {
                 const IconComponent = social.icon;
                 const targetProp = social.type === 'social' ? '_blank' : '_self';
                 const relProp = targetProp === '_blank' ? 'noopener noreferrer' : undefined;
                 const finalClasses = getSocialLinkClasses(social);
                 return ( <a key={social.name} href={social.href} target={targetProp} rel={relProp} className={finalClasses} aria-label={social.name} onClick={() => setIsMobileMenuOpen(false)}><IconComponent className="h-5 w-5" /></a> );
               })}
             </div>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;