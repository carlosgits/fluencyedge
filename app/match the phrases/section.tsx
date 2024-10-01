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
   [
    { english: "Soccer", spanish: "Fútbol" },
    { english: "Basketball", spanish: "Baloncesto" },
    { english: "Tennis", spanish: "Tenis" },
    { english: "Swimming", spanish: "Natación" }
   ]
]

export default function SportVocabularyExercise() {
  const [userAnswers, setUserAnswers] = useState<string[]>(['A', '', '', 'D']) // Pre-filled example answers

  const handleInputChange = (questionIndex: number, value: string) => {
    const newAnswers = [...userAnswers]
    newAnswers[questionIndex] = value.toUpperCase()
    setUserAnswers(newAnswers)
  }

  return (
    <Card className="w-full mt-20 max-w-4xl mx-auto p-8 bg-blue-50 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">Match the Sports</h2>
      <p className="text-blue-600 mb-6 text-center">Write the letter of the English sport next to its Spanish equivalent</p>
      {sets.map((set, setIndex) => (
        <div key={setIndex} className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4 flex-shrink-0 bg-white p-6 rounded-lg shadow">
            {set.map((phrase, questionIndex) => (
              <div key={questionIndex} className="flex items-center">
                <span className="mr-3 font-bold text-blue-800 w-6">{String.fromCharCode(65 + questionIndex)}.</span>
                <span className="text-blue-800">{phrase.english}</span>
              </div>
            ))}
          </div>
          <div className="flex-grow grid grid-cols-2 gap-8">
            {set.map((phrase, questionIndex) => (
              <div key={questionIndex} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-blue-200 flex items-center justify-center p-4 relative overflow-hidden shadow-md">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#bfdbfe 2px, transparent 2px)',
                    backgroundSize: '10px 10px'
                  }}></div>
                  <span className="text-blue-800 text-center font-bold relative z-10 text-lg">{phrase.spanish}</span>
                </div>
                <div className="mt-4">
                  <Label htmlFor={`answer-${setIndex}-${questionIndex}`} className="sr-only">Answer for {phrase.english}</Label>
                  <Input
                    id={`answer-${setIndex}-${questionIndex}`}
                    value={userAnswers[questionIndex] || ''}
                    onChange={(e) => handleInputChange(questionIndex, e.target.value)}
                    className="w-12 text-center border-blue-300 focus:border-blue-500 focus:ring-blue-500 bg-white text-lg"
                    placeholder="( )"
                    maxLength={1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Card>
  )
}