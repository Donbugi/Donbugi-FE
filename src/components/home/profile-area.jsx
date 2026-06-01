"use client";

import { useEffect, useState } from "react";
import { useApp, KOSPI_STATUS, CHARS } from "@/lib/app-context";
import { getStoredUserId, pointApi, notificationApi, mainApi } from "@/lib/api";

export function ProfileArea() {
const {
  userNick,
  userChar,
  setNotifOpen,
  notifBadge,
  setNotifBadge,
  setMarketTempOpen,
  currentKospiStatus,
  economicWeather,
  setEconomicWeather,
  setCurrentKospiStatus,
} = useApp();

  const char = userChar || CHARS[0];
  const kospi = KOSPI_STATUS[currentKospiStatus];

  const [pointBalance, setPointBalance] = useState(0);
  const [isLoadingPoint, setIsLoadingPoint] = useState(true);

  const fetchPointBalance = async () => {
    const userId = getStoredUserId();
    if (!userId) {
      setPointBalance(0);
      setIsLoadingPoint(false);
      return;
    }
    try {
      setIsLoadingPoint(true);
      const data = await pointApi.getBalance(userId);
      setPointBalance(data?.balance ?? 0);
    } catch (error) {
      console.error("홈 포인트 조회 실패:", error);
      setPointBalance(0);
    } finally {
      setIsLoadingPoint(false);
    }
  };

    const fetchEconomicWeather = async () => {
  try {
    const data = await mainApi.getEconomicWeather();
    console.log("weatherCode 확인:", data?.weatherCode); // ← 이 줄 추가
    console.log("경제 날씨", data);
    setEconomicWeather(data);
    if (data?.weatherCode) {
      setCurrentKospiStatus(data.weatherCode);
    }
  } catch (error) {
    console.error("경제 날씨 조회 실패:", error);
  }
};
  // 앱 마운트 시 실제 unreadCount로 뱃지 초기화
  const fetchUnreadCount = async () => {
    try {
      const data = await notificationApi.getNotifications();
      setNotifBadge(data?.unreadCount ?? 0);
    } catch (err) {
      console.error("알림 뱃지 초기화 실패:", err);
      setNotifBadge(0);
    }
  };

 useEffect(() => {
  fetchPointBalance();
  fetchUnreadCount();
  fetchEconomicWeather();
}, []);

  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#7C3AED] to-[#A855F7] px-5 py-5 text-white shadow-[0_16px_35px_rgba(124,58,237,0.25)]">

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[24px] bg-white/20 text-[36px]">
            {char.emoji}
          </div>
          <div>
            <div className="text-[12px] font-bold text-white/75">안녕하세요!</div>
            <h1 className="mt-1 text-[22px] font-black leading-tight">{userNick}님</h1>
            <p className="mt-1 text-[12px] font-bold text-white/80">{char.lvLabel}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMarketTempOpen(true)}
            className="rounded-2xl bg-white/16 px-3 py-2 text-left active:scale-[0.98]"
          >
            <div className="text-[15px]">{economicWeather?.emoji || kospi?.icon}</div>
            <div className="text-[10px] font-bold text-white/70">시장 날씨</div>
            <div className="text-[11px] font-black text-white">{economicWeather?.weatherLabel || kospi?.label}</div>
          </button>

          <button
            type="button"
            onClick={() => setNotifOpen(true)}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/16 text-[20px] active:scale-[0.98]"
          >
            🔔
            {notifBadge > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF4D6D] px-1 text-[10px] font-black text-white">
                {notifBadge}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="relative z-10 mt-5 rounded-2xl bg-white/16 p-4">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-bold text-white/75">포인트</div>
          <div className="text-[22px] font-black">
            {isLoadingPoint ? "..." : `${pointBalance.toLocaleString()}P`}
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${Math.min((pointBalance / 4000) * 100, 100)}%` }}
          />
        </div>
        
      </div>
    </section>
  );
}