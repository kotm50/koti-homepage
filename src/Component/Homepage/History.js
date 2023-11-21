import React, { useEffect, useRef, useState } from "react";
import historyImg from "../../Asset/Homepage/history.png";
import Jumbotron3 from "./Jumbotron3";

function History() {
  const [yearScroll, setYearScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      //const y2023Top = y2023.current.offsetTop + 104 + 608;
      const y2018Top = y2018.current.offsetTop + 104 + 608;
      const y2014Top = y2014.current.offsetTop + 104 + 608;
      if (document.documentElement.scrollTop + 1 >= y2014Top) {
        setYearScroll(2);
      } else if (document.documentElement.scrollTop + 1 >= y2018Top) {
        setYearScroll(1);
      } else {
        setYearScroll(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyRef = useRef();
  const y2023 = useRef();
  const y2018 = useRef();
  const y2014 = useRef();

  const scrollMove = y => {
    if (y === 1) {
      y2023.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (y === 2) {
      y2018.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (y === 3) {
      y2014.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Jumbotron3 img={historyImg} title={"회사연혁"} />
      <div id="historysection" className="koticontainer mx-auto relative">
        <div
          ref={stickyRef}
          id="historyyear"
          className="grid grid-cols-1 gap-y-[80px]"
        >
          <div
            className="pt-[80px] text-gray-200 font-bold pl-[20px] text-[40pt] hover:cursor-pointer"
            onClick={e => scrollMove(1)}
          >
            <span
              className={`${
                yearScroll === 0 ? "text-black border-b-4 border-kotired" : null
              }`}
            >
              2020 ~
            </span>
          </div>
          <div
            className="py-[80px] text-gray-200 font-bold pl-[20px] text-[40pt]  hover:cursor-pointer"
            onClick={e => scrollMove(2)}
          >
            <span
              className={`${
                yearScroll === 1 ? "text-black border-b-4 border-kotired" : null
              }`}
            >
              2015 ~ 2019
            </span>
          </div>
          <div
            className="pb-[80px] text-gray-200 font-bold pl-[20px] text-[40pt]  hover:cursor-pointer"
            onClick={e => scrollMove(3)}
          >
            <span
              className={`${
                yearScroll === 2 ? "text-black border-b-4 border-kotired" : null
              }`}
            >
              2010 ~ 2014
            </span>
          </div>
        </div>
        <div id="historydetail">
          <div className="py-[50px] border-b-2 border-gray-300" ref={y2023}>
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2023
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    12
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    신당동 사옥 준공
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2022
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    08
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    구직자 면접몰 오픈
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2021
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    05
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    '채용연구소' 개소
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300" ref={y2018}>
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2018
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    05
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    고객사 채용알선 월 2,000명 달성
                  </div>
                </div>
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    03
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    종합 CS관리 시스템 구축 (운영진단-솔루션
                    제공-CS-마케팅-직원채용 대행)
                  </div>
                </div>
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    01
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    120개사 (금융업체, 통신업체 등) 채용컨설팅 위탁업무 진행
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2016
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    08
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    홈페이지 개설(코리아티엠.kr)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2015
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    05
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    사업영역 확대에 따른 조직 확장 (채용사업부 2개 팀, CS사업부
                    4개 팀)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300" ref={y2014}>
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2014
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    11
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    사옥이전 (서울시, 중구)
                  </div>
                </div>
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    04
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    Contact Center (고객센터) 대행 사업 출범
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2012
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    08
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    13개 금융사 채용컨설팅 위탁계약 체결
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] border-b-2 border-gray-300">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2011
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    11
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    구인,구직 잡포탈 개설 (jobkoreatm.com)
                  </div>
                </div>
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    06
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    고용촉진 사업 “ 구직자 기살리기 운동” 마케팅 진행
                  </div>
                </div>
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    01
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    채용상담회 개최, 면접자 1,000여명 달성
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[50px] pb-[200px]">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex flex-col justify-center text-[30pt] font-bold text-kotired">
                2010
              </div>
              <div className="col-span-8 flex flex-col justify-center gap-y-[50px]">
                <div className="grid grid-cols-8">
                  <div className="text-[18pt] font-bold flex flex-col justify-center">
                    12
                  </div>
                  <div className="col-span-7 text-[18px] flex flex-col justify-center">
                    채용대행 전문기업, 코리아티엠 설립
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
