"use client";

import { useApp, ARTS } from "@/lib/app-context";
import { HashTag } from "@/components/shared/pill";

export function ArticleView({ articleId, onBack, onHashtagClick }) {
  const { artQuizDone, setArtQuizDone, toast } = useApp();

  const article = ARTS[articleId];
  if (!article) return null;

  const quizDone = artQuizDone[articleId];

  const handleQuizAnswer = (idx) => {
    if (quizDone) return;

    const isCorrect = idx === article.quiz.ans;
    setArtQuizDone({
      ...artQuizDone,
      [articleId]: { answered: true, correct: isCorrect, selected: idx },
    });

    if (isCorrect) {
      toast("🎉 정답! +20P 적립됩니다");
    } else {
      toast("😅 오답! 참여 보너스 +20P 적립");
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      {/* Back Button */}
      <div
        className="flex-shrink-0 flex items-center gap-2 px-5 py-3.5 bg-white border-b border-[rgba(0,0,0,0.06)] cursor-pointer text-[15px] font-bold text-[#7C3AED] active:bg-[#f5f0ff]"
        onClick={onBack}
      >
        ‹ 뉴스 목록으로
      </div>

      {/* Article Content */}
      <div className="flex-1 overflow-y-auto p-5 hide-scrollbar">
        {/* Category */}
        <span
          className="inline-block text-[12px] font-bold py-1 px-3 rounded-[20px] mb-3"
          style={{ color: article.cc, background: article.cb }}
        >
          {article.cat}
        </span>

        {/* Title */}
        <div className="text-[20px] font-black text-[#1a1a2e] leading-[1.4] mb-3">
          {article.title}
        </div>

        {/* Meta */}
        <div className="flex gap-3 items-center mb-4">
          <span className="text-[13px] font-bold text-[#7C3AED]">
            {article.src}
          </span>
          <span className="text-[12px] text-[#8888aa]">{article.dt}</span>
        </div>

        {/* Body */}
        <div
          className="text-[15px] text-[#4a4a6a] leading-[1.8] mb-4"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[13px] font-bold text-[#7C3AED] bg-[rgba(124,58,237,0.08)] py-1.5 px-3.5 rounded-[20px] cursor-pointer"
              onClick={() => {
                onHashtagClick(tag.replace("#", ""));
                onBack();
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Source Link */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-4 bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(60,187,162,0.08)] rounded-xl mb-4 cursor-pointer border border-[rgba(124,58,237,0.15)] no-underline"
        >
          <span className="text-[16px]">🔗</span>
          <span className="text-[13px] font-bold text-[#7C3AED]">
            원문 보기 — {article.src}
          </span>
          <span className="ml-auto text-[12px] text-[#8888aa]">↗</span>
        </a>

        {/* Quiz */}
        <div className="bg-gradient-to-br from-[#f8f0ff] to-[#f0faff] rounded-[16px] p-4 mb-5 border-2 border-[rgba(124,58,237,0.12)]">
          <div className="text-[12px] font-black text-[#7C3AED] tracking-[0.5px] mb-2">
            🧩 뉴스 퀴즈 (+20P)
          </div>
          <div className="text-[15px] font-bold text-[#1a1a2e] mb-3 leading-relaxed">
            {article.quiz.q}
          </div>
          <div className="flex flex-col gap-2">
            {article.quiz.opts.map((opt, i) => {
              let btnClass =
                "py-2.5 px-3.5 border-2 rounded-[10px] text-sm font-bold bg-white cursor-pointer transition-all text-left";

              if (quizDone) {
                if (i === article.quiz.ans) {
                  btnClass +=
                    " border-[#3CBBA2] bg-[rgba(60,187,162,0.12)] text-[#1a7a64]";
                } else if (i === quizDone.selected && !quizDone.correct) {
                  btnClass +=
                    " border-[#FF4D6D] bg-[rgba(255,77,109,0.10)] text-[#c0243a]";
                } else {
                  btnClass += " border-[#e0d4ff] text-[#1a1a2e] opacity-50";
                }
              } else {
                btnClass +=
                  " border-[#e0d4ff] text-[#1a1a2e] hover:border-[#7C3AED] hover:text-[#7C3AED]";
              }

              return (
                <button
                  key={i}
                  className={btnClass}
                  onClick={() => handleQuizAnswer(i)}
                  disabled={!!quizDone}
                >
                  {String.fromCharCode(65 + i)}. {opt}
                </button>
              );
            })}
          </div>

          {quizDone && (
            <div
              className={`mt-2.5 py-2.5 px-3 rounded-[10px] text-[13px] font-bold leading-relaxed ${
                quizDone.correct
                  ? "bg-[rgba(60,187,162,0.12)] text-[#1a7a64]"
                  : "bg-[rgba(255,77,109,0.10)] text-[#c0243a]"
              }`}
            >
              {quizDone.correct
                ? "✅ 정답이에요! +20P 적립"
                : `❌ 오답이에요. 정답은 ${String.fromCharCode(65 + article.quiz.ans)}번이에요. +20P (참여 보너스)`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
