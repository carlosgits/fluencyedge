import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExerciseExplanation() {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-indigo-100 -skew-y-3 z-0"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-indigo-200 rounded-full"></div>
      
      {/* Explanation card */}
      <Card className="relative shadow-lg z-10">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <CardTitle className="text-2xl font-bold text-center">Spanish Gender Exercise</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-lg text-gray-800">
            In this exercise, we'll practice identifying masculine words in Spanish. Here's what we'll do:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>You'll be presented with a list of word groups in Spanish.</li>
            <li>Each group will contain a mix of masculine and feminine words.</li>
            <li>Your task is to identify the group that contains <strong>only masculine words</strong>.</li>
            <li>Remember that in Spanish, most masculine words end in '-o', but there are exceptions.</li>
            <li>Pay attention to words like "mano" (which is feminine) or "día" (which is masculine).</li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            This exercise will help you improve your understanding of grammatical gender in Spanish, a fundamental aspect of the language.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}