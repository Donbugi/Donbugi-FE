"use client";

import { useEffect, useState } from "react";
import { useApp, CHARS } from "@/lib/app-context";
import { getStoredUserId, quizApi } from "@/lib/api";

const pointHistory = [
  {
    icon: "⚔️",
    title: "오늘의 과제 참여",
    desc: "오늘 · 퀴즈 풀이 기록",
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
    desc: "혜택 교환 사용",
    amount: "-800P",
    isPlus: false,
  },
];

function getRateText(stats) {
  if (!stats || typeof stats.ratePercent !== "number") {
    return "0%";
  }

  return `${stats.ratePercent}%`;
}

function getStatsDetailText(stats) {
  if (!stats) {
    return "정답 0 · 오답 0 · 총 0";
  }

  return `정답 ${stats.correct ?? 0} · 오답 ${stats.wrong ?? 0} · 총 ${
    stats.total ?? 0
  }`;
}

function formatDateTime(value) {
  if (!value) {
    return "";
  }

  try {
    return new Date(value).toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return value;
  }
}

export function MyScreen() {
  const { userNick, userChar, toast } = useApp();
  const char = userChar || CHARS[0];

  const [dashboard, setDashboard] = useState(null);
  const [isLoadingDashboard, setIsLoadingDashboard] = useState(true);
  const [dashboardError, setDashboardError] = useState("");

  const fetchQuizDashboard = async () => {
    const userId = getStoredUserId();

    if (!userId) {
      setDashboard(null);
      setDashboardError("로그인 후 퀴즈 통계를 확인할 수 있어요.");
      setIsLoadingDashboard(false);
      return;
    }

    try {
      setIsLoadingDashboard(true);
      setDashboardError("");

      const data = await quizApi.getDashboard({ userId });
      setDashboard(data);
    } catch (error) {
      console.error("퀴즈 대시보드 조회 실패:", error);
      setDashboardError(error.message || "퀴즈 통계를 불러오지 못했어요.");
      toast?.("⚠️ 퀴즈 통계를 불러오지 못했어요.");
    } finally {
      setIsLoadingDashboard(false);
    }
  };

  useEffect(() => {
    fetchQuizDashboard();
  }, []);

  const rollingWeek = dashboard?.rollingWeek;
  const thisMonth = dashboard?.thisMonth;
  const wrongNotes = dashboard?.wrongNotesInWindow || [];

  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#F7F3FF] pb-8">
      {/* Avatar Hero */}
      <section className="mx-4 mt-4 rounded-[28px] bg-gradient-to-br from-[#7C3AED] to-[#A855F7] px-5 py-6 text-white shadow-[0_16px_35px_rgba(124,58,237,0.25)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[26px] bg-white/20 text-[42px]">
            {char.emoji}
          </div>

          <div>
            <div className="text-[13px] font-bold text-white/75">
              나의 금융 캐릭터
            </div>
            <h1 className="mt-1 text-[24px] font-black">{userNick}</h1>
            <p className="mt-1 text-[13px] font-bold text-white/85">
              {char.lvLabel} · {char.tag}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/16 p-4">
            <div className="text-[24px] font-black">3,240</div>
            <div className="text-[12px] font-bold text-white/75">FinIQ</div>
          </div>

          <div className="rounded-2xl bg-white/16 p-4">
            <div className="text-[24px] font-black">42일</div>
            <div className="text-[12px] font-bold text-white/75">
              연속 출석
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Card */}
      <section className="mx-4 mt-4 rounded-[22px] bg-white p-5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
        <h2 className="text-[17px] font-black text-[#1a1a2e]">
          아바타 진화 단계
        </h2>

        <p className="mt-1 text-[13px] font-bold text-[#8888aa]">
          현재 {char.lvLabel} · 다음 단계까지 760P
        </p>

        <div className="mt-4 flex items-center justify-between">
          {CHARS.map((item) => {
            const isCurrent = item.lv === char.lv;

            return (
              <div key={item.lv} className="text-center">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl text-[24px] ${
                    isCurrent
                      ? "bg-[#7C3AED] shadow-lg"
                      : "bg-[#F1EAFF]"
                  }`}
                >
                  {item.emoji}
                </div>
                <div
                  className={`mt-1 text-[10px] font-black ${
                    isCurrent ? "text-[#7C3AED]" : "text-[#aaa]"
                  }`}
                >
                  {isCurrent ? `${item.lvLabel} ◀` : item.lvLabel}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* News Trends */}
      <section className="mx-4 mt-4 rounded-[22px] bg-white p-5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
        <h2 className="text-[17px] font-black text-[#1a1a2e]">
          최근 관심 뉴스 동향
        </h2>

        <p className="mt-1 text-[13px] font-bold text-[#8888aa]">
          최근 한 달간 가장 많이 읽은 주제
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "#반도체 · 12회",
            "#AI전쟁 · 9회",
            "#금리인하 · 7회",
            "#엔비디아 · 6회",
            "#가상화폐 · 4회",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#F1EAFF] px-3 py-1.5 text-[12px] font-black text-[#7C3AED]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-[#F7F3FF] p-4 text-[13px] font-bold leading-relaxed text-[#6b6680]">
          AI 한마디: 기술주·반도체 뉴스에 집중되어 있어요. 포트폴리오
          다각화를 위해 부동산·채권 뉴스도 함께 살펴보세요.
        </div>
      </section>

      {/* Quiz Stats */}
      <section className="mx-4 mt-4 rounded-[22px] bg-white p-5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
        <div className="flex items-center justify-between">
          <h2 className="text-[17px] font-black text-[#1a1a2e]">
            퀴즈 통계
          </h2>

          <button
            type="button"
            onClick={fetchQuizDashboard}
            className="text-[12px] font-black text-[#7C3AED]"
          >
            새로고침
          </button>
        </div>

        {isLoadingDashboard && (
          <div className="mt-4 rounded-xl bg-[#F7F3FF] p-4 text-center text-[13px] font-bold text-[#7C3AED]">
            퀴즈 통계를 불러오는 중이에요
          </div>
        )}

        {!isLoadingDashboard && dashboardError && (
          <div className="mt-4 rounded-xl bg-[#FFF5F7] p-4 text-center text-[13px] font-bold text-[#c0243a]">
            {dashboardError}
          </div>
        )}

        {!isLoadingDashboard && !dashboardError && (
          <>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#F7F3FF] p-4">
                <div className="text-[12px] font-black text-[#8888aa]">
                  최근 7일 정답률
                </div>
                <div className="mt-2 text-[28px] font-black text-[#7C3AED]">
                  {getRateText(rollingWeek)}
                </div>
                <div className="mt-1 text-[11px] font-bold text-[#8888aa] leading-relaxed">
                  {getStatsDetailText(rollingWeek)}
                </div>
              </div>

              <div className="rounded-2xl bg-[#F0FAF7] p-4">
                <div className="text-[12px] font-black text-[#8888aa]">
                  이번 달 정답률
                </div>
                <div className="mt-2 text-[28px] font-black text-[#3CBBA2]">
                  {getRateText(thisMonth)}
                </div>
                <div className="mt-1 text-[11px] font-bold text-[#8888aa] leading-relaxed">
                  {getStatsDetailText(thisMonth)}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-[#faf8ff] p-3 text-[12px] font-bold text-[#7A728C]">
              집계 기간: {dashboard?.rollingWindowStart || "-"} ~{" "}
              {dashboard?.rollingWindowEnd || "-"}
            </div>
          </>
        )}
      </section>

      {/* Wrong Notes */}
      <section className="mx-4 mt-4 rounded-[22px] bg-white p-5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
        <h2 className="text-[17px] font-black text-[#1a1a2e]">
          과제 오답노트
        </h2>

        <p className="mt-1 text-[13px] font-bold text-[#8888aa]">
          최근 7일 이내 틀린 문제
        </p>

        {isLoadingDashboard && (
          <div className="mt-4 rounded-xl bg-[#F7F3FF] p-4 text-center text-[13px] font-bold text-[#7C3AED]">
            오답노트를 불러오는 중이에요
          </div>
        )}

        {!isLoadingDashboard && !dashboardError && wrongNotes.length === 0 && (
          <div className="mt-4 rounded-xl bg-[#F0FAF7] p-4 text-center">
            <div className="text-[28px]">🎉</div>
            <p className="mt-2 text-[13px] font-black text-[#1a7a64]">
              최근 오답이 없어요!
            </p>
          </div>
        )}

        {!isLoadingDashboard &&
          !dashboardError &&
          wrongNotes.map((note) => (
            <div
              key={note.id}
              className="mt-3 rounded-2xl border-2 border-[#F1EAFF] p-4"
            >
              <div className="text-[14px] font-black leading-relaxed text-[#1a1a2e]">
                Q. {note.question}
              </div>

              <div className="mt-2 text-[12px] font-bold text-[#c0243a]">
                내 답: {note.userAnswer}
              </div>

              <div className="mt-1 text-[12px] font-bold text-[#1a7a64]">
                정답: {note.correctAnswer}
              </div>

              <div className="mt-2 rounded-xl bg-[#F7F3FF] p-3 text-[12px] font-bold leading-relaxed text-[#6b6680]">
                💡 {note.explanation}
              </div>

              <div className="mt-2 text-[11px] font-bold text-[#aaa]">
                {formatDateTime(note.answeredAt)}
              </div>
            </div>
          ))}
      </section>

      {/* Point History */}
      <section className="mx-4 mt-4 rounded-[22px] bg-white p-5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
        <h2 className="text-[17px] font-black text-[#1a1a2e]">내역</h2>

        <p className="mt-1 text-[13px] font-bold text-[#8888aa]">
          포인트 적립 및 사용 내역 (최근 3건)
        </p>

        <div className="mt-3 space-y-3">
          {pointHistory.map((item) => (
            <div
              key={`${item.title}-${item.desc}`}
              className="flex items-center gap-3 rounded-2xl bg-[#faf8ff] p-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[22px]">
                {item.icon}
              </div>

              <div className="flex-1">
                <div className="text-[13px] font-black text-[#1a1a2e]">
                  {item.title}
                </div>
                <div className="mt-1 text-[11px] font-bold text-[#8888aa]">
                  {item.desc}
                </div>
              </div>

              <div
                className={`text-[14px] font-black ${
                  item.isPlus ? "text-[#3CBBA2]" : "text-[#FF4D6D]"
                }`}
              >
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}