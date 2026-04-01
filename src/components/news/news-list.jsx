"use client"

import { useState } from 'react'
import { Pill, HashTag } from '@/components/shared/pill'

const categories = [
  { id: '', label: '전체' },
  { id: '주식', label: '📈 증권' },
  { id: '부동산', label: '🏠 부동산' },
  { id: '연준', label: '🌐 글로벌' },
  { id: '비트코인', label: '💰 가상화폐' },
]

const newsItems = [
  {
    id: 'nvda',
    keywords: '반도체 엔비디아 ai ai전쟁 주식',
    pill: '🔬 반도체',
    pillColor: '#7C3AED',
    title: '엔비디아, AI 칩 수요 폭발로 분기 매출 최고 기록',
    summary: '데이터센터 부문이 전년 대비 200% 성장하며 시장 예측을 크게 웃돌았습니다.',
    tags: ['반도체', 'AI전쟁'],
    sentiment: { text: '긍정 80%', color: '#3CBBA2', icon: '😊' },
    time: '2시간 전',
  },
  {
    id: 'realestate',
    keywords: '부동산 아파트 서울 금리 금리인하',
    pill: '🏠 부동산',
    pillColor: '#3CBBA2',
    title: '서울 아파트 거래량 4개월 연속 증가세',
    summary: '금리 인하 기대감에 실수요자 중심으로 거래가 회복되고 있습니다.',
    tags: ['부동산', '금리인하'],
    sentiment: { text: '긍정 65%', color: '#3CBBA2', icon: '😊' },
    time: '4시간 전',
  },
  {
    id: 'fed',
    keywords: '연준 금리 달러 cpi 금리인상',
    pill: '🌐 글로벌',
    pillColor: '#FF9F1C',
    title: '미 연준, 올해 금리 인하 횟수 조정 시사',
    summary: '연준 의장이 인플레이션 목표 달성 전까지 신중한 접근을 강조했습니다.',
    tags: ['금리인상', '연준'],
    sentiment: { text: '부정 58%', color: '#ee4040', icon: '😟' },
    time: '6시간 전',
  },
  {
    id: 'btc',
    keywords: '비트코인 이더리움 가상화폐 etf',
    pill: '💰 가상화폐',
    pillColor: '#FF9F1C',
    title: '비트코인, ETF 자금 유입에 다시 8만 달러 돌파 시도',
    summary: '현물 ETF를 통한 기관 자금 유입이 재개되면서 비트코인이 다시 8만 달러를 향해 상승 중입니다.',
    tags: ['비트코인', 'ETF'],
    sentiment: { text: '긍정 72%', color: '#3CBBA2', icon: '😊' },
    time: '8시간 전',
  },
]

export function NewsList({ searchQuery, onSelectArticle, onHashtagClick }) {
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredNews = newsItems.filter((item) => {
    const matchSearch = !searchQuery || item.keywords.toLowerCase().includes(searchQuery.toLowerCase())
    const matchCat = !selectedCategory || item.keywords.toLowerCase().includes(selectedCategory.toLowerCase())
    return matchSearch && matchCat
  })

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
      </div>

      {/* Category Pills */}
      <div className="flex-shrink-0 flex gap-2 overflow-x-auto px-4 pb-3 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`py-[7px] px-4 rounded-[20px] text-[13px] font-bold cursor-pointer whitespace-nowrap border-2 transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#7C3AED] text-white border-[#7C3AED]'
                : 'bg-white text-[#4a4a6a] border-[#ddd]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* News List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-4 pb-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-10 text-[#8888aa]">
              <div className="text-[40px] mb-3">🔍</div>
              <div className="text-[16px] font-bold">검색 결과가 없습니다</div>
            </div>
          ) : (
            filteredNews.map((item) => (
              <div 
                key={item.id}
                className="bg-white/95 rounded-[20px] p-[18px] mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)] cursor-pointer transition-transform active:scale-[0.98]"
                onClick={() => onSelectArticle(item.id)}
              >
                <div className="flex justify-between items-center mb-2">
                  <Pill color={item.pillColor} bgColor={`${item.pillColor}1a`}>
                    {item.pill}
                  </Pill>
                  <span className="text-[12px] text-[#8888aa]">{item.time}</span>
                </div>
                <div className="text-[16px] font-black text-[#1a1a2e] mb-2 leading-[1.4]">
                  {item.title}
                </div>
                <div className="text-sm text-[#4a4a6a] leading-relaxed mb-3">
                  {item.summary}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1.5">
                    {item.tags.map((tag) => (
                      <HashTag 
                        key={tag} 
                        onClick={(e) => {
                          e.stopPropagation()
                          onHashtagClick(tag)
                        }}
                      >
                        #{tag}
                      </HashTag>
                    ))}
                  </div>
                  <span 
                    className="text-[12px] font-bold"
                    style={{ color: item.sentiment.color }}
                  >
                    {item.sentiment.icon} {item.sentiment.text}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
