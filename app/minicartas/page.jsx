import { Card } from "@/components/ui/card"

/**
 * Cuando se pase este componente a Chat gpt con un set de palabras se debe modificar el gretings objeto para adptarlo a las nuevas palabras
 * 
 * 
 * 
 */

type GreetingCard = {
  spanish: string;
  english: string;
  background: string;
  pattern: "lines" | "dots";
}

const greetings: GreetingCard[] = [
  { spanish: "¡Hola!", english: "Hello!", background: "#99c6e1", pattern: "lines" },
  { spanish: "¿Qué pasa?, ¿Qué más?", english: "What's up?", background: "#99c6e1", pattern: "dots" },
  { spanish: "¿Qué hay de nuevo?", english: "What's new?", background: "#f8ebe0", pattern: "lines" },
  { spanish: "Buenos días", english: "Good morning", background: "#99c6e1", pattern: "lines" },
  { spanish: "Buenas tardes", english: "Good afternoon", background: "#f8ebe0", pattern: "dots" },
  { spanish: "Buenas noches", english: "Good evening", background: "#99c6e1", pattern: "lines" },
]

export default function Component() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {greetings.map((greeting, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-60 p-6 relative" 
              style={{ 
                backgroundColor: greeting.background,
                backgroundImage: greeting.pattern === "lines" 
                  ? "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)"
                  : "radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px)",
                backgroundSize: greeting.pattern === "lines" ? "30px 30px" : "20px 20px",
              }}
            >
              <div className="absolute inset-6 bg-[#254460] text-white flex items-center justify-center rounded-t-lg shadow-inner">
                <h2 className="text-3xl font-bold text-center px-4">{greeting.spanish}</h2>
              </div>
            </div>
            <div className="p-6 bg-white">
              <p className="text-2xl text-[#254460] font-semibold text-center">{greeting.english}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}