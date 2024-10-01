/* 
Template for language exercises.

Instructions for GPT:
- Replace [Main Title] with the overall title of the exercise set, including the main theme.
- Replace each [Section Title] with the specific name of the exercise section, starting with an action verb (e.g., "Conjugate...", "Complete...").
- Under each instruction, provide specific directions relevant to that section's exercises.
- Replace [example1], [example2], etc., with sample exercises or prompts for users to complete.
- Ensure that all exercises are language exercises relevant to the theme.
*/

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, PenTool, Zap, AlertTriangle, Shuffle, Hash, Users, Brain } from 'lucide-react';

export default function Component() {
  return (
    <div className="h-[600px] w-full rounded-md border p-8" style={{
      backgroundImage: "radial-gradient(circle at 10px 10px, #f0f0f0 1px, transparent 0)",
      backgroundSize: "20px 20px"
    }}>
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        [Main Title]
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section 1 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">1. Conjugate...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 1]</p>
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
              <p className="font-medium">[example5]</p>
              <p className="font-medium">[example6]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <PenTool className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">2. Complete...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 2]</p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">3. Choose the correct option...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 3]</p>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Shuffle className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">4. Replace...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 4]</p>
            <div className="bg-indigo-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Hash className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">5. Fill in the blanks...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 5]</p>
            <div className="bg-pink-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 6 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">6. Complete the sentences...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 6]</p>
            <div className="bg-teal-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 7 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">7. Choose the correct tense...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 7]</p>
            <div className="bg-orange-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 8 */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">8. Convert the verbs...</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instruction 8]</p>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="font-medium">[example1]</p>
              <p className="font-medium">[example2]</p>
              <p className="font-medium">[example3]</p>
              <p className="font-medium">[example4]</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
