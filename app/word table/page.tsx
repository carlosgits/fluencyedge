import { Card } from "@/components/ui/card"

type WordPair = {
  spanish: string;
  english: string;
}

const words: WordPair[] = [
  { spanish: "¡Hola!", english: "Hello!" },
  { spanish: "¿Qué pasa?, ¿qué más?", english: "What's up?" },
  { spanish: "¿Qué hay de nuevo?", english: "What's new?" },
  { spanish: "Buenos días", english: "Good morning" },
  { spanish: "Buenas tardes", english: "Good afternoon" },
  { spanish: "Buenas noches", english: "Good evening, good night" },
  { spanish: "Chao, adiós", english: "Good bye, bye" },
  { spanish: "Hasta luego", english: "See you later" },
]

export default function Component() {
  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <Card className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-[#99c6e1] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#f8ebe0] rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
        
        <h2 className="text-2xl font-bold text-[#254460] mb-4 relative z-10">Words Summary</h2>
        
        <div className="overflow-x-auto relative z-10">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-[#f8ebe0] text-[#254460] font-semibold text-left rounded-tl-lg">Spanish</th>
                <th className="py-2 px-4 bg-[#f8ebe0] text-[#254460] font-semibold text-left rounded-tr-lg">English</th>
              </tr>
            </thead>
            <tbody>
              {words.map((word, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#99c6e1] bg-opacity-20"}>
                  <td className="py-2 px-4 text-[#254460]">{word.spanish}</td>
                  <td className="py-2 px-4 text-[#254460]">{word.english}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}