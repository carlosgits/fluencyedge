import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"

export default function Component() {
  const questionWord = "mariposa"
  const syllableDivisions = [
    "Ma-ri-po-sa",
    "Ma-ri-pos-a",
    "Mar-i-po-sa"
  ]

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-[#0070b3] mb-4">Syllable Division Challenge</h1>
          <p className="text-xl text-[#254460]">Explore the art of breaking Spanish words into syllables</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          <div className="bg-[#f8ebe0] rounded-lg p-6 shadow-lg flex-1 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <QuestionMarkCircledIcon className="w-8 h-8 text-[#0070b3] mr-2" />
              <h2 className="text-2xl font-semibold text-[#254460]">The Question</h2>
            </div>
            <p className="text-xl text-[#254460]">How can I divide the word <span className="font-bold text-[#0070b3]">{questionWord}</span> into syllables?</p>
          </div>

          <div className="bg-[#99c6e1] rounded-lg p-6 shadow-lg flex-1">
            <h2 className="text-2xl font-semibold text-[#254460] mb-4">Possible Divisions</h2>
            <ul className="space-y-4">
              {syllableDivisions.map((division, index) => (
                <li key={index} className="bg-white rounded-lg p-4 shadow flex items-center">
                  <span className="text-[#0070b3] font-bold mr-4">{index + 1}.</span>
                  <span className="text-xl text-[#254460]">{division}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#254460] italic">
            Analyze each option carefully. Which division do you think is correct?
          </p>
          <p className="mt-2 text-[#0070b3] font-semibold">
            Remember: In Spanish, syllables typically follow the consonant-vowel pattern!
          </p>
        </div>
      </div>
    </div>
  )
}