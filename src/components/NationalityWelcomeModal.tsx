// src/components/NationalityWelcomeModal.tsx

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ALLOWED_PATHS = ['/commission', '/code-commission', '/music-commission'];

const NationalityWelcomeModal = () => {
  const { setLanguage } = useLanguage();
  const location = useLocation();
  const [showNationModal, setShowNationModal] = useState(false);
  const [doNotShowAgain, setDoNotShowAgain] = useState(false);
  const [hasShownSession, setHasShownSession] = useState(false);

  useEffect(() => {
    // 1. Kiểm tra xem user đã chọn "Không hiện lại" chưa
    const shouldHideForever = localStorage.getItem('hideWelcomeModal') === 'true';

    // 2. Kiểm tra xem có phải trang được phép hiện không
    const isAllowedPath = ALLOWED_PATHS.includes(location.pathname);

    // 3. Nếu chưa ẩn vĩnh viễn, chưa hiện trong phiên này, và đúng trang -> Hiện
    if (!shouldHideForever && !hasShownSession && isAllowedPath) {
      setShowNationModal(true);
    }
  }, [location.pathname]); // Chạy lại khi đổi trang

  const handleClose = () => {
    if (doNotShowAgain) {
      localStorage.setItem('hideWelcomeModal', 'true');
    }
    // Đánh dấu đã hiện trong phiên này rồi -> không hiện lại nữa cho đến khi F5
    setHasShownSession(true);
    setShowNationModal(false);
  };

  const handleSelectVietnam = () => {
    setLanguage('vi');
    handleClose();
  };

  const handleSelectInternational = () => {
    setLanguage('en');
    handleClose();
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

          {/* Checkbox "Do not show again" */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <input
              type="checkbox"
              id="doNotShowAgain"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              checked={doNotShowAgain}
              onChange={(e) => setDoNotShowAgain(e.target.checked)}
            />
            <label
              htmlFor="doNotShowAgain"
              className="text-sm text-muted-foreground cursor-pointer select-none"
            >
              Không hiện lại lần sau / Do not show again
            </label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NationalityWelcomeModal;