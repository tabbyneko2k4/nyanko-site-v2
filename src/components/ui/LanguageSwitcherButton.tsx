// src/components/ui/LanguageSwitcherButton.tsx

import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherButtonProps {
  language: 'en' | 'vi';
  setLanguage: (lang: 'en' | 'vi') => void;
}

const LanguageSwitcherButton: React.FC<LanguageSwitcherButtonProps> = ({ language, setLanguage }) => {
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <Button
      variant="ghost" 
      size="icon"
      onClick={toggleLanguage}
      aria-label="Switch Language"
      // THÊM CLASS NÀY ĐỂ ĐẢM BẢO NÚT LUÔN TRÒN
      className="rounded-full hover:bg-primary/20"
    >
      <ReactCountryFlag
        countryCode={language === 'vi' ? 'VN' : 'US'}
        svg
        style={{
          width: '1.5rem', // 24px
          height: '1.5rem', // 24px
          borderRadius: '50%',
          objectFit: 'cover',
        }}
        title={language === 'vi' ? 'Tiếng Việt' : 'English'}
      />
    </Button>
  );
};

export default LanguageSwitcherButton;