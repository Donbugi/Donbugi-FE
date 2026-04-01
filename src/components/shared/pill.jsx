"use client"

export function Pill({ children, color = '#7C3AED', bgColor = 'rgba(124,58,237,0.1)' }) {
  return (
    <span 
      className="text-[11px] font-bold py-[3px] px-2.5 rounded-[20px] inline-block"
      style={{ color, background: bgColor }}
    >
      {children}
    </span>
  )
}

export function HashTag({ children, onClick }) {
  return (
    <span 
      className="text-[11px] text-[#7C3AED] bg-[rgba(124,58,237,0.08)] py-[3px] px-2 rounded-[6px] font-bold cursor-pointer hover:bg-[rgba(124,58,237,0.18)] transition-colors"
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export function ProgressBar({ percentage, negative = false }) {
  return (
    <div className="h-2 bg-[#f0e8ff] rounded overflow-hidden my-1">
      <div 
        className={`h-full rounded ${
          negative 
            ? 'bg-gradient-to-r from-[#ff6b6b] to-[#ee4040]' 
            : 'bg-gradient-to-r from-[#3CBBA2] to-[#5bdb7c]'
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
