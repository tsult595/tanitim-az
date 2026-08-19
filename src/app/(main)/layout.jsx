import Header from "@/components/mainPage/Header.jsx";
import Footer from "@/components/mainPage/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}