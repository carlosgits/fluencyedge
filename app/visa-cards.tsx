'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface VisaCard {
  id: number
  title: string
  description: string
  colorClass: string
  link: string
}

const visaCards: VisaCard[] = [
  {
    id: 1,
    title: 'T Visa Case',
    description: 'Un T Visa Case es un proceso humanitario para víctimas de tráfico humano.',
    colorClass: 'bg-pink-400',
    link: '/t-visa'
  },
  {
    id: 2,
    title: 'U Visa Case',
    description: 'Un U Visa Case es para víctimas de ciertos crímenes que ayudan a las autoridades.',
    colorClass: 'bg-cyan-400',
    link: '/u-visa'
  },
  {
    id: 3,
    title: 'VAWA Case',
    description: 'VAWA (Violence Against Women Act) protege a víctimas de violencia doméstica.',
    colorClass: 'bg-orange-400',
    link: '/vawa'
  },
  {
    id: 4,
    title: 'Asilo',
    description: 'El asilo es para personas que temen persecución en su país de origen.',
    colorClass: 'bg-purple-400',
    link: '/asilo'
  },
  {
    id: 5,
    title: 'Visa de Trabajo H-1B',
    description: 'La visa H-1B es para profesionales en ocupaciones especializadas.',
    colorClass: 'bg-green-400',
    link: '/h1b'
  },
  {
    id: 6,
    title: 'Visa de Estudiante F-1',
    description: 'La visa F-1 es para estudiantes internacionales en programas académicos.',
    colorClass: 'bg-yellow-400',
    link: '/f1'
  }
]

export default function VisaCards() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-8">
      {visaCards.map((card) => (
        <div
          key={card.id}
          className={`w-72 h-48 perspective-1000 cursor-pointer ${card.colorClass} rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}
          onMouseEnter={() => setFlipped(card.id)}
          onMouseLeave={() => setFlipped(null)}
        >
          <div 
            className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
              flipped === card.id ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of the card */}
            <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg">
              <h2 className="text-2xl font-bold text-white text-center px-4">{card.title}</h2>
            </div>
            
            {/* Back of the card */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg p-4 flex flex-col justify-between">
              <p className="text-gray-800">{card.description}</p>
              <Link href={card.link} className="text-blue-600 hover:underline mt-2">
                Para ver más, clickeame
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}