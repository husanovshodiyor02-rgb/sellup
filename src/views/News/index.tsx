import Newsbg from '../../assets/newsbg.png';
import N1 from '../../assets/n1.png';
import N4 from '../../assets/n4.png';
import Icons from '../../assets/icons.svg';
import N2 from '../../assets/n2.png';
import N5 from '../../assets/n5.png';
import N3 from '../../assets/n3.png';
import N6 from '../../assets/n6.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <section id="news" className="m-3 md:m-10 mt-15">
      <div
        className="w-full h-auto font-family border border-[#d0cbcb] rounded-[12px] bg-cover bg-center p-3 md:p-10"
        style={{
          backgroundImage: `url(${Newsbg})`,
        }}
      >
        <div className="hidden md:block">
          <div className="flex justify-center gap-40">
            <img src={N1} alt="" />
            <div className="flex items-end">
              <div className="w-auto h-7 border border-[#4dd537] rounded-[8px] flex items-center justify-between gap-3 px-4 font-normal text-xs text-black">
                <img src={Icons} alt="" />
                {t("icon_button_5")}
              </div>
            </div>
            <img src={N4} alt="" />
          </div>

          <div className="flex justify-center gap-40 mt-10">
            <img src={N2} alt="" />
            <div className="flex flex-col items-center justify-center gap-7">
              <div className="max-w-50 mx-auto flex justify-center">
                <h2 className="text-[48px] font-medium uppercase leading-none text-center">
                  {t("header_4")}
                </h2>
              </div>
              <div>
                <div className="w-51.25 h-11 bg-[#4dd537] rounded-[8px] flex items-center justify-between px-1 cursor-pointer">
                  <button
                    onClick={() => navigate("/allnews")}
                    className="font-medium text-base text-white pl-3 cursor-pointer"
                  >
                    {t("button_4")}
                  </button>
                  <div className="w-9 h-9 rounded-[6px] bg-white flex items-center justify-center cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12H20M14 18L20 12L14 6"
                        stroke="#4DD537"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <img src={N5} alt="" />
          </div>

          <div className="flex justify-center gap-110 mt-10">
            <img src={N3} alt="" />
            <img src={N6} alt="" />
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex justify-center mb-5 mt-10">
            <div className="h-7 border border-[#4dd537] rounded-[8px] flex items-center gap-2 px-4 font-normal text-xs text-black bg-white/90">
              <img src={Icons} alt="" />
              {t("icon_button_5")}
            </div>
          </div>

          <h2 className="text-[40px] md:text-[32px] font-bold uppercase leading-tight text-center text-black mb-6 tracking-wide">
            {t("header_4")}
          </h2>

          <div className="flex justify-center mb-10">
            <div className="w-51.25 h-11 bg-[#4dd537] rounded-[8px] flex items-center justify-between px-1 cursor-pointer shadow-sm">
              <button
                onClick={() => navigate("/allnews")}
                className="font-medium text-base text-white pl-3 cursor-pointer"
              >
                {t("button_4")}
              </button>
              <div className="w-9 h-9 rounded-[6px] bg-white flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M14 18L20 12L14 6"
                    stroke="#4DD537"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex flex-col gap-4">
              <img
                src={N1}
                alt="News 1"
                className="w-50 h-auto rounded-[8px] object-cover"
              />
              <img
                src={N3}
                alt="News 3"
                className="w-50 h-auto rounded-[8px] pt-8 object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 pt-12 pb-7">
              <img
                src={N2}
                alt="News 2"
                className="w-50 h-auto rounded-[8px] object-cover"
              />

              <img
                src={N6}
                alt="News 6"
                className="w-50 h-auto rounded-[8px] pt-8 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
