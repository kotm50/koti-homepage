import React from "react";
import dompurify from "dompurify";

function MarketingSection(props) {
  const sanitizer = dompurify.sanitize;
  return (
    <div className="bg-white text-black hover:bg-black hover:text-white py-20">
      <div className="koticontainer mx-auto grid grid-cols-1 py-10 px-20">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1">
            <div className="text-kotired text-[20pt] leading-3">
              {props.title1}
            </div>
            <div className="text-[32pt] font-bold uppercase">
              <span className="text-kotired">{props.title2}</span>
              {props.title3}
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2">
          <div></div>
          <div className="flex flex-col justify-start gap-y-20">
            <div className="grid grid-cols-1 gap-y-2">
              <div className="kotiborder" />
              <div className="grid grid-cols-5 px-4">
                <div className="text-[32pt] font-bold text-kotired align-top">
                  01
                </div>
                <div
                  className="col-span-4 grid grid-cols-1 text-[14pt] align-top pt-3"
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(props.text1).replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-2">
              <div className="kotiborder" />
              <div className="grid grid-cols-5 px-4">
                <div className="text-[32pt] font-bold text-kotired align-top">
                  02
                </div>
                <div
                  className="col-span-4 grid grid-cols-1 text-[14pt] align-top pt-3"
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(props.text2).replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.no === 3 && <div className="h-12 w-full"></div>}
    </div>
  );
}

export default MarketingSection;
