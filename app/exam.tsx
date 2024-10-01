"use client"

import { useState, useEffect } from 'react'
import { Award, Star, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import confetti from 'canvas-confetti'

export default function Component() {
  const [name] = useState('Sheldom')
  const [score] = useState(85)
  const [level, setLevel] = useState('B2')
  const [date] = useState(new Date().toLocaleDateString())

  useEffect(() => {
    // Lanzar confeti cuando se muestre el certificado
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })

    // Determinar el nivel basado en la puntuación
    if (score >= 90) setLevel('C1')
    else if (score >= 80) setLevel('B2')
    else if (score >= 70) setLevel('B1')
    else setLevel('A2')
  }, [score])

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl shadow-2xl text-white">
      <Card className="bg-white text-gray-800 rounded-lg p-8 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
        
        <CardHeader className="flex justify-between items-center mb-6">
          <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <Award className="w-16 h-16 text-white" />
          </div>
          <CardTitle className="text-4xl font-bold text-orange-600">Certificado de Excelencia en Español</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 mb-2">Con gran satisfacción certificamos que</p>
            <p className="text-5xl font-bold text-orange-700 mb-4">{name}</p>
            <p className="text-xl text-gray-600 mb-4">ha completado con éxito el</p>
            <p className="text-3xl font-bold text-orange-600 mb-4">Examen de Competencia en Español</p>
            <div className="flex justify-center items-center">
              <Star className="w-8 h-8 text-yellow-500 mr-2" fill="currentColor" />
              <p className="text-2xl font-semibold text-yellow-600">¡Felicidades por tu logro!</p>
              <Star className="w-8 h-8 text-yellow-500 ml-2" fill="currentColor" />
            </div>
          </div>
          
          <div className="flex justify-around items-center mb-8">
            <div className="text-center bg-orange-100 rounded-lg p-4 shadow-md">
              <p className="text-lg text-orange-600 mb-1">Puntuación Obtenida</p>
              <p className="text-5xl font-bold text-orange-700">{score}%</p>
            </div>
            <div className="text-center bg-green-100 rounded-lg p-4 shadow-md">
              <p className="text-lg text-green-600 mb-1">Nivel Alcanzado</p>
              <p className="text-5xl font-bold text-green-700">{level}</p>
            </div>
          </div>
          
          <Card className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
            <CardTitle className="text-2xl font-semibold text-gray-700 mb-4">Competencias Demostradas</CardTitle>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Comprensión Auditiva Avanzada',
                'Expresión Oral Fluida',
                'Comprensión Lectora Profunda',
                'Expresión Escrita Sofisticada'
              ].map((skill, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
          
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-300">
            <Badge variant="outline" className="text-sm text-gray-500">
              Certificado ID: ESP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </Badge>
            <p className="text-sm text-gray-500">Fecha de Emisión: {date}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}