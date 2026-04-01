"use client";

import { useState } from "react";
import { useApp, SYS_EVS } from "@/lib/app-context";
import { AddEventPopup } from "./add-event-popup";

const MONTH_NAMES = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];
const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];

export function CalendarScreen() {
  const { userEvents, addEventOpen, setAddEventOpen } = useApp();

  const now = new Date();
  const [calYear, setCalYear] = useState(now.getFullYear());
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState(null);

  const calNav = (dir) => {
    let newMonth = calMonth + dir;
    let newYear = calYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCalMonth(newMonth);
    setCalYear(newYear);
  };

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const prevMonthDays = new Date(calYear, calMonth, 0).getDate();

  const getEventsForDay = (day) => {
    const key = `${calYear}-${calMonth + 1}-${day}`;
    return [...(SYS_EVS[key] || []), ...(userEvents[key] || [])];
  };

  const renderCalendarDays = () => {
    const days = [];

    // Previous month days
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`prev-${i}`}
          className="min-h-[50px] rounded-lg p-1 cursor-pointer transition-colors hover:bg-[rgba(124,58,237,0.06)]"
        >
          <div className="w-6 h-6 flex items-center justify-center text-[12px] font-bold text-[#ccc] mx-auto mb-[2px]">
            {prevMonthDays - firstDay + 1 + i}
          </div>
        </div>,
      );
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dow = (firstDay + d - 1) % 7;
      const isToday =
        d === now.getDate() &&
        calMonth === now.getMonth() &&
        calYear === now.getFullYear();
      const isSelected =
        selectedDay &&
        selectedDay.d === d &&
        selectedDay.m === calMonth &&
        selectedDay.y === calYear;
      const events = getEventsForDay(d);

      days.push(
        <div
          key={`day-${d}`}
          className={`min-h-[50px] rounded-lg p-1 cursor-pointer transition-colors hover:bg-[rgba(124,58,237,0.06)] ${
            isSelected ? "bg-[rgba(124,58,237,0.1)]" : ""
          }`}
          onClick={() => setSelectedDay({ d, m: calMonth, y: calYear })}
        >
          <div
            className={`w-6 h-6 flex items-center justify-center text-[12px] font-bold mx-auto mb-[2px] ${
              isToday
                ? "bg-[#7C3AED] text-white rounded-full"
                : dow === 0
                  ? "text-[#ee4040]"
                  : dow === 6
                    ? "text-[#7C3AED]"
                    : "text-[#1a1a2e]"
            }`}
          >
            {d}
          </div>
          <div className="flex gap-[2px] justify-center flex-wrap">
            {events.map((e, i) => (
              <div
                key={i}
                className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{ background: e.c || "#7C3AED" }}
              />
            ))}
          </div>
        </div>,
      );
    }

    // Next month days
    const remain = (7 - ((firstDay + daysInMonth) % 7)) % 7;
    for (let i = 1; i <= remain; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="min-h-[50px] rounded-lg p-1 cursor-pointer transition-colors hover:bg-[rgba(124,58,237,0.06)]"
        >
          <div className="w-6 h-6 flex items-center justify-center text-[12px] font-bold text-[#ccc] mx-auto mb-[2px]">
            {i}
          </div>
        </div>,
      );
    }

    return days;
  };

  const selectedEvents = selectedDay ? getEventsForDay(selectedDay.d) : [];

  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] px-5 pt-4 pb-5 text-white">
        <h1 className="text-[22px] font-black mb-1">📅 금융 캘린더</h1>
        <p className="text-sm opacity-85">
          주요 경제 일정과 나만의 일정을 관리하세요
        </p>
      </div>

      <div className="h-3" />

      {/* Calendar */}
      <div className="bg-white mx-4 rounded-[20px] shadow-[0_2px_16px_rgba(60,60,120,0.10)] overflow-hidden">
        {/* Month Nav */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <div className="text-[17px] font-black text-[#1a1a2e]">
            {calYear}년 {MONTH_NAMES[calMonth]}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => calNav(-1)}
              className="bg-[rgba(124,58,237,0.08)] border-none rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-[16px] text-[#7C3AED]"
            >
              ‹
            </button>
            <button
              onClick={() => calNav(1)}
              className="bg-[rgba(124,58,237,0.08)] border-none rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-[16px] text-[#7C3AED]"
            >
              ›
            </button>
            <button
              onClick={() => setAddEventOpen(true)}
              className="bg-[#7C3AED] border-none rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer text-[18px] text-white font-black"
            >
              +
            </button>
          </div>
        </div>

        {/* Day Names */}
        <div className="grid grid-cols-7 px-3 pb-1">
          {DAY_NAMES.map((name, i) => (
            <span
              key={name}
              className={`text-[11px] font-bold text-center py-1 ${
                i === 0
                  ? "text-[#ee4040]"
                  : i === 6
                    ? "text-[#7C3AED]"
                    : "text-[#8888aa]"
              }`}
            >
              {name}
            </span>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-[2px] px-3 pb-3">
          {renderCalendarDays()}
        </div>
      </div>

      <div className="h-3" />

      {/* Event Details */}
      <div className="mx-4 mb-3 bg-white rounded-[20px] shadow-[0_2px_16px_rgba(60,60,120,0.10)] p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-[15px] font-black text-[#1a1a2e]">
            {selectedDay
              ? `${selectedDay.y}년 ${MONTH_NAMES[selectedDay.m]} ${selectedDay.d}일`
              : "날짜를 선택해주세요"}
          </div>
        </div>

        {selectedDay && selectedEvents.length === 0 && (
          <div className="text-sm text-[#8888aa] py-3 text-left">
            이 날에는 등록된 일정이 없습니다
          </div>
        )}

        {selectedEvents.map((event, i) => (
          <div
            key={i}
            className="flex gap-2.5 items-start py-2.5 border-b border-[rgba(0,0,0,0.06)] last:border-b-0"
          >
            <div
              className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"
              style={{ background: event.c || "#7C3AED" }}
            />
            <div className="flex-1">
              <div className="text-sm font-black text-[#1a1a2e] mb-[2px]">
                {event.t}
              </div>
              <div className="text-[12px] text-[#8888aa]">{event.tm}</div>
              {event.desc && (
                <div className="text-[13px] text-[#4a4a6a] mt-[3px] leading-relaxed">
                  {event.desc}
                </div>
              )}
            </div>
          </div>
        ))}

        {!selectedDay && (
          <div className="text-sm text-[#8888aa] py-3 text-left">
            날짜를 클릭하면 일정을 확인할 수 있습니다
          </div>
        )}
      </div>

      <div className="h-4" />

      {/* Add Event Popup */}
      <AddEventPopup />
    </div>
  );
}
