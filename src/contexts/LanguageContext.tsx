import React, { createContext, useContext, ReactNode } from 'react';
import { useAutoLanguage } from '@/hooks/useAutoLanguage'; // Import hook tự động nhận diện ngôn ngữ

// Định nghĩa kiểu cho giá trị của context
type LanguageContextType = {
  language: 'en' | 'vi';
  setLanguage: (lang: 'en' | 'vi') => void;
};

// Tạo Context với một giá trị mặc định (chủ yếu để TypeScript không báo lỗi)
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Tạo một Provider component
type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useAutoLanguage(); // Sử dụng hook đã có để quản lý state

  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Tạo một custom hook để sử dụng context dễ dàng hơn
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};