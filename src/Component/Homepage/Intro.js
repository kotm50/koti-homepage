import React from "react";
import introImg from "../../Asset/Homepage/intro.webp";
import icon1 from "../../Asset/Homepage/icon1.png";
import icon2 from "../../Asset/Homepage/icon2.png";
import icon3 from "../../Asset/Homepage/icon3.png";
import icon4 from "../../Asset/Homepage/icon4.png";
import strength1 from "../../Asset/Homepage/strength1.png";
import strength2 from "../../Asset/Homepage/strength2.png";
import strength3 from "../../Asset/Homepage/strength3.png";
import strength4 from "../../Asset/Homepage/strength4.png";
import Jumbotron from "./Jumbotron";

function Intro() {
  return (
    <>
      <Jumbotron
        img={introImg}
        title={"INTRODUCTION"}
        text1={"코리아티엠을 소개합니다"}
      />
      <div className="koticontainer mx-auto mt-14 mb-36 grid grid-cols-1 gap-y-10">
        <div className="text-center text-[72pt] font-bold">
          2010년 설립된 코리아티엠은
        </div>
        <div className="text-[20pt] font-normal text-center">
          움츠러든 채용시장의 활성화와 만성적인 실업률 극복에 기여해 보고자
          채용컨설팅 사업을 시작하였습니다.
        </div>
        <div className="text-[14pt] text-gray-500 font-bold leading-7 text-center">
          국내 유수의 기업체와 제휴를 맺고 채용관련 아웃소싱 업무를 다년간
          진행한 결과,
          <br />
          금융·통신업의 채용대행 분야에서는 1위 자리를 놓치지 않는 회사로 확고히
          자리매김하게 되었습니다.
          <br />
          다년간의 운영을 통한 know-how, 기구축된 구직자DB, 그리고 IT기반
          솔루션을 바탕으로 고객사에 '최고 수준의 만족' 을 제공하고자 합니다.
          <br />
          기업의 불공정 채용관행 개선에 앞장서고 있으며,나아가서 구직자의
          권익보호를 위한 지원활동에도 힘쓰고 있습니다.
        </div>
      </div>
      <div className="koticontainer mx-auto mb-36 grid grid-cols-1 gap-y-10 px-20">
        <div className="grid grid-cols-1">
          <div className="text-kotired text-[20pt] leading-3">채용</div>
          <div className="text-[40pt] font-bold uppercase">
            <span className="text-kotired">R</span>
            ecruit
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="rounded-full w-60 h-60 flex flex-col justify-center bg-kotired gap-y-4 pt-4">
            <img src={icon1} alt="" className="w-fit h-auto mx-auto" />
            <div className="text-[18pt] text-center text-white">직접채널</div>
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className="w-2 h-2 rounded-full bg-kotired"></div>
          </div>
          <div className="rounded-full w-60 h-60 flex flex-col justify-center bg-kotired gap-y-4 pt-4">
            <img src={icon2} alt="" className="w-fit h-auto mx-auto" />
            <div className="text-[18pt] text-center text-white">간접채널</div>
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className="w-2 h-2 rounded-full bg-kotired"></div>
          </div>
          <div className="rounded-full w-60 h-60 flex flex-col justify-center bg-kotired gap-y-4 pt-4">
            <img src={icon3} alt="" className="w-fit h-auto mx-auto" />
            <div className="text-[18pt] text-center text-white">순환구조</div>
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className="w-2 h-2 rounded-full bg-kotired"></div>
          </div>
          <div className="rounded-full w-60 h-60 flex flex-col justify-center bg-kotired gap-y-4 pt-4">
            <img src={icon4} alt="" className="w-fit h-auto mx-auto" />
            <div className="text-[18pt] text-center text-white">운영</div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 gap-y-4">
          <div className="w-full h-44 rounded-full bg-kotigray border-2 border-koti grid grid-cols-8">
            <div></div>
            <div className="flex flex-col justify-center text-[22pt] font-bold col-span-2">
              직접채널
            </div>
            <div className="flex flex-col justify-center col-span-5 gap-y-4">
              <div className="font-bold text-[16pt] text-gray-700">
                구인광고 :{" "}
                <span className="font-medium text-[14pt]">
                  유명 취업포탈에 구인광고 게재 + 지원자 선별 및 채용알선
                </span>{" "}
              </div>
              <div className="font-bold text-[16pt] text-gray-700">
                취업사이트 운영 :{" "}
                <span className="font-medium text-[14pt]">
                  특정분야 채용에 특화된, 자체 취업사이트 운영
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-44 rounded-full bg-kotigray border-2 border-koti grid grid-cols-8">
            <div></div>
            <div className="flex flex-col justify-center text-[22pt] font-bold col-span-2">
              간접채널
            </div>
            <div className="flex flex-col justify-center col-span-5 gap-y-4">
              <div className="font-bold text-[16pt] text-gray-700">
                SNS홍보 :{" "}
                <span className="font-medium text-[14pt]">
                  유명 취업포탈에 구인광고 게재 + 지원자 선별 및 채용알선
                </span>{" "}
              </div>
              <div className="font-bold text-[16pt] text-gray-700">
                Plaza 운영 :{" "}
                <span className="font-medium text-[14pt]">
                  특정분야 채용에 특화된, 자체 취업사이트 운영
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-44 rounded-full bg-kotigray border-2 border-koti grid grid-cols-8">
            <div></div>
            <div className="flex flex-col justify-center text-[22pt] font-bold col-span-2">
              채용플랫폼의
              <br />
              순환구조
            </div>
            <div className="flex flex-col justify-center col-span-5 gap-y-4">
              <div className="font-bold text-[16pt] text-gray-700">
                포인트몰 :{" "}
                <span className="font-medium text-[14pt]">
                  유명 취업포탈에 구인광고 게재 + 지원자 선별 및 채용알선
                </span>{" "}
              </div>
              <div className="font-bold text-[16pt] text-gray-700">
                인력 Pool :{" "}
                <span className="font-medium text-[14pt]">
                  특정분야 채용에 특화된, 자체 취업사이트 운영
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-44 rounded-full bg-kotigray border-2 border-koti grid grid-cols-8">
            <div></div>
            <div className="flex flex-col justify-center text-[22pt] font-bold col-span-2">
              채용연구소
              <br />
              운영
            </div>
            <div className="flex flex-col justify-center col-span-5 gap-y-4">
              <div className="font-bold text-[16pt] text-gray-700">
                <span className="font-medium text-[14pt]">
                  기존 조직 개편 + 전문 인력 보강 →
                </span>
                채용연구소 설립
              </div>
              <div className="font-bold text-[16pt] text-gray-700">
                'Creative'한 역량 확대
                <span className="font-medium text-[14pt]">
                  를 위해, 다양한 연구 활동 진행
                </span>
              </div>
              <div className="font-bold text-[16pt] text-gray-700">
                전문인력 :{" "}
                <span className="font-medium text-[14pt]">
                  직업상담 자격취득 상담원 + 광고AE + 광고디자이너 + 솔루션
                  개발팀
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="koticontainer mx-auto mb-36 grid grid-cols-1 gap-y-10 px-20">
        <div className="grid grid-cols-1">
          <div className="text-kotired text-[20pt] leading-3">강점</div>
          <div className="text-[40pt] font-bold uppercase">
            <span className="text-kotired">S</span>
            trength
          </div>
        </div>
        <div id="strengthsection">
          <div
            id="strengthpart"
            className="top-0 left-0 flex flex-col justify-center"
          >
            <div className="leading-8 text-[18px] font-bold pl-4">
              체계화된 구직자관리 전산시스템과
              <br />
              경력관리 프로그램* 을 통해
              <br />
              채용효율의 극대화 도모.
              <br />
              기업과 구직자의 상호가치를
              <br />
              실현할 수 있는 platform 제공
            </div>
            <div
              id="circle"
              className="circle1 rounded-full flex flex-col justify-center"
            >
              <img src={strength1} className="mx-auto" alt="" />
              <div className="text-center font-bold text-[16pt]">
                IT Solution
              </div>
            </div>
          </div>
          <div
            id="strengthpart"
            className="top-0 right-0 flex flex-col justify-center"
          >
            <div className="leading-8 text-[18px] font-bold pl-32">
              10년 넘는 운영을 통해 축적된
              <br />
              know-how를 바탕으로
              <br />
              효율적인 채용대행서비스 제공
            </div>
            <div
              id="circle"
              className="circle2 rounded-full flex flex-col justify-center"
            >
              <img src={strength2} className="mx-auto" alt="" />
              <div className="text-center font-bold text-[16pt]">Know-how</div>
            </div>
          </div>
          <div
            id="strengthpart"
            className="bottom-0 left-0 flex flex-col justify-center"
          >
            <div className="leading-8 text-[18px] font-bold pl-12">
              채용 분야별로 전문화된
              <br />
              다수의 잡매니저, 광고 디자인팀
              <br />
              IT팀, 관리팀 운영
            </div>
            <div
              id="circle"
              className="circle1 rounded-full flex flex-col justify-center"
            >
              <img src={strength3} className="mx-auto" alt="" />
              <div className="text-center font-bold text-[16pt]">Staff</div>
            </div>
          </div>
          <div
            id="strengthpart"
            className="bottom-0 right-0 flex flex-col justify-center"
          >
            <div className="leading-8 text-[18px] font-bold pl-32">
              분야별, 경력ㆍ신입별
              <br />
              구동가능한 인력풀 보유
            </div>
            <div
              id="circle"
              className="circle2 rounded-full flex flex-col justify-center"
            >
              <img src={strength4} className="mx-auto" alt="" />
              <div className="text-center font-bold text-[16pt]">구직자 DB</div>
            </div>
          </div>
          <div id="graycircle" className="rounded-full"></div>
          <div id="redcircle" className="rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-6">
              <div className="text-[20pt] font-bold text-center">STRENGTH</div>
              <div className="text-[16pt] font-normal text-center">강점</div>
            </div>
          </div>
        </div>
        <div className="text-gray-400 font-bold text-[13pt]">
          * 경력관리 프로그램 : 지원자의 이력, 지원성향, 면접 태도 등을
          종합ㆍ분석하여 적합한 적합한 고객사에 추천 및 사후 정착까지 관리해
          주는 프로그램
        </div>
      </div>
    </>
  );
}

export default Intro;
