import React from 'react'

export default function Component() {
  return (
    <div className="mt-20 w-full max-w-6xl mx-auto p-8 bg-gray-100 rounded-xl overflow-hidden font-sans relative">
      {/* Accent shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full transform -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-200 rounded-full transform translate-x-20 translate-y-20"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-200 rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

      <div className="relative bg-white rounded-lg shadow-lg p-6 mb-8 z-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Spanish Noun Plurals</h1>
        <p className="text-xl text-gray-600">
          Mastering the Art of Singular and Plural Forms
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 z-10 relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pluralization Rules</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
            Add <span className="font-bold">-s</span> to nouns ending in a vowel
          </li>
          <li className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
            Add <span className="font-bold">-es</span> to nouns ending in a consonant
          </li>
          <li className="flex items-center">
            <div className="w-4 h-4 bg-pink-400 rounded-full mr-2"></div>
            For nouns ending in <span className="font-bold">-z</span>, change to <span className="font-bold">-ces</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 z-10 relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Examples</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-semibold">Singular</p>
            <ul className="space-y-1">
              <li className="flex items-center">
                <div className="w-3 h-3 border-2 border-blue-400 mr-2"></div>
                casa (house)
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 border-2 border-yellow-400 mr-2"></div>
                árbol (tree)
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 border-2 border-pink-400 mr-2"></div>
                lápiz (pencil)
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Plural</p>
            <ul className="space-y-1">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 mr-2"></div>
                casas (houses)
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 mr-2"></div>
                árboles (trees)
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-pink-400 mr-2"></div>
                lápices (pencils)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}