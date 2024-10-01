import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export default function Component() {
  return (
    <Card className="mt-20 w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">
          Masculine and Feminine Words from Audio
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6 text-gray-700 bg-white bg-opacity-80 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
          <p>
            In this exercise, you will listen to an audio in Spanish. Your task is to identify the masculine and feminine words that appear in the recording. Pay attention to the articles (el, la, los, las) and the word endings to determine their gender. After listening, write down the words you've identified in the corresponding boxes below.
          </p>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 text-lg text-gray-700 bg-white bg-opacity-60 rounded-full px-6 py-3">
           
            <span>Click_____ to listen to the audio</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Masculine Words
            </h2>
            <div className="bg-white bg-opacity-60 rounded-lg p-4 min-h-[200px] shadow-inner">
              {/* Empty box for masculine words */}
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Feminine Words
            </h2>
            <div className="bg-white bg-opacity-60 rounded-lg p-4 min-h-[200px] shadow-inner">
              {/* Empty box for feminine words */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}