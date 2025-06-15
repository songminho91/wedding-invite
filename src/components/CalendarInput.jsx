import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useWeddingStore } from "../store/useWeddingStore";

const CalendarInput = () => {
  const { weddingDate, setWeddingDate, weddingTime, setWeddingTime } = useWeddingStore();

  const handleDateChange = (date) => {
    if (date) {
      setWeddingDate(date.toISOString());
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-2 text-gray-700">
          📅 날짜를 선택하세요
        </label>
        <DatePicker
          selected={weddingDate ? new Date(weddingDate) : null}
          onChange={handleDateChange}
          dateFormat="yyyy년 MM월 dd일"
          placeholderText="날짜 선택"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          popperPlacement="bottom"
          showPopperArrow={false}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-2 text-gray-700">
          🕐 시간 입력
        </label>
        <input
          type="text"
          value={weddingTime}
          onChange={(e) => setWeddingTime(e.target.value)}
          placeholder="예: 오후 1시 30분"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
    </div>
  );
};

export default CalendarInput;
