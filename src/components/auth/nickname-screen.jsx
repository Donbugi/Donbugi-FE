"use client";

import { useState } from "react";
import { useApp } from "@/lib/app-context";

export function NicknameScreen() {
  const { goToScreen, setUserNick, toast, setObStep, setObScores } = useApp();
  const [nickname, setNickname] = useState("");

  const isValid = nickname.trim().length >= 2;

  const handleNext = () => {
    if (!isValid) {
      toast("⚠️ 닉네임은 2자 이상 입력해주세요.");
      return;
    }
    setUserNick(nickname.trim());
    setObStep(0);
    setObScores([0, 0, 0, 0]);
    goToScreen("onboarding");
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#7C3AED] to-[#3CBBA2] px-8 py-12 pb-9 text-center text-white flex-shrink-0">
          <div className="text-[56px] mb-2.5 animate-float">🐢</div>
          <h2 className="text-[24px] font-black mb-2">반가워요!</h2>
          <p className="text-sm opacity-85 leading-relaxed">
            돈부기에서 사용할
            <br />
            닉네임을 입력해주세요
          </p>
        </div>

        {/* Body */}
        <div className="p-7 pb-8 flex-1 flex flex-col gap-3.5">
          <div>
            <div className="text-sm font-black text-[#1a1a2e] mb-1.5">
              닉네임
            </div>
            <input
              type="text"
              maxLength={10}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="2~10자 사이로 입력하세요"
              className="w-full border-2 border-[#e8e0ff] rounded-[14px] py-3.5 px-4 text-[15px] text-[#1a1a2e] outline-none transition-colors focus:border-[#7C3AED] bg-white"
            />
            <div className="text-[12px] text-[#8888aa] mt-1.5">
              ⚠️ 한글, 영문, 숫자 사용 가능 (최대 10자)
            </div>
          </div>
          <button
            onClick={handleNext}
            className={`w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-opacity ${
              isValid ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
          >
            다음으로 →
          </button>
        </div>
      </div>
    </div>
  );
}
