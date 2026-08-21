import Header from "@/components/mainPage/Header.jsx";
import Footer from "@/components/mainPage/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">

      <Header />

      <main className="w-full flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}