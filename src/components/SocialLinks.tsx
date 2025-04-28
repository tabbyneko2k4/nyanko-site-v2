import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Import icons (đảm bảo đã import đủ các icon cần thiết)
import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube, FaSpotify, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

const SocialLinks = () => {
  // --- Dữ liệu Links (Đã cập nhật theo yêu cầu trước đó) ---
  const tabbyNekoLinks = [
    { name: "SoundCloud", icon: FaSoundcloud, href: "https://soundcloud.com/tabbyneko", hoverColorClass: "group-hover:text-[#FF5500]" },
    { name: "Youtube", icon: FaYoutube, href: "https://www.youtube.com/@tabbynekokawaii", hoverColorClass: "group-hover:text-[#FF0000]" }, // Sửa lại hover color cho Youtube
    { name: "Spotify", icon: FaSpotify, href: "https://open.spotify.com/artist/4ujVUQ6lsATVZc8BUKx6QC", hoverColorClass: "group-hover:text-[#1DB954]" },
    { name: "Apple Music", icon: SiApplemusic, href: "https://music.apple.com/us/artist/tabby-neko/1479904561", hoverColorClass: "group-hover:text-black dark:group-hover:text-white" },
    { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/tabbynekokawaii", hoverColorClass: "group-hover:text-[#1877F2]" },
    { name: "X", icon: FaXTwitter, href: "https://x.com/tabbynekokawaii", hoverColorClass: "group-hover:text-black dark:group-hover:text-white" }, // Sửa lại href cho X
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/tabbyneko.kawaii/", hoverColorClass: "group-hover:text-[#E4405F]" },
  ];

  const nyankoLinks = [
     { name: "SoundCloud", icon: FaSoundcloud, href: "https://soundcloud.com/itsnyanko", hoverColorClass: "group-hover:text-[#FF5500]" },
     { name: "Youtube", icon: FaYoutube, href: "https://www.youtube.com/@nyankoisme", hoverColorClass: "group-hover:text-[#FF0000]" }, // Sửa lại hover color cho Youtube
     { name: "Spotify", icon: FaSpotify, href: "https://open.spotify.com/artist/55s6uxgHctw4uJl6n7qtRl", hoverColorClass: "group-hover:text-[#1DB954]" }, // Bỏ query string không cần thiết
     { name: "Apple Music", icon: SiApplemusic, href: "https://music.apple.com/us/artist/nyanko/1611291717", hoverColorClass: "group-hover:text-black dark:group-hover:text-white" },
     { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/itsnyanko", hoverColorClass: "group-hover:text-[#1877F2]" },
  ];

  // --- Render Function (không đổi) ---
  const renderLinkItem = (link) => {
    const IconComponent = link.icon;
    return (
      <a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-background hover:bg-primary/10 transition-all duration-300 hover:scale-105 overflow-hidden"
      >
        <IconComponent
          className={`h-5 w-5 text-foreground transition-colors duration-300 ${link.hoverColorClass} flex-shrink-0`}
        />
        <span className="text-foreground whitespace-nowrap">{link.name}</span>
      </a>
    );
  };

  return (
    // Giảm padding nếu cần, giữ container và căn giữa
    <div id="profiles" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-gaming mb-8 text-center">MY <span className="text-primary">PROFILES</span></h2>
      {/* Grid chính cho 2 card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"> {/* Giảm gap, có thể giảm max-w */}

        {/* Card 1: Tabby Neko */}
        {/* ---- THAY ĐỔI: Thêm flex flex-col ---- */}
        <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <CardHeader className="space-y-1 flex-shrink-0"> {/* flex-shrink-0 cho Header */}
            <CardTitle className="text-2xl font-gaming text-foreground group-hover:text-primary transition-colors">
              Tabby Neko
            </CardTitle>
          </CardHeader>
          {/* ---- THAY ĐỔI: Thêm flex-grow ---- */}
          <CardContent className="flex-grow">
            {/* ---- THAY ĐỔI: Grid 3 cột và gap ---- */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2"> {/* 2 cột mặc định, 3 cột từ sm, gap nhỏ */}
              {tabbyNekoLinks.map(renderLinkItem)}
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Nyanko */}
        {/* ---- THAY ĐỔI: Thêm flex flex-col ---- */}
        <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <CardHeader className="space-y-1 flex-shrink-0"> {/* flex-shrink-0 cho Header */}
            <CardTitle className="text-2xl font-gaming text-foreground group-hover:text-primary transition-colors">
              Nyanko
            </CardTitle>
          </CardHeader>
          {/* ---- THAY ĐỔI: Thêm flex-grow ---- */}
          <CardContent className="flex-grow">
            {/* ---- THAY ĐỔI: Grid 3 cột và gap (giống Tabby Neko) ---- */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2"> {/* Đồng bộ 3 cột từ sm */}
              {/* Nyanko có 5 items, sẽ hiển thị 3 ở hàng 1, 2 ở hàng 2 */}
              {nyankoLinks.map(renderLinkItem)}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default SocialLinks;