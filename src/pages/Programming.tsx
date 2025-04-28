import { useEffect } from "react";

// Không cần định nghĩa programmingProjects nữa vì không dùng

const Programming = () => {
  useEffect(() => {
    document.title = "Programming | Tabby Neko";
  }, []);

  return (
    // Thêm flex items-center justify-center để căn giữa nội dung khi không có grid
    <div className="min-h-screen pt-20 pb-12 animate-page-enter flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 text-center"> {/* Thêm text-center vào container */}
        <h1 className="text-4xl md:text-5xl font-gaming mb-8 animate-content-enter">MY <span className="text-primary">PROGRAMMING</span></h1>

        {/* Có thể giữ lại hoặc bỏ đoạn giới thiệu này tùy ý */}
        {/*
        <p className="text-lg mb-12 max-w-2xl mx-auto animate-content-enter [animation-delay:200ms]">
          Discover my projects, applications, and technical skills. This section showcases my work as a programmer.
        </p>
        */}

        {/* Xóa bỏ hoàn toàn phần grid hiển thị project */}

        {/* Thay thế bằng thông báo */}
        <div className="mt-12 animate-content-enter [animation-delay:400ms]"> {/* Có thể giảm delay animation */}
          <p className="text-xl font-medium text-muted-foreground"> {/* Tăng kích thước chữ, dùng màu muted */}
            Oops! It's a bit empty right now. Pop back later! :3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programming;