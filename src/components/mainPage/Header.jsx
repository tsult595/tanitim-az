'use client'

import Image from "next/image";
import Logo from "../../../public/window.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="
        mt-6
        rounded-2xl
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        px-4 py-4
      "
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Логотип */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <Image
            src={Logo}
            alt="Max Lumen"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />

          <h1 className="text-white text-xl md:text-2xl font-bold">
            Max Lumen
          </h1>
        </div>

        {/* Меню */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white">

          <Link
            className="hover:text-cyan-300 transition"
            href="/about"
          >
            About
          </Link>

          <Link
            className="hover:text-cyan-300 transition"
            href="/music"
          >
            My Music
          </Link>

          <button
            className="
              rounded-xl
              bg-white
              text-black
              px-5
              py-3
              font-medium
              hover:bg-gray-200
              transition
              w-full
              md:w-auto
            "
          >
            Get Started
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Header;