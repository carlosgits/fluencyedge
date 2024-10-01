'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {  Headphones } from "lucide-react"

const phrases = [
  { text: "example", correct: true },
  { text: "example", correct: true },
  { text: "example", correct: true },
  { text: "example", correct: true },
  { text: "example", correct: false },
  { text: "example", correct: false },
]

export default function AudioPhrasesList() {
  const [checkedPhrases, setCheckedPhrases] = useState<number[]>([0, 1, 2])

  const togglePhrase = (index: number) => {
    setCheckedPhrases(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="mt-20 w-full max-w-4xl mx-auto relative">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
        </defs>
        <path 
          d="M40,10 Q400,0 760,10 Q800,200 760,390 Q400,400 40,390 Q0,200 40,10 Z" 
          fill="url(#cardGradient)"
          className="drop-shadow-2xl"
        />
      </svg>
      
      <div className="relative z-10 p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">
          Selecciona las frases que aparecen en el audio
        </h2>
        <p className="text-base text-gray-600 mb-6 text-center">
          (Select the phrases that appear in the audio)
        </p>
        
        <div className="bg-gradient-to-r from-yellow-300 to-orange-300 rounded-2xl p-6 mb-8">
          <Button 
            variant="outline"
            className="w-full bg-white text-blue-600 hover:text-blue-800 text-xl font-medium rounded-full py-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
            onClick={() => console.log("Play audio")}
          >
            <Headphones className="w-8 h-8" />
            Click here to listen to audio Nº2
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phrases.map((phrase, index) => (
            <div key={index} className="flex items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-5 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-102">
              <div className="mr-4 relative">
                <Checkbox 
                  id={`phrase-${index}`} 
                  checked={checkedPhrases.includes(index)}
                  onCheckedChange={() => togglePhrase(index)}
                  className="w-7 h-7 border-2 border-blue-500 rounded-md"
                />
                <div className="absolute inset-0 bg-blue-500 rounded-md opacity-20"></div>
              </div>
              <label htmlFor={`phrase-${index}`} className="flex-grow cursor-pointer text-lg">
                <span className="text-gray-700">{phrase.text}</span>
              </label>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-blue-500"
                onClick={() => console.log(`Play phrase: ${phrase.text}`)}
              >
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}