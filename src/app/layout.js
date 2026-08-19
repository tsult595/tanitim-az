import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/mainPage/Header.jsx";
import Footer from "@/components/mainPage/Footer.jsx";
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        {/* Header во всю ширину */}
        <Header />

        {/* Контент страницы занимает всё свободное место */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer во всю ширину внизу */}
        <Footer />
      </body>
    </html>
  );
}