// CommissionLandingPage.tsx

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAutoLanguage } from '@/hooks/useAutoLanguage';
import LanguageSwitcherButton from '@/components/ui/LanguageSwitcherButton'; // Import component nút cờ
import { commissionLandingContent as contentData } from './commissionLandingContent';
import { useLanguage } from '@/contexts/LanguageContext';
import NationalityWelcomeModal from '@/components/NationalityWelcomeModal';

const CommissionLandingPage = () => {
  const { language } = useLanguage();
  const content = contentData[language];
  

  useEffect(() => {
    document.title = `Commissions | Tabby Neko`;
  }, []);

  if (!content) {
    return null; 
  }

  return (
    <>
      <NationalityWelcomeModal />
      <div className="min-h-screen pt-20 pb-12 flex items-center bg-gradient-to-b from-background to-secondary/20 animate-page-enter">
        <div className="container mx-auto px-4 py-12">
          
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-gaming mb-4 text-center">
            {content.pageTitle.main}{" "}
            <span className="text-primary">{content.pageTitle.highlight}</span>
          </h1>

          {/* Intro Text */}
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            {content.intro}
          </p>

          {/* Commission Category Cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {content.cards.map((card, index) => (
              <Link 
                to={card.linkTo} 
                key={index} 
                className="group block glass-card p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col h-full text-center">
                  <div className="mb-6">
                    <card.Icon className="h-16 w-16 mx-auto text-primary/50 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <h2 className="text-3xl font-gaming mb-4">
                    {card.title.main}{" "}
                    <span className="text-primary">{card.title.highlight}</span>
                  </h2>
                  
                  <p className="text-muted-foreground flex-grow mb-8">
                    {card.description}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-block px-6 py-3 bg-primary/10 text-primary font-semibold rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {card.ctaText}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommissionLandingPage;