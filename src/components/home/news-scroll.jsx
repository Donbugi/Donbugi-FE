"use client";

import { useApp } from "@/lib/app-context";
import { SectionHeader } from "@/components/shared/card";
import { Pill, HashTag, ProgressBar } from "@/components/shared/pill";

const newsItems = [
  {
    id: "nvda",
    pill: "🔬 반도체",
    pillColor: "#7C3AED",
    title: "엔비디아, AI 칩 수요 폭발로 분기 매출 최고 기록",
    summary:
      "데이터센터 부문이 전년 대비 200% 성장하며 시장 예측을 크게 웃돌았습니다.",
    tags: ["반도체", "AI전쟁"],
    sentiment: "긍정적 전망",
    sentimentIcon: "😊",
    percentage: 80,
    negative: false,
    borderColor: "#7C3AED",
  },
  {
    id: "realestate",
    pill: "🏠 부동산",
    pillColor: "#3CBBA2",
    title: "서울 아파트 거래량 4개월 연속 증가세",
    summary: "금리 인하 기대감에 실수요자 중심으로 거래가 회복되고 있습니다.",
    tags: ["부동산", "금리인하"],
    sentiment: "긍정적 전망",
    sentimentIcon: "😊",
    percentage: 65,
    negative: false,
    borderColor: "#3CBBA2",
  },
  {
    id: "fed",
    pill: "🌐 글로벌",
    pillColor: "#FF9F1C",
    title: "미 연준, 올해 금리 인하 횟수 조정 시사",
    summary:
      "연준 의장이 인플레이션 목표 달성 전까지 신중한 접근을 강조했습니다.",
    tags: ["금리인상", "연준"],
    sentiment: "부정적 전망",
    sentimentIcon: "😟",
    percentage: 42,
    negative: true,
    borderColor: "#FF9F1C",
  },
];

export function NewsScroll() {
  const { goToTab } = useApp();

  return (
    <>
      <SectionHeader
        title="📰 오늘의 뉴스"
        action="더보기 ›"
        onAction={() => goToTab("news")}
      />
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 hide-scrollbar">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="min-w-[260px] bg-white/95 rounded-[20px] p-4 shadow-[0_2px_16px_rgba(60,60,120,0.10)] cursor-pointer transition-transform active:scale-[0.97]"
            style={{ borderTop: `3px solid ${item.borderColor}` }}
            onClick={() => goToTab("news")}
          >
            <Pill color={item.pillColor} bgColor={`${item.pillColor}1a`}>
              {item.pill}
            </Pill>
            <div className="text-[15px] font-black text-[#1a1a2e] leading-[1.4] my-2">
              {item.title}
            </div>
            <div className="text-[13px] text-[#4a4a6a] leading-relaxed mb-2.5">
              {item.summary}
            </div>
            <div className="flex gap-1.5 flex-wrap mb-2.5">
              {item.tags.map((tag) => (
                <HashTag key={tag}>#{tag}</HashTag>
              ))}
            </div>
            <div className="text-[11px] text-[#8888aa] flex justify-between mb-1">
              <span>
                {item.sentimentIcon} {item.sentiment}
              </span>
              <span
                className="font-bold"
                style={{ color: item.negative ? "#ee4040" : "#3CBBA2" }}
              >
                {item.percentage}%
              </span>
            </div>
            <ProgressBar
              percentage={item.percentage}
              negative={item.negative}
            />
          </div>
        ))}
      </div>
    </>
  );
}
