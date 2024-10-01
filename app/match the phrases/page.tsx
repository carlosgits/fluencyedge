'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Phrase = {
  english: string;
  spanish: string;
}

const sets: Phrase[][] = [
  // Set 1
  [
    { english: "Beautiful", spanish: "Hermoso" },
    { english: "Big", spanish: "Grande" },
    { english: "Small", spanish: "Pequeño" },
    { english: "Expensive", spanish: "Caro" }
  ],
  // Set 2
  [
    { english: "Cheap", spanish: "Barato" },
    { english: "Fast", spanish: "Rápido" },
    { english: "Slow", spanish: "Lento" },
    { english: "Strong", spanish: "Fuerte" }
  ],
  // Set 3
  [
    { english: "Weak", spanish: "Débil" },
    { english: "Tall", spanish: "Alto" },
    { english: "Short", spanish: "Bajo" },
    { english: "Intelligent", spanish: "Inteligente" }
  ]
]

export default function AdjectivePracticeCards() {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string[] }>({})

  const handleInputChange = (setIndex: number, questionIndex: number, value: string) => {
    const newAnswers = { ...userAnswers }
    if (!newAnswers[setIndex]) {
      newAnswers[setIndex] = Array(sets[setIndex].length).fill('')
    }
    newAnswers[setIndex][questionIndex] = value
    setUserAnswers(newAnswers)
  }

  return (
    <div className="mt-20 w-full max-w-5xl mx-auto space-y-8">
      {sets.map((set, setIndex) => (
        <Card key={setIndex} className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-[#99c6e1] rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-repeat opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2399c6e1' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="space-y-6 flex-shrink-0 bg-white bg-opacity-70 p-6 rounded-lg shadow">
                {set.map((phrase, questionIndex) => (
                  <div key={questionIndex} className="flex items-center">
                    <span className="mr-3 font-bold text-[#254460] w-6">{String.fromCharCode(65 + questionIndex)}.</span>
                    <span className="text-[#254460] text-lg">{phrase.english}</span>
                  </div>
                ))}
              </div>
              <div className="flex-grow grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12">
                {set.map((phrase, questionIndex) => (
                  <div key={questionIndex} className="relative flex flex-col items-center">
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#e6f3fa] border-4 border-[#99c6e1] flex items-center justify-center p-4 relative overflow-hidden shadow-md">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(#99c6e1 2px, transparent 2px)',
                        backgroundSize: '10px 10px'
                      }}></div>
                      <span className="text-[#254460] text-center font-bold relative z-10 text-lg md:text-xl">{phrase.spanish}</span>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor={`answer-${setIndex}-${questionIndex}`} className="sr-only">Answer for {phrase.english}</Label>
                      <Input
                        id={`answer-${setIndex}-${questionIndex}`}
                        value={userAnswers[setIndex]?.[questionIndex] || ''}
                        onChange={(e) => handleInputChange(setIndex, questionIndex, e.target.value)}
                        className="w-16 md:w-20 text-center border-[#99c6e1] focus:border-[#254460] focus:ring-[#254460] bg-white text-lg"
                        placeholder="( )"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
