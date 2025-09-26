// commissionLandingContent.ts
import { Code, Music2 } from 'lucide-react';

export const commissionLandingContent = {
  en: {
    pageTitle: { main: "MY", highlight: "COMMISSIONS" },
    intro: "Welcome! Choose a category below to see more details and pricing information for my services.",
    cards: [
      {
        Icon: Code,
        title: { main: "Code & Widget", highlight: "Commissions" },
        description: "Custom chat widgets, event overlays, and interactive elements for your stream or website.",
        ctaText: "View details",
        linkTo: "/code-commission",
      },
      {
        Icon: Music2,
        title: { main: "Music & SFX", highlight: "Commissions" },
        description: "Original background music, sound effects, and custom tracks tailored for your content.",
        ctaText: "View details",
        linkTo: "/music-commission",
      },
    ],
    buttons: {
      switchLang: "Chuyển sang tiếng Việt",
    },
  },
  vi: {
    pageTitle: { main: "DỊCH VỤ", highlight: "COMMISSIONS" },
    intro: "Chào mừng! Vui lòng chọn một danh mục bên dưới để xem thêm chi tiết và thông tin giá cả cho các dịch vụ của tôi.",
    cards: [
      {
        Icon: Code,
        title: { main: "Code & Widget", highlight: "Commission" },
        description: "Widget chat, overlay sự kiện và các yếu tố tương tác tùy chỉnh cho stream hoặc trang web của bạn.",
        ctaText: "Xem chi tiết",
        linkTo: "/code-commission",
      },
      {
        Icon: Music2,
        title: { main: "Nhạc & SFX", highlight: "Commission" },
        description: "Nhạc nền gốc, hiệu ứng âm thanh và các bản nhạc được tùy chỉnh riêng cho nội dung của bạn.",
        ctaText: "Xem chi tiết",
        linkTo: "/music-commission",
      },
    ],
    buttons: {
      switchLang: "Switch to English",
    },
  },
};
