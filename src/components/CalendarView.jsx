import React from "react";
import { useWeddingStore } from "../store/useWeddingStore";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarView = () => {
  const { weddingDate, weddingTime } = useWeddingStore();
  const date = weddingDate ? new Date(weddingDate) : null;

  const koreanMonth = date ? format(date, "M월", { locale: ko }) : "";
  const koreanDay = date ? format(date, "do", { locale: ko }) : "";
  const koreanWeekday = date ? format(date, "eeee", { locale: ko }) : "";

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 w-full max-w-md mx-auto">
      {date ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {koreanMonth} {koreanDay}
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            {koreanWeekday} {weddingTime || "오후 1시"}
          </p>

          <div className="w-full">
            <DatePicker
              selected={date}
              inline
              readOnly
              locale={ko}
              calendarClassName="react-datepicker__calendar"
              dayClassName={(d) =>
                d.toDateString() === date.toDateString()
                  ? "bg-pink-500 text-white rounded-full"
                  : undefined
              }
              disabledKeyboardNavigation
              preventOpenOnFocus
              onMonthChange={() => {}}
              onYearChange={() => {}}
              showDisabledMonthNavigation
            />
          </div>
        </>
      ) : (
        <p className="text-base text-gray-600">날짜가 선택되지 않았습니다.</p>
      )}
    </div>
  );
};

export default CalendarView;
