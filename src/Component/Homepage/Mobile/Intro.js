import React, { useEffect } from "react";
import Jumbotron from "./Jumbotron";
import introImg from "../../../Asset/Homepage/intro.webp";
import icon1 from "../../../Asset/Homepage/icon1.png";
import icon2 from "../../../Asset/Homepage/icon2.png";
import icon3 from "../../../Asset/Homepage/icon3.png";
import icon4 from "../../../Asset/Homepage/icon4.png";
import strength from "../../../Asset/Homepage/strength_mobile.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Intro() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Jumbotron
        img={introImg}
        title={"INTRODUCTION"}
        text1={"코리아티엠을 소개합니다"}
      />
      <div
        className="mt-[20px] mb-[60px] flex flex-col justify-start gap-y-[50px] px-[20px]"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 gap-y-5">
          <div className="text-center text-[30pt] font-bold leading-10">
            2010년에 설립된
            <br />
            코리아티엠은
          </div>
          <div className="text-[9pt] font-normal text-center tracking-tighter">
            움츠러든 채용시장의 활성화와 만성적인 실업률 극복에 기여해 보고자
            채용컨설팅 사업을 시작하였습니다.
          </div>
          <div className="text-[11pt] text-gray-400 font-medium leading-5 tracking-tighter">
            국내 유수의 기업체와 제휴를 맺고 채용관련 아웃소싱 업무를 다년간
            진행한 결과, 금융·통신업의 채용대행 분야에서는 1위 자리를 놓치지
            않는 회사로 확고히 자리매김하게 되었습니다. 다년간의 운영을 통한
            know-how, 기구축된 구직자DB 그리고 IT기반 솔루션을 바탕으로 고객사에
            '최고 수준의 만족' 을 제공하고자 합니다. 기업의 불공정 채용관행
            개선에 앞장서고 있으며, 나아가서 구직자의 권익보호를 위한
            지원활동에도 힘쓰고 있습니다.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-5 mt-[40px]">
          <div className="grid grid-cols-1" data-aos="fade-up">
            <div className="text-kotired text-[12pt] leading-3">채용</div>
            <div className="text-[26pt] font-bold uppercase">
              <span className="text-kotired">R</span>
              ecruit
            </div>
          </div>

          <div className="flex flex-row justify-between" data-aos="fade-up">
            <div className="rounded-full w-20 h-20 flex flex-col justify-center bg-kotired gap-y-1 pt-1">
              <img src={icon1} alt="" className="w-1/2 h-auto mx-auto" />
              <div className="text-[9pt] text-center text-white">직접채널</div>
            </div>
            <div className="rounded-full w-20 h-20 flex flex-col justify-center bg-kotired gap-y-1 pt-1">
              <img src={icon2} alt="" className="w-1/2 h-auto mx-auto" />
              <div className="text-[9pt] text-center text-white">간접채널</div>
            </div>
            <div className="rounded-full w-20 h-20 flex flex-col justify-center bg-kotired gap-y-1 pt-1">
              <img src={icon3} alt="" className="w-1/2 h-auto mx-auto" />
              <div className="text-[9pt] text-center text-white">순환구조</div>
            </div>
            <div className="rounded-full w-20 h-20 flex flex-col justify-center bg-kotired gap-y-1 pt-1">
              <img src={icon4} alt="" className="w-1/2 h-auto mx-auto" />
              <div className="text-[9pt] text-center text-white">운영</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-5">
            <div className="grid grid-cols-1 gap-y-1" data-aos="fade-up">
              <div className="text-[12pt] font-bold text-kotired">직접채널</div>
              <div className="p-[10px] bg-kotigray rounded-lg flex flex-col justify-center gap-y-1">
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    구인광고
                  </span>
                  <span className="text-[9pt] font-normal">:</span>
                  <span className="text-[9pt] font-normal break-keep">
                    취업포탈에 구인광고 게재 + 지원자 선별 및 채용알선
                  </span>
                </div>
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    취업사이트 운영
                  </span>
                  <span className="text-[9pt] font-normal">:</span>
                  <span className="text-[9pt] font-normal break-keep">
                    특정분야 채용에 특화된, 자체 취업사이트 운영
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-1" data-aos="fade-up">
              <div className="text-[12pt] font-bold text-kotired">간접채널</div>
              <div className="p-[10px] bg-kotigray rounded-lg flex flex-col justify-center gap-y-1">
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    SNS홍보
                  </span>
                  <span className="text-[9pt] font-normal">:</span>
                  <span className="text-[9pt] font-normal break-keep">
                    SNS활동으로, 구직자들의 호감도 형성
                  </span>
                </div>
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    Plaza운영
                  </span>
                  <span className="text-[9pt] font-normal">:</span>
                  <span className="text-[9pt] font-normal break-keep">
                    기업체-구직자간 캐주얼한 미팅이 가능한 공간 운영
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-1" data-aos="fade-up">
              <div className="text-[12pt] font-bold text-kotired">
                채용플랫폼의 순환구조
              </div>
              <div className="p-[10px] bg-kotigray rounded-lg flex flex-col justify-center gap-y-1">
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    포인트몰
                  </span>
                  <span className="text-[9pt] font-normal">:</span>
                  <span className="text-[9pt] font-normal break-keep">
                    구직자의 포인트 적립, 구매, 이벤트 참여 가능한 멤버쉽 플랫폼
                    운영
                  </span>
                </div>
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    인력 Pool
                  </span>
                  <span className="text-[9pt] font-normal">:</span>
                  <span className="text-[9pt] font-normal break-keep">
                    구직자에게 지속적인 경력관리를 제공하며 다양한 알선기회 부여
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-1" data-aos="fade-up">
              <div className="text-[12pt] font-bold text-kotired">
                채용연구소 운영
              </div>
              <div className="p-[10px] bg-kotigray rounded-lg flex flex-col justify-center gap-y-1">
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-normal">
                    기존조직개편 + 전문인력보강
                  </span>
                  <span className="text-[9pt] font-normal">→</span>
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    '채용연구소' 설립
                  </span>
                </div>
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    'Creative'한 역량 확대
                  </span>
                  <span className="text-[9pt] font-normal break-keep">
                    를 위해 다양한 연구활동 진행
                  </span>
                </div>
                <div className="items-top flex flex-nowrap justify-start gap-x-1">
                  <span className="text-[9pt] font-bold whitespace-nowrap">
                    전문인력
                  </span>
                  <span className="text-[9pt] font-normal">:</span>
                  <span className="text-[9pt] font-normal break-keep">
                    직업상담 자격취득 상담원 + 광고AE + 광고디자이너 + 솔루션
                    개발팀
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-5 mt-[40px]">
          <div className="grid grid-cols-1" data-aos="fade-up">
            <div className="text-kotired text-[12pt] leading-3">강점</div>
            <div className="text-[26pt] font-bold uppercase">
              <span className="text-kotired">S</span>
              trength
            </div>
          </div>
          <img
            src={strength}
            className="w-fit max-w-full h-auto mx-auto"
            alt=""
            data-aos="fade-up"
          />
          <div className="grid grid-cols-1 gap-y-4" data-aos="fade-up">
            <div className="bg-kotigray px-[20px] py-[24px] grid grid-cols-10 rounded">
              <div className="col-span-4 flex flex-col justify-center">
                <div className="text-center text-kotired text-[13pt] font-bold leading-6">
                  IT
                  <br />
                  Solution
                </div>
              </div>
              <div className="col-span-6 flex flex-col justify-center gap-y-[5px]">
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  체계화된 구직자관리 전산시스템과
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  경력관리 프로그램* 을 통해
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  채용효율의 극대화 도모.
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  기업과 구직자의 상호가치를
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  실현할 수 있는 platform 제공
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4" data-aos="fade-up">
            <div className="bg-kotigray px-[20px] py-[24px] grid grid-cols-10 rounded">
              <div className="col-span-4 flex flex-col justify-center">
                <div className="text-center text-kotired text-[13pt] font-bold leading-6">
                  Know-how
                </div>
              </div>
              <div className="col-span-6 flex flex-col justify-center gap-y-[5px]">
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  10년 넘는 운영을 통해 축적된
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  know-how를 바탕으로
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  효율적인 채용대행서비스 제공
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4" data-aos="fade-up">
            <div className="bg-kotigray px-[20px] py-[24px] grid grid-cols-10 rounded">
              <div className="col-span-4 flex flex-col justify-center">
                <div className="text-center text-kotired text-[13pt] font-bold leading-6">
                  구직자 DB
                </div>
              </div>
              <div className="col-span-6 flex flex-col justify-center gap-y-[5px]">
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  분야별, 경력ㆍ신입별
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  구동가능한 인력풀 보유
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4" data-aos="fade-up">
            <div className="bg-kotigray px-[20px] py-[24px] grid grid-cols-10 rounded">
              <div className="col-span-4 flex flex-col justify-center">
                <div className="text-center text-kotired text-[13pt] font-bold leading-6">
                  Staff
                </div>
              </div>
              <div className="col-span-6 flex flex-col justify-center gap-y-[5px]">
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  채용 분야별로 전문화된
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  다수의 잡매니저, 광고 디자인팀
                </div>
                <div className="whitespace-nowrap text-left text-[9pt] font-bold">
                  IT팀, 관리팀 운영
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
