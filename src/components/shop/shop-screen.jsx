"use client";

import { useState } from "react";
import { useApp, CHARS } from "@/lib/app-context";

const earnItems = [
  {
    icon: "⚔️",
    title: "오늘의 과제 참여",
    desc: "오늘의 과제 문제 풀이시",
    points: "+20P",
    tag: "문제당",
  },
  {
    icon: "🎯",
    title: "오늘의 과제 전체 정답",
    desc: "3문제 모두 정답 시 보너스",
    points: "+20P",
    tag: "보너스",
  },
  {
    icon: "📰",
    title: "뉴스 5개 읽기",
    desc: "뉴스 상세 페이지 5개 이상 방문",
    points: "+20P",
    tag: "달성시",
  },
  {
    icon: "📖",
    title: "뉴스 10개 읽기",
    desc: "뉴스 상세 페이지 10개 이상 방문",
    points: "+40P",
    tag: "달성시",
  },
  {
    icon: "🧩",
    title: "뉴스 상세 퀴즈 참여",
    desc: "뉴스 상세 페이지 퀴즈 참여",
    points: "+20P",
    tag: "참여당",
  },
  {
    icon: "🔥",
    title: "연속 7일 출석 보너스",
    desc: "7일 연속 출석 달성 시",
    points: "+100P",
    tag: "보너스",
  },
];

const exchangeItems = [
  {
    icon: "💳",
    name: "간편결제 캐시백",
    desc: "카카오페이·토스 500원 캐시백",
    cost: "1,000P",
  },
  {
    icon: "☕",
    name: "커피 쿠폰",
    desc: "스타벅스·메가커피 아메리카노 1잔",
    cost: "800P",
  },
];

const exchangeGridItems = [
  { icon: "📡", name: "데이터 쿠폰", desc: "통신사 1GB 충전", cost: "1,500P" },
  {
    icon: "🏪",
    name: "편의점 할인",
    desc: "GS25·CU 1,000원 할인",
    cost: "600P",
  },
  { icon: "🛍️", name: "쇼핑 할인", desc: "네이버쇼핑 5,000원", cost: "2,000P" },
  { icon: "🎬", name: "OTT 이용권", desc: "웨이브·티빙 1개월", cost: "3,000P" },
];

export function ShopScreen() {
  const { userChar, setAlertPopOpen, setAlertPopData } = useApp();
  const [activeTab, setActiveTab] = useState("earn");

  const char = userChar || CHARS[0];

  const handleExchange = (name, desc, icon, cost) => {
    setAlertPopData({
      icon,
      title: `${name} 신청 완료!`,
      desc: `<strong>${cost}</strong>가 차감되며,<br><br>${desc}을(를) 이메일로 발송해드립니다.<br><br>📧 가입 이메일로 자동 발송됩니다.<br>발송까지 최대 24시간이 소요될 수 있어요.`,
    });
    setAlertPopOpen(true);
  };

  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
        <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_70%)] rounded-full" />
        <div className="absolute -bottom-10 -left-5 w-40 h-40 bg-[radial-gradient(circle,rgba(60,187,162,0.25),transparent_70%)] rounded-full" />

        <div className="px-5 pt-6 pb-5 relative z-10">
          <h1 className="text-[22px] font-black mb-1">🏪 포인트 상점</h1>
          <p className="text-[13px] opacity-75">
            활동으로 포인트를 모아 혜택으로 교환하세요
          </p>

          {/* Points Card */}
          <div className="bg-white/[0.08] border border-white/[0.12] rounded-[16px] p-4 mt-4 flex items-center justify-between backdrop-blur-[16px]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-[#ffd700] to-[#ffb300] rounded-xl flex items-center justify-center text-[22px] flex-shrink-0">
                🪙
              </div>
              <div>
                <div className="text-[11px] opacity-70 font-bold tracking-[0.5px]">
                  보유 포인트
                </div>
                <div className="text-[26px] font-black text-[#ffd700] leading-[1.1]">
                  3,240P
                </div>
                <div className="text-[11px] text-white/50 mt-[2px]">
                  이번 달 +1,240P 적립
                </div>
              </div>
            </div>
            <div className="bg-[rgba(60,187,162,0.2)] border border-[rgba(60,187,162,0.4)] rounded-[10px] py-1.5 px-3 text-center">
              <div className="text-sm font-black text-[#3CBBA2]">
                {char.lvLabel}
              </div>
              <div className="text-[10px] text-white/50">멤버십</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-shrink-0 bg-white border-b border-[rgba(0,0,0,0.06)]">
        <button
          onClick={() => setActiveTab("earn")}
          className={`flex-1 py-3 px-1.5 rounded-none text-[12px] font-bold border-none border-b-2 cursor-pointer text-center transition-all bg-transparent ${
            activeTab === "earn"
              ? "text-[#7C3AED] border-b-[#7C3AED]"
              : "text-[#8888aa] border-b-transparent"
          }`}
        >
          ✨ 포인트 적립
        </button>
        <button
          onClick={() => setActiveTab("exch")}
          className={`flex-1 py-3 px-1.5 rounded-none text-[12px] font-bold border-none border-b-2 cursor-pointer text-center transition-all bg-transparent ${
            activeTab === "exch"
              ? "text-[#7C3AED] border-b-[#7C3AED]"
              : "text-[#8888aa] border-b-transparent"
          }`}
        >
          🎁 혜택 교환
        </button>
      </div>

      {/* Content */}
      <div className="p-4 pb-6">
        {activeTab === "earn" ? (
          <>
            <div className="mb-3">
              <div className="text-[15px] font-black text-[#1a1a2e]">
                포인트 적립 방법
              </div>
              <div className="text-[12px] text-[#8888aa] mt-[2px]">
                활동에 참여하고 포인트를 적립하세요
              </div>
            </div>

            <div className="bg-white/95 rounded-[20px] p-1 px-4 mb-3.5 shadow-[0_2px_12px_rgba(60,60,120,0.08)]">
              {earnItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 py-3.5 border-b border-[rgba(0,0,0,0.05)] last:border-b-0"
                >
                  <div className="text-[20px] w-[42px] h-[42px] bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(60,187,162,0.08)] rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-black text-[#1a1a2e]">
                      {item.title}
                    </div>
                    <div className="text-[12px] text-[#8888aa] mt-[2px]">
                      {item.desc}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-[2px]">
                    <div className="text-sm font-black text-[#3CBBA2]">
                      {item.points}
                    </div>
                    <div className="text-[10px] text-[#8888aa]">{item.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-[13px] font-black text-[#8888aa] tracking-[0.5px] mt-4 mb-2">
              인기 혜택
            </div>

            {exchangeItems.map((item, i) => (
              <div
                key={i}
                className="bg-white/95 rounded-[16px] p-4 mb-2.5 shadow-[0_2px_12px_rgba(60,60,120,0.08)] cursor-pointer transition-all hover:border-[rgba(124,58,237,0.2)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(60,60,120,0.12)] border border-transparent"
                onClick={() =>
                  handleExchange(item.name, item.desc, item.icon, item.cost)
                }
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="text-[28px] w-12 h-12 bg-gradient-to-br from-[#f5eeff] to-[#eef9f5] rounded-[14px] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-black text-[#1a1a2e]">
                      {item.name}
                    </div>
                    <div className="text-[12px] text-[#8888aa] leading-[1.4] mt-[2px]">
                      {item.desc}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2.5 border-t border-[rgba(0,0,0,0.05)]">
                  <div>
                    <div className="text-[13px] font-black text-[#7C3AED]">
                      {item.cost}
                    </div>
                    <div className="text-[11px] text-[#8888aa]">
                      필요 포인트
                    </div>
                  </div>
                  <button className="bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] text-white border-none rounded-[10px] py-2 px-[18px] text-[13px] font-black cursor-pointer">
                    교환하기
                  </button>
                </div>
              </div>
            ))}

            <div className="text-[13px] font-black text-[#8888aa] tracking-[0.5px] mt-4 mb-2">
              생활 혜택
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {exchangeGridItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/95 rounded-[16px] p-4 shadow-[0_2px_12px_rgba(60,60,120,0.08)] cursor-pointer transition-all hover:border-[rgba(124,58,237,0.2)] hover:-translate-y-[1px] border border-transparent"
                  onClick={() =>
                    handleExchange(item.name, item.desc, item.icon, item.cost)
                  }
                >
                  <div className="text-[28px] mb-2">{item.icon}</div>
                  <div className="text-[13px] font-black text-[#1a1a2e]">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#8888aa] my-1 mb-2">
                    {item.desc}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[rgba(0,0,0,0.05)]">
                    <div className="text-[12px] font-black text-[#7C3AED]">
                      {item.cost}
                    </div>
                    <button className="bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] text-white border-none rounded-[10px] py-1.5 px-3 text-[12px] font-black cursor-pointer">
                      교환
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[rgba(124,58,237,0.05)] rounded-xl py-3 px-3.5 text-[12px] text-[#8888aa] leading-[1.7] mt-3.5 border border-[rgba(124,58,237,0.08)]">
              💡 교환 신청 시 가입 이메일로 쿠폰이 자동 발송됩니다. 발송까지
              최대 24시간이 소요될 수 있어요.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
