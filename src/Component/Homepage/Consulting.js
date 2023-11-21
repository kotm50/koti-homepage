import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import consultImg from "../../Asset/Homepage/consult.webp";
import Jumbotron2 from "./Jumbotron2";

import solution1 from "../../Asset/Homepage/solution1.png";
import solution2 from "../../Asset/Homepage/solution2.png";
import solution3 from "../../Asset/Homepage/solution3.png";
import solution4 from "../../Asset/Homepage/solution4.png";

import infra1 from "../../Asset/Homepage/infra1.png";
import infra2 from "../../Asset/Homepage/infra2.png";
import infra3 from "../../Asset/Homepage/infra3.png";
import infra4 from "../../Asset/Homepage/infra4.png";

import { FaAngleDown, FaAngleRight } from "react-icons/fa";

function Consulting() {
  const thisLocation = useLocation();
  const [start, setStart] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [redScroll, setRedScroll] = useState(0);
  const [dragable, setDragable] = useState(true);

  useEffect(() => {
    setDragable(true);
    //eslint-diable-next-line
  }, [thisLocation]);

  useEffect(() => {
    if (infraRef.current) {
      const { left } = infraRef.current.getBoundingClientRect();
      setStart(left);
    }
  }, []);

  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = e => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const scrollRef = useRef(null);
  const solutionRef = useRef(null);
  const efficiencyRef = useRef(null);
  const infraRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScrollPercentage = 75;
        const scrollPercentage =
          (scrollLeft / (scrollWidth - clientWidth)) * maxScrollPercentage;
        console.log(Math.min(scrollPercentage, maxScrollPercentage).toFixed(2));
        setRedScroll(
          Math.min(scrollPercentage, maxScrollPercentage).toFixed(2)
        );
      }
    };

    let currentRef = scrollRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToRef = ref => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Jumbotron2
        img={consultImg}
        title={"최적의 채용 컨설팅 수행"}
        text1={
          "코리아티엠은 10년 이상의 현장 경험을 통해 체득ㆍ개발한 자체 솔루션을 통해서"
        }
        text2={"다양한 기업체를 대상으로 최적의 채용컨설팅을 수행하고 있습니다"}
        scrollToRef={scrollToRef}
        solutionRef={solutionRef}
        efficiencyRef={efficiencyRef}
        infraRef={infraRef}
      />
      <div ref={solutionRef} className="koticontainer mx-auto mt-[160px]">
        <div className="grid grid-cols-1 mb-[50px]">
          <div className="text-kotired text-[20pt] mb-1">채용솔루션</div>
          <div className="text-[40pt] font-bold leading-10">
            <span className="text-kotired">S</span>
            olution
          </div>
        </div>
        <div className="flex flex-col justify-start gap-y-[60px]">
          <div className="flex justify-start gap-x-[80px]">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center">
              <img src={solution1} alt="" className="w-fit h-auto mx-auto" />
            </div>
            <div className="flex flex-col justify-center gap-y-[12px]">
              <div className="text-kotired text-[20pt] font-bold">개요</div>
              <div className="text-[14pt] font-bold">
                기업의 유능한 인재선발에 필요한 모든 채용과정을 대행하여 드리는
                서비스
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-x-[80px]">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center">
              <img src={solution2} alt="" className="w-fit h-auto mx-auto" />
            </div>
            <div className="flex flex-col justify-center gap-y-[12px]">
              <div className="text-kotired text-[20pt] font-bold">사전작업</div>
              <div className="text-[14pt] font-bold">
                고객사 현황 및 인재상 검토ㆍ분석{" "}
                <FaAngleRight size={20} className="inline text-kotired" />{" "}
                채용컨설팅{" "}
                <FaAngleRight size={20} className="inline text-kotired" />{" "}
                구인광고 컨셉 설정 및 디자인 작업
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-x-[80px]">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center">
              <img src={solution3} alt="" className="w-fit h-auto mx-auto" />
            </div>
            <div className="flex flex-col justify-center gap-y-[12px]">
              <div className="text-kotired text-[20pt] font-bold">채용진행</div>
              <div className="text-[14pt] font-bold">
                구인광고 게재{" "}
                <FaAngleRight size={20} className="inline text-kotired" />{" "}
                입사지원서 접수 및 지원서 평가{" "}
                <FaAngleRight size={20} className="inline text-kotired" /> 사전
                면접대행{" "}
                <FaAngleRight size={20} className="inline text-kotired" />{" "}
                면접안내
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-x-[80px]">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center">
              <img src={solution4} alt="" className="w-fit h-auto mx-auto" />
            </div>
            <div className="flex flex-col justify-center gap-y-[12px]">
              <div className="text-kotired text-[20pt] font-bold">사후관리</div>
              <div className="text-[14pt] font-bold">
                최종합격자 발표{" "}
                <FaAngleRight size={20} className="inline text-kotired" />{" "}
                정착관리(밀착면담 진행)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={efficiencyRef} className="koticontainer mx-auto mt-[160px]">
        <div className="grid grid-cols-1 mb-[50px]">
          <div className="text-kotired text-[20pt] mb-1">효율분석</div>
          <div className="text-[40pt] font-bold leading-10">
            <span className="text-kotired">E</span>
            fficiency
          </div>
        </div>
        <div className="flex flex-col justify-start gap-y-[20px]">
          <div className="w-full border-l-[12px] border-kotired efficiency py-[40px] text-center text-[20pt] font-bold">
            시장트랜드(유행, SNS, 사회뉴스 등), 고객사 동향 (보도자료, PR자료
            등) 파악 <FaAngleRight size={20} className="inline" /> 구인광고 반영
          </div>
          <div className="text-kotired">
            <FaAngleDown size={40} className="mx-auto" />
          </div>
          <div className="w-full border-l-[12px] border-kotired efficiency py-[40px] text-center text-[20pt] font-bold">
            구인광고 게재 채널 및 컨셉에 따른 지원율 분석{" "}
            <FaAngleRight size={20} className="inline" /> 지원율 향상을 위한
            실시간 광고변경 적용
          </div>
          <div className="text-kotired">
            <FaAngleDown size={40} className="mx-auto" />
          </div>
          <div className="w-full border-l-[12px] border-kotired efficiency py-[40px] text-center text-[20pt] font-bold">
            고객사, 지원자 VOC수집 <FaAngleRight size={20} className="inline" />{" "}
            향후 개선방안 마련
          </div>
          <div className="text-kotired">
            <FaAngleDown size={40} className="mx-auto" />
          </div>
          <div className="w-full border-l-[12px] border-kotired efficiency py-[40px] text-center text-[20pt] font-bold">
            채용일정 종료후 진단평가 실시{" "}
            <FaAngleRight size={20} className="inline" /> 차후 채용진행을 위한
            대안제시
          </div>
        </div>
      </div>

      <div ref={infraRef} className="koticontainer mx-auto mt-[160px]">
        <div className="grid grid-cols-1 mb-[50px]">
          <div className="text-kotired text-[20pt] mb-1">채용인프라</div>
          <div className="text-[40pt] font-bold leading-10">
            <span className="text-kotired">I</span>
            nfra
          </div>
        </div>
      </div>
      <div
        className="w-full overflow-x-scroll noneScroll"
        ref={scrollRef}
        style={{
          whiteSpace: "nowrap",
          paddingLeft: `${start}px`,
          paddingRight: `${start}px`,
        }}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseMove={onDragMove}
        onMouseLeave={onDragEnd}
      >
        <div
          className="infrawrap grid grid-cols-4 gap-x-[30px] mb-4"
          onMouseDown={() => setDragable(false)}
          onMouseLeave={() => setDragable(true)}
        >
          <div className="infrabox">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-center gap-y-[30px]">
                <div className="text-[20pt] font-bold">사내전산 시스템</div>
                <div className="w-[64px] h-[2px] bg-kotired" />
                <div className="text-[14pt]">
                  체계화된 '구직자관리 전산시스템' 을 통해
                  <br />
                  신속하게 적합인원 선별가능
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <img src={infra1} className="mx-auto h-fit w-auto" alt="" />
              </div>
            </div>
          </div>
          <div className="infrabox">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-center gap-y-[30px]">
                <div className="text-[20pt] font-bold">구직자 DB</div>
                <div className="w-[64px] h-[2px] bg-kotired" />
                <div className="text-[14pt]">
                  분야별, 경력ㆍ신입별 폭넓은 '인력 Pool' 보유
                  <br />+ 경력자 위주의 '경력관리 프로그램*' 운영
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <img src={infra2} className="mx-auto h-fit w-auto" alt="" />
              </div>
            </div>
          </div>
          <div className="infrabox">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-center gap-y-[30px]">
                <div className="text-[20pt] font-bold">Plaza</div>
                <div className="w-[64px] h-[2px] bg-kotired" />
                <div className="text-[14pt]">
                  구직자와 캐주얼한 미팅이 가능한 공간을 운영하여,
                  <br />
                  업무에 대한 사전 이해도 증진 및 면접기회 확대 (예정)
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <img src={infra3} className="mx-auto h-fit w-auto" alt="" />
              </div>
            </div>
          </div>
          <div className="infrabox">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-center gap-y-[30px]">
                <div className="text-[20pt] font-bold">플랫폼</div>
                <div className="w-[64px] h-[2px] bg-kotired" />
                <div className="text-[14pt]">
                  고객사와 구직자의 상호가치를 실현할 수 있는
                  <br />
                  platform 제공 (예정)
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <img src={infra4} className="mx-auto h-fit w-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="koticontainer mx-auto h-[10px] bg-red-100 mb-[160px]">
        <div
          className="w-[25%] h-full bg-kotired"
          style={{ marginLeft: `${redScroll}%` }}
        ></div>
        {dragable && (
          <div className="koticontainer mx-auto text-[12pt] text-center mt-2 animate-blink">
            ← 마우스를 좌우로 드래그 해 보세요 →
          </div>
        )}
      </div>
    </>
  );
}

export default Consulting;
