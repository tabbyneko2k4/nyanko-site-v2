// Import chỉ những gì cần thiết (nếu còn) - Hiện tại không cần gì cả cho phần này
// import { Link } from "react-router-dom";
// import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Xóa toàn bộ div.grid chứa 3 cột cũ */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
          {/* About section - Removed */}
          {/* Quick links - Removed */}
          {/* Connect Section - Removed */}
        {/* </div> */}

        {/* Chỉ giữ lại phần Copyright */}
        <div className="text-center text-sm text-muted-foreground"> {/* Bỏ border-top và padding-top nếu không cần đường kẻ ngang */}
          <p>© {currentYear} Tabby Neko. All rights reserved. :3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;