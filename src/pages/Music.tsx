import { useEffect } from "react";

// Danh sách các ID video YouTube cần hiển thị
const youtubeVideoIds = [
  'WNn3WhG4T_E',
  'VtcYFCBUmWk',
  'LigIs5LDOf0',
  '7W_O-wABToc',
  'DbXNVlSy-Yw',
  'eCTjt3vY2kk',
  'WeYtwfs3-U0'
];

// Tạo mảng dữ liệu video hoàn chỉnh (thêm title cho accessibility)
const youtubeVideos = youtubeVideoIds.map((id, index) => ({
  id: id,
  title: `Tabby Neko / Nyanko Music - Video ${index + 1}` // Tạo title đơn giản
}));

const Music = () => {
  useEffect(() => {
    document.title = "Music | Tabby Neko";
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 animate-page-enter">
      <div className="container mx-auto px-4 py-12">
        {/* Tiêu đề và giới thiệu giữ nguyên */}
        <h1 className="text-4xl md:text-5xl font-gaming mb-8 text-center animate-content-enter">MY <span className="text-primary">MUSIC</span></h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto animate-content-enter [animation-delay:200ms]">
          Explore my musical journey, productions, and collaborations. This section showcases my work as a music producer under Tabby Neko & Nyanko.
        </p>

        {/* Phần hiển thị video YouTube */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {youtubeVideos.map((video, index) => (
            <div
              key={video.id} // Sử dụng video ID làm key
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-content-enter bg-card" // Thêm bg-card nếu muốn có nền
              style={{ animationDelay: `${(index + 2) * 100}ms` }} // Điều chỉnh delay animation
            >
              <div className="aspect-video"> {/* Đảm bảo tỷ lệ 16:9 */}
                <iframe
                  className="w-full h-full" // Đảm bảo iframe lấp đầy div cha
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title} // Quan trọng cho accessibility
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
               {/* Optional: Bạn có thể thêm tiêu đề video hoặc mô tả ngắn ở đây nếu muốn */}
               {/* <div className="p-4">
                 <h3 className="font-medium text-sm truncate">{video.title}</h3>
               </div> */}
            </div>
          ))}
        </div>

        {/* Có thể bỏ phần "under construction" nếu lưới video đã đủ nội dung */}
        {/*
        <div className="mt-12 text-center animate-content-enter [animation-delay:600ms]">
          <p className="text-lg font-medium">
            More content coming soon!
          </p>
        </div>
        */}

      </div>
    </div>
  );
};

export default Music;