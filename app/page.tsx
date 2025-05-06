"use client"

import { useState, useRef } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function Home() {
  const [customText, setCustomText] = useState("Your text here")
  const stencilRef = useRef<HTMLDivElement>(null)

  // Function to handle the stencil download
  const handleDownload = () => {
    // In a real implementation, this would generate and download the actual stencil
    const element = document.createElement("a")
    const file = new Blob([`Peace Feliz Stencil with text: ${customText}`], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "peace-feliz-stencil.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <main className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      {/* Minimal Banner */}
      <header className="w-full py-8 px-6 border-b border-stone-200">
        <h1 className="text-2xl font-light tracking-wide text-center">THE PEACE FELIZ</h1>
      </header>

      {/* Main content with ample whitespace */}
      <div className="flex-grow flex flex-col md:flex-row p-8 md:p-16 gap-12 max-w-6xl mx-auto w-full">
        {/* Left column - Stencil preview */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div
            ref={stencilRef}
            className="aspect-square w-full max-w-md bg-white shadow-sm rounded-sm p-8 flex items-center justify-center relative"
          >
            {/* Stencil preview container */}
            <div className="relative w-full h-full">
              {/* Feliz character - increased size */}
              <div className="absolute bottom-0 left-0 w-3/5 h-auto">
                <Image
                  src="/images/feliz.png"
                  alt="Feliz character"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>

              {/* Speech bubble with the provided SVG - positioned with a small gap and enlarged */}
              <div className="absolute top-1/4 left-[55%] w-[55%] h-auto">
                <div className="relative w-full h-full">
                  {/* SVG container */}
                  <div className="relative w-full">
                    {/* The SVG bubble */}
                    <Image
                      src="/images/bubble.svg"
                      alt="Speech bubble"
                      width={903}
                      height={469}
                      className="w-full h-auto"
                    />

                    {/* Text overlay positioned inside the bubble */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 flex items-center justify-center">
                        <p className="text-center font-light tracking-wide break-words max-w-full">
                          {customText || "Your text here"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Text customization and download */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <label htmlFor="custom-text" className="block text-sm font-light mb-2 text-stone-500">
                Customize your stencil
              </label>
              <Textarea
                id="custom-text"
                placeholder="Enter your personalized text here"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="min-h-[120px] bg-white border-stone-200 focus-visible:ring-stone-300"
              />
            </div>

            <Button
              onClick={handleDownload}
              className="w-full py-6 bg-yellow-400 hover:bg-yellow-900 text-white rounded-sm font-light tracking-wide"
            >
              <Download className="mr-2 h-4 w-4" /> Download Stencil
            </Button>

            <p className="text-xs text-stone-400 text-center mt-4">Share your creation with #PeaceFeliz</p>
          </div>
        </div>
      </div>
    </main>
  )
}
