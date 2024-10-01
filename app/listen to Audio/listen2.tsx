'use client'


/**
 * no se debe modificar otro codigo que no sea el questions y la historia comentada
 * Si se pasa este codigo a GPT debe crear una pequena historia de 300 caracteres  y 6 questions con el formato de questions de este componente
 *  la historia debe estar comentada en un comment y las preguntas deben estar en el mismo formato que el objeto questiions y reemplazarlo
 * /**
 * Cuando te pase este componente a Chat GPT junto con un set de palabras crearas 4 sets de preguntas
 * y una historia una sola historia de de 300 caracteres de las que se sacaran las preguntas 
 * 
 * ejemplo de historia basada en la lista de palabras pasadas: ( Una tarde, Mamá y Papá decidieron llevar a sus
 *  hijos a la escuela en coche. Mientras el sol se ponía, el hijo y la hija hablaron sobre sus amigos y los animales que estudiaron en clase. Al llegar a casa, todos se sentaron en la mesa a cenar la comida que Mamá había preparado.)
 * 
 * la historia ponmela en un comentario (la de 300 caracteres)
 * y las questions crealas como un objeto como el ejemplod e question 
 * 
 * 
 * 
 * 
 */



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


//Estas questions son solo un ejemplo deben ser cambiadas para adecuarse a la histria de 300 caracteres
const questions: Question[] = [
  { id: 1, text: "El __________ está en la calle Market.", answer: "hotel" },
  { id: 2, text: "La estación de tren está __________ el centro comercial.", answer: "cerca de" },
  { id: 3, text: "Hay un __________ cerca del hotel.", answer: "restaurante" },
  { id: 4, text: "La estación de autobuses está al lado del __________.", answer: "parque" },
]

export default function ListeningExercise() {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})
  const [audioTrigger, setAudioTrigger] = useState('')

  const handleInputChange = (questionId: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }))
  }



  return (
    <Card className="mt-20 w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">
          Listen the conversations and fill in the blanks
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <Label className="text-lg text-gray-800">
            Click
            <Input
              type="text"
              value={audioTrigger}
            
              className="w-16 mx-2 inline-block border-b-4 border-blue-300 border-x-0 border-t-0 border-dotted focus:border-blue-500 bg-transparent"
              style={{ boxShadow: 'none', outline: 'none' }}
            />
            to reproduce the audio
          </Label>
        </div>
        
        <ol className="space-y-6">
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
                        className="w-32 mx-1 inline-block border-b-4 border-blue-300 border-x-0 border-t-0 border-dotted focus:border-blue-500 bg-transparent"
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