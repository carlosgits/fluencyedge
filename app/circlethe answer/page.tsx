import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const exercises = [
    ["el médico", "la enfermera", "el maestro", "la sandía", "el reloj"],
    ["el papel", "el vaso", "la estudiante", "la sobrina", "el tío"],
    ["la tía", "la hermana", "la amante", "el sobrino", "el duque"]
  ]

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gender of Noun in Spanish</h2>
      <p className="text-center mb-6 text-gray-600">Circle the word that does not belong to the group.</p>
      <div className="space-y-6">
        {exercises.map((row, index) => (
          <Card key={index} className={index % 2 === 0 ? "bg-blue-100" : "bg-orange-50"}>
            <CardContent className="p-4">
              <div className="flex items-center">
                <span className="font-semibold mr-4 text-xl">{index + 1}.</span>
                <div className="grid grid-cols-5 gap-4 w-full">
                  {row.map((word, wordIndex) => (
                    <div key={wordIndex} className="bg-gray-800 text-white p-3 rounded text-center text-lg">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-xl mb-4">Example:</h3>
        <p className="mb-2">In the first row: "el médico", "la enfermera", "el maestro", "la sandía", "el reloj"</p>
        <p className="mb-2">The word that doesn't belong is "la sandía" (watermelon) because it's not a profession or an object, while the others are.</p>
        <p>Note: "el" is used for masculine nouns, "la" for feminine nouns. Most professions can have both forms, but some nouns like "sandía" have a fixed gender.</p>
      </div>
    </div>
  )
}