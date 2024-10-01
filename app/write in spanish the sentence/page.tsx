import { Card } from "@/components/ui/card"

type QuizItem = {
  english: string;
  spanish?: string;
}

const mainItem: QuizItem = {
  english: "Hello",
  spanish: "Hola"
}

const quizItems: QuizItem[] = [
  { english: "I don't know" },
  { english: "I don't speak Spanish" },
  { english: "I don't understand" },
  { english: "Can you help me?" }
]

interface ComponentProps {
  showExample?: boolean;
}

export default function Component({ showExample = true }: ComponentProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-8">
      {showExample && (
        <Card className="p-6 bg-gradient-to-br from-[#99c6e1] to-white shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#0070b3]"></div>
          <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#f8ebe0] opacity-50"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#f8ebe0] opacity-50"></div>
          <h2 className="text-3xl font-bold text-[#254460] mb-4 relative z-10">{mainItem.english}</h2>
          <div className="inline-block border-b-2 border-[#0070b3] pb-1 relative z-10">
            <span className="text-2xl text-[#0070b3] font-semibold">{mainItem.spanish}</span>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {quizItems.map((item, index) => (
          <Card key={index} className="p-6 bg-white shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#99c6e1]"></div>
            <div className="absolute top-2 right-2 w-12 h-12 rounded-full border-4 border-[#f8ebe0] opacity-30"></div>
            <h2 className="text-xl font-bold text-[#254460] mb-4 relative z-10">{item.english}</h2>
            <div className="border-b-2 border-dotted border-[#99c6e1] pb-2 relative">
              <span className="text-[#99c6e1] text-lg">. . . . . . . . . . . . . . . . . . . . . .</span>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#f8ebe0] rounded-tl-full opacity-20"></div>
          </Card>
        ))}
      </div>
    </div>
  )
}