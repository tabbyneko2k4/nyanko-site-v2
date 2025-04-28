// CategoryCards.jsx
import { Link } from "react-router-dom";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver"; // Giữ hook này

const CategoryCards = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(gridRef, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;

  const cardItems = [
    { to: "/music", img: "/music-bg.png", alt: "Music", title: "MUSIC" },
    { to: "/program", img: "/program-bg.jpg", alt: "Program", title: "PROGRAM" },
    { to: "/commission", img: "/commission-bg.png", alt: "Commission", title: "COMMISSION" },
  ];

  return (
    // ---- THAY ĐỔI: Giảm py và md:py ----
    <div id="categories" className="container mx-auto px-4 md:px-6 py-12 md:py-16 w-full"> {/* Giảm từ 16/24 xuống 12/16 */}
      {/* ---- THAY ĐỔI: Giảm mb ---- */}
      <h2 className="text-3xl md:text-4xl font-gaming mb-8 text-center">MY <span className="text-primary">WORK</span></h2> {/* Giảm từ mb-10 */}

      {/* ---- THAY ĐỔI: Giảm gap ---- */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Giảm gap từ 6/8 xuống 6 */}
        {cardItems.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className={`
              group relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-lg
              transition-all duration-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
              <h2 className="text-white text-xl md:text-3xl font-bold transition-transform duration-300 group-hover:scale-105 text-center font-gaming">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;