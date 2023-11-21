import React from "react";
import dompurify from "dompurify";

function MarketingSection(props) {
  const sanitizer = dompurify.sanitize;
  return (
    <div
      className={`${
        props.no === 2 ? "text-white" : "text-black"
      } absolute top-12 left-0`}
    >
      <div className="grid grid-cols-1 py-10 px-2">
        <div className="grid grid-cols-1">
          <div className="text-kotired text-[12pt] leading-3">
            {props.title1}
          </div>
          <div className="text-[26pt] font-bold uppercase w-full">
            <span className="text-kotired">{props.title2}</span>
            {props.title3}
          </div>
        </div>
        <div className="grid grid-cols-1 mt-[40px]">
          <div className="flex flex-col justify-start gap-y-12">
            <div className="grid grid-cols-1 gap-y-2">
              <div className="kotiborder" />
              <div className="flex justify-start gap-x-[15px] px-1">
                <div className="text-[28pt] font-bold text-kotired align-top">
                  01
                </div>
                <div
                  className="grid grid-cols-1 text-[11pt] align-top pt-3"
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(props.text1).replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-2">
              <div className="kotiborder" />
              <div className="flex justify-start gap-x-[15px] px-1">
                <div className="text-[28pt] font-bold text-kotired align-top">
                  02
                </div>
                <div
                  className="grid grid-cols-1 text-[11pt] align-top pt-3"
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(props.text2).replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingSection;
