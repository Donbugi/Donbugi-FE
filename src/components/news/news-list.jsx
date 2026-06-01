"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Pill, HashTag, ProgressBar } from "@/components/shared/pill";
import { articleApi, newsInterestApi } from "@/lib/api";

const CATEGORIES = [
  { id: "", label: "전체" },
  { id: "금융", label: "📈 금융" },
  { id: "부동산", label: "🏠 부동산" },
  { id: "글로벌", label: "🌐 글로벌경제" },
  { id: "생활경제", label: "💰 생활경제" },
];

const CATEGORY_COLORS = {
  금융: "#7C3AED",
  부동산: "#3CBBA2",
  글로벌: "#FF9F1C",
  가상화폐: "#FF9F1C",
  산업: "#2563EB",
  생활경제: "#059669",
};

function getCategoryColor(category) {
  if (!category) return "#7C3AED";
  for (const [key, color] of Object.entries(CATEGORY_COLORS)) {
    if (category.includes(key)) return color;
  }
  return "#7C3AED";
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 1) return "방금 전";
    if (diffHours < 24) return `${diffHours}시간 전`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}일 전`;
    return date.toLocaleDateString("ko-KR", { month: "short", day: "numeric" });
  } catch {
    return dateStr;
  }
}

export function NewsList({ searchQuery, onSelectArticle, onHashtagClick }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const debounceRef = useRef(null);

  // 기사 목록 불러오기 — 검색어/카테고리에 따라 API 분기
  const loadArticles = useCallback(async (query, category) => {
    setLoading(true);
    setError("");

    try {
      let data = [];

      if (query && query.trim()) {
        // 검색어가 있으면 search API
        data = await articleApi.searchArticles(query.trim(), 30);
      } else if (category) {
        // 카테고리 선택 시 by-category API에서 해당 카테고리만 추출
        const grouped = await articleApi.getArticlesByCategory(10);
        const matched = grouped.find(
          (g) => g.category && g.category.includes(category)
        );
        data = matched?.articles ?? [];

        // 매칭 카테고리가 없으면 전체에서 클라이언트 필터링
        if (!data.length) {
          const all = await articleApi.getLatestArticles(50);
          data = all.filter(
            (a) => a.category && a.category.includes(category)
          );
        }
      } else {
        // 기본: 최신 뉴스
        data = await articleApi.getLatestArticles(30);
      }

      setArticles(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("뉴스 불러오기 실패:", err);
      setError("뉴스를 불러오지 못했어요. 잠시 후 다시 시도해보세요.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // 검색어 변경 시 디바운스 처리 (500ms)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (searchQuery && searchQuery.trim()) {
      debounceRef.current = setTimeout(() => {
        loadArticles(searchQuery, "");
      }, 500);
    } else {
      loadArticles("", selectedCategory);
    }

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchQuery, loadArticles]);

  // 카테고리 변경 시 즉시 로드
  useEffect(() => {
    if (!searchQuery || !searchQuery.trim()) {
      loadArticles("", selectedCategory);
    }
  }, [selectedCategory, loadArticles]);

  const handleArticleClick = async (article) => {
    // 관심사 기록 (실패해도 화면 전환은 진행)
    try {
      await newsInterestApi.saveRead({ category: article.category });
    } catch (err) {
      console.warn("관심사 기록 실패:", err);
    }

    onSelectArticle(article.articleId ?? article.id);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // 카테고리 변경 시 검색어 초기화
    if (searchQuery) onHashtagClick("");
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-br from-[#7C3AED] to-[#5b21b6] px-5 pt-4 pb-5 text-white">
        <h1 className="text-[22px] font-black mb-1">📰 뉴스 센터</h1>
        <p className="text-sm opacity-85">돈부기가 선별한 오늘의 금융 뉴스</p>
      </div>

      {/* Search */}
      <div className="flex-shrink-0 mx-4 mt-3 mb-2.5 bg-white rounded-[14px] py-3 px-4 flex items-center gap-2.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)]">
        <span>🔍</span>
        <input
          type="text"
          placeholder="종목명, 키워드로 뉴스 검색..."
          className="flex-1 border-none outline-none text-[15px] text-[#1a1a2e] bg-transparent"
          value={searchQuery}
          onChange={(e) => onHashtagClick(e.target.value)}
        />
        {searchQuery ? (
          <button
            type="button"
            onClick={() => onHashtagClick("")}
            className="text-[#8888aa] text-[18px] leading-none"
          >
            ×
          </button>
        ) : null}
      </div>

      {/* Category Pills */}
      <div className="flex-shrink-0 flex gap-2 overflow-x-auto px-4 pb-3 hide-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleCategoryClick(cat.id)}
            className={`py-[7px] px-4 rounded-[20px] text-[13px] font-bold cursor-pointer whitespace-nowrap border-2 transition-all ${
              selectedCategory === cat.id
                ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                : "bg-white text-[#4a4a6a] border-[#ddd]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* News List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-4 pb-4">
          {/* 로딩 */}
          {loading && (
            <div className="flex flex-col gap-3 mt-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/95 rounded-[20px] p-[18px] shadow-[0_2px_16px_rgba(60,60,120,0.10)] animate-pulse"
                >
                  <div className="h-4 bg-[#f0e8ff] rounded w-1/4 mb-3" />
                  <div className="h-5 bg-[#f0e8ff] rounded w-3/4 mb-2" />
                  <div className="h-4 bg-[#f0e8ff] rounded w-full mb-1" />
                  <div className="h-4 bg-[#f0e8ff] rounded w-5/6" />
                </div>
              ))}
            </div>
          )}

          {/* 에러 */}
          {!loading && error && (
            <div className="text-center py-10 text-[#c0243a]">
              <div className="text-[40px] mb-3">⚠️</div>
              <div className="text-[15px] font-bold mb-3">{error}</div>
              <button
                type="button"
                onClick={() => loadArticles(searchQuery, selectedCategory)}
                className="px-4 py-2 bg-[#7C3AED] text-white rounded-[10px] text-[13px] font-bold"
              >
                다시 시도
              </button>
            </div>
          )}

          {/* 결과 없음 */}
          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-10 text-[#8888aa]">
              <div className="text-[40px] mb-3">🔍</div>
              <div className="text-[16px] font-bold">
                {searchQuery
                  ? `"${searchQuery}" 검색 결과가 없어요`
                  : "뉴스가 없어요"}
              </div>
            </div>
          )}

          {/* 기사 목록 */}
          {!loading &&
            !error &&
            articles.map((article) => {
              const articleId = article.articleId ?? article.id;
              const color = getCategoryColor(article.category);
              const sentiment = article.sentimentPositivePercent ?? 0;
              const isPositive = sentiment >= 50;

              return (
                <div
                  key={articleId}
                  className="bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)] cursor-pointer transition-transform active:scale-[0.98]"
                  onClick={() => handleArticleClick(article)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <Pill color={color} bgColor={`${color}1a`}>
                      {article.category || "뉴스"}
                    </Pill>
                    <span className="text-[12px] text-[#8888aa]">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>

                  <div className="text-[16px] font-black text-[#1a1a2e] mb-2 leading-[1.4]">
                    {article.title}
                  </div>

                  {article.summary && (
                    <div className="text-sm text-[#4a4a6a] leading-relaxed mb-3">
                      {article.summary}
                    </div>
                  )}

                  {/* Tags */}
                  {article.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {article.tags.map((tag) => (
                        <HashTag
                          key={tag}
                          onClick={(e) => {
                            e.stopPropagation();
                            onHashtagClick(tag.replace("#", ""));
                          }}
                        >
                          {tag.startsWith("#") ? tag : `#${tag}`}
                        </HashTag>
                      ))}
                    </div>
                  )}

                  {/* Sentiment */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] text-[#8888aa]">
                      {isPositive ? "😊" : "😟"} 긍정 비율
                    </span>
                    <span
                      className="text-[12px] font-bold"
                      style={{ color: isPositive ? "#3CBBA2" : "#ee4040" }}
                    >
                      {sentiment}%
                    </span>
                  </div>
                  <ProgressBar
                    percentage={sentiment}
                    negative={!isPositive}
                  />

                  <div className="text-[11px] text-[#8888aa] mt-2">
                    {article.source}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}