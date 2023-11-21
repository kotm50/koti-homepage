import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import mainbg from "../../../Asset/Homepage/mainbg.webp";
import main1 from "../../../Asset/Homepage/main1.png";
import main2 from "../../../Asset/Homepage/main2.png";
import main3 from "../../../Asset/Homepage/main3.png";
import MarqueeContent from "./MarqueeContent";

import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
  const [isLoad, setIsLoad] = useState(false);
  const heightProps = useOutletContext();
  const handleCall = () => {
    window.location.href = "tel:1644-4223"; // 여기에 전화번호를 실제 전화번호로 대체하세요
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      {!isLoad ? (
        <div className="w-0 h-0 opacity-0 fixed top-0 left-0">
          <img
            src={mainbg}
            alt=""
            className="w-0 h-0 opacity-0"
            onLoad={() => setIsLoad(true)}
            onError={() => setIsLoad(true)}
          />
        </div>
      ) : (
        <>
          <div
            className="bg-gray-500 w-full"
            style={{
              width: "100%",
              height: `calc(100vh - ${heightProps}px)`,
              backgroundImage: `url(${mainbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-black bg-opacity-60 relative">
              <div
                id="shadowTxt"
                className="w-fit h-fit absolute bottom-10 left-5"
                data-aos="fade-up"
              >
                <h2 className="font-bold text-white leading-tight text-[36pt]">
                  일하고 싶은
                  <br />
                  나라를 만드는
                  <br />
                  <span className="text-kotired">코리아티엠</span>
                </h2>
                <div className="text-white font-normal text-[18pt]">
                  오늘도 코리아티엠은
                  <br />
                  채용의 역사를 만들어 갑니다
                </div>
              </div>
            </div>
          </div>
          <div className="my-[54px] flex flex-col justify-start gap-y-[54px]">
            <div className="flex flex-col justify-start" data-aos="fade-up">
              <div className="px-[20px]">
                <div className="text-[18pt]">
                  <span className="text-kotired font-bold">
                    10년 이상의 경력과 노하우
                  </span>
                  를 통해{" "}
                  <span className="text-kotired font-bold">채용컨설팅사업</span>
                  을 이끌어 나갑니다
                </div>
                <div className="text-[12pt] mt-[10px]">
                  know-how, 기구축된 구직자DB, IT기반 솔루션을 바탕으로 구직자의
                  권익보호와 고객사에 최고 수준의 만족을 제공하고자 합니다.
                </div>
              </div>
              <Link to="/mobile/intro" className="block mt-[20px]">
                <img src={main1} className="w-full h-fit" alt="" />
              </Link>
            </div>
            <div className="flex flex-col justify-start" data-aos="fade-up">
              <div className="px-[20px]">
                <div className="text-[18pt]">
                  <span className="text-kotired font-bold">
                    자체 체득ㆍ개발한 솔루션
                  </span>
                  을 통해{" "}
                  <span className="text-kotired font-bold">
                    최적의 채용컨설팅
                  </span>
                  을 수행합니다.
                </div>
                <div className="text-[12pt] mt-[10px]">
                  채용솔루션, 효율분석, 채용인프라까지 체계적이고 신속한
                  컨설팅을 제공하고자 합니다.
                </div>
              </div>
              <Link to="/mobile/consulting" className="block mt-[20px]">
                <img src={main2} className="w-full h-fit" alt="" />
              </Link>
            </div>

            <div className="w-full bg-black py-[35px]" data-aos="fade-up">
              <div className="px-[15px] flex justify-between">
                <div className="text-[10pt] text-white font-bold flex flex-col justify-center">
                  <span className="whitespace-nowrap">
                    코리아티엠에 궁금한게 있으신가요?
                  </span>
                  <span>언제든지 연락주세요.</span>
                </div>
                <div className="flex flex-col justify-center">
                  <button
                    className="bg-kotired text-white font-bold text-[10pt] px-[8px] py-[10px] hover:bg-white hover:text-black whitespace-nowrap"
                    onClick={handleCall}
                  >
                    문의하기&nbsp;&nbsp;&nbsp;&gt;
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start" data-aos="fade-up">
              <div className="px-[20px]">
                <div className="text-[18pt]">
                  <span className="text-kotired font-bold">정확한 분석</span>과{" "}
                  <span className="text-kotired font-bold">적합한 마케팅</span>
                  으로{" "}
                  <span className="text-kotired font-bold">
                    효율적이고 높은 만족
                  </span>
                  도 제공합니다
                </div>
                <div className="text-[12pt] mt-[10px]">
                  바이럴 마케팅, 키워드 광고, 배너광고 등 온라인 상에서
                  이루어지는 모든 유형의 광고를 기획 및 제작합니다.
                </div>
              </div>
              <Link to="/mobile/marketing" className="block mt-[20px]">
                <img src={main3} className="w-full h-fit" alt="" />
              </Link>
            </div>
          </div>
          <div
            id="marqueesection"
            className="w-full pt-[30px] pb-[30px]"
            data-aos="fade-up"
          >
            <div className="text-center text-[22pt] font-bold mb-[20px] px-[20px] leading-9">
              <span className="text-kotired">코리아티엠</span>이 여러분께
              <br />
              취업과 선물을 드립니다
            </div>
            <MarqueeContent direction={"left"} />
            <MarqueeContent direction={"right"} />
          </div>
        </>
      )}
    </>
  );
}

export default Main;
