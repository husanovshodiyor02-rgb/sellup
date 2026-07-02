import Bg from "../../assets/bg.png";
import Icons from "../../assets/icons.svg";
import Footer from "../Footer";
import N1 from "../../assets/n1.svg";
import N2 from "../../assets/n2.svg";
import N3 from "../../assets/n3.svg";
import N4 from "../../assets/n4.svg";
import N5 from "../../assets/n5.svg";
import N6 from "../../assets/n6.svg";
import { useTranslation } from "react-i18next";
import Header2 from "../Header2";

const AllNews = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Header2/>

      <div
        className="bg-top-right bg-no-repeat bg-size-[580px_460px] bg-[#F5F5F5]"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center pt-10">
            <div className="w-auto h-7 border border-[#4dd537] rounded-[8px] flex items-center justify-between gap-3 px-4 font-normal text-xs text-black">
              <img src={Icons} alt="" />
              {t("icon_button_5")}
            </div>
          </div>
          <h2 className="font-medium text-2xl md:text-[48px] text-center uppercase mt-5">
            {t("header_4")}
          </h2>

          <div className="hidden md:block mt-5 mb-10">
            <div className="flex items-center justify-center gap-8">
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N1}
                alt=""
              />
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N2}
                alt=""
              />
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N3}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-8 mt-8">
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N4}
                alt=""
              />
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N5}
                alt=""
              />
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N6}
                alt=""
              />
            </div>
          </div>

          <div className="block md:hidden w-fit mx-auto space-y-5 mt-5">
            <div className="flex items-center justify-center gap-5">
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N1}
                alt=""
              />
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N2}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-5">
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N3}
                alt=""
              />
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N4}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-5">
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N5}
                alt=""
              />
              <img
                className="w-40.5 md:w-90 h-41.5 md:h-92"
                src={N6}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center mb-10">
              <button className="w-full sm:w-39.5 h-11 rounded-[8px] bg-[#4dd537] font-medium text-base text-white cursor-pointer">
                {t("button_4")}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center pb-10">
            <button className="w-39.5 h-11 rounded-[8px] bg-[#4dd537] font-medium text-base text-white cursor-pointer">
              {t("button_4")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AllNews;
