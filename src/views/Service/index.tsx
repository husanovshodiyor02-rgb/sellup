import { useEffect, useRef, useState } from "react";
import Icons from "../../assets/icons.svg";
import Se1 from "../../assets/se1.png";
import Se2 from "../../assets/se2.png";
import Se3 from "../../assets/se3.png";
import Se4 from "../../assets/se4.png";

import BgPattern1 from "../../assets/bg.png";
import { useTranslation } from "react-i18next";

const SERVICES_DATA = [
  { id: 1, title: "dop_info_8", bgImage: Se1 },
  { id: 2, title: "dop_info_9", bgImage: Se2 },
  { id: 3, title: "dop_info_8_1", bgImage: Se3 },
  { id: 4, title: "dop_info_10", bgImage: Se4 },
];

const Service = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = rect.height - windowHeight;
      const scrolled = -rect.top;

      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const renderCardContent = (service: (typeof SERVICES_DATA)[0]) => (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${service.bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

      <div className="absolute inset-0 pt-4 px-6 pb-6 flex flex-col justify-between text-white z-10">
        <div className="flex justify-between items-center w-full">
          <h4 className="font-semibold text-[22px] tracking-wide select-none">
            {t(service.title)}
          </h4>
          <div className="w-9 h-9 rounded-[6px] border border-white/40 flex items-center justify-center bg-white hover:bg-white/90 transition-colors duration-300 cursor-pointer">
            <svg
              width="26"
              height="26"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33398 22.6666L22.6673 9.33325M22.6673 22.6666V9.33325H9.33398"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section
      id="service"
      ref={containerRef}
      className={`relative ${
        isMobile ? "h-auto py-7 md:py-16" : "h-[240vh]"
      } bg-[#f8f9fa] overflow-visible`}
    >
      {isMobile ? (
        /* mobile korinish */
        <div className="flex flex-col items-center px-3 w-full">
          <img
            src={BgPattern1}
            alt=""
            className="absolute top-[0%] right-[0%] w-125 h-auto opacity-70 pointer-events-none z-0 select-none"
          />
          <div className="flex justify-between items-start w-full">
            <div className="h-7 border border-[#4dd537] rounded-[8px] flex items-center gap-2 px-4 font-normal text-xs text-black bg-white/90">
              <img src={Icons} alt="" className="w-3 h-3" />
              <span>{t("icon_button_3")}</span>
            </div>
            <div className="text-right">
              <p className="max-w-30 text-sm font-semibold text-gray-800 leading-tight">
                {t("header_3")}
              </p>
            </div>
          </div>

          <h2 className="text-[40px] font-bold text-center uppercase tracking-wider text-black my-4 md:my-8 select-none">
            {t("icon_button_3")}
          </h2>

          <div className="flex flex-col gap-6 w-full items-center">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="relative w-full max-w-88.5 h-84.5 rounded-[24px] overflow-hidden shadow-lg"
              >
                {renderCardContent(service)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* desktop korinish */
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 px-6 md:px-20 overflow-hidden">
          <img
            src={BgPattern1}
            alt=""
            className="absolute top-[0%] right-[0%] w-55 md:w-125 h-auto opacity-70 pointer-events-none z-0 select-none"
          />

          <img
            src={BgPattern1}
            alt=""
            className="absolute -bottom-[10%] left-[4%] w-45 md:w-125 h-auto opacity-70 pointer-events-none z-0 select-none"
          />

          <img
            src={BgPattern1}
            alt=""
            className="flex md:hidden absolute top-[0%] right-[0%] w-45 md:w-125 h-auto opacity-70 pointer-events-none z-0 select-none"
          />
          <div className="flex justify-between items-start w-full z-20">
            <div className="h-7 border border-[#4dd537] rounded-[8px] flex items-center gap-2 px-4 font-normal text-xs text-black bg-white/90">
              <img src={Icons} alt="" className="w-3 h-3" />
              <span>{t("icon_button_3")}</span>
            </div>

            <div className="text-right">
              <p className="max-w-65 text-sm md:text-[32px] font-semibold text-gray-800 leading-tight">
                {t("header_3")}
              </p>
            </div>
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center">
            <h2 className="absolute left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[100px] lg:text-[128px] font-semibold text-center uppercase tracking-widest text-black select-none z-0 pointer-events-none opacity-90 whitespace-nowrap">
              {t("icon_button_3")}
            </h2>

            <div className="relative w-88.5 h-127.5 z-10 mt-17.5">
              {SERVICES_DATA.map((service, index) => {
                const naturalStep = 350;
                const stackedOffset = 55;

                const defaultTop = index * naturalStep;
                const stackedTop = index * stackedOffset;

                const translateY =
                  defaultTop - (defaultTop - stackedTop) * scrollProgress;

                return (
                  <div
                    key={service.id}
                    className="absolute left-0 right-0 w-88.5 h-84.5 rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-75 ease-out border border-white/10"
                    style={{
                      transform: `translateY(${translateY}px)`,
                      zIndex: index + 10,
                    }}
                  >
                    {renderCardContent(service)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-4" />
        </div>
      )}
    </section>
  );
};

export default Service;
