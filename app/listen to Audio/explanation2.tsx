

'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Volume2 } from "lucide-react"

type Question = {
  id: number;
  text: string;
  answer: string;
}

//Esto solo es un ejemplo del set necesario
const questions: Question[] = [
  { id: 1, text: "El __________ está en la calle Market.", answer: "hotel" },
  { id: 2, text: "La estación de tren está __________ el centro comercial.", answer: "cerca de" },
  { id: 3, text: "Hay un __________ cerca del hotel.", answer: "restaurante" },
  { id: 4, text: "La estación de autobuses está al lado del __________.", answer: "parque" },
]

export default function ListeningExerciseWithExamples() {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({
    1: "hotel",
    2: "cerca de",
    3: "restaurante",
    4: "parque"
  })
  const [audioTrigger, setAudioTrigger] = useState('')

  const handleInputChange = (questionId: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const playAudio = () => {
    console.log("Reproduciendo audio...")
    // En una aplicación real, aquí se activaría la reproducción del audio
  }

  return (
    <Card className= "mt-20 w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-t-lg">
        <CardTitle className="text-3xl font-bold text-center mb-4">
          Listening Comprehension
        </CardTitle>
        <h2 className="text-xl font-semibold text-center text-blue-100">
          Fill in the Blanks of the exercises
        </h2>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-white bg-opacity-70 rounded-lg p-4 mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Click "here" in the input below to play the audio.</li>
            <li>Listen carefully to the conversation.</li>
            <li>The blanks have been filled as an example.</li>
            <li>You can replay the audio as many times as you need.</li>
          </ol>
        </div>

   
        
        <ol className="space-y-6 mb-6">
          {questions.map((question) => (
            <li key={question.id} className="bg-white bg-opacity-60 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-80">
              <Label className="flex-grow text-lg text-gray-800">
                {question.text.split('__________').map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <Input
                        type="text"
                        value={userAnswers[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className="w-32 mx-1 inline-block border-b-2 border-blue-300 focus:border-blue-500 bg-transparent"
                        style={{ boxShadow: 'none', outline: 'none' }}
                      />
                    )}
                  </span>
                ))}
              </Label>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}