import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/mainPage/Header.jsx"; // Импортируй свой Header
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanitim.az",
  description: "Digital Marketing & Business Promotion Services in Azerbaijan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="az"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        {/* Header на 100% ширины экрана */}
        <Header />

        {/* Контент страницы */}
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
