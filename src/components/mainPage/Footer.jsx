import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-orange-100/40 text-slate-900 pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Колонки футера */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* 1. Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold tracking-tight text-slate-950 mb-1">
              Əlaqə
            </h3>
            
            <span className="font-extrabold text-sm tracking-wide text-slate-950 uppercase">
              TANITIM.AZ
            </span>
            
            <p className="text-xs text-slate-700 leading-relaxed">
              Əməkdaşlıq və dəstək üçün
            </p>
            
            <a 
              href="mailto:info@tanitim.az" 
              className="text-xs font-semibold text-slate-900 underline underline-offset-2 hover:text-orange-600 transition-colors w-fit"
            >
              info@tanitim.az
            </a>

            <div className="text-xs text-slate-700 leading-relaxed mt-2 space-y-0.5">
              <p>Tanitim Global MMC</p>
              <p>Nizami küç. 142, Səbail rayonu</p>
              <p>Bakı, Azərbaycan AZ1000</p>
            </div>

            {/* Соцсети */}
            <div className="flex items-center gap-3.5 pt-4 text-slate-900">
              <a href="#" className="hover:text-orange-600 transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <FaTiktok className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Product / Services */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-base font-bold tracking-tight text-slate-950 mb-1">
              Xidmətlər
            </h3>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              İnfluencer Marketing
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Rəqəmsal Reklamlar
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              SMM və Kontent
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Outdoor Reklamlar
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              BTL və Tədbirlər
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Cookie Tənzimləmələri
            </Link>
          </div>

          {/* 3. Resources */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-base font-bold tracking-tight text-slate-950 mb-1">
              Resurslar
            </h3>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Kömək Mərkəzi
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Partnyorlar
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Case Studies
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Marketinq Strategiyaları
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Hüquqi Məlumat
            </Link>
          </div>

          {/* 4. Company */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-base font-bold tracking-tight text-slate-950 mb-1">
              Şirkət
            </h3>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Partnyorluq Proqramı
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Karyera
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Haqqımızda
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Media Kit
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Sosial Məsuliyyət
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              Bizə Qoşulun
            </Link>
            <Link href="#" className="text-xs text-slate-800 hover:text-orange-600 transition-colors">
              FAQ
            </Link>
          </div>

        </div>

        {/* Копирайт внизу */}
        <div className="mt-12 pt-6 border-t border-slate-300/60 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-600 gap-2">
          <p>© {new Date().getFullYear()} Tanitim.az. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-900 transition-colors">Məxfilik Siyasəti</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Xidmət Şərtləri</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;