"use client"

import { useApp } from '@/lib/app-context'

const notifications = [
  { icon: '📈', title: '엔비디아 실적 발표', desc: '오늘 장 마감 후 엔비디아 1분기 실적이 발표됩니다.', time: '1시간 전', isNew: true },
  { icon: '⚔️', title: '오늘의 과제 도착!', desc: '새로운 금융 퀴즈 3문제가 준비되었어요.', time: '3시간 전', isNew: true },
  { icon: '🔔', title: '미국 CPI 발표 예정', desc: '오늘 오후 9:30 소비자물가지수가 발표됩니다.', time: '어제', isNew: false },
]

export function NotificationPanel() {
  const { notifOpen, setNotifOpen, setNotifBadge } = useApp()

  const handleClose = () => {
    setNotifOpen(false)
    setNotifBadge(0)
  }

  if (!notifOpen) return null

  return (
    <div 
      className="absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[200]"
      onClick={handleClose}
    >
      <div 
        className="absolute top-0 left-0 right-0 bg-white rounded-b-[24px] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.2)] animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-black text-[#1a1a2e]">알림</h2>
          <button 
            className="bg-transparent border-none text-[22px] cursor-pointer text-[#8888aa]"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>
        
        {notifications.map((notif, index) => (
          <div 
            key={index}
            className="flex gap-3 py-3 border-b border-[rgba(0,0,0,0.06)] last:border-b-0 items-start"
          >
            {notif.isNew && (
              <div className="w-2 h-2 rounded-full bg-[#7C3AED] mt-[5px] flex-shrink-0" />
            )}
            <span className="text-[24px]">{notif.icon}</span>
            <div className="flex-1">
              <div className="text-sm font-black text-[#1a1a2e] mb-[2px]">{notif.title}</div>
              <div className="text-[13px] text-[#4a4a6a] leading-relaxed">{notif.desc}</div>
              <div className="text-[11px] text-[#8888aa] mt-1">{notif.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
