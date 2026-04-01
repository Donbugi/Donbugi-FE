"use client"

export function Card({ children, className = '', onClick }) {
  return (
    <div 
      className={`bg-white/95 rounded-[20px] p-[18px] mx-4 mb-3.5 shadow-[0_2px_16px_rgba(60,60,120,0.10)] ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function SectionHeader({ title, action, onAction }) {
  return (
    <div className="flex justify-between items-center px-5 pt-4 pb-2">
      <span className="text-[17px] font-black text-[#1a1a2e] tracking-[-0.5px]">{title}</span>
      {action && (
        <span 
          className="text-[13px] text-[#7C3AED] font-bold cursor-pointer"
          onClick={onAction}
        >
          {action}
        </span>
      )}
    </div>
  )
}
