// commissionLandingContent.ts
import { Brush, Code } from 'lucide-react';

export const commissionLandingContent = {
  en: {
    pageTitle: { main: "My", highlight: "Commissions" },
    intro: "Welcome! Choose a category below to see more details and pricing information for my services.",
    cards: [
      {
        Icon: Code,
        title: { main: "Code & Widget", highlight: "Commissions" },
        description: "Custom chat widgets, event overlays, and interactive elements for your stream or website.",
        ctaText: "View Details",
        linkTo: "/commissions/code",
      },
      {
        Icon: Brush,
        title: { main: "Music & SFX", highlight: "Commissions" },
        description: "Original background music, sound effects, and custom tracks tailored for your content.",
        ctaText: "View Details",
        linkTo: "/commissions/music",
      },
    ],
    // --- BỔ SUNG Ở ĐÂY ---
    buttons: {
        switchLang: "Chuyển sang Tiếng Việt"
    }
  },
  vi: {
    pageTitle: { main: "Trang", highlight: "Commission" },
    intro: "Chào mừng! Vui lòng chọn một danh mục bên dưới để xem thêm chi tiết và thông tin giá cả cho các dịch vụ của tôi.",
    cards: [
      {
        Icon: Code,
        title: { main: "Commission", highlight: "Code & Widget" },
        description: "Widget chat, overlay sự kiện, và các yếu tố tương tác tùy chỉnh cho stream hoặc trang web của bạn.",
        ctaText: "Xem Chi Tiết",
        linkTo: "/commissions/code",
      },
      {
        Icon: Brush,
        title: { main: "Commission", highlight: "Nhạc & SFX" },
        description: "Nhạc nền gốc, hiệu ứng âm thanh, và các bản nhạc được tùy chỉnh riêng cho nội dung của bạn.",
        ctaText: "Xem Chi Tiết",
        linkTo: "/commissions/music",
      },
    ],
    buttons: {
        switchLang: "Switch to English"
    }
  }
};