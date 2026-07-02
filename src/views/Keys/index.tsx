import Icons from "../../assets/icon2.svg";
import Img1 from "../../assets/k1.png";
import Img2 from "../../assets/k2.png";
import Img3 from "../../assets/k3.png";
import Img4 from "../../assets/k4.png";
import Img5 from "../../assets/k5.png";
import Img6 from "../../assets/k6.png";
import Img7 from "../../assets/k7.png";
import Img8 from "../../assets/k8.png";
import Img9 from "../../assets/k9.png";
import Img10 from "../../assets/k10.png";
import Img11 from "../../assets/k11.png";
import Img12 from "../../assets/k12.png";
import Img13 from "../../assets/k13.png";
import { useTranslation } from "react-i18next";

const Keys = () => {
  const { t } = useTranslation();
  return (
    <section id="keys" className="bg-black">
      <div className="max-w-7xl mx-auto py-10 px-3 md:px-0">
        <div className="flex items-center justify-between">
          <div className="w-25.25 h-7 bg-white border border-white rounded-[8px] flex items-center justify-between px-4 font-normal text-xs text-black">
            <img src={Icons} alt="" />
            {t("icon_button_4")}
          </div>
          <h1 className="font-medium text-base md:text-[36px] text-white">
            {t("header_5")}
          </h1>
        </div>
        <h1 className="font-semibold text-[45px] md:text-[128px] text-[#757575] text-center">
          {t("icon_button_4")}
        </h1>

        <div className="flex flex-wrap justify-between gap-5 md:gap-18">
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img1}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img2}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img3}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img4}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img5}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img6}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img7}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img8}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img9}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img10}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img11}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img12}
            alt=""
          />
          <img
            className="w-43 md:w-66.25 h-40.5 md:h-66.25"
            src={Img13}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Keys