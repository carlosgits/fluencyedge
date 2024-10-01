/**
 * Si se pasa este codigo a GPT por lo general se requiere que el objketo words sea un array de 4 objetos
 * con las siguientes propiedades id, words, correct y voy a requerir varios sets de ejemplos 
 * para poderlos cambiar tanto si yo mismo paso las palabras como si las paso como parametro
 * o si yo quiero que me de ejemplos de palabras masculinas o femeninas
 * 
 */

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2 } from "lucide-react"

const words = [
  { id: 1, words: "Niño, esposo, cerdo", correct: true },
  { id: 2, words: "Sopa, gato, comida", correct: false },
  { id: 3, words: "Perro, casa, sopa", correct: false },
  { id: 4, words: "Jugo, niño, pescado", correct: false },
]

export default function ChooseMasculineWords() {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-sky-100 -skew-y-3 z-0"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-sky-200 rounded-full"></div>
      
      {/* Title card */}
      <Card className="relative mb-8 shadow-lg z-10">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Choose the masculine words</h2>
        </CardContent>
      </Card>

      {/* Word table */}
      <Card className="relative shadow-lg z-10">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-sky-50">
              <TableRow>
                <TableHead className="w-16 text-center">#</TableHead>
                <TableHead>Words</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {words.map((row) => (
                <TableRow key={row.id} className={row.id % 2 === 0 ? 'bg-sky-50' : 'bg-white'}>
                  <TableCell className="text-center font-medium">{row.id}</TableCell>
                  <TableCell>{row.words}</TableCell>
                  <TableCell>
                    {row.correct && (
                      <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}