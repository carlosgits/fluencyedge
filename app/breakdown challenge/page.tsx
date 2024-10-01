export default function SyllableChallengeComponent() {
  const words = [
    { word: "Teléfono", syllables: "Te-lé-fo-no", meaning: "Telephone", example: true },
    { word: "Computadora", meaning: "Computer" },
    { word: "Aeropuerto", meaning: "Airport" },
    { word: "Televisión", meaning: "Television" },
  ]

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-[#99c6e1] transform rotate-1 rounded-lg"></div>
          <div className="relative bg-white border-4 border-[#254460] rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0070b3] text-center">
              Syllable Breakdown Challenge
            </h1>
            <p className="mt-2 text-[#254460] text-center italic">
              Divide these technology-related words into their syllables.
            </p>
          </div>
        </div>

        <div className="bg-[#f8ebe0] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#254460] mb-6 text-center">Tech Vocabulary</h2>
          <div className="space-y-8">
            {words.map((word, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-semibold text-[#0070b3]">{word.word}</p>
                  <p className="text-[#254460] italic">{word.meaning}</p>
                </div>

                {word.example ? (
                  <>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-[#254460] font-medium">Correct:</span>
                      <p className="text-[#0070b3]">{word.syllables}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-[#254460] font-medium">Correct:</span>
                      <p className="text-[#99c6e1] italic">To be filled by you!</p>
                    </div>
                  </>
                )}

                <div className="flex items-center space-x-2">
                  <span className="text-[#254460] font-medium">Your answer:</span>
                  <input
                    type="text"
                    className="flex-1 h-8 border-b-2 border-[#99c6e1] focus:outline-none"
                    placeholder="Fill in the syllables"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#254460] italic">
            Write your syllable breakdowns on the lines provided. Compare with the correct answers to improve your skills!
          </p>
        </div>
      </div>
    </div>
  )
}
