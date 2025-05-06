interface SpeechBubbleProps {
  text: string
  className?: string
}

export function SpeechBubble({ text, className = "" }: SpeechBubbleProps) {
  return (
    <div className={`relative bg-white border border-stone-200 rounded-2xl p-4 ${className}`}>
      {/* Triangle pointer for speech bubble */}
      <div
        className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 
        border-t-8 border-t-transparent 
        border-r-8 border-r-stone-200
        border-b-8 border-b-transparent"
      ></div>
      <div
        className="absolute left-0 top-1/2 -translate-x-1.5 -translate-y-1/2 w-0 h-0 
        border-t-7 border-t-transparent 
        border-r-7 border-r-white
        border-b-7 border-b-transparent"
      ></div>

      {/* Text content */}
      <p className="text-center font-light tracking-wide break-words max-w-full text-stone-700">{text}</p>
    </div>
  )
}
