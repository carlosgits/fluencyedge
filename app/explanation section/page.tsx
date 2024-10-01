import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GenderOfNouns() {
  return (
    <Card className="mt-20 w-full max-w-2xl mx-auto bg-gradient-to-br from-sky-50 to-indigo-50 border-sky-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6">
        <CardTitle className="text-3xl font-bold text-center">title of section</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6 text-gray-800 space-y-2">
             {/**if not necssary this section of the two P just removet instruction for chat gpt */}
          <p>In Spanish, nouns have gender defined by their ending. They can be masculine or feminine.</p>
          <p>Gender can usually be identified by the ending <span className="font-bold text-blue-600">-o</span> for masculine and <span className="font-bold text-pink-600">-a</span> for feminine.</p>
        </div>
        
       { /**if not necessary this section of the two div just remove it */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Masculine:</h3>
            <ul className="list-none pl-4 space-y-1">
              <li>esposo - husband</li>
              <li>perro - dog</li>
              <li>pollo - chicken</li>
            </ul>
          </div>
          { /**if not necessary this section of the two div just remove it */}

          <div>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Feminine:</h3>
            <ul className="list-none pl-4 space-y-1">
              <li>casa - house</li>
              <li>comida - food</li>
              <li>sopa - soup</li>
              <li>pizza - pizza</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}