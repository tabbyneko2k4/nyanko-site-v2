// src/hooks/useAutoLanguage.ts

import { useState, useEffect } from 'react';

type SupportedLanguage = 'en' | 'vi';

export const useAutoLanguage = (): [SupportedLanguage, (lang: SupportedLanguage) => void] => {
  // Đảm bảo giá trị khởi tạo là một key hợp lệ ('en' hoặc 'vi')
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('vi')) {
      setLanguage('vi');
    } else {
      setLanguage('en');
    }
  }, []);

  return [language, setLanguage];
};