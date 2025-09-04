// commissionLandingContent.js

// Import icons để dễ dàng tham chiếu trong component
import { Music, Code2 } from 'lucide-react';

export const commissionLandingContent = {
  pageTitle: {
    main: "CHOOSE YOUR",
    highlight: "COMMISSION"
  },
  intro: "I offer specialized commission services to bring your creative projects to life. Please select the category you're interested in below to view details and pricing.",
  cards: [
    {
      title: { main: "MUSIC", highlight: "COMMISSIONS" },
      description: "Custom background music, arrangements, and unique soundscapes for your streams, games, or videos.",
      linkTo: "/music-commission",
      ctaText: "View Music Options",
      Icon: Music, // Truyền component icon vào
    },
    {
      title: { main: "CODE", highlight: "COMMISSIONS" },
      description: "Bespoke stream widgets, event overlays, and interactive elements designed to match your brand and engage your audience.",
      linkTo: "/code-commission",
      ctaText: "View Code Options",
      Icon: Code2, // Truyền component icon vào
    }
  ]
};