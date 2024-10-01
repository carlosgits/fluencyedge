import { Male, Female, CheckCircle, XCircle } from 'lucide-react'
import { useState } from 'react'

const nouns = [
  { word: 'Perro', gender: 'masculine' },
  { word: 'Gata', gender: 'feminine' },
  { word: 'Clase', gender: 'feminine' },
  { word: 'Hamburguesa', gender: 'feminine' },
  { word: 'Amigo', gender: 'masculine' },
  { word: 'Trabajo', gender: 'masculine' },
  { word: 'Pastel', gender: 'masculine' },
  { word: 'Pasaporte', gender: 'masculine' },
  { word: 'Cerveza', gender: 'feminine' },
  { word: 'Arroz', gender: 'masculine' },
]

const exercises = [
  { word: 'Libro', gender: 'masculine' },
  { word: 'Mesa', gender: 'feminine' },
  { word: 'Coche', gender: 'masculine' },
  { word: 'Silla', gender: 'feminine' },
  { word: 'Lápiz', gender: 'masculine' },
]

export default function Component() {
  const [answers, setAnswers] = useState(exercises.map(() => ''))
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (index: number, gender: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = gender
    setAnswers(newAnswers)
  }

  const checkAnswers = () => {
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold text-center">Spanish Noun Gender Classification</h1>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start space-x-4">
            <div className="w-1/3 bg-yellow-100 rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center">Nouns</h2>
              <div className="grid grid-cols-2 gap-2">
                {nouns.map((noun, index) => (
                  <div 
                    key={index} 
                    className={`p-2 rounded-md text-center ${
                      noun.gender === 'masculine' ? 'bg-blue-100' : 'bg-pink-100'
                    }`}
                  >
                    {noun.word}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/3 flex flex-col space-y-4">
              <div className="bg-blue-100 rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-semibold mb-2 text-center flex items-center justify-center">
                  <Male className="mr-2" /> Masculine
                </h2>
                <ul className="list-disc list-inside">
                  <li>Usually end in -o</li>
                  <li>Examples: el perro, el trabajo</li>
                </ul>
              </div>
              <div className="bg-pink-100 rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-semibold mb-2 text-center flex items-center justify-center">
                  <Female className="mr-2" /> Feminine
                </h2>
                <ul className="list-disc list-inside">
                  <li>Usually end in -a</li>
                  <li>Examples: la gata, la clase</li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 bg-green-100 rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center">Practice</h2>
              {exercises.map((exercise, index) => (
                <div key={index} className="mb-2">
                  <span className="font-semibold">{exercise.word}: </span>
                  <button
                    onClick={() => handleAnswer(index, 'masculine')}
                    className={`px-2 py-1 rounded-md mr-2 ${
                      answers[index] === 'masculine' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    Masculine
                  </button>
                  <button
                    onClick={() => handleAnswer(index, 'feminine')}
                    className={`px-2 py-1 rounded-md ${
                      answers[index] === 'feminine' ? 'bg-pink-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    Feminine
                  </button>
                  {showResults && (
                    answers[index] === exercise.gender ? (
                      <CheckCircle className="inline-block ml-2 text-green-500" />
                    ) : (
                      <XCircle className="inline-block ml-2 text-red-500" />
                    )
                  )}
                </div>
              ))}
              <button
                onClick={checkAnswers}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Check Answers
              </button>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Note:</h3>
            <p>There are exceptions to these rules. Some nouns ending in -a are masculine (el día), and some ending in -o are feminine (la mano). Always check a dictionary if you're unsure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}