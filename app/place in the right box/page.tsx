/**
 * si te paso este codifo junto con un set de palabas dees modificar el set de palabras
 * no importq que el tema sea gender en estebcpdigo si lo necesito para otro ejercicio tienes dos opciones
 * pon el conteniodo dentro de correct genders object o hazlo desde cero pero solo 12 elementos
 * 
 * 
 */
'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const words = [
  "casa", "jugo", "pasta", "almuerzo", "sopa", "mamá",
  "desayuno", "pizza", "pollo", "res", "papá", "ayuda"
]

type Gender = 'feminine' | 'masculine'

const correctGenders: Record<string, Gender> = {
  casa: 'feminine',
  jugo: 'masculine',
  pasta: 'feminine',
  almuerzo: 'masculine',
  sopa: 'feminine',
  mamá: 'feminine',
  desayuno: 'masculine',
  pizza: 'feminine',
  pollo: 'masculine',
  res: 'feminine',
  papá: 'masculine',
  ayuda: 'feminine'
}

export default function PlaceWordsInBoxes() {
  const [placedWords, setPlacedWords] = useState<Record<Gender, string[]>>({
    feminine: [],
    masculine: []
  })

  const placeWord = (word: string, gender: Gender) => {
    setPlacedWords(prev => ({
      ...prev,
      [gender]: [...prev[gender], word]
    }))
  }

  const isCorrect = (word: string, gender: Gender) => {
    return correctGenders[word] === gender
  }

  return (
    <div className="mt-20 relative w-full max-w-3xl mx-auto p-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-sky-100 -skew-y-3 z-0"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-sky-200 rounded-full"></div>
      
      {/* Title card */}
      <Card className="relative mb-8 shadow-lg z-10">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Place the words in the correct boxes</h2>
        </CardContent>
      </Card>

      {/* Word list */}
      <div className="relative mb-8 p-4 bg-white rounded-lg shadow-md z-10">
        <p className="text-center text-gray-950 mb-2">Available words:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {words.map(word => (
            <Button
              key={word}
              variant="outline"
              className="text-sm text-gray-950"
              onClick={() => placeWord(word, correctGenders[word])}
              disabled={placedWords.feminine.includes(word) || placedWords.masculine.includes(word)}
            >
              {word}
            </Button>
          ))}
        </div>
      </div>

      {/* Gender boxes */}
      <div className="relative flex gap-4 z-10">
        {(['feminine', 'masculine'] as const).map(gender => (
          <Card key={gender} className="flex-1">
            <CardHeader>
              <CardTitle className="text-center capitalize">{gender}</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[200px] bg-sky-50 rounded-b-lg">
              {placedWords[gender].map(word => (
                <div key={word} className="flex items-center justify-between p-2 bg-white rounded mb-2">
                  <span className='text-black'>{word}</span>
                  {isCorrect(word, gender) && <CheckCircle2 className="text-green-500" />}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}