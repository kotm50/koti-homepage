import React, { useState, useEffect, useRef } from "react";
import consultImg from "../../../Asset/Homepage/consult.webp";
import Jumbotron2 from "./Jumbotron2";

import solution1 from "../../../Asset/Homepage/solution1.png";
import solution2 from "../../../Asset/Homepage/solution2.png";
import solution3 from "../../../Asset/Homepage/solution3.png";
import solution4 from "../../../Asset/Homepage/solution4.png";

import infra1 from "../../../Asset/Homepage/infra1.png";
import infra2 from "../../../Asset/Homepage/infra2.png";
import infra3 from "../../../Asset/Homepage/infra3.png";
import infra4 from "../../../Asset/Homepage/infra4.png";

import AOS from "aos";
import "aos/dist/aos.css";

import { FaAngleDown, FaAngleRight } from "react-icons/fa";

function Consulting() {
  const [efficiency, setEfficiency] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      const newScrollLeft = scrollLeft;

      // 가로 스크롤의 퍼센티지를 계산합니다.
      let percentage = (newScrollLeft / (scrollWidth - clientWidth)) * 100;
      // 소수점 제거 및 0 미만 및 100 초과 값 처리
      percentage = Math.floor(percentage); // 소수점 제거
      percentage = Math.max(0, Math.min(100, percentage)); // 0 미만 및 100 초과 값 처리

      // 퍼센티지를 업데이트합니다.
      setScrollPercent(percentage);
    };

    // 스크롤 이벤트 리스너를 추가합니다.
    const scrollRefCurrent = scrollRef.current; // 현재 ref 값을 캡처
    scrollRefCurrent.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
    return () => {
      scrollRefCurrent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

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
      const { clientWidth, scrollLeft } = scrollRef.current;
      const newScrollLeft = startX - e.pageX;

      // 스크롤 위치를 업데이트합니다.
      scrollRef.current.scrollLeft = newScrollLeft;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollRef.current.scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const scrollRef = useRef(null);
  const infraRef = useRef(null);

  return (
    <>
      <Jumbotron2
        img={consultImg}
        title={"최적의 채용 컨설팅"}
        text1={"코리아티엠은 10년 이상의 현장 경험을 통해"}
        text2={"개발한 자체 솔루션으로 다양한 기업체를 대상으로"}
        text3={"최적의 채용컨설팅을 수행하고 있습니다"}
      />
      <div className="grid grid-cols-1 gap-y-5 mt-[54px] px-[20px]">
        <div className="grid grid-cols-1" data-aos="fade-up">
          <div className="text-kotired text-[12pt] leading-3">채용솔루션</div>
          <div className="text-[26pt] font-bold">
            <span className="text-kotired">S</span>
            olution
          </div>
        </div>
        <div className="grid grid-cols-1" data-aos="fade-up">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center mx-auto mb-4">
            <img src={solution1} alt="" className="w-fit h-auto mx-auto" />
          </div>
          <div className="text-kotired text-center text-[12pt] font-bold mb-4">
            개요
          </div>
          <div className="text-center text-[10pt] flex flex-col justify-start gap-y-3">
            기업의 유능한 인재선발에 필요한 모든
            <br />
            채용과정을 대행하여 드리는 서비스
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-300 mx-auto my-[20px]"></div>
        <div className="grid grid-cols-1" data-aos="fade-up">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center mx-auto mb-4">
            <img src={solution2} alt="" className="w-fit h-auto mx-auto" />
          </div>
          <div className="text-kotired text-center text-[12pt] font-bold mb-4">
            사전작업
          </div>
          <div className="text-center text-[10pt] flex flex-col justify-start gap-y-3">
            <div>고객사 현황 및 인재상 검토ㆍ분석</div>
            <FaAngleDown size={20} className="text-kotired mx-auto" />
            <div>채용컨설팅</div>
            <FaAngleDown size={20} className="text-kotired mx-auto" />
            <div>구인광고 컨셉 선정 및 디자인 작업</div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-300 mx-auto my-[20px]"></div>
        <div className="grid grid-cols-1" data-aos="fade-up">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center mx-auto mb-4">
            <img src={solution3} alt="" className="w-fit h-auto mx-auto" />
          </div>
          <div className="text-kotired text-center text-[12pt] font-bold mb-4">
            채용진행
          </div>
          <div className="text-center text-[10pt] flex flex-col justify-start gap-y-3">
            <div>구인광고 게재</div>
            <FaAngleDown size={20} className="text-kotired mx-auto" />
            <div>입사지원서 접수 및 지원서 평가</div>
            <FaAngleDown size={20} className="text-kotired mx-auto" />
            <div>사전 면접대행</div>
            <FaAngleDown size={20} className="text-kotired mx-auto" />
            <div>면접안내</div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-300 mx-auto my-[20px]"></div>
        <div className="grid grid-cols-1" data-aos="fade-up">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex flex-col justify-center mx-auto mb-4">
            <img src={solution4} alt="" className="w-fit h-auto mx-auto" />
          </div>
          <div className="text-kotired text-center text-[12pt] font-bold mb-4">
            사후관리
          </div>
          <div className="text-center text-[10pt] flex flex-col justify-start gap-y-3">
            <div>최종합격자 발표</div>
            <FaAngleDown size={20} className="text-kotired mx-auto" />
            <div>정착관리(밀착면담 진행)</div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-300 mx-auto my-[20px]"></div>
      </div>
      <div
        className="grid grid-cols-1 gap-y-5 mt-[54px] px-[20px]"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1">
          <div className="text-kotired text-[12pt] leading-3">효율분석</div>
          <div className="text-[26pt] font-bold">
            <span className="text-kotired">E</span>
            fficiency
          </div>
        </div>
        <div className="flex flex-row justify-start gap-x-1">
          <button
            className={`${
              efficiency <= 1 ? "bg-kotired" : "bg-black"
            } p-1 text-white font-bold rounded text-[9pt]`}
            onClick={() => {
              setEfficiency(1);
            }}
          >
            트렌드/동향파악
          </button>
          <button
            className={`${
              efficiency === 2 ? "bg-kotired" : "bg-black"
            } p-1 text-white font-bold rounded text-[9pt]`}
            onClick={() => {
              setEfficiency(2);
            }}
          >
            지원율 분석
          </button>
          <button
            className={`${
              efficiency === 3 ? "bg-kotired" : "bg-black"
            } p-1 text-white font-bold rounded text-[9pt]`}
            onClick={() => {
              setEfficiency(3);
            }}
          >
            VOC수집
          </button>
          <button
            className={`${
              efficiency === 4 ? "bg-kotired" : "bg-black"
            } p-1 text-white font-bold rounded text-[9pt]`}
            onClick={() => {
              setEfficiency(4);
            }}
          >
            진단평가
          </button>
        </div>
        {efficiency === 0 && (
          <>
            <div
              className="w-full border-l-[4px] border-kotired efficiency py-[14px] text-center text-[9pt] font-bold flex justify-around gap-x-[8px] px-[20px] items-center"
              data-aos="fade-up"
            >
              <div className="text-center tracking-tighter">
                시장트랜드, 고객사 동향 파악
              </div>
              <FaAngleRight size={20} />
              <div className="text-center tracking-tighter">구인광고 반영</div>
            </div>
          </>
        )}
        {efficiency === 1 && (
          <>
            <div
              className="w-full border-l-[4px] border-kotired efficiency py-[14px] text-center text-[9pt] font-bold flex justify-around gap-x-[8px] px-[20px] items-center"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <div className="text-center tracking-tighter">
                시장트랜드, 고객사 동향 파악
              </div>
              <FaAngleRight size={20} />
              <div className="text-center tracking-tighter">구인광고 반영</div>
            </div>
          </>
        )}
        {efficiency === 2 && (
          <>
            <div
              className="w-full border-l-[4px] border-kotired efficiency py-[14px] text-center text-[9pt] font-bold flex justify-around gap-x-[8px] px-[20px] items-center"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <div className="text-center tracking-tighter">
                구인광고 게재 채널 컨셉에 따른 지원율 분석
              </div>
              <FaAngleRight size={20} />
              <div className="text-center tracking-tighter">
                지원율 향상을 위한 실시간 광고변경 적용
              </div>
            </div>
          </>
        )}
        {efficiency === 3 && (
          <>
            <div
              className="w-full border-l-[4px] border-kotired efficiency py-[14px] text-center text-[9pt] font-bold flex justify-around gap-x-[8px] px-[20px] items-center"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <div className="text-center tracking-tighter">
                고객사, 지원자 VOC수집
              </div>
              <FaAngleRight size={20} />
              <div className="text-center tracking-tighter">
                향후 개선방안 마련
              </div>
            </div>
          </>
        )}
        {efficiency === 4 && (
          <>
            <div
              className="w-full border-l-[4px] border-kotired efficiency py-[14px] text-center text-[9pt] font-bold flex justify-around gap-x-[8px] px-[20px] items-center"
              data-aos="fade-down"
              data-aos-once="true"
            >
              <div className="text-center tracking-tighter">
                채용일정 종료 후<br /> 진단평가 실시
              </div>
              <FaAngleRight size={20} />
              <div className="text-center tracking-tighter">
                차후 채용진행을 위한
                <br /> 대안 제시
              </div>
            </div>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 my-[54px]" data-aos="fade-up">
        <div className="grid grid-cols-1 mb-5 px-[20px]" ref={infraRef}>
          <div className="text-kotired text-[12pt] leading-3">채용인프라</div>
          <div className="text-[26pt] font-bold">
            <span className="text-kotired">I</span>
            nfra
          </div>
        </div>
        <div
          className="w-full overflow-x-scroll noneScroll mb-2"
          ref={scrollRef}
          style={{
            whiteSpace: "nowrap",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseMove={onDragMove}
          onMouseLeave={onDragEnd}
        >
          <div className="infrawrap_mobile grid grid-cols-4 gap-x-[10px]">
            <div className="infrabox_mobile relative">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center gap-y-[12px]">
                  <div className="text-[13pt] font-bold">사내전산 시스템</div>
                  <div className="w-[24px] h-[1px] bg-kotired" />
                  <div className="text-[10pt] tracking-tighter">
                    체계화된 '구직자관리 전산시스템' 을 통해
                    <br />
                    신속하게 적합인원 선별가능
                  </div>
                </div>
                <img
                  src={infra1}
                  className="absolute top-[20px] right-[20px] w-[32px] h-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="infrabox_mobile relative">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center gap-y-[12px]">
                  <div className="text-[13pt] font-bold">구직자 DB</div>
                  <div className="w-[24px] h-[1px] bg-kotired" />
                  <div className="text-[10pt] tracking-tighter">
                    분야별, 경력ㆍ신입별 폭넓은 '인력 Pool' 보유
                    <br />+ 경력자 위주의 '경력관리 프로그램*' 운영
                  </div>
                </div>
                <img
                  src={infra2}
                  className="absolute top-[20px] right-[20px] w-[32px] h-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="infrabox_mobile relative">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center gap-y-[12px]">
                  <div className="text-[13pt] font-bold">Plaza</div>
                  <div className="w-[24px] h-[1px] bg-kotired" />
                  <div className="text-[10pt] tracking-tighter">
                    구직자와 캐주얼한 미팅이 가능한 공간을 운영하여,
                    <br />
                    업무에 대한 사전 이해도 증진 및 면접기회 확대 (예정)
                  </div>
                </div>
                <img
                  src={infra3}
                  className="absolute top-[20px] right-[20px] w-[32px] h-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="infrabox_mobile relative">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center gap-y-[12px]">
                  <div className="text-[13pt] font-bold">플랫폼</div>
                  <div className="w-[24px] h-[1px] bg-kotired" />
                  <div className="text-[10pt] tracking-tighter">
                    고객사와 구직자의 상호가치를 실현할 수 있는
                    <br />
                    platform 제공 (예정)
                  </div>
                </div>
                <img
                  src={infra4}
                  className="absolute top-[20px] right-[20px] w-[32px] h-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-x-[4px]">
          <div
            className={`h-2 ${
              scrollPercent >= 0 && scrollPercent < 25
                ? "w-4 bg-kotired"
                : "w-2 bg-gray-300"
            } transition-all duration-300 rounded-full`}
          ></div>
          <div
            className={`h-2 ${
              scrollPercent >= 25 && scrollPercent < 50
                ? "w-4 bg-kotired"
                : "w-2 bg-gray-300"
            } transition-all duration-300 rounded-full`}
          ></div>
          <div
            className={`h-2 ${
              scrollPercent >= 50 && scrollPercent < 75
                ? "w-4 bg-kotired"
                : "w-2 bg-gray-300"
            } transition-all duration-300 rounded-full`}
          ></div>
          <div
            className={`h-2 ${
              scrollPercent >= 75 ? "w-4 bg-kotired" : "w-2 bg-gray-300"
            } transition-all duration-300 rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Consulting;
