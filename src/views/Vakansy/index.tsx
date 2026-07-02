import { useNavigate } from "react-router-dom";
import Bg from "../../assets/bg.png";
import Icons from "../../assets/icons.svg"
import Footer from "../Footer";
import Img1 from "../../assets/img1.svg"
import { useTranslation } from "react-i18next";
import Header2 from "../Header2";

const Vakansy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="vakansy">
      <Header2/>
      <div
        className="bg-top-right bg-no-repeat bg-size-[580px_460px] bg-[#F5F5F5]"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center pt-10">
            <div className="w-29.5 h-7 border border-[#4dd537] rounded-[8px] flex items-center justify-between px-4 font-normal text-xs text-black">
              <img src={Icons} alt="" />
              {t("menu_5")}
            </div>
          </div>
          <h2 className="font-medium text-[36px] text-center capitalize leading-none mt-2">
            {t("header_6")}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-10 py-10">
            <div className="w-full md:w-90 h-81 rounded-[8px] p-5 mx-5 bg-white relative">
              <div>
                <img className="w-10 h-10" src={Img1} alt="" />
              </div>
              <h4 className="font-semibold text-[32px] mt-2">
                {t("dop_info_11")}
              </h4>
              <p className="max-w-80 font-normal text-xl text-gray-600 leading-[125%]">
                {t("dop_info_11_1")}
              </p>
              <div className="absolute bottom-0 left-0 w-[88.5%] md:w-30.25 h-11 bg-[#4dd537] rounded-[8px] flex items-center justify-center md:justify-between px-1 m-5 cursor-pointer">
                <button
                  onClick={() => navigate("/sotuv")}
                  className="font-medium text-base text-center md:text-left text-white pl-3 cursor-pointer"
                >
                  {t("button_6")}
                </button>
                <div className="absolute right-1 md:static w-9 h-9 rounded-[6px] bg-white flex items-center justify-center cursor-pointer">
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
            <div className="w-full md:w-90 h-81 rounded-[8px] p-5 mx-5 bg-white relative">
              <div>
                <img className="w-10 h-10" src={Img1} alt="" />
              </div>
              <h4 className="font-semibold text-[32px] mt-2">
                {t("dop_info_12")}
              </h4>
              <p className="max-w-80 font-normal text-xl text-gray-600 leading-[125%]">
                {t("dop_info_12_1")}
              </p>
              <div className="absolute bottom-0 left-0 w-[88.5%] md:w-30.25 h-11 bg-[#4dd537] rounded-[8px] flex items-center justify-center md:justify-between px-1 m-5 cursor-pointer">
                <button className="font-medium text-base text-white pl-3 cursor-pointer">
                  {t("button_6")}
                </button>
                <div className="absolute right-1 md:static w-9 h-9 rounded-[6px] bg-white flex items-center justify-center cursor-pointer">
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
            <div className="w-90 h-81 rounded-[8px] p-5 mx-5 bg-white relative">
              <div>
                <img className="w-10 h-10" src={Img1} alt="" />
              </div>
              <h4 className="font-semibold text-[32px] mt-2">
                {t("dop_info_13")}
              </h4>
              <p className="max-w-80 font-normal text-xl text-gray-600 leading-[125%]">
                {t("dop_info_13_1")}
              </p>
              <div className="absolute bottom-0 left-0 w-[88.5%] md:w-30.25 h-11 bg-[#4dd537] rounded-[8px] flex items-center justify-center md:justify-between px-1 m-5 cursor-pointer">
                <button className="font-medium text-base text-white pl-3 cursor-pointer">
                  {t("button_6")}
                </button>
                <div className="absolute right-1 md:static w-9 h-9 rounded-[6px] bg-white flex items-center justify-center cursor-pointer">
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
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Vakansy;
