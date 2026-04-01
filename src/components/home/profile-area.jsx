"use client";

import { useApp, KOSPI_STATUS, CHARS } from "@/lib/app-context";

export function ProfileArea() {
  const {
    userNick,
    userChar,
    setNotifOpen,
    notifBadge,
    setMarketTempOpen,
    currentKospiStatus,
  } = useApp();

  const char = userChar || CHARS[0];
  const kospi = KOSPI_STATUS[currentKospiStatus];

  return (
    <div className="flex-shrink-0 bg-gradient-to-br from-[#7C3AED] via-[#5b21b6] to-[#3CBBA2] px-5 pt-4 pb-[22px] relative overflow-hidden">
      {/* Background circle */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.08] rounded-full" />

      {/* Top Row */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-16 h-16 bg-white/20 rounded-full border-[3px] border-white/50 flex items-center justify-center text-[32px] relative animate-float">
            <span>{char.emoji}</span>
            <div className="absolute -bottom-1 -right-1 bg-[#FF9F1C] text-white text-[10px] font-black py-[2px] px-1.5 rounded-lg border-2 border-white">
              {char.lvLabel}
            </div>
          </div>

          {/* User Info */}
          <div className="text-white">
            <div className="text-[13px] opacity-85 mb-[2px]">안녕하세요!</div>
            <div className="text-[18px] font-black tracking-[-0.5px]">
              {userNick}님 👋
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-2.5 items-start">
          {/* Market Temp */}
          <div
            className="bg-white/15 rounded-[14px] py-2.5 px-3.5 text-center text-white backdrop-blur-[10px] cursor-pointer transition-colors hover:bg-white/25"
            onClick={() => setMarketTempOpen(true)}
          >
            <div className="text-[24px]">{kospi.icon}</div>
            <div className="text-[10px] opacity-80">시장 날씨</div>
            <div className="text-[12px] font-bold">{kospi.label}</div>
          </div>

          {/* Bell Button */}
          <button
            className="bg-white/15 border-none rounded-full w-[42px] h-[42px] flex items-center justify-center cursor-pointer relative"
            onClick={() => setNotifOpen(true)}
          >
            <span className="text-[20px]">🔔</span>
            {notifBadge > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF4D6D] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white/40">
                {notifBadge}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* FinIQ Bar */}
      <div className="bg-white/15 rounded-xl py-2.5 px-3.5 text-white">
        <div className="flex justify-between text-[12px] mb-1.5">
          <span className="font-bold text-[13px]">
            💎 금융 지능 지수 (FinIQ)
          </span>
          <span className="font-black text-[#ffd700]">3,240P</span>
        </div>
        <div className="h-2 bg-white/25 rounded overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ffd700] to-[#ffec6e] rounded animate-expand-fill"
            style={{ width: "72%" }}
          />
        </div>
        <div className="text-[11px] text-white/70 mt-1 text-right">
          다음 레벨까지 760P
        </div>
      </div>
    </div>
  );
}
