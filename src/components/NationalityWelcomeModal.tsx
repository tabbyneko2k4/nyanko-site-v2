// src/components/NationalityWelcomeModal.tsx

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const NationalityWelcomeModal = () => {
  const { setLanguage } = useLanguage();
  const [showNationModal, setShowNationModal] = useState(false);

  useEffect(() => {
    // 1. Kiểm tra xem đã chọn chưa
    const hasChosenNationality = localStorage.getItem('hasChosenNationality');

    // 2. Nếu chưa chọn, thì hiện Modal lên
    if (!hasChosenNationality) {
      setShowNationModal(true);
    }
  }, []);

  const handleSelectVietnam = () => {
    setLanguage('vi'); 
    localStorage.setItem('hasChosenNationality', 'true');
    setShowNationModal(false);
  };

  const handleSelectInternational = () => {
    setLanguage('en');
    localStorage.setItem('hasChosenNationality', 'true');
    setShowNationModal(false);
  };

  return (
    <Dialog open={showNationModal} onOpenChange={setShowNationModal}>
      <DialogContent 
        className="sm:max-w-md z-[9999] [&>button]:hidden" // [&>button]:hidden để ẩn nút X đóng modal mặc định
        onInteractOutside={(e) => e.preventDefault()} // Chặn click ra ngoài
        onEscapeKeyDown={(e) => e.preventDefault()}   // Chặn bấm phím Esc
      >
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-gaming uppercase tracking-wide">
            Chào mừng / Welcome
          </DialogTitle>
          <DialogDescription className="text-center text-base mt-2">
            <span className="block mb-2 text-foreground font-medium">
              Vui lòng chọn khu vực của bạn để hiển thị ngôn ngữ và giá phù hợp.
            </span>
            <span className="text-muted-foreground italic text-sm">
              Please select your region to display appropriate language and pricing.
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4 w-full">
          {/* Nút Việt Nam */}
          <Button 
            onClick={handleSelectVietnam}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 text-lg shadow-md transition-transform hover:scale-[1.02]"
          >
            <span className="mr-2 text-2xl">🇻🇳</span> Việt Nam (Tiếng Việt)
          </Button>
          
          {/* Nút Quốc tế */}
          <Button 
            onClick={handleSelectInternational}
            variant="outline"
            className="w-full font-bold py-6 text-lg border-primary text-primary hover:bg-primary/10 shadow-sm transition-transform hover:scale-[1.02]"
          >
            <span className="mr-2 text-2xl">🌍</span> International (English)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NationalityWelcomeModal;