// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext' // <-- IMPORT VÀO ĐÂY

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* BỌC APP BẰNG LANGUAGE PROVIDER */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)