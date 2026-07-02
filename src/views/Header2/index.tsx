import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header2 = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLangChange = () => {
      const currentLang = i18n.language.toLowerCase();
      const nextLang = currentLang.startsWith("ru") ? "uz" : "ru";
      i18n.changeLanguage(nextLang);
    };

    const displayLang = i18n.language.toLowerCase().startsWith("ru")
      ? "RU"
      : "UZ";
  return (
    <div>
      <div className="px-2 md:px-20 pt-5">
        <div className="flex items-center justify-between px-2 md:px-10">
          <div>
            <a href="/">
              <img
                className="w-26 md:w-30 h-11 md:h-12.5"
                src={Logo}
                alt="logo"
              />
            </a>
          </div>

          <nav className="hidden md:flex gap-5 font-normal text-base text-black">
            <HashLink smooth to="/#about">
              {t("menu_1")}
            </HashLink>

            <HashLink smooth to="/#service">
              {t("menu_2")}
            </HashLink>

            <HashLink smooth to="/#service">
              {t("menu_3")}
            </HashLink>

            <HashLink smooth to="/#news">
              {t("menu_4")}
            </HashLink>

            <Link to="/vakansy"> {t("menu_5")}</Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={handleLangChange}
                className="w-16.25 h-11 flex items-center justify-center rounded-[8px] bg-black text-white text-sm font-medium active:scale-95 transition-all cursor-pointer"
              >
                {displayLang}
              </button>
            </div>
            <a href="#footer">
              <div className="w-33 md:w-35 h-10 md:h-11 bg-black rounded-[8px] flex items-center justify-between px-1 cursor-pointer">
                <button className="font-medium text-base text-white pl-2 md:pl-3 cursor-pointer">
                  {t("button_1")}
                </button>
                <div className="w-7 md:w-9 h-7 md:h-9 rounded-[6px] bg-white flex items-center justify-center cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M14 18L20 12L14 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-8 top-16 z-50 w-55 bg-white rounded-2xl shadow-xl border border-gray-100 py-5 px-6 flex flex-col gap-4 text-base font-medium text-gray-800 text-center">
          <HashLink
            smooth
            to="/#about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#4dd537] transition"
          >
            {t("menu_1")}
          </HashLink>
          <HashLink
            smooth
            to="/#service"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#4dd537] transition"
          >
            {t("menu_2")}
          </HashLink>
          <HashLink
            smooth
            to="/#service"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#4dd537] transition"
          >
            {t("menu_3")}
          </HashLink>
          <HashLink
            smooth
            to="/#news"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#4dd537] transition"
          >
            {t("menu_4")}
          </HashLink>
          <Link
            to="/vakansy"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#4dd537] transition"
          >
            {t("menu_5")}
          </Link>

          <div className="flex items-center justify-between gap-2 w-full">
            {["UZ", "RU"].map((lang) => {
              const isActive = displayLang?.toUpperCase() === lang;

              return (
                <button
                  key={lang}
                  onClick={() => {
                    i18n.changeLanguage(lang.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 py-2.5 rounded-[10px] text-xs font-bold transition-all cursor-pointer select-none
              ${
                isActive
                  ? "bg-[#121212] text-white"
                  : "bg-[#e5e5e7] text-black hover:bg-gray-300"
              }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header2;
