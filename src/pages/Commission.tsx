import { useState, useEffect } from "react";
// Import icons từ react-icons
import { FaTrello } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
// Giữ lại các icon lucide cần thiết
import { ChevronDown, Languages } from "lucide-react"; // Thêm Languages icon cho nút đổi NN
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button"; // Import Button component
import { commissionContent } from "./commissionContent"; // Import content object

// --- Dữ liệu Video Samples ---
const youtubeSampleVideos = [
  { id: "wX4oM-xTsow", title: "Sample Video 1" },
  { id: "epMaVX7sI_w", title: "Sample Video 2" },
  { id: "oVqHbMbbURM", title: "Sample Video 6" },
  { id: "gWgt41yh7Cc", title: "Sample Video 3" },
  { id: "xDB0P_qjPMk", title: "Sample Video 4" },
  { id: "K5rtQQCoGk4", title: "Sample Video 5" },
];

// --- URL Playlist SoundCloud ---
const soundcloudPlaylistUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1489507381%3Fsecret_token%3Ds-SwAAYVZTnca&color=%23a1caff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const soundcloudUserUrl = "https://soundcloud.com/tabbyneko";
const soundcloudSetUrl = "https://soundcloud.com/tabbyneko/sets/sample-cho-khach-sample-for/s-SwAAYVZTnca";
const soundcloudSetTitle = "Sample cho khách | Sample for customers";


const Commission = () => {
  const [language, setLanguage] = useState('en');
  const content = commissionContent[language]; // Lấy content dựa trên state

  useEffect(() => {
    document.title = `Commissions | Tabby Neko`;
  }, []);

  const trelloColor = "#0079BF";
  const fiverrColor = "#1DBF73";

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-background to-secondary/20 animate-page-enter">
      {/* Language Switch Button */}
      <div className="fixed top-24 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          aria-label="Switch Language"
          className="bg-background/80 backdrop-blur-sm hover:bg-primary/20"
        >
          <Languages className="h-5 w-5" />
          <span className="sr-only">{content.buttons.switchLang}</span>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-gaming mb-8 text-center animate-content-enter">
          {content.pageTitle.main}{" "}
          <span className="text-primary">{content.pageTitle.highlight}</span>
        </h1>

        {/* Intro & Links */}
        <div className="max-w-4xl mx-auto mb-12 animate-content-enter [animation-delay:200ms]">
          <div className="glass-card p-8 text-center mb-8">
            <p className="text-lg mb-6">
              {content.intro}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Trello Link */}
              <a
                href="https://trello.com/b/2BQcHL4v/tabby-neko-nyanko-commission-info"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-primary/90 hover:bg-primary text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaTrello className={`h-5 w-5 text-white transition-colors duration-300 group-hover:text-[${trelloColor}]`} />
                {content.buttons.trello}
              </a>
              {/* Fiverr Link */}
              <a
                href="https://www.fiverr.com/tabbyneko"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <SiFiverr className={`h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-[${fiverrColor}]`} />
                {content.buttons.fiverr}
              </a>
            </div>
          </div>
        </div>

        {/* --- Samples Section Updated --- */}
        <div className="mb-16 animate-content-enter [animation-delay:400ms]">
          <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.samples}</h2>
          <Collapsible className="w-full">
             <div className="flex justify-center mb-4">
               <CollapsibleTrigger className="flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-all duration-300 hover:scale-105 shadow-lg">
                 <span>{content.buttons.viewSamples}</span>
                 <ChevronDown className="h-4 w-4" />
               </CollapsibleTrigger>
             </div>
             <CollapsibleContent className="space-y-8">
               {/* Grid of YouTube videos - Updated */}
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
                 {youtubeSampleVideos.map((video, index) => ( // Sử dụng mảng youtubeSampleVideos
                   <div key={video.id} // Dùng video.id làm key
                        className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                     <iframe
                       className="w-full h-full"
                       src={`https://www.youtube.com/embed/${video.id}`} // Dùng video.id
                       title={video.title} // Dùng video.title
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       referrerPolicy="strict-origin-when-cross-origin"
                       allowFullScreen>
                     </iframe>
                   </div>
                 ))}
               </div>
               {/* SoundCloud Playlist - Updated */}
               <div className="glass-card p-6 rounded-lg shadow-lg max-w-4xl mx-auto"> {/* Giới hạn chiều rộng cho đẹp hơn */}
                 <iframe
                   width="100%"
                   height="350" // Giảm height một chút cho phù hợp hơn
                   scrolling="no"
                   frameBorder="no"
                   allow="autoplay"
                   src={soundcloudPlaylistUrl} // Sử dụng biến URL
                   className="mb-2"
                 ></iframe>
                 <div className="text-sm text-muted-foreground font-sans">
                   <a href={soundcloudUserUrl} // Sử dụng biến URL
                      title="Tabby Neko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors">
                     Tabby Neko
                   </a>
                   {" · "}
                   <a href={soundcloudSetUrl} // Sử dụng biến URL
                      title={soundcloudSetTitle} // Sử dụng biến title
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors">
                     {soundcloudSetTitle} {/* Hiển thị title */}
                   </a>
                 </div>
               </div>
             </CollapsibleContent>
          </Collapsible>
        </div>
        {/* --- End Samples Section Update --- */}

        {/* Pricing Section (Giữ nguyên) */}
        <div className="mb-16 animate-content-enter [animation-delay:600ms]">
          <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.pricing}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.pricing.tiers.map((tier, index) => (
              <div key={index} className="glass-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                <h3 className="text-2xl font-gaming mb-2">{tier.name}</h3>
                <div className="mb-4">
                     <p className="text-3xl font-bold text-primary">{tier.usd}</p>
                     <p className="text-lg text-muted-foreground">{tier.vnd}</p>
                </div>
                <ul className="space-y-3 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary mt-[0.4rem]"></div>
                       <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
           <p className="text-center text-muted-foreground mt-6">{content.pricing.note}</p>
        </div>

        {/* Terms of Service Section (Giữ nguyên) */}
        <div className="mb-16 animate-content-enter [animation-delay:800ms]">
           <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.tos}</h2>
           <div className="glass-card p-6 shadow-lg max-w-4xl mx-auto">
             <p className="italic text-muted-foreground text-center mb-4">{content.tos.intro}</p>
             <p className="italic text-muted-foreground text-center mb-6">{content.tos.noTrelloNames}</p>
             <Accordion type="single" collapsible className="w-full">
               {content.tos.sections.map((section, index) => (
                 <AccordionItem key={index} value={`tos-${index}`}>
                   <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">{section.title}</AccordionTrigger>
                   <AccordionContent className="text-muted-foreground">
                     <ul className="list-disc space-y-2 pl-5">
                       {section.points.map((point, pIndex) => ( <li key={pIndex}>{point}</li> ))}
                     </ul>
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </div>
         </div>

        {/* FAQ Section (Giữ nguyên) */}
        <div className="animate-content-enter [animation-delay:1000ms]">
           <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.faq}</h2>
           <div className="max-w-4xl mx-auto">
             <Accordion type="multiple" className="w-full glass-card p-6 space-y-2">
               {content.faq.map((faqItem, index) => (
                 <AccordionItem key={index} value={`faq-${index}`}>
                   <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">{faqItem.q}</AccordionTrigger>
                   <AccordionContent className="text-muted-foreground">{faqItem.a}</AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </div>
         </div>

      </div>
      <ScrollToTop />
    </div>
  );
};

export default Commission;