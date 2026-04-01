"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";

export function AddEventPopup() {
  const { addEventOpen, setAddEventOpen, userEvents, setUserEvents, toast } =
    useApp();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [memo, setMemo] = useState("");

  if (!addEventOpen) return null;

  const handleSave = () => {
    if (!title.trim()) {
      toast("⚠️ 일정 제목을 입력해주세요.");
      return;
    }
    if (!date) {
      toast("⚠️ 날짜를 선택해주세요.");
      return;
    }

    const [y, m, d] = date.split("-").map(Number);
    const key = `${y}-${m}-${d}`;
    const newEvents = { ...userEvents };
    if (!newEvents[key]) newEvents[key] = [];
    newEvents[key].push({ t: title, tm: time, desc: memo, c: "#7C3AED" });

    setUserEvents(newEvents);
    setAddEventOpen(false);
    toast("✅ 일정이 저장되었어요!");

    // Reset form
    setTitle("");
    setDate("");
    setTime("");
    setMemo("");
  };

  const handleCancel = () => {
    setAddEventOpen(false);
    setTitle("");
    setDate("");
    setTime("");
    setMemo("");
  };

  return (
    <div
      className="absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[300] flex items-end justify-center"
      onClick={handleCancel}
    >
      <div
        className="bg-white rounded-t-[24px] p-6 w-full max-h-[80%] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-[18px] font-black text-[#1a1a2e] mb-4">
          새 일정 추가
        </h3>

        <div className="mb-3.5">
          <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
            일정 제목
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="일정 제목을 입력하세요"
            className="w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-3.5">
          <div>
            <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
              날짜
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
            />
          </div>
          <div>
            <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
              시간
            </div>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
            />
          </div>
        </div>

        <div className="mb-3.5">
          <div className="text-[13px] font-bold text-[#4a4a6a] mb-1.5">
            메모
          </div>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="메모 (선택)"
            className="w-full border-2 border-[#e8e0ff] rounded-xl p-3 text-sm text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED]"
          />
        </div>

        <div className="flex gap-2.5 mt-1">
          <button
            onClick={handleCancel}
            className="flex-1 py-3.5 bg-[#f0e8ff] text-[#7C3AED] border-none rounded-xl text-[15px] font-black cursor-pointer"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className="flex-[2] py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-xl text-[15px] font-black cursor-pointer"
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}
