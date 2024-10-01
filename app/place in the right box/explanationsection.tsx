import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExerciseExplanationBrief() {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-indigo-100 -skew-y-3 z-0"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-indigo-200 rounded-full"></div>
      
      {/* Explanation card */}
      <Card className="relative shadow-lg z-10">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <CardTitle className="text-2xl font-bold text-center">Spanish Gender Sorting</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-lg text-gray-800">
            Sort the Spanish words into the correct gender boxes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Put each word in the appropriate box.</li>
            <li>Feminine words usually end in -a, masculine in -o.</li>
            <li>Watch for exceptions!</li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            This exercise helps you learn Spanish noun genders.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}