interface ComicBubbleProps {
  text: string
  className?: string
}

export function ComicBubble({ text, className = "" }: ComicBubbleProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 100" className="w-full h-full">
        {/* Speech bubble path */}
        <path
          d="M30,50 L10,60 L20,40 C8,40 0,30 0,20 C0,10 20,0 100,0 C180,0 200,10 200,20 C200,30 180,40 100,40 C60,40 40,45 30,50 Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          transform="translate(0, 10)"
        />

        {/* Text inside the bubble */}
        <foreignObject x="20" y="10" width="160" height="60">
          <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-center justify-center">
            <p className="text-center text-sm font-light tracking-wide break-words max-w-full">{text}</p>
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}
