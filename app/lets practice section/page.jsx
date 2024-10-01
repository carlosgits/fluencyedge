import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ClipboardCheck, Languages } from "lucide-react"

export default function LanguageLearningCard() {
  return (
    <Card className="mt-20 w-full max-w-3xl mx-auto bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8 text-center shadow-2xl rounded-3xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform rotate-45 scale-150"></div>
      <div className="relative z-10">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-yellow-300 opacity-50 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-300"></div>
          <ClipboardCheck className="w-20 h-20 text-white relative z-10 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
          <Languages className="absolute top-0 right-0 w-6 h-6 text-yellow-200 animate-pulse" />
          <Languages className="absolute bottom-0 left-0 w-6 h-6 text-yellow-200 animate-pulse delay-200" />
        </div>
        <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Let's <span className="text-yellow-300">Study!</span>
        </h2>
        <p className="text-2xl text-white mb-8 leading-relaxed">
          Practice the <span className="font-bold text-yellow-300">gender</span> and <span className="font-bold text-yellow-300">pluralization</span> of nouns in Spanish.
          <span className="inline-block ml-2 transform hover:scale-125 transition-transform duration-200 ease-in-out">📚✏️</span>
        </p>
        <Button 
          className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Start Practicing
          <BookOpen className="ml-2 w-5 h-5" />
        </Button>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-5 mt-10">
          <p className="text-sm italic text-white leading-snug">
            <span className="font-semibold">Tip:</span> Pay attention to the endings of words to identify their gender and remember the rules for pluralization. 
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300 rounded-tl-full opacity-50 transform rotate-45"></div>
    </Card>
  )
}
