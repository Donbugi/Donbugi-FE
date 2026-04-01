"use client";

import { useApp } from "@/lib/app-context";
import { StatusBar } from "@/components/shared/status-bar";

export function ResultScreen() {
  const { userChar, goToScreen, setCurrentTab } = useApp();

  const char = userChar || {
    emoji: "🐢",
    name: "거북이",
    tag: "금융 입문 단계",
    desc: "",
    features: [],
  };

  const handleStart = () => {
    setCurrentTab("home");
    goToScreen("main");
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <StatusBar />
      <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#7C3AED] via-[#5b21b6] to-[#3CBBA2] px-8 py-12 pb-9 text-center text-white relative overflow-hidden flex-shrink-0">
          <div className="absolute -top-[50px] -right-[50px] w-40 h-40 bg-white/[0.07] rounded-full" />
          <div className="text-[80px] mb-3 animate-float">{char.emoji}</div>
          <div className="text-[26px] font-black mb-1.5">{char.name}</div>
          <div className="inline-block bg-white/20 py-1 px-4 rounded-[20px] text-[13px] font-bold mb-2">
            {char.tag}
          </div>
          <div className="text-sm opacity-85 leading-relaxed whitespace-pre-line">
            {char.desc}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 pb-8 flex-1">
          <div className="bg-white rounded-[20px] p-4 mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
            <h3 className="text-[15px] font-black text-[#1a1a2e] mb-2.5">
              ✨ 나의 금융 성향
            </h3>
            {char.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5">
                <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                <div className="text-sm text-[#4a4a6a]">{feature}</div>
              </div>
            ))}
          </div>
          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-transform active:scale-[0.97]"
          >
            🐢 돈부기 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
