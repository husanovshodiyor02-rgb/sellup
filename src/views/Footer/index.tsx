import Logof from '../../assets/logof.svg';
import Tg from '../../assets/tg.png';
import I from '../../assets/i.png';
import L from '../../assets/l.png';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="footer" className="bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto py-4 px-3 md:px-0">
        <div className="flex flex-col md:flex-row justify-between my-10">
          <div className="order-2 md:order-1">
            <a href="/">
              <img className="mt-8 md:mt-0" src={Logof} alt="" />
            </a>
            <p className="max-w-100 font-normal text-xl text-white mt-5 leading-none">
              {t("header_info_3")}
            </p>
            <div className="flex items-center gap-5 mt-8">
              <a href="#">
                <img src={Tg} alt="" />
              </a>
              <a href="#">
                <img src={I} alt="" />
              </a>
              <a href="#">
                <img src={L} alt="" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-5">
              <div>
                <p className="font-normal text-xl text-white leading-none">
                  {t("input_name_1")}
                </p>
                <input
                  className="w-full md:w-38.5 h-7.5 rounded-[6px] bg-white px-2 mt-2 font-normal text-sm text-[#a2a1a1]"
                  type="text"
                  placeholder={t("input_info_1")}
                  required
                />
              </div>
              <div>
                <p className="font-normal text-xl text-white leading-none">
                  {t("input_phone_1")}
                </p>
                <input
                  className="w-full md:w-38.5 h-7.5 rounded-[6px] bg-white px-2 mt-2 font-normal text-sm text-[#a2a1a1]"
                  type="text"
                  placeholder={t("input_info_2")}
                  required
                />
              </div>
            </div>
            <p className="font-normal text-xl text-white leading-none mt-5">
              {t("input_quetion_1")}
            </p>
            <textarea
              className="w-full md:w-82 h-23 bg-white text-[#a2a1a1] border rounded-[6px] py-2 px-2 mt-2 outline-none resize-none font-normal text-sm"
              placeholder={t("input_info_3")}
            ></textarea>
            <br />

            <button className="w-full md:w-82 h-11 rounded-[8px] bg-[#4dd537] font-medium text-base mt-5 cursor-pointer">
              {t("button_5")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer