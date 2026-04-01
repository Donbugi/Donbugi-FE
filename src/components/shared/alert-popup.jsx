"use client"

import { useApp } from '@/lib/app-context'

export function AlertPopup() {
  const { alertPopOpen, setAlertPopOpen, alertPopData } = useApp()
  
  if (!alertPopOpen) return null

  return (
    <div 
      className="absolute inset-0 bg-[rgba(10,10,30,0.6)] z-[400] flex items-center justify-center"
      onClick={() => setAlertPopOpen(false)}
    >
      <div 
        className="bg-white rounded-[24px] py-7 px-6 mx-5 w-full max-w-[340px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-[52px] mb-3">{alertPopData.icon}</div>
        <div className="text-[18px] font-black text-[#1a1a2e] mb-2">{alertPopData.title}</div>
        <div 
          className="text-sm text-[#4a4a6a] leading-[1.7] mb-5"
          dangerouslySetInnerHTML={{ __html: alertPopData.desc }}
        />
        <button 
          className="w-full py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#3CBBA2] text-white border-none rounded-xl text-[15px] font-black cursor-pointer"
          onClick={() => setAlertPopOpen(false)}
        >
          확인
        </button>
      </div>
    </div>
  )
}
