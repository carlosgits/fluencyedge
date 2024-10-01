import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white relative">
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#f8ebe0] rounded-full -ml-16 -mt-16 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#99c6e1] rounded-full -mr-20 -mb-20 opacity-50"></div>
      
      <h2 className="text-3xl font-bold text-[#254460] mb-8 text-center relative z-10">Fill in the blanks</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
        <Card className="bg-[#f8ebe0] p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#254460] mb-4">Word Bank</h3>
          <div className="flex flex-wrap gap-2">
            {["qué", "mañana", "veo", "chao", "hay", "gusto", "favor", "luego"].map((word, index) => (
              <span key={index} className="bg-white px-3 py-1 rounded-full text-[#0070b3] font-medium">{word}</span>
            ))}
          </div>
        </Card>
        
        <Card className="bg-[#99c6e1] bg-opacity-20 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#254460] mb-4">Instructions</h3>
          <p className="text-[#254460]">Choose the correct word from the word bank to complete each sentence. Pay attention to context and grammar!</p>
        </Card>
      </div>
      
      <div className="space-y-6 relative z-10">
        {[
          "A. Marcos, te veo ______.",
          "B. ¡Adiós! Te ______ en la próxima ______.",
          "C. Buenas noches. Un ______ conocerte.",
          "D. Buenos días, Carlos. ¿______ más? ¿Qué ______ de nuevo?"
        ].map((sentence, index) => (
          <Card key={index} className="p-4 bg-white shadow-md border-l-4 border-[#0070b3]">
            <p className="text-[#254460]">{sentence}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}