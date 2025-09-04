import { useState, useEffect, Fragment } from "react";
// Import icons
import { FaTrello } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { ArrowUp } from "lucide-react";
// Import các component UI cần thiết
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// Import content
import { commissionContent } from "./musicCommissionContent";

// --- Dữ liệu Video Samples & SoundCloud (giữ nguyên) ---
const youtubeSampleVideos = [
  { id: "wX4oM-xTsow", title: "Sample Video 1" },
  { id: "epMaVX7sI_w", title: "Sample Video 2" },
  { id: "oVqHbMbbURM", title: "Sample Video 6" },
  { id: "gWgt41yh7Cc", title: "Sample Video 3" },
];
const soundcloudPlaylistUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1489507381%3Fsecret_token%3Ds-SwAAYVZTnca&color=%23a1caff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const soundcloudUserUrl = "https://soundcloud.com/tabbyneko";
const soundcloudSetUrl = "https://soundcloud.com/tabbyneko/sets/sample-cho-khach-sample-for/s-SwAAYVZTnca";
const soundcloudSetTitle = "Sample cho khách | Sample for customers";

const Commission = () => {
  const [language, setLanguage] = useState('en');
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const content = commissionContent[language];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const toggleVisibility = () => { window.scrollY > 300 ? setIsScrollTopVisible(true) : setIsScrollTopVisible(false); };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };
  useEffect(() => { document.title = `Commissions | Tabby Neko`; }, []);

  const trelloColor = "#0079BF";
  const fiverrColor = "#1DBF73";
  const detailKeys = content.pricing.tiers.length > 0 ? Object.keys(content.pricing.tiers[0].details) : [];

  // Helper function to parse **bold** text
  const parseBoldText = (text) => {
    const parts = text.split('**');
    return parts.map((part, index) => 
      index % 2 === 1 ? <strong key={index} className="text-foreground font-semibold">{part}</strong> : part
    );
  };

  return (
    <>
      <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-background to-secondary/20 animate-page-enter">
        <div className="container mx-auto px-4 py-12">
          
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-gaming mb-8 text-center animate-content-enter">
            {content.pageTitle.main}{" "}
            <span className="text-primary">{content.pageTitle.highlight}</span>
          </h1>

          {/* Intro & Links */}
          <div className="max-w-4xl mx-auto mb-12 animate-content-enter [animation-delay:200ms]">
            <div className="glass-card p-8 text-center mb-8">
              <p className="text-lg mb-6 leading-relaxed">{content.intro}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://trello.com/b/2BQcHL4v/tabby-neko-nyanko-commission-info" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-primary/90 hover:bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <FaTrello className={`h-5 w-5 transition-colors duration-300 group-hover:text-[${trelloColor}]`} />{content.buttons.trello}
                </a>
                <a href="https://www.fiverr.com/tabbyneko" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <SiFiverr className={`h-5 w-5 transition-colors duration-300 group-hover:text-[${fiverrColor}]`} />{content.buttons.fiverr}
                </a>
              </div>
            </div>
          </div>
          
          {/* --- Pricing Section --- */}
          <div className="mb-20 animate-content-enter [animation-delay:400ms]">
            <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.pricing}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {content.pricing.tiers.map((tier, index) => (
                <Dialog key={index}>
                    <div className="glass-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                        <h3 className="text-2xl font-gaming mb-2">{tier.name}</h3>
                        <div className="mb-4">
                            <p className="text-3xl font-bold text-primary">{tier.usd}</p>
                            <p className="text-lg text-muted-foreground">{tier.vnd}</p>
                        </div>
                        <ul className="space-y-3 flex-grow mb-6">
                          {tier.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-[0.4rem]"></div>
                              <span>{feature}</span>
                              </li>
                          ))}
                        </ul>
                        <DialogTrigger asChild>
                            <Button>{content.buttons.viewDetails}</Button>
                        </DialogTrigger>
                    </div>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>{tier.name}</DialogTitle>
                            <DialogDescription>{tier.usd} / {tier.vnd}</DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-x-4 gap-y-2 mt-4 text-sm">
                            {detailKeys.map(key => (
                                <Fragment key={key}>
                                    <div className="font-semibold text-muted-foreground">{content.pricing.detailLabels[key]}:</div>
                                    <div>{tier.details[key]}</div>
                                </Fragment>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>
              ))}
            </div>
            <div className="text-center mt-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">{content.pricing.compareButton}</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[95vw]">
                        <DialogHeader>
                            <DialogTitle>{content.pricing.compareTitle}</DialogTitle>
                        </DialogHeader>
                        <div className="relative max-h-[75vh] overflow-auto pr-2">
                            <Table>
                                <TableHeader>
                                    <TableRow className="sticky top-0 bg-background hover:bg-background">
                                        <TableHead className="font-bold text-foreground min-w-[200px]">{content.pricing.tierLabel}</TableHead>
                                        {content.pricing.tiers.map(tier => <TableHead key={tier.name} className="text-center font-bold text-foreground">{tier.name}</TableHead>)}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {detailKeys.map(key => (
                                        <TableRow key={key}>
                                            <TableCell className="font-medium">{content.pricing.detailLabels[key]}</TableCell>
                                            {content.pricing.tiers.map(tier => <TableCell key={tier.name} className="text-muted-foreground">{tier.details[key]}</TableCell>)}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <p className="text-center text-muted-foreground mt-8">{content.pricing.note}</p>
          </div>


          
          {/* --- Samples Section --- */}
          <div className="mb-20 animate-content-enter [animation-delay:800ms]">
            <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.samples}</h2>
            <div className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
                 {youtubeSampleVideos.map((video) => (
                   <div key={video.id} className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                     <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                   </div>
                 ))}
               </div>
               <div className="glass-card p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
                 <iframe width="100%" height="350" scrolling="no" frameBorder="no" allow="autoplay" src={soundcloudPlaylistUrl} className="mb-2"></iframe>
                 <div className="text-sm text-muted-foreground font-sans">
                   <a href={soundcloudUserUrl} title="Tabby Neko" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tabby Neko</a>
                   {" · "}
                   <a href={soundcloudSetUrl} title={soundcloudSetTitle} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{soundcloudSetTitle}</a>
                 </div>
               </div>
            </div>
          </div>

                    {/* --- NEW: Workflow Section --- */}
          <div className="mb-20 animate-content-enter [animation-delay:600ms]">
            <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.workflow}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-muted-foreground mb-8">{content.workflow.intro}</p>
              <div className="text-center mb-12">
                  <a href={content.workflow.formButton.url} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="shadow-lg hover:scale-105 transition-transform duration-300">{content.workflow.formButton.text}</Button>
                  </a>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/20">
                {content.workflow.stages.map((stage, index) => (
                  <div key={index} className="mb-12 relative">
                      <div className="absolute -left-[45px] top-1 h-6 w-6 bg-primary rounded-full border-4 border-background ring-2 ring-primary/50"></div>
                      <div className="glass-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-gaming mb-4 text-primary">{stage.title}</h3>
                        <ul className="space-y-3">
                          {stage.points.map((point, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-[0.45rem] flex-shrink-0"></div>
                              <span>{parseBoldText(point)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* --- TOS & FAQ Sections --- */}
            <div className="mb-20 animate-content-enter [animation-delay:1000ms]">
                <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.tos}</h2>
                <div className="glass-card p-2 md:p-3 shadow-lg max-w-4xl mx-auto rounded-xl overflow-hidden">
                    <iframe
                        src="https://docs.google.com/document/d/e/2PACX-1vTp_ROAtqo2CbG3tDF4DPut_Mo3waiIqGsTnPGbTj00yVShqLXHEj916idII2t7wty8RqK_6pH9zbvY/pub?embedded=true"
                        title="Terms of Service"
                        className="w-full h-[75vh] border-none rounded-lg bg-white"
                    >
                        Loading Terms of Service...
                    </iframe>
                </div>
            </div>
          <div className="animate-content-enter [animation-delay:1200ms]">
            <h2 className="text-3xl font-gaming mb-8 text-center">{content.sections.faq}</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="multiple" className="w-full glass-card p-6 space-y-2">
                {content.faq.map((faqItem, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                      {faqItem.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faqItem.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cụm nút sticky */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
        {isScrollTopVisible && (<Button variant="outline" size="icon" onClick={handleScrollToTop} aria-label="Scroll to top" className="bg-background/80 backdrop-blur-sm hover:bg-primary/20 h-11 w-11 rounded-full animate-in fade-in"><ArrowUp className="h-5 w-5" /></Button>)}
        <Button variant="outline" size="icon" onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')} aria-label="Switch Language" className="bg-background/80 backdrop-blur-sm hover:bg-primary/20 h-11 w-11 rounded-full font-bold text-lg">{language.toUpperCase()}<span className="sr-only">{content.buttons.switchLang}</span></Button>
      </div>
    </>
  );
};

export default Commission;