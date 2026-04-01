"use client"

import { useApp } from '@/lib/app-context'

export function Toast() {
  const { toastMessage, toastVisible } = useApp()

  return (
    <div 
      className={`fixed bottom-[100px] left-1/2 -translate-x-1/2 bg-[rgba(30,20,60,0.95)] text-white py-3 px-5 rounded-[30px] text-sm font-bold z-[999] whitespace-nowrap pointer-events-none transition-all duration-300 ${
        toastVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5'
      }`}
    >
      {toastMessage}
    </div>
  )
}
