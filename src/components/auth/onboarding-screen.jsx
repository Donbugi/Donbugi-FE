"use client";

import { useState } from "react";
import { useApp, OBQ, CHARS } from "@/lib/app-context";

const USER_CHAR_KEY = "donbugi_user_char";

export function OnboardingScreen() {
  const { obStep, setObStep, obScores, setObScores, goToScreen, setUserChar } =
    useApp();

  const [selectedOption, setSelectedOption] = useState(null);

  const currentQ = OBQ[obStep];
  const isLastStep = obStep === OBQ.length - 1;
  const canProceed = selectedOption !== null;
  const optionScores = [1, 2, 3, 5];

  const saveCharacterToBrowser = (char) => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(USER_CHAR_KEY, JSON.stringify(char));
  };

  const handleSelect = (score) => {
    setSelectedOption(score);
  };

  const handleNext = () => {
    if (!canProceed) {
      return;
    }

    const updatedScores = [...obScores];
    updatedScores[obStep] = selectedOption;

    if (isLastStep) {
      const total = updatedScores.reduce((a, b) => a + b, 0);

      const char =
        total <= 7
          ? CHARS[0]
          : total <= 10
            ? CHARS[1]
            : total <= 13
              ? CHARS[2]
              : total <= 16
                ? CHARS[3]
                : CHARS[4];

      setObScores(updatedScores);
      setUserChar(char);
      saveCharacterToBrowser(char);
      goToScreen("result");
      return;
    }

    setObScores(updatedScores);
    setObStep(obStep + 1);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F3FF] px-6 py-10">
      <section className="mx-auto w-full max-w-[430px]">
        <div className="mb-7">
          <div className="mb-4 flex items-center gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i <= obStep ? "bg-[#7C3AED]" : "bg-[#E5D9FF]"
                }`}
              />
            ))}
          </div>

          <p className="text-[14px] font-bold text-[#7C3AED]">
            질문 {obStep + 1} / {OBQ.length}
          </p>
          <h1 className="mt-3 text-[26px] font-extrabold leading-snug text-[#1a1a2e]">
            {currentQ.q}
          </h1>
          <p className="mt-2 text-[15px] font-semibold text-[#7A728C]">
            {currentQ.sub}
          </p>
        </div>

        <div className="space-y-3">
          {currentQ.opts.map((opt, i) => {
            const score = optionScores[i];
            const isSelected = selectedOption === score;

            return (
              <button
                key={opt.t}
                type="button"
                onClick={() => handleSelect(score)}
                className={`flex w-full items-center gap-3 rounded-[18px] border-2 px-5 py-4 text-left text-[15px] font-bold transition-all ${
                  isSelected
                    ? "border-[#7C3AED] bg-[rgba(124,58,237,0.06)] text-[#7C3AED]"
                    : "border-[#e8e0ff] bg-white text-[#1a1a2e] hover:border-[#7C3AED]"
                }`}
              >
                <span className="text-[22px]">{opt.e}</span>
                <span>
                  {String.fromCharCode(65 + i)}. {opt.t}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed}
          className="mt-8 w-full rounded-[18px] bg-[#7C3AED] py-4 text-[16px] font-extrabold text-white shadow-[0_10px_24px_rgba(124,58,237,0.28)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLastStep ? "결과 보기 →" : "다음으로 →"}
        </button>
      </section>
    </div>
  );
}