import Icons from "../../assets/icons.svg";
import Img1 from "../../assets/img1.svg";
import Img2 from "../../assets/img2.svg";
import Img3 from "../../assets/img3.svg";
import Img4 from "../../assets/img4.svg";
import Img from "../../assets/img.png";
import { useTranslation } from "react-i18next";

const About = () => {
   const { t } = useTranslation();
  return (
    <section id="about" className="max-w-7xl mx-auto mt-5 md:mt-15 px-3 md:px-0">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="inline-flex h-7 bg-[rgba(255,255,255,0.58)] border border-[#4dd537] rounded-[8px] flex items-center justify-between gap-3 capitalize px-4 font-normal text-xs text-black">
            <img src={Icons} alt="" />
            {t("icon_button_2")}
          </div>
          <h2 className="max-w-150 font-medium text-2xl md:text-[36px] leading-[108%] mt-5">
            {t("header_2")}
          </h2>
          <h4 className="max-w-150 font-normal text-sm md:text-[20px] leading-[108%] mt-5">
            {t("header_info_2")}
          </h4>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-5 mt-6 md:mt-0">
            <div className="w-full md:w-66 h-auto md:h-38 rounded-[8px] p-5 bg-[#f5f5f5] flex md:block items-center gap-3">
              <div>
                <img className="w-12 md:w-10 h-12 md:h-10" src={Img1} alt="" />
              </div>
              <div>
                <h4 className="font-semibold text-[32px] md:text-[26px] mt-2">
                  50+
                </h4>
                <p className="font-normal text-xl md:text-sm text-gray-600">
                  {t("dop_info_1")}
                </p>
              </div>
            </div>
            <div className="w-full md:w-66 h-auto md:h-38 rounded-[8px] p-5 bg-[#f5f5f5] flex md:block items-center gap-3">
              <div>
                <img className="w-12 md:w-10 h-12 md:h-10" src={Img2} alt="" />
              </div>
              <div>
                <h4 className="font-semibold text-[32px] md:text-[26px] mt-2">
                  10+
                </h4>
                <p className="font-normal text-xl md:text-sm text-gray-600">
                  {t("dop_info_2")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5 mt-5">
            <div className="w-full md:w-66 h-auto md:h-38 rounded-[8px] p-5 bg-[#f5f5f5] flex md:block items-center gap-3">
              <div>
                <img className="w-12 md:w-10 h-12 md:h-10" src={Img3} alt="" />
              </div>
              <div>
                <h4 className="font-semibold text-[32px] md:text-[26px] mt-2">
                  2X+
                </h4>
                <p className="font-normal text-xl md:text-sm text-gray-600">
                  {t("dop_info_3")}
                </p>
              </div>
            </div>
            <div className="w-full md:w-66 h-auto md:h-38 rounded-[8px] p-5 bg-[#f5f5f5] flex md:block items-center gap-3">
              <div>
                <img className="w-10 h-10" src={Img4} alt="" />
              </div>
              <div>
                <h4 className="font-semibold text-[32px] md:text-[26px] mt-2">
                  $50,000+
                </h4>
                <p className="font-normal text-xl md:text-sm text-gray-600">
                  {t("dop_info_4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center my-15">
        <div className="w-100">
          <div className="w-full sm:w-81.75 h-128.75 sm:h-116.25 rounded-[8px] bg-[#041f00] p-2">
            <div className="w-full flex justify-center">
              <h3 className="max-w-50 font-normal text-2xl text-white text-center leading-none pt-0.5 pb-2.5">
                {t("name")}
              </h3>
            </div>
            <img className="w-full" src={Img} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full lg:flex-1 mt-5 sm:mt-0">
          <div className="self-start w-62 sm:w-92.5 h-auto rounded-[2px_12px_2px_12px] bg-[#128200] font-normal text-base md:text-2xl text-white px-3 py-2">
            {t("dop_info_5")}
          </div>
          <div className="self-end sm:self-center w-73 sm:w-90 h-auto rounded-[12px_2px_12px_2px] bg-[#0a4700] font-normal text-base md:text-2xl text-white px-3 py-2">
            {t("dop_info_6")}
          </div>
          <div className="self-end w-62 sm:w-75 h-auto rounded-[2px_12px_2px_12px] bg-[#3eb62b] font-normal text-base md:text-2xl text-white px-3 py-2">
            {t("dop_info_7")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
