import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-full max-w-2xl p-8">
        {/* Beige background shape */}
        <div className="absolute inset-0 bg-[#f8ebe0] rounded-3xl transform rotate-3 scale-105">
          <div className="w-full h-full opacity-50" style={{
            backgroundImage: `radial-gradient(#FFFFFF 2px, transparent 2px)`,
            backgroundSize: '15px 15px'
          }}></div>
        </div>
        
        {/* Light blue shapes */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-[#99c6e1] rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full opacity-50" style={{
            backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '10px 10px'
          }}></div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#99c6e1] rounded-full transform translate-x-1/4 translate-y-1/4">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '10px 10px'
          }}></div>
        </div>
        
        {/* Yellow decorative shape */}
        <div className="absolute inset-0 transform scale-110 -rotate-6">
          <div className="absolute top-12 left-12 w-64 h-32 bg-[#ffdb4d] rounded-lg opacity-80">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(#FFFFFF 2px, transparent 2px)`,
              backgroundSize: '15px 15px'
            }}></div>
          </div>
        </div>

        {/* White card with text */}
        <Card className="relative z-10 p-6 shadow-lg mx-auto">
          <h2 className="text-5xl font-bold text-[#254460] mb-2 text-center">Gender and numbers</h2>
          <p className="text-3xl text-[#0070b3] text-center">part 1</p>
        </Card>
      </div>
    </div>
  )
}
