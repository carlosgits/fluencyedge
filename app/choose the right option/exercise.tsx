import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

interface OptionProps {
  text: string;
}

interface QuestionProps {
  question: string;
  options: OptionProps[];
}

interface ChooseRightOptionProps {
  title: string;
  questions: QuestionProps[];
}

const set1: ChooseRightOptionProps = {
  title: "Choose the Correct Adjective",
  questions: [
    {
      question: "How do you say 'Happy' in Spanish?",
      options: [
        { text: "Feliz" },
        { text: "Triste" },
        { text: "Grande" },
        { text: "Rápido" }
      ]
    },
    {
      question: "How do you say 'Big' in Spanish?",
      options: [
        { text: "Grande" },
        { text: "Pequeño" },
        { text: "Bonito" },
        { text: "Feo" }
      ]
    }
  ]
}

const set2: ChooseRightOptionProps = {
  title: "Choose the Right Adjective",
  questions: [
    {
      question: "Which word means 'Fast'?",
      options: [
        { text: "Rápido" },
        { text: "Lento" },
        { text: "Bonito" },
        { text: "Alto" }
      ]
    },
    {
      question: "How do you say 'Slow' in Spanish?",
      options: [
        { text: "Lento" },
        { text: "Rápido" },
        { text: "Grande" },
        { text: "Pequeño" }
      ]
    }
  ]
}

const set3: ChooseRightOptionProps = {
  title: "Select the Correct Translation",
  questions: [
    {
      question: "How do you say 'Tall' in Spanish?",
      options: [
        { text: "Alto" },
        { text: "Bajo" },
        { text: "Pequeño" },
        { text: "Feliz" }
      ]
    },
    {
      question: "Which word means 'Short'?",
      options: [
        { text: "Bajo" },
        { text: "Alto" },
        { text: "Lento" },
        { text: "Grande" }
      ]
    }
  ]
}

const set4: ChooseRightOptionProps = {
  title: "Adjective Selection",
  questions: [
    {
      question: "How do you say 'Beautiful' in Spanish?",
      options: [
        { text: "Bonito" },
        { text: "Feo" },
        { text: "Triste" },
        { text: "Pequeño" }
      ]
    },
    {
      question: "Which word means 'Ugly'?",
      options: [
        { text: "Feo" },
        { text: "Bonito" },
        { text: "Grande" },
        { text: "Feliz" }
      ]
    }
  ]
}

const sets: ChooseRightOptionProps[] = [set1, set2, set3, set4]

const ChooseRightOption: React.FC<ChooseRightOptionProps> = ({ 
  title, 
  questions 
}) => {
  return (
    <Card className="mt-20 w-full max-w-5xl mx-auto p-8 bg-gradient-to-br from-[#99c6e1] to-white shadow-lg rounded-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#0070b3]"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#f8ebe0] rounded-full -mb-16 -mr-16 opacity-50"></div>
      
      <h2 className="text-3xl font-bold text-[#254460] mb-6 flex items-center justify-center">
        <BookOpen className="mr-3 text-[#0070b3]" />
        {title}
      </h2>
      
      {questions.length > 0 ? (
        <div className="space-y-8">
          {questions.map((q, qIndex) => (
            <Card key={qIndex} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0070b3]">
              <h3 className="text-xl font-semibold text-[#254460] mb-4">
                {qIndex + 1}. {q.question}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {q.options.map((option, oIndex) => (
                  <div 
                    key={oIndex} 
                    className="p-4 rounded-lg bg-[#f8ebe0] flex items-center justify-between hover:bg-[#e6d8cc] transition-colors duration-200"
                  >
                    <span className="text-[#254460]">{option.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-[#254460] text-center">No questions available.</p>
        </Card>
      )}
    </Card>
  )
}

export default function ChooseRightOptionExercises() {
  return (
    <div className="space-y-12">
      {sets.map((set, index) => (
        <ChooseRightOption key={index} title={set.title} questions={set.questions} />
      ))}
    </div>
  )
}
