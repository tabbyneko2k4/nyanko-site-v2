import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "tabby-neko-theme", // Giữ nguyên key của bạn
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Hàm helper để áp dụng theme class
    const applyThemeClass = (effectiveTheme: 'light' | 'dark') => {
        root.classList.remove("light", "dark");
        root.classList.add(effectiveTheme);
    }

    // Xác định theme hệ thống hiện tại
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = mediaQuery.matches ? "dark" : "light";

    // Áp dụng theme ban đầu hoặc khi state theme thay đổi
    if (theme === "system") {
        applyThemeClass(systemTheme);
    } else {
        applyThemeClass(theme);
    }

    // Lắng nghe sự thay đổi theme hệ thống
    const handleChange = (e: MediaQueryListEvent) => {
      // Chỉ cập nhật class nếu theme hiện tại là 'system'
      if (theme === "system") {
        applyThemeClass(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener khi component unmount hoặc theme thay đổi
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]); // Chạy lại effect này khi state 'theme' thay đổi

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      // ---- THAY ĐỔI QUAN TRỌNG ----
      // Chỉ lưu vào localStorage nếu người dùng chọn light/dark cụ thể
      // Xóa khỏi localStorage nếu chọn 'system'
      if (newTheme === 'system') {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, newTheme);
      }
      setTheme(newTheme); // Cập nhật state
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Hook useTheme giữ nguyên
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};