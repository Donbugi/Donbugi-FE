"use client"

import { useApp } from '@/lib/app-context'

const navItems = [
  { id: 'news', icon: '📰', label: '뉴스' },
  { id: 'calendar', icon: '📅', label: '캘린더' },
  { id: 'home', icon: '🏠', label: '홈' },
  { id: 'shop', icon: '🏪', label: '상점' },
  { id: 'my', icon: null, label: '마이페이지' },
]

export function NavBar() {
  const { currentTab, goToTab, userChar } = useApp()

  return (
    <nav className="flex-shrink-0 bg-white/97 backdrop-blur-[20px] border-t border-[rgba(124,58,237,0.1)] flex py-2 pb-3.5">
      {navItems.map((item) => {
        const isActive = currentTab === item.id
        const icon = item.id === 'my' && userChar ? userChar.emoji : item.icon || '🐢'
        
        return (
          <button
            key={item.id}
            onClick={() => goToTab(item.id)}
            className={`flex-1 flex flex-col items-center gap-[3px] py-[5px] cursor-pointer border-none bg-transparent transition-all duration-200`}
          >
            <span 
              className={`text-[20px] transition-transform duration-200 ${
                isActive ? 'scale-[1.15] drop-shadow-[0_0_4px_rgba(124,58,237,0.5)]' : ''
              }`}
            >
              {icon}
            </span>
            <span 
              className={`text-[10px] font-bold ${
                isActive ? 'text-[#7C3AED]' : 'text-[#8888aa]'
              }`}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
