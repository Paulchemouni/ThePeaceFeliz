import Image from "next/image"

interface StencilPreviewProps {
  text: string
}

export function StencilPreview({ text }: StencilPreviewProps) {
  return (
    <div className="relative w-full h-full">
      {/* Feliz character - increased size */}
      <div className="absolute bottom-0 left-0 w-3/5 h-auto">
        <Image src="/images/feliz.png" alt="Feliz character" width={300} height={300} className="object-contain" />
      </div>

      {/* Speech bubble with the provided SVG - positioned with a small gap and enlarged */}
      <div className="absolute top-1/4 left-[55%] w-[55%] h-auto">
        <div className="relative w-full h-full">
          {/* SVG container */}
          <div className="relative w-full">
            {/* The SVG bubble */}
            <Image src="/images/bubble.svg" alt="Speech bubble" width={903} height={469} className="w-full h-auto" />

            {/* Text overlay positioned inside the bubble */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 flex items-center justify-center">
                <p className="text-center font-light tracking-wide break-words max-w-full">
                  {text || "Your text here"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
