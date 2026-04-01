"use client";

import { useApp, CHARS } from "@/lib/app-context";

const wrongNotes = [
  {
    q: "Q. 미 연준의 기준금리 결정 기구는?",
    a: "내 답: FRB ❌ → 정답: FOMC (연방공개시장위원회) ✅",
    hint: "💡 FRB는 연방준비제도를, FOMC는 금리를 실제로 결정하는 기구예요!",
  },
  {
    q: "Q. PER이 낮을수록 주가는?",
    a: "내 답: 고평가 ❌ → 정답: 저평가 가능성 ✅",
    hint: "💡 PER이 낮으면 이익 대비 주가가 낮다는 뜻이에요.",
  },
  {
    q: "Q. 비트코인 반감기 주기는?",
    a: "내 답: 2년 ❌ → 정답: 약 4년 ✅",
    hint: "💡 약 21만 블록(≈4년)마다 채굴 보상이 절반으로 줄어들어요.",
  },
  {
    q: "Q. 주가순자산비율(PBR)이 1 미만이면?",
    a: "내 답: 고평가 ❌ → 정답: 저평가 가능성 ✅",
    hint: "💡 PBR 1 미만은 주가가 순자산보다 낮다는 뜻이에요.",
  },
  {
    q: "Q. 코스피는 어느 나라 주가지수인가요?",
    a: "내 답: 일본 ❌ → 정답: 대한민국 ✅",
    hint: "💡 코스피(KOSPI)는 Korea Composite Stock Price Index의 약자예요!",
  },
];

const pointHistory = [
  {
    icon: "⚔️",
    title: "오늘의 과제 참여",
    desc: "오늘 · Q1 연준 관련 문제",
    amount: "+20P",
    isPlus: true,
  },
  {
    icon: "🔥",
    title: "7일 연속 출석 보너스",
    desc: "어제 · 출석 체크",
    amount: "+100P",
    isPlus: true,
  },
  {
    icon: "🎁",
    title: "커피 쿠폰 교환",
    desc: "3월 22일 · 혜택 교환 사용",
    amount: "-800P",
    isPlus: false,
  },
];

export function MyScreen() {
  const { userNick, userChar } = useApp();
  const char = userChar || CHARS[0];

  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar">
      <div className="p-4">
        {/* Avatar Hero */}
        <div className="bg-gradient-to-br from-[#7C3AED] to-[#3CBBA2] rounded-[20px] p-6 text-center text-white mb-4">
          <div className="text-[80px] mb-2">{char.emoji}</div>
          <div className="text-[22px] font-black mb-1">{userNick}</div>
          <div className="text-sm opacity-90 mb-3">
            {char.lvLabel} · {char.tag}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/20 rounded-xl py-2.5 px-2 text-center">
              <div className="text-[18px] font-black">3,240</div>
              <div className="text-[11px] opacity-80">FinIQ</div>
            </div>
            <div className="bg-white/20 rounded-xl py-2.5 px-2 text-center">
              <div className="text-[18px] font-black">42일</div>
              <div className="text-[11px] opacity-80">연속 출석</div>
            </div>
          </div>
        </div>

        {/* Evolution Card */}
        <div className="bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
          <div className="text-[17px] font-black text-[#1a1a2e] tracking-[-0.5px] mb-1">
            🥚 아바타 진화 단계
          </div>
          <div className="text-[13px] text-[#8888aa] mb-1">
            현재 {char.lvLabel} · 다음 단계까지 760P
          </div>

          <div className="flex justify-between items-end py-3 relative">
            <div className="absolute bottom-7 left-5 right-5 h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] rounded-sm" />
            {CHARS.map((c) => {
              const isCurrent = c.lv === char.lv;
              return (
                <div
                  key={c.lv}
                  className={`text-center relative z-10 transition-all ${isCurrent ? "" : "opacity-35 blur-[1px]"}`}
                >
                  <div
                    className={`${isCurrent ? "text-[30px] drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]" : "text-[22px]"}`}
                  >
                    {c.emoji}
                  </div>
                  <div
                    className={`text-[11px] font-bold ${isCurrent ? "text-[#7C3AED] font-black" : "text-[#8888aa]"}`}
                  >
                    {isCurrent ? `${c.lvLabel} ◀` : c.lvLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* News Trends */}
        <div className="bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
          <div className="text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-2.5">
            📰 최근 관심 뉴스 동향
          </div>
          <div className="text-[13px] text-[#4a4a6a] mb-2.5">
            최근 한 달간 가장 많이 읽은 주제
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {[
              "#반도체 · 12회",
              "#AI전쟁 · 9회",
              "#금리인하 · 7회",
              "#엔비디아 · 6회",
              "#가상화폐 · 4회",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-bold text-[#7C3AED] bg-[rgba(124,58,237,0.08)] py-1 px-2.5 rounded-[20px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-2.5 p-2.5 bg-[rgba(124,58,237,0.06)] rounded-[10px] text-[13px] text-[#4a4a6a] leading-relaxed">
            💡 <strong>AI 한마디:</strong> 기술주·반도체 뉴스에 집중되어 있어요.
            포트폴리오 다각화를 위해 부동산·채권 뉴스도 함께 살펴보세요.
          </div>
        </div>

        {/* Quiz Stats */}
        <div className="bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
          <div className="text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-3">
            📝 오늘의 과제 정답률
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-[rgba(0,0,0,0.05)]">
            <span className="text-sm text-[#4a4a6a]">이번 주 정답률</span>
            <span className="text-[15px] font-black text-[#3CBBA2]">
              88% (15/17)
            </span>
          </div>
          <div className="flex justify-between items-center py-2.5">
            <span className="text-sm text-[#4a4a6a]">이번 달 정답률</span>
            <span className="text-[15px] font-black text-[#3CBBA2]">81%</span>
          </div>
          <div className="mt-2.5 h-2 bg-[#e8e0ff] rounded overflow-hidden">
            <div className="w-[81%] h-full bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] rounded" />
          </div>
          <div className="text-[11px] text-[#8888aa] mt-1 text-right">
            이번 달 81%
          </div>
        </div>

        {/* Wrong Notes */}
        <div className="bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
          <div className="text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-2.5">
            📖 과제 오답노트
          </div>
          <div className="text-[13px] text-[#8888aa] mb-2.5">
            최근 7일 이내 틀린 문제
          </div>
          <div className="max-h-[220px] overflow-y-auto hide-scrollbar">
            {wrongNotes.map((note, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#fff8e1] to-[#fff3cd] rounded-[10px] p-3 mb-2 last:mb-0 border-l-[3px] border-l-[#FF9F1C]"
              >
                <div className="text-[13px] font-bold text-[#1a1a2e] mb-1">
                  {note.q}
                </div>
                <div className="text-[12px] text-[#7a5800] leading-relaxed">
                  {note.a}
                  <br />
                  {note.hint}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Point History */}
        <div className="bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
          <div className="text-[15px] font-black text-[#1a1a2e] flex items-center gap-1.5 mb-2.5">
            💎 내역
          </div>
          <div className="text-[12px] text-[#8888aa] mb-2.5">
            포인트 적립 및 사용 내역 (최근 3건)
          </div>
          {pointHistory.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(0,0,0,0.05)] last:border-b-0"
            >
              <div className="text-[20px] w-9 h-9 bg-[rgba(124,58,237,0.08)] rounded-[10px] flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm font-black text-[#1a1a2e]">
                  {item.title}
                </div>
                <div className="text-[12px] text-[#8888aa]">{item.desc}</div>
              </div>
              <div
                className={`text-[15px] font-black ${item.isPlus ? "text-[#3CBBA2]" : "text-[#FF4D6D]"}`}
              >
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
