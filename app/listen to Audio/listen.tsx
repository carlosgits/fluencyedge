'use client'


/**
 * Para este ejemplo debemos tener una horacion relativamente larga pero no muy larga de al menos 300 caracteres
 * ademas de tener una lista de palabras que pueden o no estar en la horacion
 * entonces si se pasa este codigo a GPT debe crear una seccion con una horacion y pner ejemplo oraciond
 * de la seccion 1  y una lista de palabras correcta e incorrecta de la seccion 1 deben al menos 2 incorrectas qyue no aparecen
 * en la oracion y maximo 6 opciones y si paso una lista de palabras debes poner maximo 6 opciones
 * 
 */

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Headphones } from "lucide-react"

/**Frases de ejemplo */
const phrases = [
  { text: "No quiero.", correct: true },
  { text: "El agua fría.", correct: true },
  { text: "Tengo un problema.", correct: true },
  { text: "Permiso, disculpe, perdón.", correct: false },
  { text: "Me gusta el café.", correct: false },
  { text: "¿Dónde está la biblioteca?", correct: false },
]

export default function LanguageLearningExercise() {
  const [checkedPhrases, setCheckedPhrases] = useState<number[]>([])

  const togglePhrase = (index: number) => {
    setCheckedPhrases(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <Card className="mt-20 w-full max-w-3xl mx-auto shadow-lg rounded-3xl overflow-hidden bg-blue-50">
      <CardHeader className="bg-blue-100 p-6 text-center">
      
        <Button 
          variant="outline"
          className="w-full max-w-md mx-auto bg-yellow-300 hover:bg-yellow-400 text-blue-800 text-lg font-medium rounded-full py-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          onClick={() => console.log("Play audio")}
        >
          <Headphones className="w-6 h-6" />
          Click _______ to listen to audio
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {phrases.map((phrase, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
              <Checkbox 
                id={`phrase-${index}`} 
                checked={checkedPhrases.includes(index)}
                onCheckedChange={() => togglePhrase(index)}
                className="w-5 h-5 border-2 border-blue-500 rounded-md mr-3"
              />
              <label htmlFor={`phrase-${index}`} className="flex-grow cursor-pointer text-gray-700">
                {phrase.text}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}