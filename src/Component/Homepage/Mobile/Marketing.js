import React from "react";
import marketingImg from "../../../Asset/Homepage/marketing.webp";
import Jumbotron2 from "./Jumbotron2";
import MarketingSection from "./MarketingSection";

function Marketing() {
  return (
    <>
      <Jumbotron2
        img={marketingImg}
        title={"온라인광고 기획 및 제작"}
        text1={"코리아티엠은 바이럴 마케팅, 키워드 광고, 배너광고 등"}
        text2={"온라인 상에서 이루어지는 모든 광고를 기획 및 제작합니다."}
      />
      <div className="w-full">
        <div className="sticky top-0 left-0 h-screen bg-white z-10">
          <MarketingSection
            no={1}
            title1={"고객사의 현황 분석"}
            title2={"A"}
            title3={"nalysis"}
            text1={
              "고객사의 니즈 및 특징 들을 정확히 반영하기 위해서 고객사에 대한 현황분석부터 시작합니다."
            }
            text2={"고객사에게 적합한 마케팅 방안을 제안해 드립니다."}
          />
        </div>
        <div className="sticky top-0 left-0 h-screen bg-black z-20">
          <MarketingSection
            no={2}
            title1={"효율적인 홍보"}
            title2={"P"}
            title3={"ublic relations"}
            text1={
              "반드시 고비용의 키워드 광고를 진행해야지만 매출이 증대되는 것은 아닙니다."
            }
            text2={
              "비용대비 효율의 극대화를 위해 다양한 광고방식에 대한 검토 후 효율적인 방안을 제안해 드립니다."
            }
          />
        </div>
        <div className="sticky top-0 left-0 h-screen bg-white z-30">
          <MarketingSection
            no={3}
            title1={"높은 만족도"}
            title2={"S"}
            title3={"atisfaction"}
            text1={
              "기획에서 제작까지 마케팅 활동 전반에 걸쳐 직접 운영·관리하여 고객사와의 신속한 피드백이 가능합니다."
            }
            text2={
              "경쟁사와 차별화된 마케팅을 구현하여 높은 만족도를 이끌어 냅니다."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Marketing;
