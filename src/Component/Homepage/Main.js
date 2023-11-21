import React from "react";
import main1 from "../../Asset/Homepage/main1.png";
import main2 from "../../Asset/Homepage/main2.png";
import main3 from "../../Asset/Homepage/main3.png";
import MainJumbo from "./MainJumbo";
import { useNavigate } from "react-router-dom";
import MarqueeContent from "./MarqueeContent";

function Main() {
  const navi = useNavigate();
  const handleCall = () => {
    window.location.href = "tel:1644-4223"; // 여기에 전화번호를 실제 전화번호로 대체하세요
  };
  return (
    <>
      <MainJumbo />
      <div className="container mx-auto pt-[170px]">
        <div className="flex justify-between">
          <div className="pt-[50px] flex flex-col justify-start gap-y-[50px]">
            <div className="text-[38pt]">
              <span className="text-kotired font-bold">
                10년이상의 경력과 노하우
              </span>
              를 통해
              <br />
              <span className="text-kotired font-bold">채용컨설팅사업</span>을
              이끌어 나갑니다.
            </div>
            <div className="text-[20pt]">
              know-how, 기구축된 구직자DB, IT기반 솔루션을 바탕으로
              <br /> 구직자의 권익보호와 고객사에 최고 수준의 만족을 제공하고자
              합니다.
            </div>
            <div>
              <button
                className="px-[20px] py-[25px] border border-koti2 hover-bg-kotired text-[14pt] font-bold hover:text-white"
                onClick={e => navi("/home/intro")}
              >
                더 알아보기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
              </button>
            </div>
          </div>
          <img src={main1} alt="" />
        </div>
      </div>
      <div className="container mx-auto pt-[170px]">
        <div className="flex justify-between">
          <div className="pt-[50px] flex flex-col justify-start gap-y-[50px]">
            <div className="text-[38pt]">
              <span className="text-kotired font-bold">
                자체 체득ㆍ개발한 솔루션
              </span>
              을 통해
              <br />
              <span className="text-kotired font-bold">최적의 채용컨설팅</span>
              을 수행합니다.
            </div>
            <div className="text-[20pt]">
              채용솔루션, 효율분석, 채용인프라까지
              <br />
              체계적이고 신속한 컨설팅을 제공하고자 합니다.
            </div>
            <div>
              <button
                className="px-[20px] py-[25px] border border-koti2 hover-bg-kotired text-[14pt] font-bold hover:text-white"
                onClick={e => navi("/home/consulting")}
              >
                더 알아보기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
              </button>
            </div>
          </div>
          <img src={main2} alt="" />
        </div>
      </div>
      <div className="w-full bg-black py-[70px] mt-[170px]">
        <div className="container mx-auto pl-[20px] flex justify-between">
          <div className="text-[30pt] text-white font-bold">
            코리아티엠에 궁금한게 있으신가요?
            <br />
            언제든지 연락주세요.
          </div>
          <div className="flex flex-col justify-center pr-[125px] ">
            <button
              className="bg-kotired text-white font-bold text-[14pt] px-[20px] py-[25px] hover:bg-white hover:text-black"
              onClick={handleCall}
            >
              문의하기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-[170px]">
        <div className="flex justify-between">
          <div className="pt-[50px] flex flex-col justify-start gap-y-[50px]">
            <div className="text-[38pt]">
              <span className="text-kotired font-bold">정확한 분석</span>과{" "}
              <span className="text-kotired font-bold">적합한 마케팅</span>
              으로
              <br />
              <span className="text-kotired font-bold">
                효율적이고 높은 만족
              </span>
              도 제공합니다
            </div>
            <div className="text-[20pt]">
              바이럴 마케팅, 키워드 광고, 배너광고 등
              <br />
              온라인 상에서 이루어지는 모든 유형의 광고를 기획 및 제작합니다.
            </div>
            <div>
              <button
                className="px-[20px] py-[25px] border border-koti2 hover-bg-kotired text-[14pt] font-bold hover:text-white"
                onClick={e => navi("/home/marketing")}
              >
                더 알아보기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
              </button>
            </div>
          </div>
          <img src={main3} alt="" />
        </div>
      </div>
      <div
        id="marqueesection"
        className="w-full mt-[200px] pt-[80px] pb-[100px]"
      >
        <div className="text-center text-[40pt] font-bold mb-[80px]">
          여러분께 <span className="text-kotired">코리아티엠</span>이 취업과
          선물을 드립니다.{" "}
        </div>
        <MarqueeContent direction={"left"} />
        <MarqueeContent direction={"right"} />
      </div>
    </>
  );
}

export default Main;
