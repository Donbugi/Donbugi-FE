"use client";

import { useApp } from "@/lib/app-context";
import { SectionHeader } from "@/components/shared/card";

const quizzes = [
  {
    id: "q1",
    question: "Q1. 엔비디아 데이터센터 매출이 전년 대비 얼마나 성장했나요?",
    options: ["200%", "50%", "100%"],
    correctIndex: 0,
  },
  {
    id: "q2",
    question: "Q2. 금리 인하 기대감으로 거래가 회복된 시장은?",
    options: ["주식시장", "부동산", "채권시장"],
    correctIndex: 1,
  },
  {
    id: "q3",
    question: "Q3. 미 연준이 목표로 하는 인플레이션 수치는?",
    options: ["1%", "3%", "2%"],
    correctIndex: 2,
  },
];

export function TodayQuiz() {
  const { qDone, setQDone, toast } = useApp();

  const doneCount = Object.keys(qDone).length;

  const handleAnswer = (quizId, optIndex, correctIndex) => {
    if (qDone[quizId]) return;

    const isCorrect = optIndex === correctIndex;
    const newQDone = {
      ...qDone,
      [quizId]: {
        answered: true,
        correct: isCorrect,
        selected: optIndex,
        correctIndex,
      },
    };
    setQDone(newQDone);

    if (isCorrect) {
      toast("🎉 정답! +20P 적립");
    } else {
      toast("😅 오답! 정답을 확인해보세요");
    }

    // Check if all done
    const newDoneCount = Object.keys(newQDone).length;
    if (newDoneCount === 3) {
      const allCorrect = Object.values(newQDone).every((q) => q.correct);
      setTimeout(() => {
        if (allCorrect) {
          toast("🏆 오늘 과제 전체 정답! 보너스 +20P");
        } else {
          toast("⚔️ 오늘 과제 완료!");
        }
      }, 800);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-5 pt-4 pb-2">
        <span className="text-[17px] font-black text-[#1a1a2e] tracking-[-0.5px]">
          ⚔️ 오늘의 과제
        </span>
        <span className="text-[13px] text-[#7C3AED] font-bold">
          {doneCount} / 3 완료
        </span>
      </div>

      <div className="mx-4 mb-3.5 bg-white/95 rounded-[20px] p-4 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
        {quizzes.map((quiz) => {
          const result = qDone[quiz.id];
          const isDone = !!result;

          return (
            <div
              key={quiz.id}
              className={`bg-gradient-to-br from-[#f8f0ff] to-[#f0faff] rounded-xl p-3.5 mb-2.5 last:mb-0 border-2 transition-colors ${
                isDone
                  ? result.correct
                    ? "border-[#3CBBA2] bg-[rgba(60,187,162,0.06)]"
                    : "border-[#FF4D6D] bg-[rgba(255,77,109,0.06)]"
                  : "border-transparent"
              }`}
            >
              <div className="text-sm font-bold text-[#1a1a2e] mb-2 leading-[1.4]">
                {quiz.question}
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {quiz.options.map((opt, i) => {
                  let btnClass =
                    "py-1.5 px-3 border-2 rounded-lg text-[13px] font-bold bg-white cursor-pointer transition-all";

                  if (isDone) {
                    if (i === result.correctIndex) {
                      btnClass += " border-[#3CBBA2] bg-[#3CBBA2] text-white";
                    } else if (i === result.selected && !result.correct) {
                      btnClass += " border-[#FF4D6D] bg-[#FF4D6D] text-white";
                    } else {
                      btnClass += " border-[#ddd] text-[#1a1a2e] opacity-50";
                    }
                  } else {
                    btnClass +=
                      " border-[#ddd] text-[#1a1a2e] hover:border-[#7C3AED] hover:text-[#7C3AED]";
                  }

                  return (
                    <button
                      key={i}
                      className={btnClass}
                      onClick={() =>
                        handleAnswer(quiz.id, i, quiz.correctIndex)
                      }
                      disabled={isDone}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isDone && (
                <div
                  className={`mt-2 py-2 px-2.5 rounded-lg text-[12px] font-bold leading-relaxed ${
                    result.correct
                      ? "bg-[rgba(60,187,162,0.12)] text-[#1a7a64]"
                      : "bg-[rgba(255,77,109,0.10)] text-[#c0243a]"
                  }`}
                >
                  {result.correct
                    ? "✅ 정답이에요! +20P 적립"
                    : `❌ 오답이에요! 정답: ${quiz.options[quiz.correctIndex]}`}
                </div>
              )}
            </div>
          );
        })}

        {/* Schedule Section */}
        <div className="bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(60,187,162,0.08)] rounded-xl p-3 flex items-center gap-3 mt-3">
          <span className="text-[24px]">📅</span>
          <div className="flex-1">
            <div className="text-[11px] text-[#8888aa] font-bold tracking-wider">
              D-DAY 주요 일정
            </div>
            <div className="text-sm font-black text-[#1a1a2e]">
              미국 소비자물가지수(CPI) 발표
            </div>
            <div className="text-[13px] text-[#7C3AED] font-bold">
              오늘 오후 9:30 🔔
            </div>
          </div>
          <button
            className="bg-[#7C3AED] text-white border-none rounded-lg py-2 px-3 text-[12px] font-bold cursor-pointer"
            onClick={() => toast("⏰ 알림이 설정되었어요!")}
          >
            알림 ON
          </button>
        </div>
      </div>
    </>
  );
}
