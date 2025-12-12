import { useState, useEffect } from "react";
// Import icons
import { FaTrello } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { ArrowUp } from "lucide-react";
// Import các component UI cần thiết
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LanguageSwitcherButton from '@/components/ui/LanguageSwitcherButton';
// Import content
import { codeCommissionContent } from "./codeCommissionContent";
// Import custom hook
import { useAutoLanguage } from '@/hooks/useAutoLanguage';
import { useLanguage } from '@/contexts/LanguageContext';
import NationalityWelcomeModal from '@/components/NationalityWelcomeModal';

const CodeCommission = () => {
  const { language } = useLanguage();
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const content = codeCommissionContent[language];

  useEffect(() => {
    const toggleVisibility = () => { window.scrollY > 300 ? setIsScrollTopVisible(true) : setIsScrollTopVisible(false); };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };
  useEffect(() => { document.title = `Code Commissions | Tabby Neko`; }, []);

  const trelloColor = "#0079BF";
  const fiverrColor = "#1DBF73";

  // Helper function to parse **bold** text
  const parseBoldText = (text) => {
    const parts = text.split('**');
    return parts.map((part, index) =>
      index % 2 === 1 ? <strong key={index} className="text-foreground font-semibold">{part}</strong> : part
    );
  };

  return (
    <>
      <NationalityWelcomeModal />
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

            {/* Các gói giá */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {content.pricing.tiers.map((tier, index) => (
                <div key={index} className="glass-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                  <h3 className="text-2xl font-gaming mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-primary">{tier.price}</p>
                  </div>
                  <ul className="space-y-3 flex-grow mb-6">
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

            {/* Tiện ích bổ sung (Add-ons) */}
            <div className="max-w-2xl mx-auto mt-12">
              <h3 className="text-xl font-gaming text-center mb-4">{content.pricing.addOns.title}</h3>
              <div className="glass-card p-6 rounded-lg space-y-4">
                {content.pricing.addOns.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                    </div>
                    <p className="font-bold text-primary">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8 whitespace-pre-line">{content.pricing.note}</p>
          </div>

          {/* --- Combos Section (New) --- */}
          <div className="mb-12 max-w-6xl mx-auto animate-content-enter [animation-delay:300ms]">
            <h3 className="text-xl font-gaming text-center mb-4">Combo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.combos && content.combos.map((combo, index) => (
                <div key={index} className="glass-card p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <p className="font-medium text-lg mb-4 text-center leading-relaxed text-foreground/90">
                    {combo.content}
                  </p>
                  <div className="text-center pt-4 border-t border-white/10 mt-auto">
                    <span className="text-2xl font-bold text-primary">{combo.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Workflow Section --- */}
          <div className="mb-20 animate-content-enter [animation-delay:800ms]">
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
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">{faqItem.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faqItem.a}</AccordionContent>
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
      </div>
    </>
  );
};

export default CodeCommission;