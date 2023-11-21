import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dayModal } from "../../Reducer/modalSlice";
import banner from "../../Asset/Homepage/banner.png";

function RenewalModal() {
  const location = useLocation();
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modal);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (modalState.lastOpen === "") {
      setIsOpen(true);
      dispatch(
        dayModal({
          oneDay: "N",
          lastOpen: new Date(),
        })
      );
    } else {
      isAfterDay(modalState.lastOpen, modalState.oneDay);
    }
    //eslint-disable-next-line
  }, [location]);

  const isAfterDay = (lastOpen, oneDay) => {
    const lastOpenDate = new Date(lastOpen);
    const currentDate = new Date();

    //하루, 5분설정
    const oneDayDifference = currentDate - lastOpenDate > 24 * 60 * 60 * 1000;
    const fiveMinutesDifference = currentDate - lastOpenDate > 5 * 60 * 1000;

    //1분, 1분설정
    //const oneDayDifference = currentDate - lastOpenDate > 60 * 1000;
    //const fiveMinutesDifference = currentDate - lastOpenDate > 60 * 1000;
    if (oneDay === "Y") {
      if (oneDayDifference) {
        setIsOpen(true);
        dispatch(
          dayModal({
            oneDay: "N",
            lastOpen: new Date(),
          })
        );
      } else {
        return false;
      }
    } else {
      if (fiveMinutesDifference) {
        setIsOpen(true);
        dispatch(
          dayModal({
            oneDay: "N",
            lastOpen: new Date(),
          })
        );
      } else {
        return false;
      }
    }
  };

  const closeIt = () => {
    setIsOpen(false);
    dispatch(
      dayModal({
        oneDay: "N",
        lastOpen: new Date(),
      })
    );
  };

  const closeOneDay = () => {
    setIsOpen(false);
    dispatch(
      dayModal({
        oneDay: "Y",
        lastOpen: new Date(),
      })
    );
  };
  return (
    <>
      {isOpen ? (
        <div id="renewalmodal" className="drop-shadow-lg">
          <img src={banner} alt="리뉴얼 안내" className="max-w-full h-auto" />
          <div className="grid grid-cols-2 divide-x divide-red-500 bg-gray-900 py-[10px]">
            <button className="px-2 text-white" onClick={closeOneDay}>
              하루동안 보지 않기
            </button>
            <button className="px-2  text-white" onClick={closeIt}>
              창 닫기
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default RenewalModal;
