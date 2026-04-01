"use client";

import { useState } from "react";
import { useApp, OBQ, CHARS } from "@/lib/app-context";
import { StatusBar } from "@/components/shared/status-bar";

export function OnboardingScreen() {
  const { obStep, setObStep, obScores, setObScores, goToScreen, setUserChar } =
    useApp();
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQ = OBQ[obStep];
  const isLastStep = obStep === OBQ.length - 1;
  const canProceed = selectedOption !== null;

  const handleSelect = (score) => {
    setSelectedOption(score);
    const newScores = [...obScores];
    newScores[obStep] = score;
    setObScores(newScores);
  };

  const handleNext = () => {
    if (!canProceed) return;

    if (isLastStep) {
      // Calculate result
      const total = obScores.reduce((a, b) => a + b, 0);
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
      setUserChar(char);
      goToScreen("result");
    } else {
      setObStep(obStep + 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <StatusBar />
      <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] px-6 pt-7 pb-6 text-white flex-shrink-0">
          {/* Progress */}
          <div className="flex gap-1.5 mb-5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`flex-1 h-1 rounded-sm transition-colors ${
                  i < obStep ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <div className="text-[13px] opacity-80 mb-2 font-bold">
            질문 {obStep + 1} / {OBQ.length}
          </div>
          <div className="text-[19px] font-black leading-[1.4]">
            {currentQ.q}
          </div>
          <div className="text-[13px] opacity-75 mt-1.5">👉 {currentQ.sub}</div>
        </div>

        {/* Options */}
        <div className="p-5 pb-7 flex flex-col gap-2.5 flex-1">
          {currentQ.opts.map((opt, i) => {
            const score = i + 1;
            const isSelected = selectedOption === score;

            return (
              <div
                key={i}
                onClick={() => handleSelect(score)}
                className={`bg-white border-2 rounded-[14px] py-4 px-[18px] cursor-pointer transition-all flex items-center gap-3 ${
                  isSelected
                    ? "border-[#7C3AED] bg-[rgba(124,58,237,0.06)]"
                    : "border-[#e8e0ff] hover:border-[#7C3AED]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-[18px] flex-shrink-0 ${
                    isSelected ? "bg-[#7C3AED]" : "bg-[rgba(124,58,237,0.08)]"
                  }`}
                >
                  {opt.e}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-black text-[#1a1a2e]">
                    {String.fromCharCode(65 + i)}. {opt.t}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`mx-5 mb-7 py-[15px] bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-[14px] text-[16px] font-black cursor-pointer transition-opacity flex-shrink-0 ${
            canProceed ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          {isLastStep ? "결과 보기 🎯" : "다음으로 →"}
        </button>
      </div>
    </div>
  );
}
