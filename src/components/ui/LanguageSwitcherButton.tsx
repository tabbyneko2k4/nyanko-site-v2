// src/components/ui/LanguageSwitcherButton.tsx

import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@/components/ui/button';

// Định nghĩa các props mà component sẽ nhận
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
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      aria-label="Switch Language"
      className="bg-background/80 backdrop-blur-sm hover:bg-primary/20 h-11 w-11 rounded-full flex items-center justify-center overflow-hidden"
    >
      {/* 
        Hiển thị cờ của ngôn ngữ hiện tại.
        Khi đang là 'vi', hiển thị cờ Việt Nam.
        Khi đang là 'en', hiển thị cờ Mỹ.
      */}
      {language === 'vi' ? (
        <ReactCountryFlag
          countryCode="VN"
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
          title="Tiếng Việt"
        />
      ) : (
        <ReactCountryFlag
          countryCode="US" // Bạn cũng có thể dùng "GB" cho cờ Anh
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
          title="English"
        />
      )}
    </Button>
  );
};

export default LanguageSwitcherButton;