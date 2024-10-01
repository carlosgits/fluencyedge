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
    <div className="min-h-screen w-full rounded-md border p-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        [Main Title: Language Learning Exercise Set]
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section 1 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-purple-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">1. [Exercise Type 1]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 1]</p>
            <div className="bg-purple-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">1. [Item 1] <span className="text-purple-600">➔ _______</span></p>
              <p className="font-medium">2. [Item 2] <span className="text-purple-600">➔ _______</span></p>
              <p className="font-medium">3. [Item 3] <span className="text-purple-600">➔ _______</span></p>
              <p className="font-medium">4. [Item 4] <span className="text-purple-600">➔ _______</span></p>
              <p className="font-medium">[Additional information or options if needed]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-blue-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <PenTool className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">2. [Exercise Type 2]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 2]</p>
            <div className="bg-blue-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">1. [Sentence 1] <span className="text-blue-600 underline">______</span></p>
              <p className="font-medium">2. [Sentence 2] <span className="text-blue-600 underline">______</span></p>
              <p className="font-medium">3. [Sentence 3] <span className="text-blue-600 underline">______</span></p>
              <p className="font-medium">4. [Sentence 4] <span className="text-blue-600 underline">______</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-red-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-2 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">3. [Exercise Type 3]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 3]</p>
            <div className="bg-red-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">1. [Example 1] <span className="text-red-600">➔ _______</span></p>
              <p className="font-medium">2. [Example 2] <span className="text-red-600">➔ _______</span></p>
              <p className="font-medium">3. [Example 3] <span className="text-red-600">➔ _______</span></p>
              <p className="font-medium">4. [Example 4] <span className="text-red-600">➔ _______</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-indigo-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full">
                <Shuffle className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">4. [Exercise Type 4]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 4]</p>
            <div className="bg-indigo-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">1. [Item 1] <span className="text-indigo-600">______</span></p>
              <p className="font-medium">2. [Item 2] <span className="text-indigo-600">______</span></p>
              <p className="font-medium">3. [Item 3] <span className="text-indigo-600">______</span></p>
              <p className="font-medium">4. [Item 4] <span className="text-indigo-600">______</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-pink-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-2 rounded-full">
                <Hash className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">5. [Exercise Type 5]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 5]</p>
            <div className="bg-pink-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">1. [Example 1] <span className="text-pink-600">➔ _______</span></p>
              <p className="font-medium">2. [Example 2] <span className="text-pink-600">➔ _______</span></p>
              <p className="font-medium">3. [Example 3] <span className="text-pink-600">➔ _______</span></p>
              <p className="font-medium">4. [Example 4] <span className="text-pink-600">➔ _______</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Section 6 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-teal-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">6. [Exercise Type 6]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 6]</p>
            <div className="bg-teal-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">1. [Item 1] <span className="text-teal-600">➔ _______</span></p>
              <p className="font-medium">2. [Item 2] <span className="text-teal-600">➔ _______</span></p>
              <p className="font-medium">3. [Item 3] <span className="text-teal-600">➔ _______</span></p>
              <p className="font-medium">4. [Item 4] <span className="text-teal-600">➔ _______</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Section 7 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-orange-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">7. [Exercise Type 7]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 7]</p>
            <div className="bg-orange-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">1. [Item 1] <span className="text-orange-600">➔ _______</span></p>
              <p className="font-medium">2. [Item 2] <span className="text-orange-600">➔ _______</span></p>
              <p className="font-medium">3. [Item 3] <span className="text-orange-600">➔ _______</span></p>
              <p className="font-medium">4. [Item 4] <span className="text-orange-600">➔ _______</span></p>
              <p className="font-medium">[Additional information or options if needed]</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 8 */}
        <Card className="overflow-hidden transition-all hover:shadow-xl border-l-4 border-l-yellow-600">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 ml-3">8. [Exercise Type 8]</h2>
            </div>
            <p className="text-gray-600 mb-4">[Instructions for Exercise 8]</p>
            <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
              <p className="font-medium">[Context or passage for the exercise]</p>
              <p className="font-medium">1. [Question 1] <span className="text-yellow-600">➔ _______</span></p>
              <p className="font-medium">2. [Question 2] <span className="text-yellow-600">➔ _______</span></p>
              <p className="font-medium">3. [Question 3] <span className="text-yellow-600">➔ _______</span></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}