import React, { useState, useRef, useEffect } from "react";
import historyImg from "../../../Asset/Homepage/history.png";

function History() {
  const [year, setYear] = useState("2020");
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (selectRef.current) {
      // div 요소의 height를 가져와서 상태 변수에 저장
      const height = selectRef.current.clientHeight;
      setHeight(height);
    }
  }, []);

  const handleSelectValue = e => {
    setYear(e.target.value);
    scrollMove(e.target.value);
  };

  const scrollMove = y => {
    let targetElement;
    if (y === "2020") {
      targetElement = document.getElementById("y2020");
    }
    if (y === "2015") {
      targetElement = document.getElementById("y2015");
    }
    if (y === "2010") {
      targetElement = document.getElementById("y2010");
    }
    if (targetElement) {
      const yOffset = -(height + 10); // 이동할 거리를 현재 height 만큼 위로 설정합니다.
      const yCoordinate =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    }
  };

  const y2020 = useRef();
  const y2015 = useRef();
  const y2010 = useRef();
  const selectRef = useRef();
  return (
    <>
      <img
        src={historyImg}
        className="block w-fit max-w-full h-auto"
        alt="코리아티엠은 10년이 넘는 경험이 있는 채용컨설팅 기업입니다."
      />
      <div>
        <div
          ref={selectRef}
          className="mb-10 px-10 py-5 sticky top-0 bg-white border-b"
        >
          <select
            className="p-2 text-[16pt] font-bold bg-kotired text-white block w-full"
            value={year}
            onChange={handleSelectValue}
          >
            <option value="2020" className="bg-gray-50 text-black">
              2020 ~
            </option>
            <option value="2015" className="bg-gray-50 text-black">
              2015 ~ 2019
            </option>
            <option value="2010" className="bg-gray-50 text-black">
              2010 ~ 2014
            </option>
          </select>
        </div>
        <div className="w-full mb-[30px] px-[16px]">
          <div className="py-[30px] bg-kotigray pl-10 pr-2">
            <div ref={y2020} id="y2020">
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2023</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">12</div>
                  <div className="font-normal text-[9pt]">신당동 사옥 준공</div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2022</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">08</div>
                  <div className="font-normal text-[9pt]">
                    구직자 면접몰 오픈
                  </div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2021</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">05</div>
                  <div className="font-normal text-[9pt]">채용연구소 개소</div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
            </div>
            <div ref={y2015} id="y2015">
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2018</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">05</div>
                  <div className="font-normal text-[9pt]">
                    고객사 채용알선 월 2,000명 달성
                  </div>
                </div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">03</div>
                  <div className="font-normal text-[9pt]">
                    종합 CS관리 시스템 구축 (운영진단-솔루션
                    제공-CS-마케팅-직원채용 대행)
                  </div>
                </div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">01</div>
                  <div className="font-normal text-[9pt]">
                    120개사 (금융업체, 통신업체 등) 채용컨설팅 위탁업무 진행
                  </div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2016</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">08</div>
                  <div className="font-normal text-[9pt]">
                    홈페이지 개설 (ikoreatm.com)
                  </div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2015</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">05</div>
                  <div className="font-normal text-[9pt]">
                    사업영역 확대에 따른 조직 확장 (채용사업부 2개 팀, CS사업부
                    4개 팀)
                  </div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
            </div>
            <div ref={y2010} id="y2010">
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2014</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">11</div>
                  <div className="font-normal text-[9pt]">
                    사옥이전 (서울시, 중구)
                  </div>
                </div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">04</div>
                  <div className="font-normal text-[9pt]">
                    Contact Center (고객센터) 대행 사업 출범
                  </div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2012</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">08</div>
                  <div className="font-normal text-[9pt]">
                    13개 금융사 채용컨설팅 위탁계약 체결
                  </div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2011</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">11</div>
                  <div className="font-normal text-[9pt]">
                    구인,구직 잡포탈 개설 (jobkoreatm.com)
                  </div>
                </div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">06</div>
                  <div className="font-normal text-[9pt]">
                    고용촉진 사업 “ 구직자 기살리기 운동” 마케팅 진행
                  </div>
                </div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">01</div>
                  <div className="font-normal text-[9pt]">
                    채용상담회 개최, 면접자 1,000여명 달성
                  </div>
                </div>
              </div>
              <div className="mr-10 h-[1px] bg-gray-300 my-5"></div>
              <div className="grid grid-cols-1 gap-y-[15px]">
                <div className="text-kotired font-bold text-[16pt]">2010</div>
                <div className="flex justify-start gap-x-[20px] items-top">
                  <div className="font-bold text-[9pt]">12</div>
                  <div className="font-normal text-[9pt]">
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
