'use client'

import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

export default function Component() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const correctAnswers = {
    1: "Unas",
    2: "El",
    3: "Las",
    4: "El",
  };

  const handleSelectAnswer = (exerciseNumber, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [exerciseNumber]: answer,
    });
  };

  const checkAnswer = (exerciseNumber, option) => {
    if (!selectedAnswers[exerciseNumber]) return "";
    return selectedAnswers[exerciseNumber] === option
      ? "bg-green-200"
      : "bg-red-200";
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#f8f9fa] min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">
          Spanish Definite Articles Practice
        </h1>
        <p className="text-gray-600">
          Choose the correct article for each image. Remember to consider the gender and number of the noun.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Exercise 1 */}
        <Card className="border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-blue-800">1</span>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-emj72uu0hkzkxvRYE8WVRN5RH2X1tH.png"
                  alt="Two burgers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg font-semibold text-center mb-4">_____ hamburguesas</p>
            <div className="grid grid-cols-2 gap-4">
              {["Al", "Los", "El", "Unas"].map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectAnswer(1, option)}
                  className={`border-2 border-gray-300 rounded p-2 text-center cursor-pointer ${
                    selectedAnswers[1] === option ? checkAnswer(1, option) : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exercise 2 */}
        <Card className="border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-blue-800">2</span>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="A book"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg font-semibold text-center mb-4">_____ libro</p>
            <div className="grid grid-cols-2 gap-4">
              {["El", "La", "Un", "Una"].map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectAnswer(2, option)}
                  className={`border-2 border-gray-300 rounded p-2 text-center cursor-pointer ${
                    selectedAnswers[2] === option ? checkAnswer(2, option) : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exercise 3 */}
        <Card className="border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-blue-800">3</span>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Several apples"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg font-semibold text-center mb-4">_____ manzanas</p>
            <div className="grid grid-cols-2 gap-4">
              {["Las", "Los", "Unas", "Unos"].map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectAnswer(3, option)}
                  className={`border-2 border-gray-300 rounded p-2 text-center cursor-pointer ${
                    selectedAnswers[3] === option ? checkAnswer(3, option) : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exercise 4 */}
        <Card className="border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-blue-800">4</span>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="A cat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg font-semibold text-center mb-4">_____ gato</p>
            <div className="grid grid-cols-2 gap-4">
              {["El", "La", "Un", "Una"].map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectAnswer(4, option)}
                  className={`border-2 border-gray-300 rounded p-2 text-center cursor-pointer ${
                    selectedAnswers[4] === option ? checkAnswer(4, option) : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>Complete the exercises by choosing the correct article for each image.</p>
        <p>Remember to consider the gender and number of the noun.</p>
      </div>
    </div>
  );
}
